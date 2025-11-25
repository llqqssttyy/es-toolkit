import { GitHubLink } from '@/components/GitHubLink';
import { GitHubStarButton } from '@/components/GitHubStarButton';
import { HomeButton } from '@/components/HomeButton';
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
          <>
            <h2 className="text-lg font-medium">Live Document</h2>

            <SearchSection />
            <FilterSection />
            <DocumentSection />
          </>
        }
        main={<PlaygroundSection />}
      />
    </>
  );
}

function SearchSection() {
  return <input type="text" placeholder="Search" />;
}

function FilterSection() {
  return <div>FilterSection</div>;
}

function DocumentSection() {
  return <div>DocumentSection</div>;
}

function PlaygroundSection() {
  return (
    <div>
      <CodeEditor />
      <ConsoleOutput />
    </div>
  );
}
