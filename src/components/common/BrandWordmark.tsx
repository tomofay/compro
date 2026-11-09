import { cn } from '@/lib/utils';

interface BrandWordmarkProps {
  variant?: 'header' | 'footer' | 'drawer';
  tone?: 'light' | 'dark';
  className?: string;
}

export function BrandWordmark({
  variant = 'header',
  tone = 'light',
  className,
}: BrandWordmarkProps) {
  const sizeClass =
    variant === 'footer'
      ? 'text-[22px] sm:text-[26px]'
      : variant === 'drawer'
        ? 'text-[20px]'
        : 'text-[20px] sm:text-[22px]';

  const leadColor = tone === 'dark' ? 'text-white' : 'text-neutral-950';
  const accentColor = tone === 'dark' ? 'text-emerald-400' : 'text-emerald-600';

  return (
    <span
      className={cn(
        'font-heading inline-block whitespace-nowrap leading-none tracking-[-0.04em] [word-spacing:-0.05em] select-none',
        sizeClass,
        className
      )}
    >
      <span className={cn('font-extrabold', leadColor)}>Web</span>{' '}
      <span className={cn('font-bold', accentColor)}>Ramah</span>
    </span>
  );
}
