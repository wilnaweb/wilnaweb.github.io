import { DEFAULT_LOCALE, LOCALES, isLocale, type Locale } from './site';

export function withLocalePrefix(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${normalized === '/' ? '/' : normalized}`;
}

export function replaceLocaleInPath(pathname: string, targetLocale: Locale): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.split('/').filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = targetLocale;
    return `/${segments.join('/')}${normalized.endsWith('/') ? '/' : ''}`;
  }

  if (targetLocale === DEFAULT_LOCALE) {
    return `/${targetLocale}/`;
  }

  return `/${targetLocale}${normalized === '/' ? '/' : normalized}`;
}

export function getCurrentLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const candidate = segments[0];

  return candidate && isLocale(candidate) ? candidate : DEFAULT_LOCALE;
}

export function isRouteActive(currentPath: string, locale: Locale, href: string): boolean {
  const target = withLocalePrefix(locale, href).replace(/\/$/, '');
  const current = currentPath.replace(/\/$/, '');

  if (href === '/') {
    return current === `/${locale}`;
  }

  return current === target;
}

export function getAlternateLocale(locale: Locale): Locale {
  return LOCALES.find((candidate) => candidate !== locale) ?? DEFAULT_LOCALE;
}
