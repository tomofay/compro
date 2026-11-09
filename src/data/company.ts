export const COMPANY = {
  legalName: 'Web Ramah',
  shortName: 'Web Ramah',
  parentCompany: 'PT Kirana Informatika Indonesia',
  establishedYear: '2024',
  domain: 'https://webramah.id',
  email: 'hello@webramah.id',
  projectsEmail: 'projects@webramah.id',
  phoneDisplay: '+62 21 5099 8410',
  whatsappNumber: '6281100008410',
  whatsappDisplay: '+62 811-0000-8410',
  city: {
    id: 'Jakarta Selatan, Indonesia',
    en: 'South Jakarta, Indonesia',
  },
  address: {
    id: 'Gedung Web Ramah Hub Lt. 4, Jl. TB Simatupang Kav. 18, Jakarta Selatan 12430',
    en: 'Web Ramah Hub Building 4th Fl, Jl. TB Simatupang Kav. 18, South Jakarta 12430',
  },
  operatingHours: {
    id: 'Senin - Jumat, 09:00 - 18:00 WIB',
    en: 'Monday - Friday, 09:00 - 18:00 WIB (UTC+7)',
  },
  legalRegistry: [
    {
      code: 'BRAND',
      label: { id: 'Unit Produk Layanan', en: 'Service Product Unit' },
      value: 'Web Ramah',
    },
    {
      code: 'ENTITY',
      label: { id: 'Badan Hukum Induk', en: 'Parent Legal Entity' },
      value: 'PT Kirana Informatika Indonesia (Perseroan Terbatas)',
    },
    {
      code: 'KBLI',
      label: { id: 'Klasifikasi Baku (KBLI)', en: 'Standard Industry Code' },
      value: '62019 - Aktivitas Pemrograman Komputer Lainnya',
    },
    {
      code: 'PROCUREMENT',
      label: { id: 'Kelengkapan Administrasi B2B', en: 'B2B Procurement Readiness' },
      value: 'Quotation, PO, NDA & Berita Acara Serah Terima (BAST)',
    },
  ],
  formEndpoint: '',
} as const;
