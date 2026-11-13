export interface ProjectModule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  type: 'image' | 'interactive';
  badge: string;
  highlights: string[];
  metrics: { label: string; value: string };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  clientCategory: string;
  tagline: string;
  heroImage: string;
  websiteUrl: string;
  summary: string;
  fullOverview: string;
  businessImpact: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
  technologies: string[];
  deliverables: string[];
  modules: ProjectModule[];
}

export const PROJECTS: Project[] = [
  // 1. First Project: Lawyer Management System
  {
    id: 'proj-1',
    slug: 'lawyer-management-system',
    title: 'Lawyer Management System',
    clientCategory: 'LegalTech & Corporate Law Practice Suite',
    tagline: 'High-security legal practice management, court docket tracking, and evidentiary document vault.',
    heroImage: '/assets/aistudio/Law-Tech_Office_Dashboard_with_Lady_Justice_106e44a5.png',
    websiteUrl: 'https://lms.33kuber.com',
    summary: 'A secure cloud solution engineered for premier law firms, senior advocates, and legal corporate counsels to track court calendars, case briefs, and trust accounting.',
    fullOverview: '33 Kuber Advisory LLP created the "Lawyer Management System" with bank-grade encryption, intelligent court cause-list scrapers, automated conflict-of-interest checking, and client retainer management. The platform accelerates attorney productivity while ensuring strict legal compliance across civil, commercial, and high court matters.',
    businessImpact: {
      stat1: { value: '0 missed', label: 'Hearing Deadlines & Summons' },
      stat2: { value: '38%', label: 'Increase in Realized Billables' },
      stat3: { value: 'AES-256', label: 'End-to-End Vault Encryption' },
    },
    technologies: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'ElasticSearch', 'AWS S3 with KMS', 'Tailwind CSS'],
    deliverables: [
      'Senior Advocate Command Dashboard',
      'High Court & District Court Cause-List Sync',
      'Confidential Legal Briefs Document Vault',
      'Time-Tracking & Trust Retainer Ledger'
    ],
    modules: [
      {
        id: 'practice-dashboard',
        title: 'Module 1: Practice Command & Hearing Calendar',
        subtitle: 'Consolidated overview of active briefs, next hearing dates, and fees',
        description: 'Master attorney console consolidating weekly court listings, pending mediation sessions, active matter rosters, and unbilled litigation hours.',
        image: '/assets/aistudio/Law-Tech_Office_Dashboard_with_Lady_Justice_106e44a5.png',
        type: 'image',
        badge: 'Advocate Command',
        highlights: [
          'Automatic synchronization with High Court and Supreme Court e-portals',
          'Urgency indicators for limitation periods and interim reliefs',
          'Case docket status summaries prepared for daily morning conferences'
        ],
        metrics: { label: 'Active Cases Managed', value: '18,500+' }
      },
      {
        id: 'document-vault',
        title: 'Module 2: Confidential Case Dossier & Evidentiary Vault',
        subtitle: 'Tamper-evident legal discovery vault with granular client privilege',
        description: 'Encrypted digital repository storing affidavits, evidence transcripts, contract exhibits, and judicial precedents with full-text OCR search capabilities.',
        image: '/assets/aistudio/Law-Tech_Office_Dashboard_with_Lady_Justice_106e44a5.png',
        type: 'interactive',
        badge: 'Encrypted Vault',
        highlights: [
          'Full-text semantic search across scanned PDFs and legal petitions',
          'Cryptographic audit trail detailing document views and exports',
          'Watermarked guest links for opposing counsel discovery'
        ],
        metrics: { label: 'Security Standard', value: 'SOC 2 Type II' }
      },
      {
        id: 'court-timeline',
        title: 'Module 3: Procedural Lifecycle & Docket Milestones',
        subtitle: 'Visual chronological tracker mapping every order sheet and bench ruling',
        description: 'Interactive tracker following interlocutory applications, witness examinations, and bench rulings across the lifespan of a case.',
        image: '/assets/aistudio/Law-Tech_Office_Dashboard_with_Lady_Justice_106e44a5.png',
        type: 'interactive',
        badge: 'Procedural Tracker',
        highlights: [
          'Automated deadline alerts for reply filings and affidavits',
          'Bench precedent tagging for targeted litigation strategy',
          'Client-accessible read-only matter progress portal'
        ],
        metrics: { label: 'Procedural Accuracy', value: '100% Audit-Proof' }
      },
      {
        id: 'legal-billing',
        title: 'Module 4: Automated Legal Billing & Trust Accounting',
        subtitle: 'Precise increment billing with compliant IOLTA trust ledger governance',
        description: 'Tailored legal invoicing engine handling retainer agreements, hourly counsel charges, court disbursements, and automated client billing reminders.',
        image: '/assets/aistudio/Law-Tech_Office_Dashboard_with_Lady_Justice_106e44a5.png',
        type: 'interactive',
        badge: 'Billing & Trust',
        highlights: [
          'One-click timer logging calls, research, and court appearances',
          'Compliant segregated client trust account reconciliation',
          'Automated professional fee notes formatted to bar council norms'
        ],
        metrics: { label: 'Billing Realization Rate', value: '97.2%' }
      }
    ]
  },

  // 2. Second Project: Fleet Management System
  {
    id: 'proj-2',
    slug: 'fleet-management-system',
    title: 'Fleet Management System',
    clientCategory: 'Logistics, Telematics & Commercial Transportation',
    tagline: 'Enterprise commercial fleet telematics, IoT engine diagnostics, and route optimization.',
    heroImage: '/assets/aistudio/Fleet_dashboard_meets_sunset_logistics_34a3562c.png',
    websiteUrl: 'https://33fleet.com/',
    summary: 'A heavy-duty logistics fleet management platform integrating CAN-bus vehicle telemetry, fuel theft prevention, predictive maintenance, and driver safety.',
    fullOverview: '33 Kuber Advisory LLP engineered the "Fleet Management System" to empower commercial fleet operators with predictive asset protection. Connecting directly to onboard OBD-II and CAN-bus sensors, the platform detects mechanical anomalies, optimizes multi-stop routes, and tracks driver safety indices in real-time.',
    businessImpact: {
      stat1: { value: '22%', label: 'Reduction in Monthly Fuel Costs' },
      stat2: { value: '34%', label: 'Decrease in Roadside Breakdowns' },
      stat3: { value: '12,500+', label: 'Commercial Vehicles Connected' },
    },
    technologies: ['React', 'Node.js', 'TimescaleDB', 'PostgreSQL', 'MQTT IoT', 'Docker', 'Google Maps API'],
    deliverables: [
      'Fleet Telematics Control Center',
      'Predictive Maintenance Alert Engine',
      'Driver Safety Scoring & Incident Telemetry',
      'Dynamic Fuel Optimization & Geofencing'
    ],
    modules: [
      {
        id: 'fleet-control',
        title: 'Module 1: Fleet Telematics & Live Vehicle Tracking',
        subtitle: 'Real-time multi-asset geospatial monitoring with speed & ignition status',
        description: 'Comprehensive logistics command screen providing real-time geographical positioning, ignition status, cargo weight load, and delivery route adherence.',
        image: '/assets/aistudio/Fleet_dashboard_meets_sunset_logistics_34a3562c.png',
        type: 'image',
        badge: 'Fleet Telematics',
        highlights: [
          'Live 5-second telemetry heartbeat updating speed, battery, and engine load',
          'Polygon geofencing alerts for route deviation and unauthorized stops',
          'Interactive vehicle selector with instant two-way driver communication'
        ],
        metrics: { label: 'Telemetry Ingestion Rate', value: '45,000 pts/sec' }
      },
      {
        id: 'maintenance-engine',
        title: 'Module 2: Predictive Maintenance & Sensor Diagnostics',
        subtitle: 'Machine learning anomaly detection preventing highway breakdowns',
        description: 'Automated diagnostic engine analyzing brake pad wear, coolant temperatures, oil degradation, and tire pressure to schedule timely service visits.',
        image: '/assets/aistudio/Fleet_dashboard_meets_sunset_logistics_34a3562c.png',
        type: 'interactive',
        badge: 'Diagnostics & AI',
        highlights: [
          'CAN-bus DTC error translation into plain technician instructions',
          'Preventive maintenance schedules tied to actual engine hours',
          'Digital work order generation and spare parts inventory tracking'
        ],
        metrics: { label: 'Breakdown Prevention Rate', value: '91.8%' }
      },
      {
        id: 'safety-scoring',
        title: 'Module 3: Driver Safety Scoring & Behavioral Monitor',
        subtitle: 'Behavioral analytics tracking harsh acceleration, speeding, and fatigue',
        description: 'Driver profiling tool analyzing accelerometer and gyroscope sensors to compute safety scores, reduce insurance claims, and gamify fuel-efficient driving habits.',
        image: '/assets/aistudio/Fleet_dashboard_meets_sunset_logistics_34a3562c.png',
        type: 'interactive',
        badge: 'Safety Analytics',
        highlights: [
          'Detection of harsh cornering, rapid acceleration, and tailgating',
          'Driver leaderboard ranking drivers by eco-efficiency',
          'Automatic dashcam incident buffering for claim defense'
        ],
        metrics: { label: 'Accident Rate Reduction', value: '-43%' }
      },
      {
        id: 'fuel-optimizer',
        title: 'Module 4: Fuel Consumption & Anti-Theft Telemetry',
        subtitle: 'Ultrasonic tank telemetry with abrupt drop anomaly alerts',
        description: 'Dedicated fuel management suite preventing siphoning theft, monitoring idle consumption wastage, and calculating exact fleet-wide fuel efficiency.',
        image: '/assets/aistudio/Fleet_dashboard_meets_sunset_logistics_34a3562c.png',
        type: 'interactive',
        badge: 'Fuel & Geofence',
        highlights: [
          'Ultrasonic tank level sensors identifying fuel drops within seconds',
          'Idle-time fuel burn tracking alerting dispatchers of excessive idling',
          'Optimal refueling stop recommendations based on live regional fuel prices'
        ],
        metrics: { label: 'Monthly Fuel Saved', value: '18,400 Liters' }
      }
    ]
  },

  // 3. Third Project: Driver on Hire
  {
    id: 'proj-3',
    slug: 'driver-on-hire',
    title: 'Driver on Hire',
    clientCategory: 'Urban Mobility & On-Demand Chauffeur Platform',
    tagline: 'Enterprise on-demand chauffeur dispatch, biometric verification, and live fleet allocation network.',
    heroImage: '/assets/aistudio/Driveronhire_Logistics_Dashboard_bf0cce98.png',
    websiteUrl: 'https://33driver.com/',
    summary: 'A mission-critical on-demand driver dispatch ecosystem connecting verified private drivers with vehicle owners in real-time across high-density metro corridors.',
    fullOverview: '33 Kuber Advisory LLP engineered and launched "Driver on Hire", a high-throughput on-demand chauffeur platform designed for metropolitan regions. Handling scheduled and instant bookings, the platform integrates sub-second geofenced driver matching, live GPS telemetry, biometric KYC verification, and dynamic surge pricing algorithms.',
    businessImpact: {
      stat1: { value: '< 90 sec', label: 'Average Dispatch Allocation Time' },
      stat2: { value: '99.98%', label: 'Platform Availability & Uptime' },
      stat3: { value: '42,000+', label: 'Verified Chauffeur Network' },
    },
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis Geo-Spatial', 'WebSockets', 'Kafka', 'Google Maps API'],
    deliverables: [
      'Customer iOS & Android Booking Apps',
      'Chauffeur Partner Dispatch & Earnings App',
      'Central Operations & Dispatch Control Room',
      'Automated Payout & Surge Settlement Ledger'
    ],
    modules: [
      {
        id: 'dispatch-control',
        title: 'Module 1: Real-Time Dispatch Control & GPS Map',
        subtitle: 'Sub-second driver matching and geospatial route monitoring',
        description: 'Central operations console providing live radar views of in-transit chauffeurs, queue depth, heatmaps of pending bookings, and instant manual override routing.',
        image: '/assets/aistudio/Driveronhire_Logistics_Dashboard_bf0cce98.png',
        type: 'image',
        badge: 'Core Dispatch',
        highlights: [
          'Sub-second geohash search indexing for nearby available drivers',
          'Live turn-by-turn route tracking with traffic-aware arrival time computation',
          'Emergency SOS trigger linked with 24/7 central response command'
        ],
        metrics: { label: 'Active Concurrent Tracks', value: '14,800+' }
      },
      {
        id: 'driver-kyc',
        title: 'Module 2: Chauffeur Verification & Background Check Vault',
        subtitle: 'AI-assisted document validation and police record verification',
        description: 'End-to-end credentialing pipeline validating driving licenses, criminal record checks, residential verifications, and ongoing passenger safety ratings.',
        image: '/assets/aistudio/Driveronhire_Logistics_Dashboard_bf0cce98.png',
        type: 'interactive',
        badge: 'Trust & Safety',
        highlights: [
          'OCR validation for immediate commercial driving license checks',
          'Automated permit expiry and renewal notification engine',
          'Quarterly safety audits and dynamic driver rating index'
        ],
        metrics: { label: 'Verification Accuracy', value: '99.94%' }
      },
      {
        id: 'passenger-app',
        title: 'Module 3: Passenger Booking & Reservation Interface',
        subtitle: 'Frictionless one-tap booking for personal and luxury car owners',
        description: 'Intuitive consumer mobile interface facilitating hourly, daily, outstation, and one-way chauffeur reservations with transparent tiered fare estimation.',
        image: '/assets/aistudio/Driveronhire_Logistics_Dashboard_bf0cce98.png',
        type: 'interactive',
        badge: 'Mobile Client UI',
        highlights: [
          'Scheduled or immediate one-tap driver dispatch selection',
          'Pre-ride vehicle inspection checklist and photographic odometer logging',
          'Integrated UPI, credit cards, and corporate billing account wallet'
        ],
        metrics: { label: 'App Store Rating', value: '4.85 / 5.0' }
      },
      {
        id: 'pricing-settlement',
        title: 'Module 4: Dynamic Surge Pricing & Instant Settlement',
        subtitle: 'Automated escrow, commission splitting, and instant driver withdrawals',
        description: 'High-volume financial settlement engine processing peak-hour surge calculations, toll reimbursements, and automated daily bank transfers to chauffeurs.',
        image: '/assets/aistudio/Driveronhire_Logistics_Dashboard_bf0cce98.png',
        type: 'interactive',
        badge: 'Fintech & Payouts',
        highlights: [
          'Real-time demand vs. supply elasticity pricing algorithm',
          'Instant IMPS/NEFT automated driver wallet withdrawal system',
          'Comprehensive GST and municipal mobility tax reporting'
        ],
        metrics: { label: 'Daily Disbursed Payouts', value: '₹2.8M+' }
      }
    ]
  },

  // 4. Fourth Project: Jaztrack
  {
    id: 'proj-4',
    slug: 'jaztrack',
    title: 'Jaztrack',
    clientCategory: 'Productivity SaaS & Enterprise Time Tracking Workspace',
    tagline: 'Modern workforce productivity intelligence, automated timesheets, and project budgeting workspace.',
    heroImage: '/assets/aistudio/Jaztrack_Time_Tracking_Workspace_2ae03084.png',
    websiteUrl: 'https://jaztrack.33kuber.com',
    summary: 'A high-precision time tracking and productivity workspace empowering distributed engineering teams and professional agencies to monitor billable hours, project margins, and sprint velocity.',
    fullOverview: '33 Kuber Advisory LLP engineered "Jaztrack" as an all-in-one time tracking and productivity suite. Featuring native desktop timers, automated activity telemetry, project budget burn-down meters, and one-click invoice generation, Jaztrack eliminates billable leakage for modern enterprise service organizations.',
    businessImpact: {
      stat1: { value: '99.6%', label: 'Timesheet Accuracy Rate' },
      stat2: { value: '31%', label: 'Reduction in Unbilled Project Overruns' },
      stat3: { value: '80,000+', label: 'Active Global Seats Powered' },
    },
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Electron / Mobile'],
    deliverables: [
      'Web & Desktop Time Tracking Workspace',
      'Project Budget & Burn-Down Analytics',
      'Team Timesheet Approval Matrix',
      'Automated Client Invoicing Gateway'
    ],
    modules: [
      {
        id: 'workspace-dashboard',
        title: 'Module 1: Unified Time Tracking & Productivity Workspace',
        subtitle: 'Live activity monitoring, active task tickers, and team availability',
        description: 'Clean centralized workspace displaying active timers, logged billable hours, sprint progress, and task burndown charts in real time.',
        image: '/assets/aistudio/Jaztrack_Time_Tracking_Workspace_2ae03084.png',
        type: 'image',
        badge: 'Productivity Hub',
        highlights: [
          'One-click multi-project timer with idle detection and offline caching',
          'Visual weekly calendar grid with drag-and-drop time block adjustments',
          'Productivity velocity metrics and distraction-free workspace mode'
        ],
        metrics: { label: 'Daily Time Logs Processed', value: '320,000+' }
      },
      {
        id: 'project-budgeting',
        title: 'Module 2: Project Budget Burn-Down & Cost Accounting',
        subtitle: 'Real-time margin forecasting and cost overrun alert guards',
        description: 'Comprehensive financial dashboard linking employee hourly cost rates against fixed-fee and retainer client contracts to safeguard profitability.',
        image: '/assets/aistudio/Jaztrack_Time_Tracking_Workspace_2ae03084.png',
        type: 'interactive',
        badge: 'Budget & Margins',
        highlights: [
          'Automatic burn-down pacing alert when scope reaches 80% of budget cap',
          'Role-based labor rate calculations with overtime multiplier rules',
          'Exportable financial variance reports for management reviews'
        ],
        metrics: { label: 'Cost Variance Control', value: '99.4%' }
      },
      {
        id: 'team-roster',
        title: 'Module 3: Team Timesheet Approval & Attendance Roster',
        subtitle: 'Multi-tier manager review workflow with automated compliance audit',
        description: 'Streamlined approval queue allowing practice managers to review, adjust, and approve weekly timesheet submissions with one-click audit trails.',
        image: '/assets/aistudio/Jaztrack_Time_Tracking_Workspace_2ae03084.png',
        type: 'interactive',
        badge: 'Approval Workflow',
        highlights: [
          'Automated timesheet submission reminders sent via email and Slack',
          'Granular line-item approvals and rejection comment logs',
          'Direct synchronization with corporate payroll and HRMS systems'
        ],
        metrics: { label: 'Timesheet Approval Speed', value: '3.5x Faster' }
      },
      {
        id: 'invoicing-gateway',
        title: 'Module 4: One-Click Client Invoicing & Retainer Ledger',
        subtitle: 'Transform verified timesheets into professional branded invoices',
        description: 'Automated billing engine aggregating approved billable hours and expenses into compliant multi-currency invoices with integrated payment gateways.',
        image: '/assets/aistudio/Jaztrack_Time_Tracking_Workspace_2ae03084.png',
        type: 'interactive',
        badge: 'Invoicing & Payouts',
        highlights: [
          'Instant conversion of time entries into line-itemized PDF invoices',
          'Support for milestone, retainer, and time-and-materials billing models',
          'Automated recurring billing cycles with overdue payment chase sequences'
        ],
        metrics: { label: 'Invoice Realization Rate', value: '98.5%' }
      }
    ]
  }
];

