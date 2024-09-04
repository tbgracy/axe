import { useNavigate } from "react-router-dom";
import { Divider, Progress, useToast } from "@chakra-ui/react";

import Logo from "@renderer/components/Logo";

import ChoiceCard from "./components/ChoiceCard";
import HostLinkModal from "./components/HostLinkModal";

import host from "./assets/host.svg";
import join from "./assets/join.svg";

import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";
import { path as documentManagerPath } from "@renderer/screens/DocumentManager";

import { Role, clearErrorMessage, startServer } from "./roleSlice";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function RoleChoice() {
  const toast = useToast();

  const errorMessage = useAppSelector((state) => state.role.errorMessage);
  const chosenRole = useAppSelector((state) => state.role.role);
  const status = useAppSelector((state) => state.role.status);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: errorMessage,
        status: "error",
        duration: 2000,
        isClosable: true,
        onCloseComplete() {
          dispatch(clearErrorMessage());
        },
      });
    }
  }, [errorMessage]);

  useEffect(() => {
    if (chosenRole) {
      navigate(documentManagerPath);
    }
  }, [chosenRole]);

  const choices = [
    {
      illustration: join,
      cta: "Rejoindre une session",
      description: "Participer à l'élaboration d'un document.",
      onClick: () => handleClick("guest"),
    },
    {
      illustration: host,
      cta: "Héberger une session",
      description:
        "Inviter d'autres utilisateurs à travailler sur un document que vous aviez créé.",
      onClick: () => handleClick("host"),
    },
  ];

  function handleClick(role: Role) {
    if (role === "host") {
      dispatch(startServer());
    } else {
      setIsDialogOpen(true);
    }
  }

  function toggleDialog() {
    setIsDialogOpen(!isDialogOpen);
  }

  return (
    <div
      className={clsx({
        "flex flex-col items-center justify-center text-center h-screen w-screen":
          true,
        "cursor-wait": status === "loading",
      })}
    >
      <HostLinkModal isOpen={isDialogOpen} onClose={toggleDialog} />
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <h1 className="font-sans">
          Bienvenu sur <span className="text-primary">AXE</span>
        </h1>
        <p>
          Votre application préférée de traitement de text <br /> collaboratif
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
      {status === "loading" && (
        <div className="absolute bottom-0 w-screen">
          <Progress size="sm" isIndeterminate />
        </div>
      )}
    </div>
  );
}
