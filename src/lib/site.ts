export const LOCALES = ['en', 'pt-br'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  'pt-br': 'pt-BR'
};

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  'pt-br': 'pt_BR'
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function withLocale(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized}`;
}
