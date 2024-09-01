import { useState } from "react";
import { Center, Input } from "@chakra-ui/react";
import { useAppDispatch } from "@renderer/app/hooks";

import Logo from "@renderer/components/Logo";
import Button from "@renderer/components/Button";

import { createUser } from "./onboardingSlice";

export default function Onboarding() {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit() {
    dispatch(
      createUser({
        username: value,
      } as User)
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Logo />
      <h1 className="text-primary">Axe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="w-[30rem] text-center">
          Veuillez saisir votre nom ci-dessous pour pouvoir profiter pleinement
          de l'experience Axe.😁
        </p>
        <Input
          className="border"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Center>
          <Button onClick={handleSubmit}>Enregistrer</Button>
        </Center>
      </form>
    </div>
  );
}
