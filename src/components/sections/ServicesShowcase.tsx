import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RevealBlock } from '@/components/common/MotionPrimitives';
import { ServiceIcon } from '@/components/icons/ServiceIcon';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SERVICES } from '@/data/services';
import { getDictionary, getLocalizedPath, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';

interface ServicesShowcaseProps {
  locale: Locale;
}

export function ServicesShowcase({ locale }: ServicesShowcaseProps) {
  const dict = getDictionary(locale);
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const servicesUrl = getLocalizedPath(locale, 'services');
  const contactUrl = getLocalizedPath(locale, 'contact');

  const activeService = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section className="border-t border-neutral-200/80 bg-[#FAFAFA] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealBlock className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
              {dict.servicesSection.eyebrow}
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              {dict.servicesSection.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600 sm:text-base">
              {dict.servicesSection.subtitle}
            </p>
          </div>
          <a
            href={servicesUrl}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
          >
            <span>{dict.servicesSection.viewAllLink}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </RevealBlock>

        <div className="mt-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-600 via-emerald-600 to-emerald-700 p-4 shadow-[0_24px_48px_-16px_rgba(5,150,105,0.28)] sm:p-7">
          <Tabs value={activeId} onValueChange={setActiveId}>
            <TabsList
              data-showcase="services"
              aria-label={dict.servicesSection.eyebrow}
              className="grid !h-auto w-full grid-cols-2 gap-1.5 rounded-2xl border border-white/15 bg-emerald-800/45 p-1.5 sm:grid-cols-3 lg:grid-cols-5"
            >
              {SERVICES.map((service) => {
                const isActive = service.id === activeId;
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className={cn(
                      'relative flex min-w-0 items-center justify-center gap-2 rounded-xl border-none px-3 py-2.5 text-xs font-semibold whitespace-normal transition-colors focus-visible:ring-white',
                      isActive
                        ? '!bg-transparent !text-emerald-800 !shadow-none'
                        : '!text-emerald-50 hover:bg-white/10 hover:!text-white'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="services-tab-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-xl bg-white shadow-sm"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5 truncate">
                      <ServiceIcon name={service.icon} className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{service.shortLabel[locale]}</span>
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/20 bg-white shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="flex items-center justify-center border-b border-neutral-100 bg-neutral-50/70 p-4 sm:p-6 lg:col-span-6 lg:border-r lg:border-b-0">
                  <div className="aspect-video w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-white shadow-sm">
                    <img
                      src={activeService.image}
                      alt={activeService.title[locale]}
                      width={1376}
                      height={768}
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-7 lg:col-span-6">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-1.5 text-emerald-700">
                        <ServiceIcon name={activeService.icon} className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-700">
                        {activeService.idealFor[locale]}
                      </span>
                    </div>

                    <h3 className="font-heading mt-3 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                      {activeService.title[locale]}
                    </h3>
                    <p className="mt-1.5 text-sm text-neutral-600">
                      {activeService.tagline[locale]}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-neutral-100 pt-4">
                      {activeService.deliverables[locale].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 space-y-4 border-t border-neutral-100 pt-4">
                    <div className="grid grid-cols-1 gap-2.5 rounded-xl border border-neutral-200/80 bg-neutral-50/80 px-4 py-3 sm:grid-cols-2">
                      <div>
                        <div className="text-[11px] font-medium text-neutral-500">
                          {dict.servicesPage.investmentLabel}
                        </div>
                        <div className="font-mono text-sm font-bold text-neutral-900 tabular-nums">
                          {activeService.startingPrice[locale]}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-neutral-500">
                          {dict.servicesSection.timelinePrefix}
                        </div>
                        <div className="font-mono text-sm font-semibold text-emerald-700 tabular-nums">
                          {activeService.timeline[locale]}
                        </div>
                      </div>
                      <div className="border-t border-neutral-200/80 pt-2 sm:col-span-2">
                        <div className="text-xs font-semibold text-neutral-800">
                          {activeService.hostingPolicy[locale]}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button
                        asChild
                        className="rounded-lg bg-emerald-600 text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                      >
                        <a href={`${contactUrl}?service=${activeService.categoryKey}`}>
                          <span>{dict.servicesSection.inquireServiceLabel}</span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-lg border-neutral-200/80 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        <a href={`${servicesUrl}#${activeService.slug}`}>
                          <span>{dict.servicesSection.viewDetailsLabel}</span>
                          <ArrowUpRight className="h-4 w-4 text-neutral-500" aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
