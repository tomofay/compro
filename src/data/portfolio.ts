import type { Locale } from '@/i18n/routes';

export type PortfolioCategory =
  | 'compro'
  | 'landing'
  | 'store'
  | 'software'
  | 'mobile';

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  year: string;
  image: string;
  clientSector: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  solutionType: Record<Locale, string>;
  metricsLabel: Record<Locale, string>;
  metricsValue: string;
  capabilities: string[];
  deliverables: Record<Locale, string[]>;
  status: Record<Locale, string>;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'PRJ-01',
    category: 'compro',
    year: '2026',
    image: '/images/showcase-compro.jpg',
    clientSector: {
      id: 'Manufaktur & Teknik Industri',
      en: 'Industrial Manufacturing',
    },
    title: {
      id: 'Portal Korporat Nusantara Presisi Teknik',
      en: 'Nusantara Presisi Teknik Website',
    },
    summary: {
      id: 'Company profile bilingual, katalog B2B & form RFQ.',
      en: 'Bilingual corporate profile, B2B catalog & RFQ form.',
    },
    solutionType: {
      id: 'Company Profile Bilingual',
      en: 'Bilingual Company Profile',
    },
    metricsLabel: {
      id: 'Skor Kecepatan Halaman',
      en: 'Page Speed Benchmark',
    },
    metricsValue: '99 / 100',
    capabilities: ['Bilingual ID / EN', 'SEO Korporat', 'Katalog B2B', 'Form Penawaran'],
    deliverables: {
      id: [
        'Website cepat dalam Bahasa Indonesia dan Inggris',
        'Katalog spesifikasi produk dengan filter instan',
        'Form penawaran langsung ke tim penjualan',
      ],
      en: [
        'Fast corporate website in Indonesian and English',
        'Searchable B2B product specification directory',
        'Direct RFQ lead routing to sales team',
      ],
    },
    status: {
      id: 'Produksi Aktif',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-02',
    category: 'store',
    year: '2026',
    image: '/images/showcase-store.jpg',
    clientSector: {
      id: 'Retail & Produk Konsumen',
      en: 'Direct-to-Consumer Retail',
    },
    title: {
      id: 'Toko Online Multi-Gudang Sentosa Commerce',
      en: 'Sentosa Multi-Warehouse Store',
    },
    summary: {
      id: 'Checkout QRIS/VA otomatis & sinkronisasi stok 3 gudang.',
      en: 'Automated QRIS/VA checkout & 3-warehouse stock sync.',
    },
    solutionType: {
      id: 'Toko Online Kustom',
      en: 'Custom E-Commerce Store',
    },
    metricsLabel: {
      id: 'Kecepatan Checkout',
      en: 'Average Checkout',
    },
    metricsValue: '1.2 Detik',
    capabilities: ['QRIS & Virtual Account', 'Stok Multi-Gudang', 'Cek Ongkir', 'Admin Pesanan'],
    deliverables: {
      id: [
        'Integrasi payment gateway Midtrans (QRIS, VA, Kartu)',
        'Sinkronisasi stok real-time lintas 3 lokasi gudang',
        'Dashboard pesanan, diskon & cetak invoice otomatis',
      ],
      en: [
        'Automated Midtrans payments (QRIS, VA, Cards)',
        'Live inventory sync across three warehouse hubs',
        'Order dashboard, promos & automated invoices',
      ],
    },
    status: {
      id: 'Produksi Aktif',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-03',
    category: 'software',
    year: '2025',
    image: '/images/showcase-software.jpg',
    clientSector: {
      id: 'Logistik & Manajemen Armada',
      en: 'Logistics & Fleet Ops',
    },
    title: {
      id: 'Sistem Operasional & Dispatch Armada Terpadu',
      en: 'Fleet Dispatch & Manifest System',
    },
    summary: {
      id: 'Tracking pengiriman, servis armada & faktur tagihan otomatis.',
      en: 'Shipment dispatch tracking, fleet maintenance & auto billing.',
    },
    solutionType: {
      id: 'Custom Web Software',
      en: 'Custom Operations Software',
    },
    metricsLabel: {
      id: 'Efisiensi Rekap Admin',
      en: 'Admin Reconciliation',
    },
    metricsValue: '68% Lebih Cepat',
    capabilities: ['Multi-Divisi RBAC', 'Surat Jalan PDF', 'Tagihan Otomatis', 'Log Audit'],
    deliverables: {
      id: [
        'Hak akses terpisah operasional, keuangan & direksi',
        'Cetak otomatis surat jalan PDF & tagihan bulanan',
        'Log riwayat perubahan data untuk audit internal',
      ],
      en: [
        'Role-based views for dispatch, finance & directors',
        'Automated PDF waybill and monthly corporate billing',
        'Full activity audit trail for internal compliance',
      ],
    },
    status: {
      id: 'Produksi Aktif',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-04',
    category: 'landing',
    year: '2026',
    image: '/images/showcase-landing.jpg',
    clientSector: {
      id: 'Teknologi & Layanan B2B',
      en: 'Technology & B2B Services',
    },
    title: {
      id: 'Halaman Peluncuran Platform Akuntansi Cloud',
      en: 'Cloud Accounting Launch Page',
    },
    summary: {
      id: 'Simulasi biaya paket & booking jadwal demo otomatis.',
      en: 'Interactive pricing calculator & direct demo booking.',
    },
    solutionType: {
      id: 'Landing Page Kampanye',
      en: 'Campaign Landing Page',
    },
    metricsLabel: {
      id: 'Kenaikan Permintaan Demo',
      en: 'Demo Leads Growth',
    },
    metricsValue: '+34.5% Leads',
    capabilities: ['Kalkulator Paket', 'Pelacakan Iklan', 'Form CRM', 'Akses Instan'],
    deliverables: {
      id: [
        'Simulasi biaya langganan interaktif per jumlah tim',
        'Integrasi konversi LinkedIn Ads & Google Ads',
        'Pengiriman data prospek otomatis ke pipeline sales',
      ],
      en: [
        'Interactive seat-based pricing estimator widget',
        'LinkedIn & Google Ads conversion tracking setup',
        'Automated lead routing to sales CRM pipeline',
      ],
    },
    status: {
      id: 'Produksi Aktif',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-05',
    category: 'mobile',
    year: '2025',
    image: '/images/showcase-mobile.jpg',
    clientSector: {
      id: 'Distribusi & Tim Lapangan',
      en: 'FMCG Field Sales',
    },
    title: {
      id: 'Aplikasi Mobile Pemesanan & Kunjungan Sales',
      en: 'Field Sales & Outlet Mobile App',
    },
    summary: {
      id: 'Order toko offline-first, check-in GPS & sinkronisasi pusat.',
      en: 'Offline-first store orders, GPS check-in & cloud sync.',
    },
    solutionType: {
      id: 'Aplikasi Mobile Android & iOS',
      en: 'Android & iOS Mobile App',
    },
    metricsLabel: {
      id: 'Keandalan Sinkronisasi',
      en: 'Field Sync Rate',
    },
    metricsValue: '99.8% Akurat',
    capabilities: ['Android & iOS', 'Mode Offline', 'Check-in GPS', 'Sync Gudang'],
    deliverables: {
      id: [
        'Antrean order offline otomatis tersinkron saat ada sinyal',
        'Bukti kunjungan outlet berbasis GPS & foto rak produk',
        'Terhubung langsung ke dashboard manajer cabang',
      ],
      en: [
        'Offline order queue with automatic cloud resync',
        'GPS-verified outlet visits & display photo logs',
        'Connected to regional manager web dashboards',
      ],
    },
    status: {
      id: 'Produksi Aktif',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-06',
    category: 'software',
    year: '2026',
    image: '/images/showcase-software.jpg',
    clientSector: {
      id: 'Layanan Kesehatan Multi-Cabang',
      en: 'Multi-Branch Clinics',
    },
    title: {
      id: 'Portal Reservasi Jadwal & Antrean Klinik',
      en: 'Clinic Booking & Queue Portal',
    },
    summary: {
      id: 'Pendaftaran pasien multi-cabang & pengingat antrean WhatsApp.',
      en: 'Multi-clinic booking & automated WhatsApp queue alerts.',
    },
    solutionType: {
      id: 'Portal Layanan Web',
      en: 'Enterprise Web Portal',
    },
    metricsLabel: {
      id: 'Kapasitas Layanan Harian',
      en: 'Daily Bookings',
    },
    metricsValue: '2.400+ Pasien',
    capabilities: ['Multi-Cabang', 'Notifikasi WhatsApp', 'Antrean Live', 'Laporan Harian'],
    deliverables: {
      id: [
        'Koordinasi jadwal dokter lintas enam cabang klinik',
        'Notifikasi antrean & jam konsultasi via WhatsApp',
        'Rekapitulasi kunjungan harian untuk manajemen',
      ],
      en: [
        'Physician schedule sync across six clinic branches',
        'Automated WhatsApp queue alerts & reminders',
        'Daily operational utilization analytics',
      ],
    },
    status: {
      id: 'Studi Arsitektur',
      en: 'Solution Blueprint',
    },
  },
];
