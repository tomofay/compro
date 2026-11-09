import type { Locale } from '@/i18n/routes';

export interface TechLogoAsset {
  src: string;
  label: string;
}

export interface TechStackCategory {
  icon: 'Monitor' | 'Server' | 'Database' | 'ShieldCheck';
  title: Record<Locale, string>;
  items: {
    name: string;
    role: Record<Locale, string>;
    logos?: TechLogoAsset[];
    fallbackIcon?: 'CreditCard' | 'HardDrive' | 'CheckCheck';
  }[];
}

export const TECH_STACK: TechStackCategory[] = [
  {
    icon: 'Monitor',
    title: {
      id: 'Frontend & Performa Web',
      en: 'Frontend & Web Speed',
    },
    items: [
      {
        name: 'Astro & Next.js',
        role: { id: 'Website cepat & ramah SEO', en: 'Fast static & SEO architecture' },
        logos: [
          { src: '/logos/astro.svg', label: 'Astro' },
          { src: '/logos/nextjs.svg', label: 'Next.js' },
        ],
      },
      {
        name: 'React & TypeScript',
        role: { id: 'Antarmuka interaktif & aman tipe', en: 'Interactive type-safe UI' },
        logos: [
          { src: '/logos/react.svg', label: 'React' },
          { src: '/logos/typescript.svg', label: 'TypeScript' },
        ],
      },
      {
        name: 'Tailwind CSS',
        role: { id: 'Sistem desain rapi & responsif', en: 'Clean responsive UI system' },
        logos: [{ src: '/logos/tailwindcss.svg', label: 'Tailwind CSS' }],
      },
    ],
  },
  {
    icon: 'Server',
    title: {
      id: 'Backend API & Mobile Apps',
      en: 'Backend API & Mobile',
    },
    items: [
      {
        name: 'Node.js & Go',
        role: { id: 'API & layanan backend terukur', en: 'Scalable API & services' },
        logos: [
          { src: '/logos/nodejs.svg', label: 'Node.js' },
          { src: '/logos/go.svg', label: 'Go' },
        ],
      },
      {
        name: 'React Native / Flutter',
        role: { id: 'Aplikasi Android & iOS', en: 'Android & iOS apps' },
        logos: [
          { src: '/logos/react.svg', label: 'React Native' },
          { src: '/logos/flutter.svg', label: 'Flutter' },
        ],
      },
      {
        name: 'Midtrans & Xendit',
        role: { id: 'Checkout QRIS & Virtual Account', en: 'QRIS & VA payments' },
        fallbackIcon: 'CreditCard',
      },
    ],
  },
  {
    icon: 'Database',
    title: {
      id: 'Database & Penyimpanan',
      en: 'Data & Storage',
    },
    items: [
      {
        name: 'PostgreSQL',
        role: { id: 'Database relasional enterprise', en: 'Enterprise database' },
        logos: [{ src: '/logos/postgresql.svg', label: 'PostgreSQL' }],
      },
      {
        name: 'Redis Caching',
        role: { id: 'Kecepatan akses beban tinggi', en: 'High-speed caching' },
        logos: [{ src: '/logos/redis.svg', label: 'Redis' }],
      },
      {
        name: 'Cloud Object Storage',
        role: { id: 'Penyimpanan aset & dokumen aman', en: 'Protected asset storage' },
        fallbackIcon: 'HardDrive',
      },
    ],
  },
  {
    icon: 'ShieldCheck',
    title: {
      id: 'Cloud Server & Keamanan',
      en: 'Cloud & Security',
    },
    items: [
      {
        name: 'Cloudflare / Edge CDN',
        role: { id: 'SSL otomatis & proteksi trafik', en: 'Auto SSL & traffic security' },
        logos: [{ src: '/logos/cloudflare.svg', label: 'Cloudflare' }],
      },
      {
        name: 'Docker & Linux Cloud',
        role: { id: 'Deploy terisolasi & mudah pindah server', en: 'Portable container setup' },
        logos: [
          { src: '/logos/docker.svg', label: 'Docker' },
          { src: '/logos/linux.svg', label: 'Linux' },
        ],
      },
      {
        name: 'GitHub Actions CI & QA',
        role: { id: 'Uji build, performa & zero-error', en: 'Build & runtime verification' },
        logos: [{ src: '/logos/githubactions.svg', label: 'GitHub Actions' }],
      },
    ],
  },
];

export interface ProcessPhase {
  step: string;
  duration: Record<Locale, string>;
  title: Record<Locale, string>;
  points: Record<Locale, string[]>;
  artifact: Record<Locale, string>;
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: '01',
    duration: { id: 'Hari 1 - 3', en: 'Days 1 - 3' },
    title: {
      id: 'Diskusi & Pemetaan',
      en: 'Discovery & Scope',
    },
    points: {
      id: [
        'Identifikasi target bisnis & modul inti',
        'Penentuan biaya & jadwal rilis final',
      ],
      en: [
        'Align on business goals & core features',
        'Lock transparent quote & launch date',
      ],
    },
    artifact: {
      id: 'Output: Proposal & Timeline',
      en: 'Output: Scope & Timeline',
    },
  },
  {
    step: '02',
    duration: { id: 'Hari 4 - 7', en: 'Days 4 - 7' },
    title: {
      id: 'Desain & Tata Letak',
      en: 'Design & Layout',
    },
    points: {
      id: [
        'Struktur halaman & alur konversi B2B',
        'Revisi visual interaktif sebelum coding',
      ],
      en: [
        'Buyer-focused page structure & copy',
        'Visual approval prior to development',
      ],
    },
    artifact: {
      id: 'Output: Pratinjau Desain',
      en: 'Output: Approved Mockup',
    },
  },
  {
    step: '03',
    duration: { id: 'Minggu 2+', en: 'Week 2+' },
    title: {
      id: 'Pengembangan & QA',
      en: 'Build & QA Testing',
    },
    points: {
      id: [
        'Integrasi fitur, form, payment & API',
        'Tautan staging untuk review klien langsung',
      ],
      en: [
        'Core features, forms, payment & APIs',
        'Live staging preview URL for review',
      ],
    },
    artifact: {
      id: 'Output: Staging & Checklist QA',
      en: 'Output: Staging & QA Sign-off',
    },
  },
  {
    step: '04',
    duration: { id: 'Peluncuran', en: 'Launch' },
    title: {
      id: 'Rilis & Aktivasi Aset',
      en: 'Go-Live & Handover',
    },
    points: {
      id: [
        'Gratis hosting, SSL & email (sales@perusahaan.com)',
        'Training tim + aktivasi Managed Care / Source Code',
      ],
      en: [
        'Free 1st-yr hosting, SSL & email (sales@company.com)',
        'Team training + Managed Care / Source Code handover',
      ],
    },
    artifact: {
      id: 'Output: Online + BAST Resmi',
      en: 'Output: Live + Formal BAST',
    },
  },
];
