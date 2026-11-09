import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface CopyIconButtonProps {
  value: string;
  label: string;
  copiedLabel: string;
  className?: string;
}

export function CopyIconButton({
  value,
  label,
  copiedLabel,
  className,
}: CopyIconButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      // Clipboard API unavailable in non-secure context
    }
  }

  return (
    <TooltipProvider delayDuration={120}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            onClick={handleCopy}
            aria-label={copied ? copiedLabel : label}
            className={className}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" className="font-mono text-[11px]">
          {copied ? copiedLabel : label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
