import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingAnimation from "@renderer/components/LoadingAnimation";

import Content from "./components/Content";
import { useAppSelector } from "@renderer/app/hooks";
import axios from "axios";

export default function EditorScreen() {
  const { documentId } = useParams();
  
  const role = useAppSelector((state) => state.role.role);
  const hostUrl = useAppSelector((state) => state.role.hostUrl);

  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState<TextDocument | undefined>();

  useEffect(() => {
    if (isLoading) {
      if (role === "host") {
        window.electron.ipcRenderer
          .invoke("open-document", documentId)
          .then((result: Result<TextDocument>) => {
            setIsLoading(!isLoading);
            if (result.success) {
              setDocument(result.data);
            }
          });
      } else {
        axios.get(`${hostUrl}/documents/${documentId}`).then((response) => {
          setIsLoading(!isLoading);
          if (response.data.success) {
            setDocument(response.data.data);
          }
        });
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation />;
  } else {
    return <Content document={document!} />;
  }
}
