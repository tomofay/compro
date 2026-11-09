import type { Locale } from '@/i18n/routes';

export interface TechStackCategory {
  icon: 'Monitor' | 'Server' | 'Database' | 'ShieldCheck';
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  items: {
    name: string;
    role: Record<Locale, string>;
  }[];
}

export const TECH_STACK: TechStackCategory[] = [
  {
    icon: 'Monitor',
    title: {
      id: 'Antarmuka Modern & Website Cepat',
      en: 'Modern Web & Frontend Experience',
    },
    description: {
      id: 'Tampilan bersih yang terbuka dalam hitungan detik di desktop maupun smartphone.',
      en: 'Clean, responsive interfaces engineered to open smoothly across desktop and mobile.',
    },
    items: [
      {
        name: 'Astro & Next.js',
        role: { id: 'Fondasi Website Cepat & Ramah SEO', en: 'Fast Static & SEO Web Foundation' },
      },
      {
        name: 'React & TypeScript',
        role: { id: 'Antarmuka Interaktif Andal', en: 'Reliable Interactive Interfaces' },
      },
      {
        name: 'Tailwind CSS',
        role: { id: 'Konsistensi Sistem Desain Korporat', en: 'Consistent Corporate Design System' },
      },
    ],
  },
  {
    icon: 'Server',
    title: {
      id: 'Integrasi Bisnis & Aplikasi Mobile',
      en: 'Business Integrations & Mobile Apps',
    },
    description: {
      id: 'Menghubungkan website atau aplikasi Anda dengan pembayaran, kurir, dan ERP.',
      en: 'Connecting your digital platforms with payment gateways, couriers, and internal tools.',
    },
    items: [
      {
        name: 'Node.js & Go',
        role: { id: 'Layanan Backend & API Terpadu', en: 'Scalable API & Backend Services' },
      },
      {
        name: 'React Native / Flutter',
        role: { id: 'Aplikasi Android & iOS', en: 'Android & iOS Mobile Apps' },
      },
      {
        name: 'Midtrans & Xendit',
        role: { id: 'Pembayaran Online QRIS & VA', en: 'Local Payment & QRIS Integration' },
      },
    ],
  },
  {
    icon: 'Database',
    title: {
      id: 'Pengelolaan Data & Penyimpanan Aman',
      en: 'Structured Data & Reliable Storage',
    },
    description: {
      id: 'Menjaga data produk, transaksi, dan pelanggan tetap tertata dan mudah dicadangkan.',
      en: 'Keeping product catalogs, transactions, and client records organized and backed up.',
    },
    items: [
      {
        name: 'PostgreSQL',
        role: { id: 'Database Utama Berstandar Enterprise', en: 'Enterprise Relational Database' },
      },
      {
        name: 'Redis Caching',
        role: { id: 'Akses Cepat pada Jam Sibuk', en: 'High-Speed Peak Load Caching' },
      },
      {
        name: 'Cloud Object Storage',
        role: { id: 'Arsip Dokumen & Media Terlindungi', en: 'Protected Media & Document Storage' },
      },
    ],
  },
  {
    icon: 'ShieldCheck',
    title: {
      id: 'Infrastruktur Cloud & Uji Kualitas',
      en: 'Cloud Infrastructure & Quality Assurance',
    },
    description: {
      id: 'Siap menghadapi lonjakan trafik dengan sertifikat keamanan HTTPS dan backup rutin.',
      en: 'Prepared for traffic growth with HTTPS security, automated deployments, and QA checks.',
    },
    items: [
      {
        name: 'Cloudflare / Vercel Edge',
        role: { id: 'Jaringan Pengiriman Global', en: 'Global Edge Network Delivery' },
      },
      {
        name: 'Docker & Linux Cloud',
        role: { id: 'Server Khusus Aplikasi Bisnis', en: 'Dedicated Application Servers' },
      },
      {
        name: 'Automated QA Audit',
        role: { id: 'Pengujian Kecepatan & Fungsional', en: 'Speed & Functional Verification' },
      },
    ],
  },
];

export interface ProcessPhase {
  step: string;
  duration: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  artifact: Record<Locale, string>;
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: '01',
    duration: { id: 'Hari 1 - 3', en: 'Days 1 - 3' },
    title: {
      id: 'Konsultasi & Pemetaan Tujuan',
      en: 'Discovery & Goal Mapping',
    },
    description: {
      id: 'Diskusi langsung untuk memahami model bisnis, target pasar, serta fitur yang benar-benar dibutuhkan.',
      en: 'Direct consultation to align on your business model, audience, and essential deliverables.',
    },
    artifact: {
      id: 'Hasil: Proposal Ruang Lingkup & Jadwal Jelas',
      en: 'Outcome: Clear Scope & Timeline Proposal',
    },
  },
  {
    step: '02',
    duration: { id: 'Hari 4 - 7', en: 'Days 4 - 7' },
    title: {
      id: 'Perancangan Desain & Tata Letak',
      en: 'Visual Design & Structure',
    },
    description: {
      id: 'Penyusunan alur halaman yang mudah dipahami calon pembeli, lengkap dengan pratinjau tampilan visual.',
      en: 'Crafting buyer-focused page flow and clean visual layouts before full development begins.',
    },
    artifact: {
      id: 'Hasil: Pratinjau Desain Disetujui Bersama',
      en: 'Outcome: Approved Visual Design Preview',
    },
  },
  {
    step: '03',
    duration: { id: 'Minggu 2+', en: 'Week 2+' },
    title: {
      id: 'Pengembangan & Uji Coba',
      en: 'Build & Quality Verification',
    },
    description: {
      id: 'Tim kami membangun website atau aplikasi secara bertahap dengan tautan staging agar Anda bisa memantau langsung.',
      en: 'Iterative development paired with live staging previews so stakeholders can verify progress directly.',
    },
    artifact: {
      id: 'Hasil: Tautan Uji Coba & Daftar Verifikasi',
      en: 'Outcome: Live Staging Build & QA Review',
    },
  },
  {
    step: '04',
    duration: { id: 'Peluncuran', en: 'Launch' },
    title: {
      id: 'Peluncuran & Aktivasi Managed Care',
      en: 'Go-Live & Managed Care Setup',
    },
    description: {
      id: 'Pemasangan ke domain resmi lengkap dengan gratis hosting tahun ke-1, akun email bisnis (sales@perusahaan.com), SSL keamanan, panduan tim, dan pemantauan aktif.',
      en: 'Production domain launch with free 1st-year hosting, official business email (sales@company.com), SSL setup, team onboarding, and active monitoring.',
    },
    artifact: {
      id: 'Hasil: Sistem Online, Backup Aktif & Support Resmi',
      en: 'Outcome: Live System, Active Backups & Official Support',
    },
  },
];
