import type { Locale } from './site';

export interface NavItem {
  href: string;
  label: string;
}

interface LocaleCopy {
  nav: NavItem[];
  footerNav: NavItem[];
  footerChannelsTitle: string;
  footerNavigationTitle: string;
  footerLanguageTitle: string;
  channels: Array<{ href: string; label: string }>;
}

const english: LocaleCopy = {
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/writing', label: 'Writing' },
    { href: '/contact', label: 'Contact' }
  ],
  footerNav: [
    { href: '/about', label: 'About' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/writing', label: 'Writing' },
    { href: '/career', label: 'Career' },
    { href: '/learning', label: 'Learning' },
    { href: '/contact', label: 'Contact' }
  ],
  footerChannelsTitle: 'Channels',
  footerNavigationTitle: 'Navigation',
  footerLanguageTitle: 'Languages',
  channels: [
    { href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://gist.github.com', label: 'Gists' },
    { href: 'https://medium.com', label: 'Medium' }
  ]
};

const portuguese: LocaleCopy = {
  nav: [
    { href: '/', label: 'Início' },
    { href: '/about', label: 'Sobre' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/case-studies', label: 'Estudos de Caso' },
    { href: '/writing', label: 'Artigos' },
    { href: '/contact', label: 'Contato' }
  ],
  footerNav: [
    { href: '/about', label: 'Sobre' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/case-studies', label: 'Estudos de Caso' },
    { href: '/writing', label: 'Artigos' },
    { href: '/career', label: 'Carreira' },
    { href: '/learning', label: 'Aprendizados' },
    { href: '/contact', label: 'Contato' }
  ],
  footerChannelsTitle: 'Canais',
  footerNavigationTitle: 'Navegacao',
  footerLanguageTitle: 'Idiomas',
  channels: [
    { href: 'https://www.linkedin.com', label: 'LinkedIn' },
    { href: 'https://github.com', label: 'GitHub' },
    { href: 'https://gist.github.com', label: 'Gists' },
    { href: 'https://medium.com', label: 'Medium' }
  ]
};

const copyByLocale: Record<Locale, LocaleCopy> = {
  en: english,
  'pt-br': portuguese
};

export function getLocaleCopy(locale: Locale): LocaleCopy {
  return copyByLocale[locale];
}
