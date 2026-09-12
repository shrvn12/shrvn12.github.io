export const projects = [
  {
    id: 'at12',
    title: 'At12',
    description:
      'A full-stack music streaming platform with personalized feeds, distributed backend services, Redis caching, synced lyrics, and real-time playback.',
    image: '/images/at12.png',
    tags: ['Vue.js', 'Node.js', 'Youtube Data API', 'MongoDB'],
    links: {
      frontend: 'https://github.com/shrvn12/at12_v2',
      backend: 'https://github.com/shrvn12/at12_backend_v3',
      live: 'https://at12.duckdns.org',
    },
  },
  {
    id: 'sitepulse',
    title: 'Sitepulse',
    description:
      'A privacy-first website analytics platform with real-time telemetry and distributed event processing.',
    image: '/images/sitepulse.png',
    tags: ['TypeScript', 'Python', 'Next.Js', 'Clickhouse', 'Kafka'],
    links: {
      frontend: 'https://github.com/shrvn12/sitepulse_frontend_v2',
      backend: 'https://github.com/shrvn12/sitepulse',
      live: 'https://sitepulse.duckdns.org',
    },
  },
  {
    id: 'docscan-ocr',
    title: 'DocScan OCR',
    description:
      'An OCR-powered document processing platform that automates data extraction, review workflows, and record management. Includes offline capture, background processing, audit logs, and searchable document history.',
    image: '/images/ocr.png',
    tags: ['Vue.js', 'Node.js', 'IndexedDB', 'Neon DB', 'Cloudinary'],
    links: {
      frontend: 'https://github.com/shrvn12/ocr_frontend',
      backend: 'https://github.com/shrvn12/ocr_backend',
      live: 'https://ocr-frontend-efr1.onrender.com',
    },
  },
  {
    id: 'kings-messenger',
    title: 'Kings messenger',
    description:
      'A real-time messaging app with WebSockets, JWT authentication, and REST APIs, featuring live presence tracking, message status updates, and end-to-end encryption.',
    image: '/images/kings.png',
    tags: ['Angular', 'Node.js', 'WebSocket', 'MongoDB'],
    links: {
      frontend: 'https://github.com/shrvn12/kings_frontend',
      backend: 'https://github.com/shrvn12/kings_backend/',
      live: 'https://kings-messenger.vercel.app',
    },
  },
]
