## 1. ANTI-AI SLOP DESIGN SYSTEM
Hindari gaya visual generik buatan AI yang pasaran (glowing neon gradients, bento-grid tanpa fungsi, glassmorphism berlebihan). Terapkan standar visual SaaS profesional ala Linear, Vercel, dan Stripe:

### A. Layout & Spacing
- Gunakan struktur tata letak yang padat informasi (*data-dense layout*).
- Jaga *spacing* (padding/margin) konsisten menggunakan skala 4px/8px (`p-4`, `p-6`, `gap-3`, `gap-4`).
- Utamakan struktur batas permukaian solid berbasis border tipis 1px (`border border-neutral-800` atau `border-slate-200`) daripada menggunakan *box-shadow* yang tebal dan kabur.

### B. Color & Surface Palette
- Gunakan skema warna netral berkarakter (Dark Mode: Background `#0a0a0a` / `#0f172a`, Card Background `#121212` / `#1e293b`).
- Gunakan 1 warna aksen dominan (misal: Crimson `#dc2626`, Slate Blue `#2563eb`, atau Emerald `#059669`). DILARANG mencampur warna neon cyan, violet-purple glow, atau gradien teks berwarna-warni.

### C. Typography
- Gunakan hirarki bobot tipografi yang tegas: Heading `font-semibold` / `font-bold` (700/800), Body Text `text-neutral-400` / `text-slate-600`.
- Gunakan font *monospace* (`font-mono`) untuk angka statistik, tabel data, timestamp, ID unik, dan nilai mata uang agar rata secara vertikal.

---

## 2. STRICT ICON-ONLY & NO-DECORATION POLICY
Guna menghindari tampilan *childish* atau *cluttered* akibat ornaments visual AI:

- **STRICT ICON UTILITY:** Gunakan ikon HANYA dari pustaka ikon konsisten (`lucide-react` atau `lucide-vue`). DILARANG mencampur SVG acak, emoji unicode, atau pustaka ikon terpisah dalam satu proyek.
- **NO DECORATIVE BADGES:** DILARANG menggunakan floating badges melayang seperti `"✨ Powered by AI"`, `"🚀 New Feature"`, atau *glow effect* dekoratif di belakang ikon yang tidak memiliki aksi fungsional.
- **CLEAN ICON WRAPPER:** Jika ikon diletakkan di dalam tombol atau header card, gunakan pembungkus simpel tanpa efek bersinar (`p-2 rounded-md bg-neutral-800/50 text-neutral-300`).
- **FUNCTIONAL ACTION ICONS:** Tombol tindakan dalam tabel atau list (seperti Edit, Delete, Filter, Refresh, Download) WAJIB menggunakan *icon-only button* bersih dengan *aria-label* yang jelas dan *tooltip*, bukan tombol teks lebar yang memenuhi layar.

## 3. PRODUCTION COPYWRITING & ZERO-PLACEHOLDER POLICY (STRICT)
DILARANG KERAS menyisipkan teks generik, jargon pemanis berlebihan (*marketing fluff*), atau catatan developer ke dalam kode UI/Data:

- **NO GENERIC MARKETING FLUFF:** DILARANG menulis kalimat tidak berguna seperti *"Pendampingan konsultasi digital untuk pertumbuhan bisnis terukur"*, *"Solusi terbaik untuk masa depan digital Anda"*, atau jargon abstrak sejenisnya. Gunakan teks langsung, padat, dan fungsional sesuai konteks fitur.
- **NO DEVELOPER NOTES IN PRODUCTION UI:** DILARANG MENAMPILKAN teks instruksi internal/penjelas di UI seperti *"Catatan: Data NIB dan SK di bawah ini merupakan contoh placeholder yang dapat diperbarui melalui src/data/company.ts"*, *"Lorem ipsum"*, atau komentar penjelas yang seharusnya hanya ada di dokumentasi/code comment.
- **PRODUCTION-READY DATA ONLY:** Jika data legal/legalitas, NIB, SK, atau data perusahaan belum disuplai, tampilkan data riil dari konfigurasi/database tanpa embel-embel kalimat "ini adalah placeholder". Jika data tidak ada, tampilkan *empty state* atau kosongkan dengan bersih.

