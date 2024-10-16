import {
  Help,
  JoinInner,
  Settings,
  Info,
  ArrowBackIosNew,
} from "@mui/icons-material";
import clsx from "clsx";

import Logo from "../Logo";
import Navlink from "./Navlink";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import Avatar from "../Avatar";
import ExpandButton from "./ExpandButton";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";
import { selectTheme, toggleThemeMode } from "@renderer/app/themeSlice";

type NavbarProps = {
  user?: User;
  onGoBack: () => void;
  onGoToHelp: () => void;
  onGoToSessionManager?: () => void;
  onGoToSettings: () => void;
  onGoToAbout: () => void;
};

export default function Navbar({
  user,
  onGoBack,
  onGoToHelp,
  onGoToSessionManager,
  onGoToSettings,
  onGoToAbout,
}: NavbarProps) {
  const [expanded, setExpanded] = useState<boolean>(true);

  const themeMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const linksData = [
    {
      icon: <ArrowBackIosNew />,
      onClick: onGoBack,
      label: "Retour",
    },
    {
      icon: <Help />,
      current: true,
      onClick: onGoToHelp,
      label: "Aide",
    },
    onGoToSessionManager && {
      icon: <JoinInner />,
      onClick: onGoToSessionManager,
      label: "Gestion de session",
    },
    {
      icon: <Settings />,
      onClick: onGoToSettings,
      label: "Paramètres",
    },
    {
      icon: <Info />,
      onClick: onGoToAbout,
      label: "À propos",
    },
  ];

  function handleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <nav
      className={clsx({
        "bg-darkGrey dark:bg-black h-[100vh] flex flex-col gap-4 relative duration-300":
          true,
        "w-24": !expanded,
        "w-60": expanded,
      })}
    >
      <div className="flex items-center w-[100%] p-4 gap-2">
        <Logo />
        {expanded && <p className="text-white text-xl font-bold">Axe</p>}
        <ExpandButton expanded={expanded} onClick={handleExpansion} />
      </div>
      <ul className="space-y-2">
        {linksData
          .filter((link) => link !== undefined)
          .map((link) => (
            <li key={link!.label}>
              <Navlink
                expanded={expanded}
                icon={link!.icon}
                onClick={link!.onClick}
                current={link!.current}
              >
                {link!.label}
              </Navlink>
            </li>
          ))}
      </ul>
      <div className="flex mt-[auto] items-center flex-col p-4 gap-4">
        <ThemeSwitch
          expanded={expanded}
          mode={themeMode}
          onClick={() => dispatch(toggleThemeMode())}
        />
        <Avatar expanded={expanded} user={user} />
      </div>
    </nav>
  );
}
