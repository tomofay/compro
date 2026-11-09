import { cn } from '@/lib/utils';

interface BrandWordmarkProps {
  variant?: 'header' | 'footer' | 'drawer';
  className?: string;
}

export function BrandWordmark({
  variant = 'header',
  className,
}: BrandWordmarkProps) {
  const sizeClass =
    variant === 'footer'
      ? 'text-[22px] sm:text-[24px]'
      : variant === 'drawer'
        ? 'text-[20px]'
        : 'text-[20px] sm:text-[22px]';

  return (
    <span
      className={cn(
        'inline-block whitespace-nowrap leading-none tracking-[-0.04em] [word-spacing:-0.05em] select-none',
        sizeClass,
        className
      )}
    >
      <span className="font-extrabold text-slate-950">Web</span>{' '}
      <span className="font-bold text-emerald-600">Ramah</span>
    </span>
  );
}
