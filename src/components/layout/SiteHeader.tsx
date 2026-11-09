import { useState } from 'react';
import { ArrowUpRight, Globe, Menu } from 'lucide-react';
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
  currentPage: PageKey;
}

export function SiteHeader({ locale, currentPage }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(locale, currentPage);

  const navItems: { key: PageKey; label: string; href: string }[] = [
    { key: 'home', label: dict.nav.home, href: getLocalizedPath(locale, 'home') },
    { key: 'services', label: dict.nav.services, href: getLocalizedPath(locale, 'services') },
    { key: 'portfolio', label: dict.nav.portfolio, href: getLocalizedPath(locale, 'portfolio') },
    { key: 'about', label: dict.nav.about, href: getLocalizedPath(locale, 'about') },
    { key: 'contact', label: dict.nav.contact, href: getLocalizedPath(locale, 'contact') },
  ];

  return (
    <TooltipProvider delayDuration={120}>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href={getLocalizedPath(locale, 'home')}
            className="flex items-center text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm"
          >
            <span className="text-sm font-bold tracking-tight text-slate-900 sm:hidden">
              {COMPANY.shortName}
            </span>
            <span className="hidden text-sm font-bold tracking-tight text-slate-900 sm:inline">
              {COMPANY.legalName}
            </span>
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
                    'relative px-3 py-1.5 text-sm font-medium transition-colors rounded-sm',
                    isActive
                      ? 'bg-emerald-50/80 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                  <Globe className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                  <span className={locale === 'id' ? 'font-bold text-emerald-700' : 'text-slate-400'}>
                    ID
                  </span>
                  <span className="text-slate-300">/</span>
                  <span className={locale === 'en' ? 'font-bold text-emerald-700' : 'text-slate-400'}>
                    EN
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="font-mono text-[11px]">
                {dict.nav.switchLanguageLabel} ({altLocale.toUpperCase()})
              </TooltipContent>
            </Tooltip>

            <Button asChild size="sm" className="hidden bg-emerald-600 text-white hover:bg-emerald-700 sm:inline-flex">
              <a href={getLocalizedPath(locale, 'contact')}>
                <span>{dict.nav.ctaButton}</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  className="md:hidden"
                  aria-label={dict.nav.openMenuLabel}
                >
                  <Menu className="h-4 w-4 text-slate-700" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 border-l border-slate-200 bg-white p-0">
                <SheetHeader className="border-b border-slate-200 p-4 text-left">
                  <SheetTitle className="text-sm font-bold text-slate-900">
                    {COMPANY.shortName}
                  </SheetTitle>
                  <SheetDescription className="font-mono text-[11px] text-slate-500">
                    {COMPANY.legalName}
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
                          'flex items-center justify-between rounded-md border px-3 py-2.5 text-sm font-medium transition-colors',
                          isActive
                            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                            : 'border-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        )}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
                <div className="mt-auto border-t border-slate-200 p-4 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <a href={getLocalizedPath(locale, 'contact')}>
                      <span>{dict.nav.ctaButton}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <a
                    href={altPath}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs text-slate-700 hover:bg-slate-100"
                  >
                    <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{dict.nav.switchLanguageLabel}</span>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}
