import LightLogo from '@assets/logo_black.png';

export function HomeButton() {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={LightLogo} alt="es-toolkit" className="h-4 w-auto" />
      <div className="text-sm font-normal bg-green-700 text-white rounded-full h-6 px-2 flex items-center justify-center">
        Playground
      </div>
    </a>
  );
}
