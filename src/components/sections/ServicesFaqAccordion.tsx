import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SERVICE_FAQS, type FaqCategory } from '@/data/services';
import type { Locale } from '@/i18n';
import { cn } from '@/lib/utils';

interface ServicesFaqAccordionProps {
  locale: Locale;
}

type FilterKey = 'all' | FaqCategory;

const FAQ_CATEGORIES: Record<Locale, { key: FilterKey; label: string }[]> = {
  id: [
    { key: 'all', label: 'Semua' },
    { key: 'ownership', label: 'Source Code & Aset' },
    { key: 'hosting', label: 'Hosting & Email' },
    { key: 'b2b', label: 'Estimasi & B2B' },
  ],
  en: [
    { key: 'all', label: 'All' },
    { key: 'ownership', label: 'Source Code & Assets' },
    { key: 'hosting', label: 'Hosting & Email' },
    { key: 'b2b', label: 'Timeline & B2B' },
  ],
};

export function ServicesFaqAccordion({ locale }: ServicesFaqAccordionProps) {
  const [category, setCategory] = useState<FilterKey>('all');
  const [openItem, setOpenItem] = useState<string>(SERVICE_FAQS[0]?.id ?? '');

  const categories = FAQ_CATEGORIES[locale];

  const visibleFaqs = useMemo(() => {
    if (category === 'all') return SERVICE_FAQS;
    return SERVICE_FAQS.filter((item) => item.category === category);
  }, [category]);

  function handleSelectCategory(key: FilterKey) {
    setCategory(key);
    const nextList = key === 'all' ? SERVICE_FAQS : SERVICE_FAQS.filter((item) => item.category === key);
    if (nextList.length > 0 && !nextList.some((item) => item.id === openItem)) {
      setOpenItem(nextList[0].id);
    }
  }

  return (
    <div className="space-y-5">
      <div
        role="tablist"
        data-showcase="faq-categories"
        aria-label={locale === 'id' ? 'Kategori Pertanyaan' : 'FAQ Categories'}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {categories.map((cat) => {
          const isSelected = category === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleSelectCategory(cat.key)}
              className={cn(
                'relative rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors duration-150',
                isSelected
                  ? 'border-emerald-600 text-white'
                  : 'border-neutral-200/80 bg-white text-neutral-600 hover:border-emerald-200 hover:text-emerald-700'
              )}
            >
              {isSelected && (
                <motion.span
                  layoutId="faq-category-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-emerald-600 shadow-sm"
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      <Accordion
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
        className="space-y-3"
      >
        {visibleFaqs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white px-5 shadow-sm transition-colors duration-200 data-[state=open]:border-emerald-600 data-[state=open]:bg-emerald-600 data-[state=open]:text-white data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="group/trigger py-4 text-left text-sm font-semibold text-neutral-900 hover:no-underline hover:text-emerald-700 data-[state=open]:text-white data-[state=open]:hover:text-white [&[data-state=open]>svg]:text-white">
              <span className="flex items-start gap-3">
                <span className="mt-0.5 font-mono text-xs text-neutral-400 tabular-nums group-data-[state=open]/trigger:text-emerald-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-heading leading-snug">{faq.question[locale]}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 pl-7">
              <ul className="space-y-2 text-sm text-emerald-50">
                {faq.points[locale].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
