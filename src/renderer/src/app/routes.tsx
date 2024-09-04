import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Editor from "../screens/Editor";
import RoleChoice from "../screens/RoleChoice";
import Onboarding from "../screens/Onboarding";
import DocumentManager from "../screens/DocumentManager";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
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
    ],
  },
]);

export default router;
