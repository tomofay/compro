import type { APIRoute } from 'astro';
import { ROUTES, type PageKey } from '@/i18n';
import { buildAbsoluteUrl, resolveSiteOrigin } from '@/data/seo';

export const prerender = true;

const PRIORITY_BY_PAGE: Record<PageKey, { id: string; en: string; changefreq: string }> = {
  home: { id: '1.0', en: '0.9', changefreq: 'weekly' },
  services: { id: '0.9', en: '0.8', changefreq: 'weekly' },
  portfolio: { id: '0.8', en: '0.7', changefreq: 'monthly' },
  about: { id: '0.7', en: '0.6', changefreq: 'monthly' },
  contact: { id: '0.8', en: '0.7', changefreq: 'monthly' },
};

export const GET: APIRoute = ({ site }) => {
  const origin = resolveSiteOrigin(site);
  const lastmod = new Date().toISOString().split('T')[0];
  const pages = Object.keys(ROUTES.id) as PageKey[];

  const urls: string[] = [];

  for (const page of pages) {
    const idUrl = buildAbsoluteUrl(ROUTES.id[page], origin);
    const enUrl = buildAbsoluteUrl(ROUTES.en[page], origin);
    const meta = PRIORITY_BY_PAGE[page];

    for (const locale of ['id', 'en'] as const) {
      const loc = locale === 'id' ? idUrl : enUrl;
      const priority = meta[locale];

      urls.push(
        `  <url>\n` +
          `    <loc>${loc}</loc>\n` +
          `    <lastmod>${lastmod}</lastmod>\n` +
          `    <changefreq>${meta.changefreq}</changefreq>\n` +
          `    <priority>${priority}</priority>\n` +
          `    <xhtml:link rel="alternate" hreflang="id" href="${idUrl}" />\n` +
          `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />\n` +
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${idUrl}" />\n` +
          `  </url>`
      );
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    `${urls.join('\n')}\n` +
    `</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
