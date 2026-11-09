import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SERVICE_FAQS } from '@/data/services';
import type { Locale } from '@/i18n';

interface ServicesFaqAccordionProps {
  locale: Locale;
}

export function ServicesFaqAccordion({ locale }: ServicesFaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white"
    >
      {SERVICE_FAQS.map((faq, index) => (
        <AccordionItem key={faq.id} value={faq.id} className="border-none px-5">
          <AccordionTrigger className="py-4 text-left text-sm font-semibold text-slate-900 hover:no-underline hover:text-emerald-700">
            <span className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-400 tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{faq.question[locale]}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-4 pl-7 text-sm leading-relaxed text-slate-600">
            {faq.answer[locale]}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

