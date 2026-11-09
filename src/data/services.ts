import type { Locale } from '@/i18n/routes';

export type ServiceIconName =
  | 'Building2'
  | 'LayoutTemplate'
  | 'ShoppingBag'
  | 'Code2'
  | 'Smartphone';

export interface ServiceItem {
  id: string;
  slug: string;
  icon: ServiceIconName;
  image: string;
  categoryKey: 'compro' | 'landing' | 'store' | 'software' | 'mobile';
  startingPrice: Record<Locale, string>;
  timeline: Record<Locale, string>;
  hostingPolicy: Record<Locale, string>;
  shortLabel: Record<Locale, string>;
  title: Record<Locale, string>;
  tagline: Record<Locale, string>;
  idealFor: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  highlights: Record<Locale, string[]>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'compro',
    slug: 'company-profile',
    icon: 'Building2',
    image: '/images/showcase-compro.jpg',
    categoryKey: 'compro',
    startingPrice: {
      id: 'Mulai Rp 2,5 Juta',
      en: 'From IDR 2.5M',
    },
    timeline: {
      id: '10 - 14 Hari Kerja',
      en: '10 - 14 Business Days',
    },
    hostingPolicy: {
      id: 'Gratis Hosting, Domain & Email Th. 1 · Managed Care Th. 2+',
      en: 'Free 1st-Yr Hosting, Domain & Email · Managed Care Year 2+',
    },
    shortLabel: {
      id: 'Company Profile',
      en: 'Company Profile',
    },
    title: {
      id: 'Website Company Profile',
      en: 'Corporate Company Profile',
    },
    tagline: {
      id: 'Profil resmi perusahaan berkecepatan tinggi & multi-bahasa.',
      en: 'High-speed, bilingual corporate presence for enterprise buyers.',
    },
    idealFor: {
      id: 'B2B, Manufaktur, Konsultan & Tender',
      en: 'B2B, Manufacturing, Firms & Tenders',
    },
    deliverables: {
      id: [
        'Desain profesional sesuai identitas brand',
        'Gratis domain, SSL & hosting tahun pertama',
        'Akun email bisnis (sales@perusahaan.com)',
        'SEO, WhatsApp bisnis & form penawaran',
      ],
      en: [
        'Bespoke design aligned with brand guidelines',
        'Free 1st-yr domain, SSL & cloud hosting',
        'Official business email (sales@company.com)',
        'SEO structure, WhatsApp routing & RFQ form',
      ],
    },
    highlights: {
      id: ['Gratis Hosting Th. 1', 'Akun Email Bisnis', 'Managed Care Th. 2+'],
      en: ['Free 1st-Yr Hosting', 'Business Email', 'Annual Managed Care'],
    },
  },
  {
    id: 'landing',
    slug: 'landing-page',
    icon: 'LayoutTemplate',
    image: '/images/showcase-landing.jpg',
    categoryKey: 'landing',
    startingPrice: {
      id: 'Mulai Rp 1,8 Juta',
      en: 'From IDR 1.8M',
    },
    timeline: {
      id: '5 - 10 Hari Kerja',
      en: '5 - 10 Business Days',
    },
    hostingPolicy: {
      id: 'Gratis Hosting, Domain & Email Th. 1 · Managed Care Th. 2+',
      en: 'Free 1st-Yr Hosting, Domain & Email · Managed Care Year 2+',
    },
    shortLabel: {
      id: 'Landing Page',
      en: 'Landing Page',
    },
    title: {
      id: 'Landing Page Kampanye',
      en: 'High-Converting Landing Page',
    },
    tagline: {
      id: 'Halaman penawaran fokus konversi iklan & prospek.',
      en: 'Focused campaign page engineered for ad conversion.',
    },
    idealFor: {
      id: 'Produk Baru, Properti, Jasa & Event',
      en: 'Product Launches, Real Estate & Services',
    },
    deliverables: {
      id: [
        'Struktur penawaran fokus konversi pembeli',
        'Gratis domain, SSL & hosting tahun pertama',
        'Akun email bisnis (sales@perusahaan.com)',
        'Leads ke WhatsApp + Meta & Google Pixel',
      ],
      en: [
        'Conversion-oriented offer layout',
        'Free 1st-yr domain, SSL & hosting',
        'Official business email (sales@company.com)',
        'WhatsApp lead routing + Meta & Google Pixel',
      ],
    },
    highlights: {
      id: ['Gratis Hosting Th. 1', 'Email Bisnis Resmi', 'Siap Google & Meta Ads'],
      en: ['Free 1st-Yr Hosting', 'Official Business Email', 'Google & Meta Ads Ready'],
    },
  },
  {
    id: 'store',
    slug: 'online-store',
    icon: 'ShoppingBag',
    image: '/images/showcase-store.jpg',
    categoryKey: 'store',
    startingPrice: {
      id: 'Mulai Rp 8 Juta',
      en: 'From IDR 8M',
    },
    timeline: {
      id: '3 - 6 Minggu',
      en: '3 - 6 Weeks',
    },
    hostingPolicy: {
      id: 'Termasuk Source Code Penuh · Gratis Hosting, Domain & Email Th. 1',
      en: 'Full Source Code Included · Free 1st-Yr Hosting, Domain & Email',
    },
    shortLabel: {
      id: 'Toko Online',
      en: 'Online Store',
    },
    title: {
      id: 'Toko Online & E-Commerce',
      en: 'E-Commerce & Online Store',
    },
    tagline: {
      id: 'Toko resmi mandiri tanpa potongan komisi marketplace.',
      en: 'Independent branded storefront without marketplace commissions.',
    },
    idealFor: {
      id: 'Brand Retail, Distributor & D2C',
      en: 'Retail Brands, Distributors & D2C',
    },
    deliverables: {
      id: [
        'Katalog produk, varian, promo & keranjang',
        'Pembayaran otomatis QRIS, VA & Kartu',
        'Gratis cloud, domain & email (sales@perusahaan.com)',
        'Admin stok + serah terima penuh source code',
      ],
      en: [
        'Variant catalog, promotions & checkout cart',
        'Automated QRIS, Virtual Account & Card checkout',
        'Free 1st-yr cloud, domain & email (sales@company.com)',
        'Admin dashboard + full source code handover',
      ],
    },
    highlights: {
      id: ['Termasuk Source Code', 'Gratis Hosting & Email Th. 1', 'Midtrans / Xendit Ready'],
      en: ['Full Source Code Included', 'Free 1st-Yr Hosting & Email', 'Midtrans / Xendit Ready'],
    },
  },
  {
    id: 'software',
    slug: 'custom-software',
    icon: 'Code2',
    image: '/images/showcase-software.jpg',
    categoryKey: 'software',
    startingPrice: {
      id: 'Sesuai Kebutuhan',
      en: 'Custom Quote',
    },
    timeline: {
      id: '6 - 14 Minggu',
      en: '6 - 14 Weeks',
    },
    hostingPolicy: {
      id: 'Termasuk Source Code Penuh · Gratis Cloud, Domain & Email Th. 1',
      en: 'Full Source Code Included · Free 1st-Yr Cloud, Domain & Email',
    },
    shortLabel: {
      id: 'Custom Software',
      en: 'Custom Software',
    },
    title: {
      id: 'Custom Software & Sistem Web',
      en: 'Custom Software & Web Systems',
    },
    tagline: {
      id: 'Sistem web internal sesuai alur kerja operasional.',
      en: 'Bespoke web applications built around internal workflows.',
    },
    idealFor: {
      id: 'Logistik, Keuangan, Klinik, HR & ERP',
      en: 'Logistics, Finance, Clinics, HR & Operations',
    },
    deliverables: {
      id: [
        'Sistem terpusat pengganti spreadsheet manual',
        'Hak akses berbeda staf, manajer & direksi',
        'Gratis cloud server, domain & email Th. 1',
        'Pelatihan tim & serah terima penuh source code',
      ],
      en: [
        'Centralized web system replacing spreadsheets',
        'Role-based access across teams & executives',
        'Free 1st-yr cloud, domain & business email',
        'Team training & full source code handover',
      ],
    },
    highlights: {
      id: ['Termasuk Source Code', 'Gratis Cloud & Email Th. 1', 'Managed Care / On-Premise'],
      en: ['Full Source Code Included', 'Free 1st-Yr Cloud & Email', 'Managed or On-Premise'],
    },
  },
  {
    id: 'mobile',
    slug: 'mobile-application',
    icon: 'Smartphone',
    image: '/images/showcase-mobile.jpg',
    categoryKey: 'mobile',
    startingPrice: {
      id: 'Sesuai Kebutuhan',
      en: 'Custom Quote',
    },
    timeline: {
      id: '8 - 16 Minggu',
      en: '8 - 16 Weeks',
    },
    hostingPolicy: {
      id: 'Termasuk Source Code Penuh · Gratis Backend Cloud, Domain & Email Th. 1',
      en: 'Full Source Code Included · Free 1st-Yr Cloud, Domain & Email',
    },
    shortLabel: {
      id: 'Aplikasi Mobile',
      en: 'Mobile Apps',
    },
    title: {
      id: 'Aplikasi Mobile Android & iOS',
      en: 'Android & iOS Mobile Apps',
    },
    tagline: {
      id: 'Aplikasi smartphone real-time terhubung backend cloud.',
      en: 'Android & iOS applications synchronized with cloud APIs.',
    },
    idealFor: {
      id: 'Aplikasi Member, Kurir & Tim Sales',
      en: 'Customer Apps, Couriers & Field Sales',
    },
    deliverables: {
      id: [
        'Satu pengembangan untuk Android & iOS',
        'Gratis server API, domain & email Th. 1',
        'Mode offline tim lapangan & sync pusat',
        'Rilis Store + serah terima source code',
      ],
      en: [
        'Unified build for Android and iOS stores',
        'Free 1st-yr backend API, domain & email',
        'Offline queue support with cloud sync',
        'Store submission & full source code handover',
      ],
    },
    highlights: {
      id: ['Termasuk Source Code', 'Gratis Cloud & Email Th. 1', 'Android & iOS'],
      en: ['Full Source Code Included', 'Free 1st-Yr Cloud & Email', 'Android & iOS'],
    },
  },
];

