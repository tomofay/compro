import { id } from './id';
import { en } from './en';
import type { Locale } from './routes';
import type { Dictionary } from './types';

export function getDictionary(locale: Locale): Dictionary {
  return locale === 'en' ? en : id;
}

export * from './routes';
export * from './types';

