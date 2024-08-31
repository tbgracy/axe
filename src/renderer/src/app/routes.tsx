import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Editor from "../screens/Editor";
import Splashscreen from "../screens/Splashscreen";
import DocumentManager from "../screens/DocumentManager";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <Splashscreen />,
  },
  {
    path: "/app",
    element: <Layout />,
    children: [
      {
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
