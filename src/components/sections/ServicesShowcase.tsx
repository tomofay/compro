import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, Clock } from 'lucide-react';
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
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealBlock className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-wider text-indigo-600 uppercase">
              {dict.servicesSection.eyebrow}
            </p>
            <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {dict.servicesSection.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {dict.servicesSection.subtitle}
            </p>
          </div>
          <a
            href={servicesUrl}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium whitespace-nowrap text-indigo-600 transition-colors hover:text-indigo-700"
          >
            <span>{dict.servicesSection.viewAllLink}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </RevealBlock>

        <Tabs value={activeId} onValueChange={setActiveId} className="mt-8">
          <TabsList
            data-showcase="services"
            aria-label={dict.servicesSection.eyebrow}
            className="grid !h-auto w-full grid-cols-2 gap-1 rounded-xl border border-slate-200 bg-white p-1 md:grid-cols-5"
          >
            {SERVICES.map((service) => {
              const isActive = service.id === activeId;
              return (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={cn(
                    'relative flex min-w-0 items-center justify-center gap-2 rounded-lg border-none px-3 py-2.5 text-xs font-medium whitespace-normal transition-colors last:col-span-2 focus-visible:ring-indigo-500 md:last:col-span-1',
                    isActive
                      ? '!bg-transparent font-semibold !text-white !shadow-none'
                      : '!text-slate-600 hover:bg-slate-50 hover:!text-slate-900'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="services-tab-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-indigo-600"
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12"
          >
            <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors duration-200 hover:border-indigo-200 lg:col-span-7">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-1.5 text-indigo-600">
                    <ServiceIcon name={activeService.icon} className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-800">
                    {activeService.idealFor[locale]}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-slate-600 tabular-nums">
                  <Clock className="h-3.5 w-3.5 text-cyan-500" aria-hidden="true" />
                  <span>{activeService.timeline[locale]}</span>
                </span>
              </div>

              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={activeService.image}
                  alt={activeService.title[locale]}
                  width={1376}
                  height={768}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3">
                {activeService.highlights[locale].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white lg:col-span-5">
              <div className="p-6 sm:p-7">
                <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-[1.35rem]">
                  {activeService.title[locale]}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {activeService.tagline[locale]}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-5">
                  {activeService.deliverables[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-slate-700">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-6 sm:px-7 sm:py-5">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <span className="text-xs font-medium text-slate-500">
                      {dict.servicesPage.investmentLabel}
                    </span>
                    <div className="font-mono mt-0.5 text-[1.6rem] font-bold tracking-tight text-slate-900 tabular-nums">
                      {activeService.startingPrice[locale]}
                    </div>
                  </div>
                </div>
                <p className="mt-1.5 text-xs leading-snug text-slate-600">
                  {activeService.hostingPolicy[locale]}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <Button
                    asChild
                    className="flex-1 rounded-lg bg-indigo-600 text-white shadow-none transition-colors duration-150 hover:bg-indigo-700"
                  >
                    <a
                      href={`${contactUrl}?service=${activeService.categoryKey}`}
                      className="whitespace-nowrap"
                    >
                      <span>{dict.servicesSection.inquireServiceLabel}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-lg border-slate-200 bg-white text-slate-900 shadow-none transition-colors duration-150 hover:border-slate-300 hover:bg-slate-50"
                  >
                    <a
                      href={`${servicesUrl}#${activeService.slug}`}
                      className="whitespace-nowrap"
                    >
                      <span>{dict.servicesSection.viewDetailsLabel}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
