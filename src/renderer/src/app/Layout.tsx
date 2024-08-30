import { useNavigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Layout() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("/");
  }

  function handleGoToHelp() {
    navigate("help");
  }

  return (
    <div className="w-[100vw] flex">
      <div className="w-fit">
        <Navbar
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
