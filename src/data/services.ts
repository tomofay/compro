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
  shortSummary: Record<Locale, string>;
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
      id: 'Mulai Rp 4,5 Juta',
      en: 'From IDR 4.5M',
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
      id: 'Tampil kredibel di hadapan klien korporat dan mitra tender.',
      en: 'Present an authoritative corporate image to enterprise buyers and partners.',
    },
    shortSummary: {
      id: 'Website perusahaan berkecepatan tinggi dengan desain modern, siap multi-bahasa, serta paket terima beres termasuk domain, email bisnis resmi, dan hosting tahun pertama.',
      en: 'High-speed corporate website featuring executive design, bilingual readiness, and turnkey first-year domain, official business email, and hosting.',
    },
    idealFor: {
      id: 'Perusahaan B2B, Manufaktur, Konsultan & Institusi',
      en: 'B2B Enterprises, Manufacturers, Firms & Institutions',
    },
    deliverables: {
      id: [
        'Desain profesional khusus sesuai identitas brand perusahaan',
        'Gratis domain, SSL, hosting & akun email bisnis resmi (sales@perusahaan.com)',
        'Optimasi SEO & kecepatan akses tinggi di desktop maupun ponsel',
        'Integrasi WhatsApp bisnis, Google Maps & formulir penawaran resmi',
      ],
      en: [
        'Bespoke corporate design tailored to your brand guidelines',
        'Free 1st-yr domain, SSL, hosting & business email (e.g. sales@company.com)',
        'Search engine optimization and fast mobile & desktop loading',
        'Business WhatsApp routing, maps, and formal inquiry capture',
      ],
    },
    highlights: {
      id: ['Gratis Hosting & Domain Th. 1', 'Akun Email Bisnis Resmi', 'Perpanjangan Managed Care'],
      en: ['Free 1st-Yr Hosting & Domain', 'Official Business Email', 'Annual Managed Care'],
    },
  },
  {
    id: 'landing',
    slug: 'landing-page',
    icon: 'LayoutTemplate',
    image: '/images/showcase-landing.jpg',
    categoryKey: 'landing',
    startingPrice: {
      id: 'Mulai Rp 2,5 Juta',
      en: 'From IDR 2.5M',
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
      id: 'Ubah pengunjung iklan menjadi calon pelanggan potensial.',
      en: 'Convert paid traffic and product interest into qualified business leads.',
    },
    shortSummary: {
      id: 'Halaman penawaran produk atau layanan yang dirancang fokus pada konversi, kecepatan muat instan, lengkap dengan hosting, domain, dan email bisnis tahun pertama.',
      en: 'Focused campaign page structured for buyer conversion, instant load speed, and turnkey first-year hosting, domain, and business email.',
    },
    idealFor: {
      id: 'Peluncuran Produk, Properti, Layanan Jasa & Acara Bisnis',
      en: 'Product Launches, Real Estate, Services & Corporate Events',
    },
    deliverables: {
      id: [
        'Alur konten persuasif agar calon pembeli langsung paham nilai produk',
        'Gratis domain, SSL, hosting cepat & akun email bisnis (sales@perusahaan.com)',
        'Formulir leads terhubung ke WhatsApp tim penjualan atau CRM',
        'Pemasangan pelacakan konversi Meta Pixel & Google Analytics',
      ],
      en: [
        'Persuasive storytelling flow engineered for immediate buyer clarity',
        'Free 1st-yr domain, SSL, hosting & business email (e.g. sales@company.com)',
        'Lead capture routed directly to sales WhatsApp or CRM',
        'Meta Pixel and Google Analytics conversion event setup',
      ],
    },
    highlights: {
      id: ['Gratis Hosting & Domain Th. 1', 'Akun Email Bisnis Resmi', 'Siap Iklan Google & Meta'],
      en: ['Free 1st-Yr Hosting & Domain', 'Official Business Email', 'Google & Meta Ads Ready'],
    },
  },
  {
    id: 'store',
    slug: 'online-store',
    icon: 'ShoppingBag',
    image: '/images/showcase-store.jpg',
    categoryKey: 'store',
    startingPrice: {
      id: 'Mulai Rp 12 Juta',
      en: 'From IDR 12M',
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
      id: 'Miliki toko resmi sendiri tanpa bergantung pada potongan marketplace.',
      en: 'Own your branded storefront and customer database free from marketplace fees.',
    },
    shortSummary: {
      id: 'Website toko online lengkap dengan katalog produk, pembayaran otomatis QRIS/Virtual Account, ongkos kirim otomatis, serah terima source code penuh, serta gratis hosting, domain & email bisnis tahun pertama.',
      en: 'Complete online storefront with variant catalogs, automated QRIS & Virtual Account checkout, full source code ownership, and free year-one hosting, domain & business email.',
    },
    idealFor: {
      id: 'Brand Retail, Distributor Resmi & Penjualan Direct-to-Consumer',
      en: 'Retail Brands, Distributors & Direct-to-Consumer Businesses',
    },
    deliverables: {
      id: [
        'Katalog produk rapi dengan variasi ukuran, warna, dan promo',
        'Pembayaran otomatis terintegrasi (QRIS, Transfer VA, Kartu Kredit)',
        'Gratis domain, cloud hosting & akun email bisnis resmi (sales@perusahaan.com)',
        'Panel admin pesanan & stok beserta serah terima penuh source code proyek',
      ],
      en: [
        'Organized product catalog with variants, pricing tiers, and promos',
        'Automated local payments (QRIS, Virtual Account, Cards)',
        'Free 1st-yr domain, cloud hosting & official business email (sales@company.com)',
        'Admin order & stock dashboard plus full project source code handover',
      ],
    },
    highlights: {
      id: ['Termasuk Source Code', 'Gratis Hosting & Email Th. 1', 'Integrasi Midtrans / Xendit'],
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
      id: 'Mulai Rp 25 Juta',
      en: 'From IDR 25M',
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
      id: 'Otomatiskan operasional perusahaan dengan sistem yang mengikuti alur kerja Anda.',
      en: 'Automate internal operations with software built around your exact business rules.',
    },
    shortSummary: {
      id: 'Pengembangan aplikasi web internal, portal pelanggan, sistem stok, hingga dashboard eksekutif—sudah termasuk serah terima source code penuh beserta gratis cloud server, domain & email bisnis tahun pertama.',
      en: 'Bespoke web platforms, client portals, inventory workflows, and executive dashboards—delivered with full source code ownership and free first-year cloud, domain & business email.',
    },
    idealFor: {
      id: 'Operasional Perusahaan, Logistik, Keuangan, Klinik & HR',
      en: 'Enterprise Operations, Logistics, Finance, Clinics & HR',
    },
    deliverables: {
      id: [
        'Sistem manajemen data terpusat pengganti spreadsheet manual',
        'Pengaturan hak akses berbeda untuk staf, manajer, dan direksi',
        'Gratis cloud server, domain & akun email bisnis resmi tahun pertama',
        'Pelatihan tim, dokumentasi & serah terima penuh source code aplikasi',
      ],
      en: [
        'Centralized operational platform replacing fragmented spreadsheets',
        'Role-based access permissions across staff, managers, and executives',
        'Free 1st-yr cloud hosting, domain & official business email accounts',
        'Team onboarding training, documentation & full application source code handover',
      ],
    },
    highlights: {
      id: ['Termasuk Source Code', 'Gratis Cloud & Email Th. 1', 'Managed Care / Server Sendiri'],
      en: ['Full Source Code Included', 'Free 1st-Yr Cloud & Email', 'Managed or Self-Hosted'],
    },
  },
  {
    id: 'mobile',
    slug: 'mobile-application',
    icon: 'Smartphone',
    image: '/images/showcase-mobile.jpg',
    categoryKey: 'mobile',
    startingPrice: {
      id: 'Mulai Rp 25 Juta',
      en: 'From IDR 25M',
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
      id: 'Hadirkan layanan di genggaman pelanggan maupun tim lapangan Anda.',
      en: 'Put real-time service and operational workflows in the hands of users and field teams.',
    },
    shortSummary: {
      id: 'Pembuatan aplikasi smartphone Android & iOS yang terhubung real-time ke backend cloud—lengkap dengan serah terima penuh source code aplikasi & API serta gratis cloud, domain & email bisnis tahun pertama.',
      en: 'Cross-platform Android and iOS applications synchronized with a cloud backend—delivered with full app & API source code ownership plus free year-one cloud, domain & business email.',
    },
    idealFor: {
      id: 'Aplikasi Pelanggan, Tim Sales Lapangan & Layanan Member',
      en: 'Customer Engagement, Field Sales Forces & Membership Apps',
    },
    deliverables: {
      id: [
        'Satu pengembangan terpadu untuk rilis di Android dan iOS',
        'Gratis hosting backend API, domain & akun email bisnis (sales@perusahaan.com)',
        'Pencatatan data tim lapangan tetap berjalan saat koneksi terbatas',
        'Pendampingan Play Store/App Store & serah terima penuh source code',
      ],
      en: [
        'Unified build delivered efficiently for both Android and iOS',
        'Free 1st-yr backend API server, domain & official business email',
        'Reliable field data capture even in low-connectivity areas',
        'Play Store & App Store guidance plus full source code handover',
      ],
    },
    highlights: {
      id: ['Termasuk Source Code', 'Gratis Cloud & Email Th. 1', 'Rilis Android & iOS'],
      en: ['Full Source Code Included', 'Free 1st-Yr Cloud & Email', 'Android & iOS Coverage'],
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
      id: 'Gratis Th. 1 · Perpanjangan Managed Care Th. 2+',
      en: 'Free Year 1 · Annual Managed Care Renewal',
    },
    bestFor: {
      id: 'Untuk Website Company Profile dan Landing Page terima beres agar perusahaan cukup fokus pada bisnis.',
      en: 'Turnkey model for Company Profiles and Landing Pages with zero technical management burden.',
    },
    terms: {
      id: [
        'Sudah termasuk gratis domain, SSL, cloud hosting & akun email bisnis (sales@perusahaan.com)',
        'Tahun ke-2+ cukup membayar perpanjangan Managed Care tahunan (server, email, backup & support)',
        'Kode dan infrastruktur dikelola penuh oleh tim kami (tersedia opsi buyout untuk server internal)',
      ],
      en: [
        'Includes free domain, SSL, cloud hosting & business email accounts (e.g. sales@company.com)',
        'From year two onward, simple annual Managed Care renewal covers hosting, email, backups & support',
        'Code and infrastructure managed by our team (optional code buyout available if tenders require it)',
      ],
    },
  },
  {
    title: {
      id: 'Kepemilikan Penuh (Termasuk Source Code)',
      en: 'Full Ownership Delivery (Source Code Included)',
    },
    billingType: {
      id: 'Source Code Penuh · Gratis Cloud Th. 1',
      en: 'Full Source Code · Free Year-1 Cloud',
    },
    bestFor: {
      id: 'Berlaku standar untuk seluruh proyek Toko Online, Custom Software Web, dan Aplikasi Mobile.',
      en: 'Standard package included with all Online Stores, Custom Web Software, and Mobile Apps.',
    },
    terms: {
      id: [
        'Serah terima penuh source code proyek (Git repository) beserta dokumentasi teknis',
        'Tetap mendapatkan gratis cloud hosting, domain & email bisnis resmi di tahun pertama',
        'Tahun ke-2+ bebas lanjut Managed Care tahunan atau migrasi ke server internal Anda',
      ],
      en: [
        'Full project source code (Git repository) handover alongside technical documentation',
        'Includes free first-year cloud hosting, domain & official business email accounts',
        'From year 2+, freely choose annual Managed Care renewal or migrate to your own server',
      ],
    },
  },
  {
    title: {
      id: 'Enterprise Managed Care & Server Internal',
      en: 'Enterprise Managed Care & On-Premise Setup',
    },
    billingType: {
      id: 'Kontrak SLA Tahunan / Instalasi Server Klien',
      en: 'Annual Maintenance SLA / Client Server Setup',
    },
    bestFor: {
      id: 'Untuk korporasi dengan kontrak SLA khusus, instalasi server internal, atau buyout Company Profile.',
      en: 'For organizations needing priority SLA maintenance, on-premise hosting, or corporate website buyout.',
    },
    terms: {
      id: [
        'Bantuan instalasi dan konfigurasi ke server internal (VPS/On-Premise) perusahaan Anda',
        'Pemantauan uptime berkala, backup terjadwal, serta dukungan pembaruan fitur prioritas',
        'Mendukung administrasi B2B lengkap: Penawaran Resmi, PO, NDA & Berita Acara Serah Terima',
      ],
      en: [
        'Full deployment and configuration onto your internal corporate VPS or on-premise server',
        'Scheduled backups, active uptime monitoring, and priority technical support SLA',
        'Complete B2B procurement support covering Quotations, POs, NDAs, and formal BAST',
      ],
    },
  },
];

