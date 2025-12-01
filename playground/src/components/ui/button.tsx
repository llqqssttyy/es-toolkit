import * as React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { buttonVariants, type ButtonVariants } from './button.variants';

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'variant' | 'size' | 'color'>,
    ButtonVariants {
  asChild?: boolean;
}

export function Button({ className, variant, size, color, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, color }), className)} {...props} />;
}
