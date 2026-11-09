import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
              {dict.servicesSection.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {dict.servicesSection.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {dict.servicesSection.subtitle}
            </p>
          </div>
          <a
            href={servicesUrl}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <span>{dict.servicesSection.viewAllLink}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8">
          <Tabs value={activeId} onValueChange={setActiveId}>
            <TabsList className="grid !h-auto w-full grid-cols-1 gap-1.5 rounded-md border border-slate-200 bg-slate-50 p-1.5 sm:grid-cols-2 lg:grid-cols-5">
              {SERVICES.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex min-w-0 items-center justify-start gap-2 rounded-sm px-3 py-2 text-left text-xs font-semibold whitespace-normal text-slate-600 data-[state=active]:border data-[state=active]:border-slate-200 data-[state=active]:bg-white data-[state=active]:text-emerald-700 lg:justify-center lg:text-center"
                >
                  <ServiceIcon name={service.icon} className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{service.shortLabel[locale]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-4 overflow-hidden rounded-md border border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="flex items-center justify-center border-b border-slate-200 bg-slate-50 p-4 sm:p-6 lg:col-span-6 lg:border-r lg:border-b-0">
                <div className="aspect-video w-full overflow-hidden rounded-md border border-slate-200 bg-white">
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

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-md border border-emerald-200 bg-emerald-50 p-2 text-emerald-700">
                      <ServiceIcon name={activeService.icon} className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-700">
                      {activeService.idealFor[locale]}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    {activeService.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {activeService.tagline[locale]} {activeService.shortSummary[locale]}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                    {activeService.deliverables[locale].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
                  <div className="grid grid-cols-1 gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 sm:grid-cols-2">
                    <div>
                      <div className="text-[11px] font-medium text-slate-500">
                        {dict.servicesPage.investmentLabel}
                      </div>
                      <div className="font-mono text-sm font-bold text-slate-900 tabular-nums">
                        {activeService.startingPrice[locale]}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-slate-500">
                        {dict.servicesSection.timelinePrefix}
                      </div>
                      <div className="font-mono text-sm font-semibold text-emerald-700 tabular-nums">
                        {activeService.timeline[locale]}
                      </div>
                    </div>
                    <div className="border-t border-slate-200 pt-2 sm:col-span-2">
                      <div className="text-[11px] font-medium text-slate-500">
                        {dict.servicesSection.hostingPrefix}
                      </div>
                      <div className="text-xs font-semibold text-slate-800">
                        {activeService.hostingPolicy[locale]}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      asChild
                      className="bg-emerald-600 text-white hover:bg-emerald-700"
                    >
                      <a href={`${contactUrl}?service=${activeService.categoryKey}`}>
                        <span>{dict.servicesSection.inquireServiceLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`${servicesUrl}#${activeService.slug}`}>
                        <span>{dict.servicesSection.viewDetailsLabel}</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((service) => {
              const isSelected = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveId(service.id)}
                  className={cn(
                    'flex flex-col justify-between rounded-md border p-4 text-left transition-colors',
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/40'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  )}
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      {service.title[locale]}
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-600">
                      {service.tagline[locale]}
                    </p>
                  </div>
                  <div className="mt-3 space-y-1 border-t border-slate-100 pt-2.5 text-[11px]">
                    <div className="font-mono font-semibold text-emerald-700 tabular-nums">
                      {service.startingPrice[locale]}
                    </div>
                    <div className="font-mono text-slate-500 tabular-nums">
                      {service.timeline[locale]}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
