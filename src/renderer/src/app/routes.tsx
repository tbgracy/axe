import { createHashRouter } from "react-router-dom";

import Layout from "./Layout";
import Editor from "../screens/DocumentEditor";
import RoleChoice from "../screens/RoleChoice";
import Onboarding from "../screens/Onboarding";
import DocumentManager from "../screens/DocumentManager";
import NotImplementedYet from "@renderer/screens/NotImplementedYet";

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
        element: <NotImplementedYet />,
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
        element: <NotImplementedYet />,
      },
    ],
  },
]);

export default router;
