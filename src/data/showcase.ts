import type { Locale } from '@/i18n/routes';

export type ShowcaseCategory =
  | 'compro'
  | 'landing'
  | 'store'
  | 'software'
  | 'mobile';

export type ShowcaseKind = 'client' | 'blueprint';

export interface ShowcaseItem {
  id: string;
  kind: ShowcaseKind;
  category: ShowcaseCategory;
  image: string;
  liveUrl?: string;
  sector: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  solutionType: Record<Locale, string>;
  capabilities: string[];
  deliverables: Record<Locale, string[]>;
  status: Record<Locale, string>;
}

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'PRJ-01',
    kind: 'client',
    category: 'compro',
    image: '/images/project-mbindotama.jpg',
    liveUrl: 'https://mbindotama.com',
    sector: {
      id: 'Supplier Bahan Masakan HORECA & Retail',
      en: 'HORECA & Retail Culinary Supply',
    },
    title: {
      id: 'PT Muda Bangkit Indotama',
      en: 'PT Muda Bangkit Indotama',
    },
    summary: {
      id: 'Website profil perusahaan, katalog produk HORECA, nilai inti & informasi klien aktif.',
      en: 'Corporate profile website featuring HORECA product catalog, company values & client showcase.',
    },
    solutionType: {
      id: 'Company Profile & Katalog',
      en: 'Company Profile & Catalog',
    },
    capabilities: [
      'Katalog Produk HORECA',
      'Profil & Core Values',
      'Lokasi & FAQ',
      'Kontak Cepat',
    ],
    deliverables: {
      id: [
        'Tampilan profil perusahaan dan pengenalan pasokan bahan masakan kering HORECA',
        'Etalase Produk Utama dan daftar Semua Produk terkelompok per kategori',
        'Bagian Core Values, daftar Mitra/Klien, peta lokasi, FAQ, serta kontak langsung',
      ],
      en: [
        'Corporate overview tailored for HORECA and retail dry culinary supply buyers',
        'Featured product showcase and organized product catalog across categories',
        'Core Values section, client highlights, location details, FAQ, and direct contact CTA',
      ],
    },
    status: {
      id: 'Proyek Klien · Live',
      en: 'Live Client Website',
    },
  },
  {
    id: 'PRJ-02',
    kind: 'client',
    category: 'compro',
    image: '/images/project-seikou.jpg',
    liveUrl: 'https://lpkseikoujagorawi.com',
    sector: {
      id: 'Lembaga Pelatihan Kerja & Sending Organization Jepang',
      en: 'Japanese Vocational Training & Sending Organization',
    },
    title: {
      id: 'PT Seikou Jagorawi Indonesia',
      en: 'PT Seikou Jagorawi Indonesia',
    },
    summary: {
      id: 'Portal profil LPK Seikou Jagorawi, program Magang & SSW Jepang, persyaratan & pendaftaran.',
      en: 'Official LPK Seikou Jagorawi portal presenting Japan internship/SSW programs & applicant flow.',
    },
    solutionType: {
      id: 'Portal LPK & Pendaftaran',
      en: 'LPK Portal & Registration',
    },
    capabilities: [
      'Program Magang & SSW',
      'Info Persyaratan',
      'Galeri Kegiatan',
      'Konsultasi & Daftar',
    ],
    deliverables: {
      id: [
        'Profil lembaga PT Seikou Jagorawi Indonesia termasuk visi, misi, dan peran Sending Organization',
        'Rincian program Pelatihan Bahasa Jepang, Magang Jepang, dan Specified Skilled Worker (SSW)',
        'Bagian Informasi & Persyaratan, Galeri, serta tombol Konsultasi & Pendaftaran Online',
      ],
      en: [
        'Institutional profile for LPK Seikou Jagorawi covering vision, mission, and Sending Organization role',
        'Dedicated sections for Japanese language training, internship track, and SSW programs',
        'Applicant requirements, activity gallery, and direct consultation & registration flow',
      ],
    },
    status: {
      id: 'Proyek Klien · Live',
      en: 'Live Client Website',
    },
  },
  {
    id: 'BP-03',
    kind: 'blueprint',
    category: 'landing',
    image: '/images/showcase-landing.jpg',
    sector: {
      id: 'Produk Jasa, Properti & B2B',
      en: 'Services, Property & B2B Offers',
    },
    title: {
      id: 'Blueprint Landing Page Kampanye & Simulasi Paket',
      en: 'Campaign Landing Page & Offer Estimator Blueprint',
    },
    summary: {
      id: 'Struktur halaman penawaran fokus konversi iklan lengkap kalkulator paket & tracking Pixel.',
      en: 'Conversion-focused campaign blueprint featuring interactive plan calculator & ad pixel tracking.',
    },
    solutionType: {
      id: 'Landing Page Kampanye',
      en: 'Campaign Landing Page',
    },
    capabilities: [
      'Struktur Konversi',
      'Meta & Google Pixel',
      'Routing WhatsApp',
      'Siap A/B Copy',
    ],
    deliverables: {
      id: [
        'Hero penawaran terstruktur, daftar nilai utama, FAQ penepis keraguan & CTA responsif',
        'Integrasi peristiwa konversi Meta Pixel, Google Ads & Analytics',
        'Formulir penawaran instan yang meneruskan ringkasan langsung ke WhatsApp / Email tim sales',
      ],
      en: [
        'Conversion-tuned hero offer, key differentiators, objection-handling FAQ & persistent CTAs',
        'Event tracking setup for Meta Pixel, Google Ads & Google Analytics',
        'Lead form routing structured summaries directly to WhatsApp or sales email',
      ],
    },
    status: {
      id: 'Blueprint Solusi',
      en: 'Solution Blueprint',
    },
  },
  {
    id: 'BP-04',
    kind: 'blueprint',
    category: 'store',
    image: '/images/showcase-store.jpg',
    sector: {
      id: 'Retail, Distributor & Brand D2C',
      en: 'Retail, Distributors & D2C Brands',
    },
    title: {
      id: 'Starter Kit Toko Online Multi-Gudang & QRIS',
      en: 'Multi-Warehouse QRIS E-Commerce Starter Kit',
    },
    summary: {
      id: 'Arsitektur toko resmi mandiri dengan varian SKU, pembayaran otomatis & serah terima kode.',
      en: 'Independent online storefront starter kit with SKU variants, automated payments & code handover.',
    },
    solutionType: {
      id: 'Toko Online & E-Commerce',
      en: 'E-Commerce & Online Store',
    },
    capabilities: [
      'QRIS & Virtual Account',
      'Katalog & Varian SKU',
      'Stok Multi-Gudang',
      'Termasuk Source Code',
    ],
    deliverables: {
      id: [
        'Katalog produk bercabang kategori, varian ukuran/harga, kode promo & keranjang belanja',
        'Integrasi payment gateway Midtrans / Xendit untuk checkout QRIS, VA & kartu otomatis',
        'Panel admin manajemen pesanan, status pengiriman, stok & serah terima penuh source code Git',
      ],
      en: [
        'Variant catalog, category filtering, promo codes & streamlined cart checkout',
        'Automated Midtrans / Xendit gateway for QRIS, Virtual Accounts & cards',
        'Admin order & inventory dashboard packaged with full Git source code handover',
      ],
    },
    status: {
      id: 'Starter Kit',
      en: 'Starter Kit',
    },
  },
  {
    id: 'BP-05',
    kind: 'blueprint',
    category: 'software',
    image: '/images/showcase-software.jpg',
    sector: {
      id: 'Logistik, Operasional & Keuangan Internal',
      en: 'Logistics, Operations & Internal Teams',
    },
    title: {
      id: 'Blueprint Sistem Operasional & Dispatch Armada',
      en: 'Operations & Fleet Dispatch System Blueprint',
    },
    summary: {
      id: 'Arsitektur aplikasi web internal untuk monitoring tugas, role akses (RBAC) & ekspor dokumen.',
      en: 'Internal web software blueprint covering workflow tracking, RBAC permissions & PDF document exports.',
    },
    solutionType: {
      id: 'Custom Web Software',
      en: 'Custom Web Software',
    },
    capabilities: [
      'Multi-Role RBAC',
      'Cetak Dokumen PDF',
      'Riwayat Audit Log',
      'Termasuk Source Code',
    ],
    deliverables: {
      id: [
        'Kontrol hak akses terpisah untuk admin operasional, manajer divisi & pimpinan perusahaan',
        'Otomatisasi pembuatan dokumen PDF seperti surat jalan, invoice & rekap laporan berkala',
        'Database relasional PostgreSQL terstruktur disertai log aktivitas perubahan data',
      ],
      en: [
        'Granular role-based access control across operations staff, managers & executives',
        'Automated PDF generation for waybills, invoices & scheduled management reports',
        'Structured PostgreSQL database design with full change audit trails',
      ],
    },
    status: {
      id: 'Blueprint Solusi',
      en: 'Solution Blueprint',
    },
  },
  {
    id: 'BP-06',
    kind: 'blueprint',
    category: 'mobile',
    image: '/images/showcase-mobile.jpg',
    sector: {
      id: 'Distribusi, Kurir & Tim Lapangan',
      en: 'Distribution, Couriers & Field Teams',
    },
    title: {
      id: 'Starter Kit Aplikasi Mobile Tim Lapangan',
      en: 'Field Operations Android & iOS Starter Kit',
    },
    summary: {
      id: 'Fondasi aplikasi Android & iOS untuk order lapangan, mode offline & sinkronisasi server API.',
      en: 'Unified Android & iOS starter architecture with offline queue, GPS check-in & backend API sync.',
    },
    solutionType: {
      id: 'Aplikasi Mobile Android & iOS',
      en: 'Android & iOS Mobile App',
    },
    capabilities: [
      'Android & iOS',
      'Antrean Mode Offline',
      'Check-in GPS',
      'Termasuk Source Code',
    ],
    deliverables: {
      id: [
        'Basis kode tunggal React Native / Flutter untuk rilis ke Google Play Store & Apple App Store',
        'Dukungan penyimpanan antrean offline di perangkat yang otomatis sinkron ke server pusat',
        'Integrasi backend API terotentikasi, unggah foto bukti lapangan & dasbor pantauan admin',
      ],
      en: [
        'Single React Native / Flutter codebase built for Google Play Store and Apple App Store deployment',
        'Local offline queue storage synchronizing seamlessly with backend APIs once online',
        'Authenticated API integration, proof-of-visit photo capture & web admin dashboard',
      ],
    },
    status: {
      id: 'Starter Kit',
      en: 'Starter Kit',
    },
  },
];