export const OFFICES = {
  headOffice: {
    city: 'Mumbai',
    label: 'Head Office',
    address: ' Mumbai, Maharashtra, India',
    coordinates: '19.0522° N, 72.8994° E',
    phone: '+91 22 2521 8933',
    email: 'admin@33kuber.com',
    departments: ['Executive Management', 'Corporate Advisory', 'Enterprise Client Strategy', 'Legal & Financial Tech'],
    hours: 'Mon – Fri: 9:30 AM – 6:30 PM IST'
  },
  branchOffice: {
    city: 'Bengaluru',
    label: 'Branch Office',
    address: 'Bengaluru, Karnataka, India',
    coordinates: '12.9279° N, 77.6271° E',
    phone: '+91 80 4120 4533',
    email: 'admin@33kuber.com',
    departments: ['Core Software Engineering', 'Cloud & DevOps Architecture', 'AI & Machine Learning Lab', 'IoT & Telematics R&D'],
    hours: 'Mon – Fri: 9:30 AM – 6:30 PM IST'
  }
};

export const SERVICES = [
  {
    id: 'web-development',
    title: 'Enterprise Web Development',
    kicker: '01. High-Performance Frontends & Backends',
    description: 'We architect and build lightning-fast, secure, and resilient web platforms using React, Next.js, TypeScript, and distributed cloud microservices designed for massive concurrent scale.',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL'],
    deliverables: [
      'Responsive cloud-native web portals',
      'Micro-frontend and headless architectures',
      'Sub-second Core Web Vitals optimization',
      'Role-based access control (RBAC) & OAuth'
    ]
  },
  {
    id: 'customized-solutions',
    title: 'Customized Enterprise Solutions',
    kicker: '02. Domain-Specific Business Logic',
    description: 'Tailored enterprise software addressing complex organizational workflows: ERP modernization, custom CRM pipelines, legal matter dockets, and telemetry dispatch backbones.',
    technologies: ['Go', 'Python', 'Kafka', 'Redis', 'Docker & Kubernetes', 'TimescaleDB'],
    deliverables: [
      'End-to-end legacy systems modernization',
      'Event-driven data processing pipelines',
      'Custom ERP & operational analytics consoles',
      'Secure third-party API orchestration'
    ]
  },
  {
    id: 'product-development',
    title: 'Digital Product Development',
    kicker: '03. From Strategy to Market Scale',
    description: 'Full lifecycle digital product incubation: from initial user research and architectural blueprinting to production release, zero-downtime CI/CD, and post-launch maintenance.',
    technologies: ['Full-Stack TS', 'GraphQL', 'AWS / GCP Cloud', 'Terraform', 'WebSockets', 'OpenAPI'],
    deliverables: [
      'Rapid prototype validation and MVP launch',
      'Enterprise SaaS multi-tenancy architecture',
      'Continuous automated delivery (CI/CD)',
      'Telemetry instrumentation and SLA observability'
    ]
  }
];

