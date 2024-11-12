import { createHashRouter } from "react-router-dom";

import Layout from "./Layout";
import Editor from "../screens/DocumentEditor";
import RoleChoice from "../screens/RoleChoice";
import Onboarding from "../screens/Onboarding";
import DocumentManager from "../screens/DocumentManager";
import NotImplementedYet from "@renderer/screens/NotImplementedYet";
import About from "@renderer/screens/About";
import Help from "@renderer/screens/Help";

const router: ReturnType<typeof createHashRouter> = createHashRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/choice",
    element: <RoleChoice />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "documents",
        element: <DocumentManager />,
      },
      {
        path: "documents/:documentId",
        element: <Editor />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "session-manager",
        element: <NotImplementedYet />,
      },
      {
        path: "settings",
        element: <NotImplementedYet />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
