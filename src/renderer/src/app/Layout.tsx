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
      navigate("choice");
    } else {
      navigate(-1);
    }
  }

  return (
    <div className="w-[100vw] flex">
      <div className="w-fit">
        <Navbar
          user={user}
          onGoBack={handleGoBack}
          onGoToDocumentManager={() => navigate("documents")}
          onGoToHelp={() => navigate("help")}
          onGoToAbout={() => navigate("about")}
          onGoToSessionManager={() => navigate("session-manager")}
          onGoToSettings={() => navigate("settings")}
        />
      </div>
      <Outlet />
    </div>
  );
}