export interface EngagementModel {
  title: Record<Locale, string>;
  billingType: Record<Locale, string>;
  bestFor: Record<Locale, string>;
  terms: Record<Locale, string[]>;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: {
      id: 'Managed Turnkey (Gratis Hosting Th. 1)',
      en: 'Managed Turnkey (Free Year-1 Hosting)',
    },
    billingType: {
      id: 'Gratis Th. 1 · Managed Care Th. 2+',
      en: 'Free Year 1 · Annual Managed Care',
    },
    bestFor: {
      id: 'Website Company Profile & Landing Page terima beres.',
      en: 'Hassle-free Company Profiles and Landing Pages.',
    },
    terms: {
      id: [
        'Gratis domain, SSL, hosting & email (sales@perusahaan.com) Th. 1',
        'Tahun ke-2+ perpanjangan Managed Care tahunan praktis',
        'Server dikelola penuh (opsional buyout kode korporat)',
      ],
      en: [
        'Free 1st-yr domain, SSL, hosting & email (sales@company.com)',
        'Simple annual Managed Care renewal starting Year 2+',
        'Fully managed server (optional corporate buyout available)',
      ],
    },
  },
  {
    title: {
      id: 'Kepemilikan Penuh (Termasuk Source Code)',
      en: 'Full Ownership (Source Code Included)',
    },
    billingType: {
      id: 'Source Code Penuh · Gratis Cloud Th. 1',
      en: 'Full Source Code · Free Year-1 Cloud',
    },
    bestFor: {
      id: 'Standar Toko Online, Custom Software & Aplikasi Mobile.',
      en: 'Included on Online Stores, Custom Software & Mobile Apps.',
    },
    terms: {
      id: [
        'Serah terima penuh source code Git & dokumentasi',
        'Gratis cloud hosting, domain & email bisnis Th. 1',
        'Tahun ke-2+ bebas Managed Care atau server sendiri',
      ],
      en: [
        'Full Git source code & technical documentation handover',
        'Free 1st-yr cloud hosting, domain & official email',
        'Year 2+: continue Managed Care or self-host anywhere',
      ],
    },
  },
  {
    title: {
      id: 'Enterprise SLA & Server Internal',
      en: 'Enterprise SLA & On-Premise Setup',
    },
    billingType: {
      id: 'Kontrak SLA / Instalasi VPS Klien',
      en: 'Maintenance SLA / Internal Server',
    },
    bestFor: {
      id: 'Korporasi dengan infrastruktur internal atau SLA khusus.',
      en: 'Organizations with internal servers or priority SLA.',
    },
    terms: {
      id: [
        'Instalasi ke VPS / On-Premise server internal klien',
        'Backup terjadwal, monitoring uptime & prioritas support',
        'Lengkap Penawaran Resmi, PO, NDA & BAST',
      ],
      en: [
        'Deployment onto client corporate VPS or on-premise server',
        'Scheduled backups, uptime monitoring & priority SLA',
        'Complete Quotations, POs, NDAs & formal BAST',
      ],
    },
  },
];

