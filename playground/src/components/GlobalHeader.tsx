import type { ReactNode } from 'react';

interface Props {
  left: ReactNode;
  right: ReactNode;
}

export function GlobalHeader({ left, right }: Props) {
  return (
    <header className="w-full h-12 flex items-center justify-between border-b border-gray-200 px-4">
      <div className="flex items-center gap-4">{left}</div>
      <div className="flex items-center gap-4">{right}</div>
    </header>
  );
}