export interface FaqItem {
  id: string;
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export const SERVICE_FAQS: FaqItem[] = [
  {
    id: 'faq-01',
    question: {
      id: 'Layanan mana saja yang mendapatkan source code penuh dan bagaimana sistem hostingnya?',
      en: 'Which services include full source code handover and how does hosting work?',
    },
    answer: {
      id: 'Untuk Custom Software Web, Aplikasi Mobile Android/iOS, dan Toko Online, Anda langsung mendapatkan serah terima penuh source code proyek sekaligus tetap memperoleh gratis cloud hosting, domain & akun email bisnis tahun pertama. Sementara untuk Website Company Profile dan Landing Page, kami menerapkan paket terima beres (Managed Turnkey) dengan gratis hosting, domain & email tahun ke-1 lalu perpanjangan Managed Care tahunan mulai tahun ke-2 (tersedia pula opsi buyout source code bila dibutuhkan korporasi/tender).',
      en: 'All Custom Web Software, Android/iOS Mobile Apps, and Online Store packages automatically include full project source code handover alongside free first-year cloud hosting, domain, and business email. For Corporate Company Profiles and Landing Pages, we deliver on a hassle-free Managed Turnkey basis with free year-one hosting, domain & email followed by annual Managed Care renewal from year two onward (enterprise code buyout remains available if required).',
    },
  },
  {
    id: 'faq-02',
    question: {
      id: 'Apa saja yang didapatkan di tahun pertama dan perpanjangan Managed Care di tahun ke-2+?',
      en: 'What is included in year one and the annual Managed Care renewal from year two onward?',
    },
    answer: {
      id: 'Fasilitas tahun pertama dan perpanjangan Managed Care tahunan mencakup domain resmi, akun email bisnis sesuai domain perusahaan (misalnya sales@perusahaan.com), server cloud cepat, pembaruan sertifikat keamanan SSL, backup data terjadwal, pemantauan uptime 24/7, serta bantuan teknis.',
      en: 'Both your complimentary first year and annual Managed Care renewal cover official domain registration, branded business email accounts matching your domain (e.g. sales@company.com), high-speed cloud hosting, active SSL security, automated backups, 24/7 uptime monitoring, and technical support.',
    },
  },
  {
    id: 'faq-03',
    question: {
      id: 'Berapa lama waktu pengerjaan hingga website perusahaan siap online?',
      en: 'How long does it take before our corporate website goes live?',
    },
    answer: {
      id: 'Untuk Landing Page berkisar 5–10 hari kerja, Website Company Profile 10–14 hari kerja, Toko Online 3–6 minggu, dan Custom Software disesuaikan dengan kompleksitas alur kerja yang disepakati di proposal.',
      en: 'Landing Pages typically take 5–10 business days, Corporate Company Profiles 10–14 business days, Online Stores 3–6 weeks, and Custom Software timelines are tailored to your approved workflow scope.',
    },
  },
  {
    id: 'faq-04',
    question: {
      id: 'Apakah PT Kirana Informatika Indonesia melayani administrasi B2B seperti PO, NDA, dan faktur resmi?',
      en: 'Does PT Kirana Informatika Indonesia support B2B procurement documents such as PO, NDA, and formal invoices?',
    },
    answer: {
      id: 'Tentu. Sebagai badan hukum perseroan terbatas resmi, kami mendukung pengadaan korporat lengkap dengan penawaran resmi (Quotation), Perjanjian Kerja Sama / NDA, Purchase Order (PO), dan Berita Acara Serah Terima (BAST).',
      en: 'Yes. As an incorporated limited liability company in Indonesia, we support formal corporate procurement including official Quotations, NDAs, Purchase Orders (PO), and Handover Certificates (BAST).',
    },
  },
];
