import { cn } from '@/lib/utils';

function InputGroupRoot({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex items-center rounded-md border border-input bg-background has-disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

function InputGroupInput({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 flex-1 border-0 bg-transparent px-3 py-1 text-base shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('flex items-center justify-center px-3 py-2 text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function InputGroupAddon({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center px-3 py-2 text-sm font-medium hover:cursor-pointer disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

const InputGroup = Object.assign(InputGroupRoot, {
  Input: InputGroupInput,
  Text: InputGroupText,
  Addon: InputGroupAddon,
});

export { InputGroup };
