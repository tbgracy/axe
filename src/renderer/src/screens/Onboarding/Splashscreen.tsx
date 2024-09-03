import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import Logo from "../../components/Logo";
import Registration from "./Registration";

import { getCurrentUser, selectStatus, selectStep } from "./onboardingSlice";
import { Progress } from "@chakra-ui/react";

export default function Splashscreen() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const nextStep = useAppSelector(selectStep);

  useEffect(() => {
    if (status === "loading" && nextStep === undefined) {
      new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
        dispatch(getCurrentUser());
      });
    }
    return () => {};
  }, [status]);

  if (status === "error") {
    return <p>Une erreur est survenue.</p>;
  }

  if (nextStep === "onboarding") {
    return <Registration />;
  }

  if (nextStep === "home") {
    return <Navigate to="/app/documents" />;
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Logo />
      <h1 className="text-primary">Axe</h1>
      <p className="text-slate-600 text-sm">
        Chargement en cours, veuillez patienter ...{" "}
      </p>
      <div className="absolute bottom-0">
        <Progress isIndeterminate size="sm" className="w-screen" />
      </div>
    </div>
  );
}