export type FaqCategory = 'ownership' | 'hosting' | 'b2b';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: Record<Locale, string>;
  points: Record<Locale, string[]>;
}

export const SERVICE_FAQS: FaqItem[] = [
  {
    id: 'faq-01',
    category: 'ownership',
    question: {
      id: 'Layanan mana yang mendapat source code penuh & bagaimana sistem hostingnya?',
      en: 'Which services include full source code handover and how does hosting work?',
    },
    points: {
      id: [
        'Toko Online, Custom Software Web & Aplikasi Mobile langsung mendapat serah terima penuh source code.',
        'Company Profile & Landing Page menggunakan paket Managed Turnkey (perpanjangan Managed Care Th. 2+, tersedia opsi buyout).',
        'Semua paket tetap mendapatkan gratis hosting, domain & email tahun pertama.',
      ],
      en: [
        'Online Stores, Custom Web Software & Mobile Apps include full source code handover.',
        'Company Profiles & Landing Pages run on Managed Turnkey (annual Managed Care Year 2+, optional buyout available).',
        'All packages include complimentary first-year hosting, domain & business email.',
      ],
    },
  },
  {
    id: 'faq-02',
    category: 'hosting',
    question: {
      id: 'Apa isi fasilitas gratis tahun pertama & perpanjangan Managed Care tahun ke-2+?',
      en: 'What is covered in Year 1 and the Year 2+ Managed Care renewal?',
    },
    points: {
      id: [
        'Domain resmi (.com / .co.id / .id) & sertifikat keamanan SSL aktif.',
        'Akun email bisnis resmi sesuai domain (misal: sales@perusahaan.com).',
        'Server cloud cepat, backup data terjadwal & pemantauan uptime 24/7.',
      ],
      en: [
        'Official domain registration and active HTTPS/SSL security.',
        'Domain-matched official business email (e.g. sales@company.com).',
        'Managed cloud server, automated backups & 24/7 uptime monitoring.',
      ],
    },
  },
  {
    id: 'faq-03',
    category: 'b2b',
    question: {
      id: 'Berapa estimasi waktu pengerjaan hingga website atau sistem online?',
      en: 'How long does it take to launch our website or software?',
    },
    points: {
      id: [
        'Landing Page: 5–10 hari kerja · Company Profile: 10–14 hari kerja.',
        'Toko Online: 3–6 minggu.',
        'Custom Software & Aplikasi Mobile: 6–16 minggu sesuai ruang lingkup.',
      ],
      en: [
        'Landing Page: 5–10 business days · Company Profile: 10–14 business days.',
        'Online Store: 3–6 weeks.',
        'Custom Software & Mobile Apps: 6–16 weeks based on approved scope.',
      ],
    },
  },
  {
    id: 'faq-04',
    category: 'b2b',
    question: {
      id: 'Apakah HalamanKode menyediakan Quotation, Kontrak/NDA & BAST proyek?',
      en: 'Does HalamanKode provide Quotations, Contracts/NDAs & BAST documents?',
    },
    points: {
      id: [
        'Setiap proyek diawali dokumen Quotation resmi dan ruang lingkup kerja yang disepakati.',
        'Mendukung perjanjian kerahasiaan (NDA), Invoice resmi & Berita Acara Serah Terima (BAST).',
      ],
      en: [
        'Every engagement begins with an official Quotation and clear scope agreement.',
        'Supports project NDAs, official Invoices & formal BAST completion handover.',
      ],
    },
  },
];
