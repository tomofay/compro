export type Locale = 'id' | 'en';

export type PageKey = 'home' | 'services' | 'showcase' | 'about' | 'contact';

export const ROUTES: Record<Locale, Record<PageKey, string>> = {
  id: {
    home: '/',
    services: '/layanan/',
    showcase: '/showcase/',
    about: '/tentang/',
    contact: '/kontak/',
  },
  en: {
    home: '/en/',
    services: '/en/services/',
    showcase: '/en/showcase/',
    about: '/en/about/',
    contact: '/en/contact/',
  },
};

export function getLocalizedPath(locale: Locale, page: PageKey): string {
  return ROUTES[locale][page];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'id' ? 'en' : 'id';
}

export function getAlternatePath(locale: Locale, page: PageKey): string {
  return ROUTES[getAlternateLocale(locale)][page];
}