export type ProcessStep = {
  step: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Agile & Client-Focused Discovery',
    tagline: 'Deep domain immersion and roadmap definition',
    description: 'We begin every engagement with rigorous stakeholder discovery sessions, user workflow mapping, and clear KPIs. We define technical requirements and architectural blueprints with zero ambiguity.',
    tags: ['Discovery', 'Roadmap', 'KPI Alignment']
  },
  {
    step: '02',
    title: 'Expert Full-Stack Architecture',
    tagline: 'Clean modular codebases built for enterprise scale',
    description: 'Our senior engineers craft battle-tested system architectures: resilient database schemas, fault-tolerant microservices, high-performance UI layers, and scalable cloud infrastructures.',
    tags: ['Architecture', 'Scalable Systems', 'Cloud Design']
  },
  {
    step: '03',
    title: 'Quality & Security-First Hardening',
    tagline: 'Automated testing and vulnerability mitigation',
    description: 'Security is baked in from day zero. We enforce rigorous automated unit and integration tests, end-to-end regression pipelines, data encryption at rest and in transit, and strict compliance standards.',
    tags: ['Security', 'Quality Gates', 'Regression Testing']
  },
  {
    step: '04',
    title: 'End-to-End Enterprise Solutions',
    tagline: 'Production-ready delivery with seamless integration',
    description: 'We orchestrate the entire deployment pipeline—from database migrations and API gateways to mobile app store submissions and cloud orchestrations—guaranteeing zero disruptions.',
    tags: ['Deployment', 'Platform Delivery', 'Operations']
  },
  {
    step: '05',
    title: 'Transparent Communication & Delivery',
    tagline: 'Bi-weekly sprint demos and dedicated engineering liaisons',
    description: 'We maintain absolute transparency with shared sprint backlogs, live demo environments, rapid feedback cycles, and dedicated project managers who speak both business and engineering.',
    tags: ['Sprint Reviews', 'Delivery Transparency', 'Stakeholder Alignment']
  }
];
