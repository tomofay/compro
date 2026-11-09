import {
  Building2,
  Code2,
  LayoutTemplate,
  ShoppingBag,
  Smartphone,
} from 'lucide-react';
import type { ServiceIconName } from '@/data/services';

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

export function ServiceIcon({ name, className = 'h-4 w-4' }: ServiceIconProps) {
  switch (name) {
    case 'Building2':
      return <Building2 className={className} aria-hidden="true" />;
    case 'LayoutTemplate':
      return <LayoutTemplate className={className} aria-hidden="true" />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} aria-hidden="true" />;
    case 'Code2':
      return <Code2 className={className} aria-hidden="true" />;
    case 'Smartphone':
      return <Smartphone className={className} aria-hidden="true" />;
  }
}

