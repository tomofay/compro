import { COMPANY } from './company';
import { SERVICE_FAQS, SERVICES } from './services';
import {
  getDictionary,
  getLocalizedPath,
  type Locale,
  type PageKey,
} from '@/i18n';

const OG_IMAGE_MAP: Record<PageKey, { path: string; alt: Record<Locale, string> }> = {
  home: {
    path: '/images/showcase-compro.jpg',
    alt: {
      id: 'HalamanKode — Jasa Pembuatan Website Company Profile, Toko Online & Software Bisnis',
      en: 'HalamanKode — Corporate Website, Online Store & Custom Business Software Agency',
    },
  },
  services: {
    path: '/images/showcase-store.jpg',
    alt: {
      id: 'Paket Layanan Website, E-Commerce & Custom Software HalamanKode',
      en: 'Website, E-Commerce & Custom Software Service Packages by HalamanKode',
    },
  },
  portfolio: {
    path: '/images/showcase-software.jpg',
    alt: {
      id: 'Portofolio Sistem Operasional, Toko Online & Website Perusahaan HalamanKode',
      en: 'Portfolio of Enterprise Systems, Online Stores & Corporate Websites by HalamanKode',
    },
  },
  about: {
    path: '/images/about-studio.jpg',
    alt: {
      id: 'Profil Studio Website & Software HalamanKode',
      en: 'HalamanKode Web & Software Studio Profile',
    },
  },
  contact: {
    path: '/images/enterprise-meeting.jpg',
    alt: {
      id: 'Konsultasi Proyek Website & Software Bisnis HalamanKode',
      en: 'Project Consultation for Websites & Business Software with HalamanKode',
    },
  },
};

const NUMERIC_STARTING_PRICES: Record<string, string | undefined> = {
  compro: '2500000',
  landing: '1800000',
  store: '8000000',
};

export function resolveSiteOrigin(site?: URL | string): string {
  if (!site) return COMPANY.domain;
  return new URL(site).origin;
}

export function buildAbsoluteUrl(
  path: string,
  siteOrigin: string = COMPANY.domain
): string {
  return new URL(path, siteOrigin).toString();
}

export function getPageOgImage(
  page: PageKey,
  locale: Locale,
  siteOrigin: string = COMPANY.domain
) {
  const entry = OG_IMAGE_MAP[page];
  return {
    url: buildAbsoluteUrl(entry.path, siteOrigin),
    alt: entry.alt[locale],
    width: '1376',
    height: '768',
  };
}

interface StructuredDataParams {
  locale: Locale;
  currentPage: PageKey;
  title: string;
  description: string;
  canonicalUrl: string;
  siteOrigin?: string;
}

export function buildStructuredData({
  locale,
  currentPage,
  title,
  description,
  canonicalUrl,
  siteOrigin = COMPANY.domain as string,
}: StructuredDataParams) {
  const dict = getDictionary(locale);
  const ogImage = getPageOgImage(currentPage, locale, siteOrigin);
  const orgId = `${siteOrigin}/#organization`;
  const websiteId = `${siteOrigin}/#website`;
  const webpageId = `${canonicalUrl}#webpage`;
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const inLanguage = locale === 'id' ? 'id-ID' : 'en-US';

  const homeUrl = buildAbsoluteUrl(getLocalizedPath(locale, 'home'), siteOrigin);
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: dict.nav.home,
      item: homeUrl,
    },
  ];

  if (currentPage !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: dict.nav[currentPage],
      item: canonicalUrl,
    });
  }

  const graph: Record<string, unknown>[] = [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': orgId,
      name: COMPANY.legalName,
      url: siteOrigin,
      logo: {
        '@type': 'ImageObject',
        url: buildAbsoluteUrl('/apple-touch-icon.png', siteOrigin),
        width: 180,
        height: 180,
      },
      image: buildAbsoluteUrl('/images/showcase-compro.jpg', siteOrigin),
      email: COMPANY.email,
      telephone: COMPANY.whatsappDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Perumahan BDB 2, Jl. Siliwangi 5 Blok ER No. 9, RT 2 / RW 16',
        addressLocality: 'Sukahati',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+62-878-6495-2795',
        email: COMPANY.email,
        availableLanguage: ['Indonesian', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteOrigin,
      name: COMPANY.legalName,
      description: dict.meta.homeDescription,
      inLanguage: ['id-ID', 'en-US'],
      publisher: { '@id': orgId },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: breadcrumbItems,
    },
    {
      '@type': 'WebPage',
      '@id': webpageId,
      url: canonicalUrl,
      name: title,
      description,
      inLanguage,
      isPartOf: { '@id': websiteId },
      about: { '@id': orgId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: ogImage.url,
        width: 1376,
        height: 768,
      },
      breadcrumb: { '@id': breadcrumbId },
    },
  ];

  if (currentPage === 'home' || currentPage === 'services') {
    const servicesPageUrl = buildAbsoluteUrl(
      getLocalizedPath(locale, 'services'),
      siteOrigin
    );

    graph.push({
      '@type': 'OfferCatalog',
      '@id': `${canonicalUrl}#catalog`,
      name:
        locale === 'id'
          ? 'Layanan Website & Software HalamanKode'
          : 'HalamanKode Website & Software Services',
      itemListElement: SERVICES.map((service) => {
        const numericPrice = NUMERIC_STARTING_PRICES[service.id];
        const offer: Record<string, unknown> = {
          '@type': 'Offer',
          url: `${servicesPageUrl}#${service.slug}`,
          availability: 'https://schema.org/InStock',
          description: `${service.startingPrice[locale]} — ${service.hostingPolicy[locale]}`,
        };
        if (numericPrice) {
          offer.price = numericPrice;
          offer.priceCurrency = 'IDR';
        }

        return {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title[locale],
            description: service.tagline[locale],
            serviceType: service.shortLabel[locale],
            provider: { '@id': orgId },
            url: `${servicesPageUrl}#${service.slug}`,
          },
          ...offer,
        };
      }),
    });

    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: SERVICE_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question[locale],
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.points[locale].join(' '),
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
