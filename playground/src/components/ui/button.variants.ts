import { cva, type VariantProps } from 'class-variance-authority';

export const buttonSize = {
  sm: 'h-6 rounded-md px-2 [&>i,svg]:w-3 [&>i,svg]:h-3',
  md: 'h-8 rounded-md px-3 [&>i,svg]:w-4 [&>i,svg]:h-4',
  lg: 'h-10 rounded-md px-3 [&>i,svg]:w-5 [&>i,svg]:h-5',
};

export const buttonVariant = {
  solid: 'text-neutral-000',
  white: 'bg-neutral-000',
  outline: 'bg-transparent border',
  ghost: 'bg-transparent md:hover:underline',
  link: 'inline-flex bg-transparent underline',
} as const;

export const buttonColor = {
  primary: '',
  secondary: '',
  green: '',
} as const;

const colorPalettes = {
  primary: {
    solid: 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary',
    outline: 'border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10',
    link: 'text-primary hover:text-primary/80',
    white: 'bg-neutral-000 text-primary hover:bg-neutral-000/90 border-neutral-000',
  },
  secondary: {
    solid: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary',
    outline: 'border-secondary text-secondary hover:bg-secondary/10',
    ghost: 'text-secondary hover:bg-secondary/10',
    link: 'text-secondary hover:text-secondary/80',
    white: 'bg-neutral-000 text-secondary hover:bg-neutral-000/90 border-neutral-000',
  },
  green: {
    solid: 'bg-green-700 text-white hover:bg-green-800 border-green-700',
    outline: 'border-green-700 text-green-700 hover:bg-green-700/10',
    ghost: 'text-green-700 hover:bg-green-700/10',
    link: 'text-green-700 hover:text-green-800',
    white: 'bg-neutral-000 text-green-700 hover:bg-neutral-000/90 border-neutral-000',
  },
} as const;

export type ButtonVariant = keyof typeof buttonVariant;
export type ButtonSize = keyof typeof buttonSize;
export type ButtonColor = keyof typeof buttonColor;

const generateCompoundVariants = (): Array<{
  variant: ButtonVariant;
  color: ButtonColor;
  class: string;
}> => {
  const compounds: Array<{
    variant: ButtonVariant;
    color: ButtonColor;
    class: string;
  }> = [];

  (Object.keys(colorPalettes) as ButtonColor[]).forEach(color => {
    (Object.keys(colorPalettes[color]) as ButtonVariant[]).forEach(variant => {
      compounds.push({
        variant,
        color,
        class: colorPalettes[color][variant],
      });
    });
  });

  return compounds;
};

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer gap-2',
  {
    variants: {
      size: buttonSize,
      color: buttonColor,
      variant: buttonVariant,
    },
    compoundVariants: generateCompoundVariants(),
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      color: 'primary',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
