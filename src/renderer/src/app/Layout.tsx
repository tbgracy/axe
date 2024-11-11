import { useNavigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "./hooks";
import { resetRole } from "@renderer/screens/RoleChoice/roleSlice";

export default function Layout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.onboarding.user);

  function handleGoBack() {
    if (window.location.href.endsWith("documents")) {
      dispatch(resetRole());
    }
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
          onGoBack={handleGoBack}
          onGoToHelp={handleGoToHelp}
          onGoToAbout={handleGoBack}
          onGoToSessionManager={handleGoBack}
          onGoToSettings={handleGoBack}
        />
      </div>
      <Outlet />
    </div>
  );
}
