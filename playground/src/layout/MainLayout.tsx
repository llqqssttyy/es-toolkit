import type { ReactNode } from 'react';

interface Props {
  asideLeft: ReactNode;
  main: ReactNode;
}

export function MainLayout({ asideLeft, main }: Props) {
  return (
    <div className="flex w-full h-full">
      <aside className="flex flex-col overflow-y-auto w-[50%] border-r border-gray-200 px-4 py-4">{asideLeft}</aside>
      <main className="flex flex-col w-[50%] px-4 py-4 sticky top-0">{main}</main>
    </div>
  );
}
