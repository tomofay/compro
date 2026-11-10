import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, XCircle } from 'lucide-react';
import { RevealBlock } from '@/components/common/MotionPrimitives';
import { getDictionary, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';

interface PricingComparisonShowcaseProps {
  locale: Locale;
}

type PlanMode = 'managed' | 'ownership';

export function PricingComparisonShowcase({ locale }: PricingComparisonShowcaseProps) {
  const dict = getDictionary(locale);
  const c = dict.comparisonSection;
  const [mode, setMode] = useState<PlanMode>('managed');

  const activeRows = mode === 'managed' ? c.managedRows : c.ownershipRows;

  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealBlock className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold tracking-wider text-indigo-600 uppercase">
            {c.eyebrow}
          </p>
          <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {c.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            {c.subtitle}
          </p>

          <div
            role="tablist"
            data-showcase="comparison"
            aria-label={c.eyebrow}
            className="mx-auto mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1.5"
          >
            {(
              [
                { key: 'managed', label: c.toggleManagedLabel },
                { key: 'ownership', label: c.toggleOwnershipLabel },
              ] as const
            ).map((tab) => {
              const isSelected = mode === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setMode(tab.key)}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-xs font-semibold transition-colors sm:text-sm',
                    isSelected ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="comparison-mode-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-indigo-600"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </RevealBlock>

        <div
          role="table"
          aria-label={c.title}
          className="mt-9 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white md:block"
        >
          <div role="rowgroup">
            <div role="row" className="grid grid-cols-12 border-b border-slate-200">
              <div
                role="columnheader"
                className="col-span-3 bg-slate-50 px-6 py-4 text-xs font-semibold tracking-wider text-slate-700 uppercase"
              >
                {c.columns.parameter}
              </div>
              <div
                role="columnheader"
                className="col-span-5 flex items-center gap-2 border-x border-indigo-600 bg-indigo-600 px-6 py-4 text-xs font-bold tracking-wider text-white uppercase"
              >
                <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <span>{c.columns.halamankode}</span>
              </div>
              <div
                role="columnheader"
                className="col-span-4 bg-slate-50 px-6 py-4 text-xs font-semibold tracking-wider text-slate-600 uppercase"
              >
                {c.columns.alternative}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              role="rowgroup"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.13, ease: 'easeOut' }}
              className="divide-y divide-slate-200"
            >
              {activeRows.map((row) => (
                <div
                  key={row.parameter}
                  role="row"
                  className="grid grid-cols-12 transition-colors hover:bg-slate-50/70"
                >
                  <div
                    role="rowheader"
                    className="col-span-3 px-6 py-4 text-sm font-semibold text-slate-900"
                  >
                    {row.parameter}
                  </div>
                  <div
                    role="cell"
                    className="col-span-5 border-x border-indigo-100 bg-indigo-50/50 px-6 py-4"
                  >
                    <div className="flex items-start gap-2.5 text-sm font-medium text-slate-900">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>{row.halamankode}</span>
                    </div>
                  </div>
                  <div role="cell" className="col-span-4 px-6 py-4">
                    <div className="flex items-start gap-2.5 text-sm text-slate-600">
                      <XCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                        aria-hidden="true"
                      />
                      <span>{row.alternative}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`mobile-${mode}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.13, ease: 'easeOut' }}
            className="mt-7 space-y-3 md:hidden"
          >
            {activeRows.map((row) => (
              <div
                key={row.parameter}
                className="space-y-2.5 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="font-heading text-sm font-bold text-slate-900">
                  {row.parameter}
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-indigo-100 bg-indigo-50/70 p-3 text-xs font-medium text-slate-900">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-[10px] font-bold tracking-wider text-indigo-700 uppercase">
                      {c.columns.halamankode}
                    </div>
                    <p className="mt-0.5 leading-relaxed">{row.halamankode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                  <XCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-red-500"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                      {c.columns.alternative}
                    </div>
                    <p className="mt-0.5 leading-relaxed">{row.alternative}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
