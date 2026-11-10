import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Support large payloads for base64 image uploads
app.use(express.json({ limit: '60mb' }));
app.use(express.urlencoded({ extended: true, limit: '60mb' }));

// Ensure public directories exist
const publicVideosDir = path.resolve(process.cwd(), 'public', 'videos');
if (!fs.existsSync(publicVideosDir)) {
  fs.mkdirSync(publicVideosDir, { recursive: true });
}

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// Image-to-Video generation using Gemini Interactions API with gemini-omni-1.2-flash
app.post('/api/generate-video', async (req, res) => {
  try {
    const { image, prompt, aspect_ratio = '16:9', duration = '10s', resolution = '720p' } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image data or image path is required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please check the Secrets configuration.',
      });
    }

    let mimeType = 'image/jpeg';
    let base64Data = '';

    // Check if input is a local file path
    if (typeof image === 'string' && (image.startsWith('/') || image.startsWith('assets/'))) {
      const cleanPath = image.startsWith('/') ? image.slice(1) : image;
      const fullPath = path.resolve(process.cwd(), 'public', cleanPath);

      if (!fs.existsSync(fullPath)) {
        return res.status(404).json({ error: `Source image file not found at path: ${image}` });
      }

      const fileBuffer = fs.readFileSync(fullPath);
      base64Data = fileBuffer.toString('base64');
      if (cleanPath.endsWith('.png')) {
        mimeType = 'image/png';
      } else if (cleanPath.endsWith('.webp')) {
        mimeType = 'image/webp';
      } else {
        mimeType = 'image/jpeg';
      }
    } else if (typeof image === 'string' && image.startsWith('data:')) {
      const match = image.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      } else {
        base64Data = image;
      }
    } else {
      base64Data = image;
    }

    if (!base64Data) {
      return res.status(400).json({ error: 'Invalid image data received.' });
    }

    const validAspectRatio = aspect_ratio === '9:16' ? '9:16' : '16:9';
    const motionPrompt = prompt && prompt.trim().length > 0
      ? prompt.trim()
      : 'Subtle 3D rotation of the translucent neural brain structure with glowing synaptic nodes, pulsing light along neural pathways, gentle floating glass spheres, clean futuristic studio lighting, seamless looping background motion.';

    console.log(`[Video Generation] Calling gemini-omni-1.2-flash with aspect_ratio: ${validAspectRatio}, duration: ${duration}`);

    const ai = new GoogleGenAI({ apiKey });

    // Call Gemini Interactions API with gemini-omni-1.2-flash for Image-to-Video
    const interaction = await ai.interactions.create(
      {
        model: 'gemini-omni-1.2-flash',
        input: [
          {
            type: 'image',
            mime_type: mimeType,
            data: base64Data,
          },
          {
            type: 'text',
            text: motionPrompt,
          },
        ],
        background: false,
        store: false,
        stream: false,
        response_format: {
          type: 'video',
          aspect_ratio: validAspectRatio,
          duration: duration || '10s',
          resolution: resolution || '720p',
        },
      },
      { timeout: 300000 } // 5 minutes timeout for video rendering
    );

    // Extract output video
    let videoData: string | null = null;
    let videoMimeType = 'video/mp4';
    let videoUri: string | null = null;

    if (interaction.output_video) {
      if (interaction.output_video.data) {
        videoData = interaction.output_video.data;
      }
      if (interaction.output_video.mime_type) {
        videoMimeType = interaction.output_video.mime_type;
      }
      if ((interaction.output_video as any).uri) {
        videoUri = (interaction.output_video as any).uri;
      }
    }

    // Fallback: search steps if output_video helper didn't capture it
    if (!videoData && !videoUri && interaction.steps) {
      for (const step of interaction.steps) {
        if (step.type === 'model_output' && step.content) {
          const videoContent = step.content.find((c: any) => c.type === 'video');
          if (videoContent) {
            if ((videoContent as any).data) {
              videoData = (videoContent as any).data;
            }
            if ((videoContent as any).mime_type) {
              videoMimeType = (videoContent as any).mime_type;
            }
            if ((videoContent as any).uri) {
              videoUri = (videoContent as any).uri;
            }
            break;
          }
        }
      }
    }

    if (videoData) {
      // Save video file to public/videos/ so it can be streamed statically
      const videoFilename = `hero-video-${Date.now()}.mp4`;
      const videoFilePath = path.join(publicVideosDir, videoFilename);
      const videoBuffer = Buffer.from(videoData, 'base64');
      fs.writeFileSync(videoFilePath, videoBuffer);

      const videoUrl = `/videos/${videoFilename}`;
      const dataUrl = `data:${videoMimeType};base64,${videoData}`;

      console.log(`[Video Generation] Successfully generated and saved video to ${videoFilePath} (${videoBuffer.length} bytes)`);

      return res.json({
        success: true,
        videoUrl,
        dataUrl,
        mimeType: videoMimeType,
        aspectRatio: validAspectRatio,
        prompt: motionPrompt,
      });
    } else if (videoUri) {
      console.log(`[Video Generation] Successfully generated video URI: ${videoUri}`);
      return res.json({
        success: true,
        videoUrl: videoUri,
        mimeType: videoMimeType,
        aspectRatio: validAspectRatio,
        prompt: motionPrompt,
      });
    } else {
      console.error('[Video Generation] No video content found in interaction response', interaction);
      return res.status(502).json({
        error: 'Gemini Omni model completed interaction but returned no video output data.',
      });
    }
  } catch (error: any) {
    console.error('[Video Generation Error]:', error);
    const errorMessage = error?.message || 'An unexpected error occurred during video generation.';
    return res.status(500).json({
      error: errorMessage,
      details: error?.status || error?.code || null,
    });
  }
});

// Vite server setup
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(process.cwd(), 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[33 Kuber Addvisory Server] Running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
