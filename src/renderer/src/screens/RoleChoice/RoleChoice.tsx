import { Divider } from "@chakra-ui/react";

import Logo from "@renderer/components/Logo";

import ChoiceCard from "./components/ChoiceCard";

import host from "./assets/host.svg";
import join from "./assets/join.svg";

export default function RoleChoice() {
  const choices = [
    {
      illustration: join,
      cta: "Rejoindre une session",
      description: "Participer à l'élaboration d'un document.",
      onClick() {},
    },
    {
      illustration: host,
      cta: "Héberger une session",
      description:
        "Inviter d'autres utilisateurs à travailler sur un document que vous aviez créé.",
      onClick() {},
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <h1 className="font-sans">
          Bienvenu sur <span className="text-primary">AXE</span>
        </h1>
        <p>
          Votre application de traitement de text <br /> collaboratif préféré
          😃.
        </p>
      </div>
      <div className="flex h-full items-center gap-10 justify-center">
        <ChoiceCard
          cta={choices[0].cta}
          description={choices[0].description}
          illustration={choices[0].illustration}
          onClick={choices[0].onClick}
        />
        <div className="h-[30rem]">
          <Divider orientation="vertical" />
        </div>
        <ChoiceCard
          cta={choices[1].cta}
          description={choices[1].description}
          illustration={choices[1].illustration}
          onClick={choices[1].onClick}
        />
      </div>
    </div>
  );
}
