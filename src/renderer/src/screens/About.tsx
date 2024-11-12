import Logo from "@renderer/components/Logo";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-sm w-full h-screen gap-3 dark:bg-darkGrey dark:text-white">
      <div>
        <Logo />
        <h1 className="text-primary">Axe</h1>
      </div>
      <p className="text-base">Éditeur de texte collaboratif "local-first".</p>
      <p>Version : 0.1.0 </p>
      <p>&copy; Tsierenana Botramanagna Gracy - 2024</p>
    </div>
  );
}
