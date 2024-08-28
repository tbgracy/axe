import { createBrowserRouter } from "react-router-dom";

import DocumentManager from "../screens/DocumentManager/DocumentManager";
import Editor from "../screens/Editor";
import Layout from "./Layout";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/documents",
        element: <DocumentManager />,
      },
      {
        path: "/documents/:documentId",
        element: <Editor />,
      },
    ],
  },
]);

export default router;
