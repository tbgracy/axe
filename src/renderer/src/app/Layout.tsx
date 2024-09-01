import { useNavigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useAppSelector } from "./hooks";

export default function Layout() {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.onboarding.user);

  function handleGoBack() {
    navigate(-1);
  }

  function handleGoToHelp() {
    navigate("help");
  }

  return (
    <div className="w-[100vw] flex">
      <div className="w-fit">
        <Navbar
          user={user}
          themeMode="dark"
          onGoBack={handleGoBack}
          onGoToHelp={handleGoToHelp}
          onGoToAbout={handleGoBack}
          onGoToSessionManager={handleGoBack}
          onGoToSettings={handleGoBack}
          onSwitchTheme={() => {}}
        />
      </div>
      <Outlet />
    </div>
  );
}
