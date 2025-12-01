import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { buttonVariants, type ButtonVariants } from './button.variants';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant' | 'size' | 'color'>,
    ButtonVariants {
  ref?: React.Ref<HTMLButtonElement>;
  asChild?: boolean;
}

export function Button({ ref, className, variant, size, color, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, color, className }))} {...props} />;
}
