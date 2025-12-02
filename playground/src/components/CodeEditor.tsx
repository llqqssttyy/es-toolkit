import { Button, Kbd, KbdGroup } from './ui';

export function CodeEditor() {
  return <div>CodeEditor</div>;
}

export function RunCodeButton() {
  return (
    <Button color="green">
      Run{' '}
      <KbdGroup>
        <Kbd className="bg-transparent text-neutral-50">⇧</Kbd>
        <span>+</span>
        <Kbd className="bg-transparent text-neutral-50">&#10550;</Kbd>
      </KbdGroup>
    </Button>
  );
}
