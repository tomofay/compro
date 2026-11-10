import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface CopyIconButtonProps {
  value: string;
  label: string;
  copiedLabel: string;
  tone?: 'light' | 'dark';
  className?: string;
}

export function CopyIconButton({
  value,
  label,
  copiedLabel,
  tone = 'light',
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
            className={cn(
              'border-slate-200 bg-white shadow-none hover:bg-slate-50',
              tone === 'dark' &&
                'border-slate-700 bg-slate-800/80 text-slate-100 hover:border-slate-600 hover:bg-slate-800 hover:text-white',
              className
            )}
          >
            {copied ? (
              <Check
                className={cn(
                  'h-3.5 w-3.5',
                  tone === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                )}
                aria-hidden="true"
              />
            ) : (
              <Copy
                className={cn(
                  'h-3.5 w-3.5',
                  tone === 'dark' ? 'text-slate-300' : 'text-slate-600'
                )}
                aria-hidden="true"
              />
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
