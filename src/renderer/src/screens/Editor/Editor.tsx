import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoadingAnimation from "@renderer/components/LoadingAnimation";

import Content from "./components/Content";

export default function EditorScreen() {
  const { documentId } = useParams();
  const [document, setDocument] = useState<TextDocument | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      window.electron.ipcRenderer
        .invoke("open-document", documentId)
        .then((result: Result<TextDocument>) => {
          setIsLoading(!isLoading);
          if (result.success) {
            console.log(result.data?.content);
            setDocument(result.data);
          }
        });
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation />;
  } else {
    return <Content document={document!} />;
  }
}
