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
      en: 'Industrial Manufacturing & Engineering',
    },
    title: {
      id: 'Portal Korporat Nusantara Presisi Teknik',
      en: 'Nusantara Presisi Teknik Corporate Website',
    },
    summary: {
      id: 'Website company profile bilingual yang menampilkan kapabilitas pabrik, standar mutu ISO, serta katalog produk B2B untuk mitra pengadaan.',
      en: 'Bilingual corporate website showcasing factory capabilities, ISO quality certifications, and a structured B2B product directory.',
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
    capabilities: ['Bilingual ID / EN', 'SEO Korporat', 'Katalog Produk B2B', 'Formulir Penawaran'],
    deliverables: {
      id: [
        'Website multi-halaman cepat dalam Bahasa Indonesia dan Inggris',
        'Halaman katalog spesifikasi produk dengan pencarian praktis',
        'Formulir permintaan penawaran harga langsung ke tim penjualan',
      ],
      en: [
        'Fast multi-page corporate site in Indonesian and English',
        'Product specification directory with instant filtering',
        'Direct request-for-quotation workflow routed to sales desk',
      ],
    },
    status: {
      id: 'Berjalan di Produksi',
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
      en: 'Sentosa Multi-Warehouse Online Store',
    },
    summary: {
      id: 'Platform e-commerce mandiri dengan checkout otomatis QRIS dan Virtual Account, pengecekan ongkos kirim, dan sinkronisasi stok gudang.',
      en: 'Branded online storefront with automated QRIS and Virtual Account checkout, courier shipping rates, and live warehouse stock sync.',
    },
    solutionType: {
      id: 'Toko Online Kustom',
      en: 'Custom E-Commerce Store',
    },
    metricsLabel: {
      id: 'Kecepatan Proses Checkout',
      en: 'Average Checkout Speed',
    },
    metricsValue: '1.2 Detik',
    capabilities: ['QRIS & Virtual Account', 'Stok Multi-Gudang', 'Ongkos Kirim Otomatis', 'Panel Pesanan'],
    deliverables: {
      id: [
        'Integrasi pembayaran otomatis Midtrans (QRIS, VA, Kartu)',
        'Pembaruan stok produk real-time antar tiga lokasi gudang',
        'Dashboard pengelolaan pesanan, diskon, dan cetak invoice',
      ],
      en: [
        'Automated Midtrans payment gateway (QRIS, VA, Cards)',
        'Real-time inventory synchronization across three warehouse hubs',
        'Order fulfillment, promotions, and automated invoice portal',
      ],
    },
    status: {
      id: 'Berjalan di Produksi',
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
      en: 'Logistics & Fleet Management',
    },
    title: {
      id: 'Sistem Operasional & Dispatch Armada Terpadu',
      en: 'Integrated Fleet Dispatch & Manifest System',
    },
    summary: {
      id: 'Aplikasi web internal untuk pencatatan pengiriman harian, jadwal servis kendaraan, hingga pembuatan tagihan korporat otomatis.',
      en: 'Internal operations portal tracking daily shipment manifests, vehicle maintenance schedules, and automated client billing.',
    },
    solutionType: {
      id: 'Custom Web Software',
      en: 'Custom Operations Software',
    },
    metricsLabel: {
      id: 'Penghematan Waktu Rekap',
      en: 'Admin Reconciliation Saved',
    },
    metricsValue: '68% Lebih Cepat',
    capabilities: ['Hak Akses Multi-Divisi', 'Surat Jalan PDF Otomatis', 'Laporan Keuangan', 'Audit Aktivitas'],
    deliverables: {
      id: [
        'Panel terpisah untuk tim operasional, keuangan, dan manajemen',
        'Cetak otomatis surat jalan dan faktur tagihan bulanan',
        'Riwayat perubahan data lengkap untuk pengawasan audit internal',
      ],
      en: [
        'Role-based dashboards for dispatch, finance, and management',
        'Automated PDF waybill and corporate monthly billing generation',
        'Complete activity audit log for internal compliance tracking',
      ],
    },
    status: {
      id: 'Berjalan di Produksi',
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
      en: 'Cloud Accounting Product Launch Page',
    },
    summary: {
      id: 'Landing page interaktif dilengkapi simulasi biaya paket dan formulir jadwal demo yang langsung terhubung ke tim pemasaran.',
      en: 'Conversion-focused launch page featuring an interactive plan calculator and direct demo booking routed to sales.',
    },
    solutionType: {
      id: 'Landing Page Kampanye',
      en: 'Campaign Landing Page',
    },
    metricsLabel: {
      id: 'Peningkatan Permintaan Demo',
      en: 'Demo Booking Conversion',
    },
    metricsValue: '+34.5% Leads',
    capabilities: ['Kalkulator Paket', 'Integrasi Iklan', 'Pencatatan Leads Otomatis', 'Akses Cepat'],
    deliverables: {
      id: [
        'Simulasi perhitungan biaya langganan berdasarkan jumlah tim',
        'Pelacakan konversi kampanye LinkedIn Ads dan Google Ads',
        'Pengiriman data prospek otomatis ke pipeline penjualan',
      ],
      en: [
        'Interactive pricing estimator tailored by team seat count',
        'Conversion tracking instrumented for LinkedIn and Google Ads',
        'Automated lead forwarding into the sales CRM pipeline',
      ],
    },
    status: {
      id: 'Berjalan di Produksi',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-05',
    category: 'mobile',
    year: '2025',
    image: '/images/showcase-mobile.jpg',
    clientSector: {
      id: 'Distribusi Produk & Tim Lapangan',
      en: 'FMCG Distribution & Field Teams',
    },
    title: {
      id: 'Aplikasi Mobile Pemesanan & Kunjungan Sales',
      en: 'Field Sales Order & Outlet Visit Mobile App',
    },
    summary: {
      id: 'Aplikasi Android dan iOS bagi tim sales lapangan untuk mencatat pesanan toko, bukti kunjungan lokasi, dan sinkronisasi ke kantor pusat.',
      en: 'Android and iOS app enabling field sales teams to submit store orders, log verified visits, and sync with central inventory.',
    },
    solutionType: {
      id: 'Aplikasi Mobile Android & iOS',
      en: 'Android & iOS Mobile App',
    },
    metricsLabel: {
      id: 'Keandalan Sinkronisasi Data',
      en: 'Field Data Sync Rate',
    },
    metricsValue: '99.8% Akurat',
    capabilities: ['Android & iOS', 'Mode Tanpa Sinyal', 'Verifikasi GPS', 'Sinkronisasi Pusat'],
    deliverables: {
      id: [
        'Penyimpanan pesanan otomatis saat berada di area minim sinyal',
        'Bukti kunjungan toko berbasis lokasi dan foto display produk',
        'Terhubung langsung dengan panel pemantauan manajer cabang',
      ],
      en: [
        'Local order queueing when operating in low-signal areas',
        'GPS-verified outlet check-ins and merchandising photo logs',
        'Direct synchronization with regional manager web dashboards',
      ],
    },
    status: {
      id: 'Berjalan di Produksi',
      en: 'Live Production',
    },
  },
  {
    id: 'PRJ-06',
    category: 'software',
    year: '2026',
    image: '/images/showcase-software.jpg',
    clientSector: {
      id: 'Layanan Kesehatan & Klinik Multi-Cabang',
      en: 'Healthcare & Multi-Branch Clinics',
    },
    title: {
      id: 'Portal Reservasi Jadwal & Antrean Klinik',
      en: 'Multi-Branch Clinic Booking & Queue Portal',
    },
    summary: {
      id: 'Sistem web terpusat untuk pendaftaran pasien lintas cabang, pemantauan antrean real-time, serta pengingat jadwal via WhatsApp.',
      en: 'Unified web portal for multi-clinic patient scheduling, live queue tracking, and automated WhatsApp reminders.',
    },
    solutionType: {
      id: 'Portal Layanan Web',
      en: 'Enterprise Web Portal',
    },
    metricsLabel: {
      id: 'Kapasitas Layanan Harian',
      en: 'Daily Booking Capacity',
    },
    metricsValue: '2.400+ Pasien',
    capabilities: ['Multi-Cabang', 'Notifikasi WhatsApp', 'Jadwal Real-Time', 'Laporan Harian'],
    deliverables: {
      id: [
        'Sinkronisasi jadwal praktik dokter di enam cabang klinik',
        'Pesan pengingat nomor antrean dan jam konsultasi otomatis',
        'Rekapitulasi kunjungan harian untuk manajemen operasional',
      ],
      en: [
        'Live physician schedule coordination across six clinic branches',
        'Automated queue number alerts and appointment reminders',
        'Daily operational utilization dashboard for clinic leadership',
      ],
    },
    status: {
      id: 'Studi Arsitektur',
      en: 'Solution Blueprint',
    },
  },
];
