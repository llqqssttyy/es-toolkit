import LightLogo from '@assets/logo_black.png';

export function HomeButton() {
  return (
    <a href="/">
      <img src={LightLogo} alt="es-toolkit" className="h-4 w-auto" />
    </a>
  );
}
