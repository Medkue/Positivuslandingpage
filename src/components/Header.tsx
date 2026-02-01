'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link as IntlLink, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

export function Header() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const search = searchParams.toString() ? `?${searchParams.toString()}` : '';
  const currentPath = `${pathname}${search}`;

  const navLinks = [
    { href: '/#services', label: t('services') },
    { href: '/#process', label: t('faq') },
    { href: '/#testimonials', label: t('testimonials') },
    { href: '/#team', label: t('about') },

  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[100] bg-white shadow-sm py-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <IntlLink href="/">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-2.png" alt={tCommon('siteName')} width={40} height={40} />
            <div className="flex flex-col ">
              <span className="text-[20px] font-bold text-dark leading-tight">{tCommon('euroasia')}</span>
              <span className="text-[20px] font-bold text-dark leading-tight">{tCommon('educationCenter')}</span>
            </div>
          </div>
        </IntlLink>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-600 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-medium">
            <IntlLink href={currentPath} locale="mn" className={`px-4 py-1 rounded-full ${locale === 'mn' ? 'bg-[#f9dc6b] text-black' : 'hover:bg-gray-100'}`}>
              MN
            </IntlLink>
            <span className="text-gray-400">|</span>
            <IntlLink href={currentPath} locale="en" className={`px-4 py-1 rounded-full ${locale === 'en' ? 'bg-[#f9dc6b] text-black' : 'hover:bg-gray-100'}`}>
              EN
            </IntlLink>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
