import Logo from "@renderer/components/Logo";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-sm w-full h-screen gap-3 dark:bg-darkGrey dark:text-white">
      <div className="flex flex-col items-center">
        <Logo />
        <h1>
          À propos de <span className="text-primary">Axe</span>
        </h1>
      </div>
      <p className="text-base">Éditeur de texte collaboratif "local-first".</p>
      <p>Version : 0.1.0 </p>
      <p>&copy; 2024 - Tsierenana Botramanagna Gracy</p>
    </div>
  );
}
