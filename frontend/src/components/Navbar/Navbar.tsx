import {
  Help,
  JoinInner,
  Settings,
  Info,
  ArrowBackIosNew,
} from "@mui/icons-material";
import clsx from "clsx";

import Logo from "../Logo";
import Navlink from "../Navlink";
import ThemeSwitch from "../ThemeSwitch";
import { useState } from "react";
import Avatar from "../Avatar";
import ExpandButton from "./ExpandButton";
import { User } from "../../types/user";

type ThemeMode = "dark" | "light";

export default function Navbar({ user }: { user?: User }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [expanded, setExpanded] = useState<boolean>(true);
  const linksData = [
    {
      icon: <ArrowBackIosNew />,
      target: "#",
      label: "Retour",
    },
    {
      icon: <Help />,
      current: true,
      target: "#",
      label: "Aide",
    },
    {
      icon: <JoinInner />,
      target: "#",
      label: "Gestion de session",
    },
    {
      icon: <Settings />,
      target: "#",
      label: "Paramètres",
    },
    {
      icon: <Info />,
      target: "#",
      label: "À propos",
    },
  ];

  function handleThemeSwitch() {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }

  function handleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <nav
      className={clsx({
        "bg-[#2c2c2c] h-[100vh] flex flex-col gap-4 relative": true,
        "w-fit": !expanded,
        "w-60": expanded,
      })}
    >
      <div className="flex items-center w-[100%] p-4 gap-2">
        <Logo />
        {expanded && <p className="text-white text-xl font-bold">Axe</p>}
        <ExpandButton expanded={expanded} onClick={handleExpansion} />
      </div>
      <ul className="space-y-2">
        {linksData.map((link) => (
          <li>
            <Navlink
              expanded={expanded}
              icon={link.icon}
              target={link.target}
              current={link.current}
            >
              {link.label}
            </Navlink>
          </li>
        ))}
      </ul>
      <div className="flex mt-[auto] items-center flex-col p-4 gap-4">
        <ThemeSwitch
          expanded={expanded}
          mode={mode}
          onClick={handleThemeSwitch}
        />
        <Avatar expanded={expanded} user={user} />
      </div>
    </nav>
  );
}
