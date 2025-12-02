import { buttonVariants } from './ui/button.variants';

export function GitHubLink() {
  return (
    <a
      href="https://github.com/toss/es-toolkit"
      target="_blank"
      rel="noopener"
      className={buttonVariants({ color: 'secondary' })}
    >
      GitHub{/** External Link Icon */}
    </a>
  );
}
