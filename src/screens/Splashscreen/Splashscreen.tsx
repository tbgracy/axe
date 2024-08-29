import Logo from "../../components/Logo";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Splashscreen() {
  const [status, setStatus] = useState<"initializing" | "done">("initializing");

  useEffect(() => {
    if (status === "initializing") {
      new Promise((r) => setTimeout(r, 2000)).then(() => setStatus("done"));
    }

    return () => {};
  }, [status]);

  if (status === "initializing") {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <Logo />
        <h1 className="text-primary">Axe</h1>
        <p className="absolute bottom-2">Veuillez patienter ... </p>
      </div>
    );
  }

  if (status === "done") {
    return <Navigate to="/app/documents" />;
  }
}
