import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceIcon } from '@/components/icons/ServiceIcon';
import { SERVICES } from '@/data/services';
import { getLocalizedPath, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';

interface HeroShowcaseProps {
  locale: Locale;
  caption: string;
}

const CARD_MOTION_PRESETS = [
  { tiltClass: '-rotate-2 translate-y-2', duration: '3.7s', delay: '0s' },
  { tiltClass: 'rotate-1.5 -translate-y-1', duration: '3.4s', delay: '0.45s' },
  { tiltClass: '-rotate-1 translate-y-1', duration: '3.8s', delay: '0.85s' },
  { tiltClass: 'rotate-2 -translate-y-1.5', duration: '3.3s', delay: '0.25s' },
  { tiltClass: '-rotate-1.5 translate-y-2', duration: '4.0s', delay: '0.65s' },
] as const;

export function HeroShowcase({ locale, caption }: HeroShowcaseProps) {
  const servicesUrl = getLocalizedPath(locale, 'services');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
      className="mt-10 sm:mt-14"
    >
      <div className="group/marquee relative mx-auto w-full max-w-[1600px] overflow-hidden py-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FAFAFA] to-transparent sm:w-24"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FAFAFA] to-transparent sm:w-24"
        />

        <div className="animate-marquee-track">
          {[0, 1].map((trackIndex) => {
            const isDuplicate = trackIndex === 1;
            return (
              <div
                key={trackIndex}
                aria-hidden={isDuplicate || undefined}
                className="flex shrink-0 items-center gap-5 pr-5"
              >
                {SERVICES.map((service, idx) => {
                  const preset =
                    CARD_MOTION_PRESETS[idx] ?? CARD_MOTION_PRESETS[0];

                  return (
                    <div
                      key={`${trackIndex}-${service.id}`}
                      style={{
                        animationDuration: preset.duration,
                        animationDelay: preset.delay,
                      }}
                      className="animate-float-slow w-[248px] shrink-0 sm:w-[276px]"
                    >
                      <a
                        href={`${servicesUrl}#${service.slug}`}
                        tabIndex={isDuplicate ? -1 : undefined}
                        className={cn(
                          'group block overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_12px_28px_-14px_rgba(15,23,42,0.14)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-20 hover:rotate-0 hover:-translate-y-2.5 hover:scale-[1.03] hover:border-emerald-400 hover:shadow-[0_24px_44px_-14px_rgba(5,150,105,0.24)]',
                          preset.tiltClass
                        )}
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden border-b border-neutral-100 bg-neutral-100">
                          <img
                            src={service.image}
                            alt={isDuplicate ? '' : service.title[locale]}
                            width={1376}
                            height={768}
                            loading="eager"
                            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          />
                        </div>

                        <div className="flex items-center justify-between gap-2 px-3.5 py-3">
                          <span className="inline-flex min-w-0 items-center gap-2 text-xs font-semibold whitespace-nowrap text-neutral-900 transition-colors group-hover:text-emerald-700">
                            <span className="shrink-0 rounded-md border border-emerald-100 bg-emerald-50 p-1 text-emerald-700 transition-colors group-hover:border-emerald-500 group-hover:bg-emerald-600 group-hover:text-white">
                              <ServiceIcon name={service.icon} className="h-3.5 w-3.5" />
                            </span>
                            <span className="truncate">{service.shortLabel[locale]}</span>
                          </span>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 shrink-0 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600"
                            aria-hidden="true"
                          />
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-2 text-center text-[11px] font-medium text-neutral-500">
        {caption}
      </p>
    </motion.div>
  );
}
