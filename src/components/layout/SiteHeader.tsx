import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Globe, Menu } from 'lucide-react';
import { BrandWordmark } from '@/components/common/BrandWordmark';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { COMPANY } from '@/data/company';
import {
  getAlternateLocale,
  getAlternatePath,
  getDictionary,
  getLocalizedPath,
  type Locale,
  type PageKey,
} from '@/i18n';
import { cn } from '@/lib/utils';

interface SiteHeaderProps {
  locale: Locale;
  currentPage?: PageKey;
}

export function SiteHeader({ locale, currentPage }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(locale, currentPage ?? 'home');

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  const navItems: { key: PageKey; label: string; href: string }[] = [
    { key: 'home', label: dict.nav.home, href: getLocalizedPath(locale, 'home') },
    { key: 'services', label: dict.nav.services, href: getLocalizedPath(locale, 'services') },
    { key: 'showcase', label: dict.nav.showcase, href: getLocalizedPath(locale, 'showcase') },
    { key: 'about', label: dict.nav.about, href: getLocalizedPath(locale, 'about') },
    { key: 'contact', label: dict.nav.contact, href: getLocalizedPath(locale, 'contact') },
  ];

  return (
    <TooltipProvider delayDuration={120}>
      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
        <div className="relative mx-auto flex h-15 max-w-6xl items-center justify-between gap-3 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/95 px-4 shadow-[0_6px_24px_-10px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:px-5">
          <a
            href={getLocalizedPath(locale, 'home')}
            aria-label={COMPANY.legalName}
            className="inline-flex items-center rounded-md py-1 text-neutral-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            <BrandWordmark variant="header" />
          </a>

          <nav aria-label="Primary Navigation" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = currentPage === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'bg-emerald-50 font-semibold text-emerald-700'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={altPath}
                  aria-label={dict.nav.switchLanguageLabel}
                  className="inline-flex h-8.5 items-center gap-1.5 rounded-lg border border-neutral-200/80 bg-neutral-50/70 px-2.5 font-mono text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <Globe className="h-3.5 w-3.5 text-neutral-500" aria-hidden="true" />
                  <span className={locale === 'id' ? 'font-bold text-emerald-700' : 'text-neutral-400'}>
                    ID
                  </span>
                  <span className="text-neutral-300">/</span>
                  <span className={locale === 'en' ? 'font-bold text-emerald-700' : 'text-neutral-400'}>
                    EN
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="font-mono text-[11px]">
                {dict.nav.switchLanguageLabel} ({altLocale.toUpperCase()})
              </TooltipContent>
            </Tooltip>

            <Button
              asChild
              size="sm"
              className="group hidden h-9 rounded-lg bg-emerald-600 px-4 text-xs font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md sm:inline-flex"
            >
              <a href={getLocalizedPath(locale, 'contact')}>
                <span>{dict.nav.ctaButton}</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  className="rounded-lg border-neutral-200/80 md:hidden"
                  aria-label={dict.nav.openMenuLabel}
                >
                  <Menu className="h-4 w-4 text-neutral-700" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 border-l border-neutral-200 bg-white p-0">
                <SheetHeader className="border-b border-neutral-200 p-4 text-left">
                  <SheetTitle className="leading-none">
                    <BrandWordmark variant="drawer" />
                  </SheetTitle>
                  <SheetDescription className="text-[11px] font-medium text-neutral-500">
                    {dict.footer.builtNote}
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-1 p-4">
                  {navItems.map((item) => {
                    const isActive = currentPage === item.key;
                    return (
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                          isActive
                            ? 'border-emerald-200 bg-emerald-50 font-semibold text-emerald-700'
                            : 'border-transparent text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                        )}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-auto space-y-3 border-t border-neutral-200 p-4">
                  <Button
                    asChild
                    className="w-full rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <a href={getLocalizedPath(locale, 'contact')}>
                      <span>{dict.nav.ctaButton}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <a
                    href={altPath}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 font-mono text-xs text-neutral-700 hover:bg-neutral-100"
                  >
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{dict.nav.switchLanguageLabel}</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <motion.div
            aria-hidden="true"
            style={{ scaleX: smoothProgress }}
            className="pointer-events-none absolute right-0 bottom-0 left-0 h-[2px] origin-left bg-emerald-500/85"
          />
        </div>
      </header>
    </TooltipProvider>
  );
}
