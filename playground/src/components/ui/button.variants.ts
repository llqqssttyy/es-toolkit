import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariant = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

export const buttonSize = {
  sm: 'h-6 rounded-md px-3',
  md: 'h-8 rounded-md px-4',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-8 w-8',
};

export const buttonColor = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  green: 'bg-green-700 text-white hover:bg-green-800',
};

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: buttonVariant,
      size: buttonSize,
      color: buttonColor,
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      color: 'primary',
    },
  }
);

export type ButtonVariant = keyof typeof buttonVariant;
export type ButtonSize = keyof typeof buttonSize;
export type ButtonColor = keyof typeof buttonColor;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
