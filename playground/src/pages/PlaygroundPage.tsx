import { SearchIcon } from 'lucide-react';
import { GitHubLink } from '@/components/GitHubLink';
import { GitHubStarButton } from '@/components/GitHubStarButton';
import { HomeButton } from '@/components/HomeButton';
import { Accordion, InputGroup, Tabs } from '@/components/ui';
import { CodeEditor, RunCodeButton } from '@components/CodeEditor';
import { ConsoleOutput } from '@components/ConsoleOutput';
import { GlobalHeader } from '@components/GlobalHeader';
import { MainLayout } from '@layout/MainLayout';

export function PlaygroundPage() {
  return (
    <>
      <GlobalHeader
        left={<HomeButton />}
        right={
          <>
            <GitHubStarButton />
            <GitHubLink />
            <RunCodeButton />
          </>
        }
      />

      <MainLayout
        asideLeft={
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Live Document</h2>

            <SearchSection />
            <DocumentSection />
          </div>
        }
        main={<PlaygroundSection />}
      />
    </>
  );
}

function SearchSection() {
  return (
    <InputGroup>
      <InputGroup.Addon>
        <SearchIcon className="w-4 h-4" />
      </InputGroup.Addon>
      <InputGroup.Input type="text" placeholder="Search" className="pl-0" />
    </InputGroup>
  );
}

function DocumentSection() {
  return (
    <Tabs defaultValue="array">
      <Tabs.List className="w-full flex gap-1 justify-evenly overflow-x-scroll scrollbar-hide">
        <Tabs.Trigger value="array">Array</Tabs.Trigger>
        <Tabs.Trigger value="compat">Compat</Tabs.Trigger>
        <Tabs.Trigger value="error">Error</Tabs.Trigger>
        <Tabs.Trigger value="function">Function</Tabs.Trigger>
        <Tabs.Trigger value="math">Math</Tabs.Trigger>
        <Tabs.Trigger value="object">Object</Tabs.Trigger>
        <Tabs.Trigger value="predicate">Predicate</Tabs.Trigger>
        <Tabs.Trigger value="promise">Promise</Tabs.Trigger>
        <Tabs.Trigger value="string">String</Tabs.Trigger>
        <Tabs.Trigger value="util">Util</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="array">
        <Accordion type="multiple">
          <Accordion.Item value="at">
            <Accordion.Trigger className="font-semibold text-2xl text-neutral-900">at</Accordion.Trigger>
            <Accordion.Content>at Content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="chunk">
            <Accordion.Trigger className="font-semibold text-2xl  text-neutral-900">chunk</Accordion.Trigger>
            <Accordion.Content>chunk Content</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </Tabs.Content>
      <Tabs.Content value="compat">Compat</Tabs.Content>
      <Tabs.Content value="error">Error</Tabs.Content>
      <Tabs.Content value="function">Function</Tabs.Content>
      <Tabs.Content value="math">Math</Tabs.Content>
      <Tabs.Content value="object">Object</Tabs.Content>
      <Tabs.Content value="predicate">Predicate</Tabs.Content>
      <Tabs.Content value="promise">Promise</Tabs.Content>
      <Tabs.Content value="string">String</Tabs.Content>
      <Tabs.Content value="util">Util</Tabs.Content>
    </Tabs>
  );
}

function PlaygroundSection() {
  return (
    <div>
      <CodeEditor />
      <ConsoleOutput />
    </div>
  );
}
