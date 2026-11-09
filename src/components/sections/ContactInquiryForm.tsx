import { useEffect, useState, type SyntheticEvent } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MessageSquare,
  RotateCcw,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { COMPANY } from '@/data/company';
import { SERVICES } from '@/data/services';
import { getDictionary, type Locale } from '@/i18n';

interface ContactInquiryFormProps {
  locale: Locale;
}

export function ContactInquiryForm({ locale }: ContactInquiryFormProps) {
  const dict = getDictionary(locale);
  const f = dict.contactPage.form;

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submittedBrief, setSubmittedBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const svcParam = params.get('service');
    if (svcParam) {
      const matched = SERVICES.find(
        (s) => s.categoryKey === svcParam || s.slug === svcParam || s.id === svcParam
      );
      if (matched) {
        setService(matched.title[locale]);
      }
    }
  }, [locale]);

  function buildBriefText() {
    const lines = [
      `Konsultasi Proyek — ${COMPANY.legalName}`,
      ``,
      `${f.nameLabel}: ${name.trim()}`,
      `${f.companyLabel}: ${company.trim() || '-'}`,
      `${f.emailLabel}: ${email.trim()}`,
      `${f.serviceLabel}: ${service}`,
      `${f.budgetLabel}: ${budget || '-'}`,
      ``,
      `${f.notesLabel}:`,
      notes.trim(),
    ];
    return lines.join('\n');
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim() || !emailValid || !service || !notes.trim()) {
      setError(f.validationError);
      return;
    }

    const brief = buildBriefText();

    if (COMPANY.formEndpoint) {
      try {
        setIsSubmitting(true);
        const res = await fetch(COMPANY.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, company, email, service, budget, notes }),
        });
        if (!res.ok) {
          throw new Error('Request failed');
        }
        setSubmittedBrief(brief);
      } catch {
        setSubmittedBrief(brief);
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    setSubmittedBrief(brief);
  }

  async function handleCopyBrief() {
    if (!submittedBrief) return;
    try {
      await navigator.clipboard.writeText(submittedBrief);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable
    }
  }

  function handleReset() {
    setSubmittedBrief('');
    setError('');
    setName('');
    setCompany('');
    setEmail('');
    setService('');
    setBudget('');
    setNotes('');
  }

  const whatsappHref = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    submittedBrief
  )}`;
  const emailSubject = encodeURIComponent(
    `Konsultasi Proyek: ${service} - ${company.trim() || name.trim()}`
  );
  const emailHref = `mailto:${COMPANY.projectsEmail}?subject=${emailSubject}&body=${encodeURIComponent(
    submittedBrief
  )}`;

  return (
    <TooltipProvider delayDuration={120}>
      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/45 p-2 shadow-[0_12px_36px_-16px_rgba(5,150,105,0.16)] sm:p-2.5">
        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-7">
          <div className="border-b border-neutral-100 pb-4">
            <h2 className="font-heading text-lg font-bold text-neutral-900 sm:text-xl">
              {f.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-600">{f.subtitle}</p>
          </div>

          {submittedBrief ? (
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading text-sm font-semibold text-emerald-900">
                    {f.successTitle}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-emerald-800">
                    {f.successDescription}
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl border border-neutral-200/80 bg-neutral-50/70 p-4">
                <div className="mb-2 flex items-center justify-between border-b border-neutral-200 pb-2">
                  <span className="text-xs font-semibold text-neutral-600">
                    {locale === 'id' ? 'Ringkasan Konsultasi Anda' : 'Your Consultation Summary'}
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon-xs"
                        onClick={handleCopyBrief}
                        aria-label={f.copyBriefTooltip}
                        className="rounded-lg bg-white"
                      >
                        {copied ? (
                          <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                        ) : (
                          <Copy className="h-3.5 w-3.5 text-neutral-600" aria-hidden="true" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      {copied ? dict.contactPage.copiedTooltip : f.copyBriefTooltip}
                    </TooltipContent>
                  </Tooltip>
                </div>
                <pre className="overflow-x-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-neutral-800">
                  {submittedBrief}
                </pre>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-lg bg-emerald-600 text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                >
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    <span>{f.sendViaWhatsapp}</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg border-neutral-200/80">
                  <a href={emailHref}>
                    <Mail className="h-4 w-4 text-neutral-600" aria-hidden="true" />
                    <span>{f.sendViaEmail}</span>
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleReset}
                  className="rounded-lg text-neutral-600"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{f.resetForm}</span>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name" className="text-xs font-medium text-neutral-800">
                    {f.nameLabel} <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={f.namePlaceholder}
                    className="rounded-lg bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-company" className="text-xs font-medium text-neutral-800">
                    {f.companyLabel}
                  </Label>
                  <Input
                    id="contact-company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={f.companyPlaceholder}
                    className="rounded-lg bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="text-xs font-medium text-neutral-800">
                  {f.emailLabel} <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.emailPlaceholder}
                  className="rounded-lg bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-service" className="text-xs font-medium text-neutral-800">
                    {f.serviceLabel} <span className="text-red-600">*</span>
                  </Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="contact-service" className="w-full rounded-lg bg-white">
                      <SelectValue placeholder={f.servicePlaceholder} />
                    </SelectTrigger>
                    <SelectContent position="popper" className="rounded-xl bg-white">
                      {SERVICES.map((svc) => (
                        <SelectItem key={svc.id} value={svc.title[locale]}>
                          {svc.title[locale]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-budget" className="text-xs font-medium text-neutral-800">
                    {f.budgetLabel}
                  </Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger id="contact-budget" className="w-full rounded-lg bg-white">
                      <SelectValue placeholder={f.budgetPlaceholder} />
                    </SelectTrigger>
                    <SelectContent position="popper" className="rounded-xl bg-white">
                      {f.budgetOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-notes" className="text-xs font-medium text-neutral-800">
                  {f.notesLabel} <span className="text-red-600">*</span>
                </Label>
                <Textarea
                  id="contact-notes"
                  required
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={f.notesPlaceholder}
                  className="rounded-lg bg-white"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 w-full rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>{isSubmitting ? f.submittingButton : f.submitButton}</span>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}
