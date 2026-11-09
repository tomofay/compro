# Web Ramah — Company Profile Website

Website statis bilingual (**Bahasa Indonesia** `/`, **English** `/en/`) dibangun dengan **Astro**, **React**, **Tailwind CSS v4**, dan **shadcn/ui**.

## Pengembangan Lokal

```bash
npm ci
npm run dev      # Menjalankan dev server lokal
npm run check    # Typecheck Astro, TypeScript, dan TSX
npm run build    # Kompilasi output statis ke ./dist
```

## Menjalankan via Docker (Tanpa Port 80 / 443)

Konfigurasi container sengaja **tidak menggunakan port 80 maupun 443** agar tidak bentrok dengan reverse proxy atau layanan lain di VPS:

- **Port Internal Container (`nginx`):** `8080`
- **Port Eksternal Default Host (`docker-compose.yml`):** `8090`

```bash
docker compose up -d --build
```

Untuk mengganti port eksternal default (`8090`), atur variabel `APP_PORT` (misal di file `.env` pada folder aplikasi di VPS):

```env
APP_PORT=8091
```

## CI/CD Otomatis (GitHub Actions -> VPS)

Workflow pada `.github/workflows/deploy.yml` berjalan otomatis setiap kali ada `push` ke branch `main`:

1. **`ci`:** Menjalankan `npm ci`, `npm run check`, `npm run build`, serta menguji build & respons container Docker secara terisolasi.
2. **`deploy`:** Mengunggah source ke `~/apps/webramah-compro` di VPS menggunakan Repository Secrets (`VPS_IP`, `VPS_USERNAME`, `VPS_KEY`), lalu membangun ulang dan menjalankan container melalui `docker compose up -d --build --remove-orphans` pada port host `8090` (mapping `8090:8080`).

### Contoh Reverse Proxy (Opsional)

Jika di VPS sudah berjalan Nginx/Caddy pada port 80/443 untuk domain resmi, arahkan `proxy_pass` ke port Docker non-80/443 ini:

```nginx
location / {
    proxy_pass http://127.0.0.1:8090;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

