import { useEffect, useState } from "react";
import Button from "../../components/Button";
import DocumentCard from "../../components/DocumentCard";
import InviteButton from "../../components/InviteButton";
import Searchbar from "../../components/Searchbar";
import { fetchDocuments } from "./data";
import LoadingAnimation from "../../components/LoadingAnimation";

import noDocPlaceholder from "./add_files.svg";

type Status = "fetching" | "idle" | "error";

type DocumentManagerState = {
  status: Status;
  documents: TextDocument[];
  message?: string;
};

function Content({
  documents,
  status,
}: {
  documents: TextDocument[];
  status: Status;
}) {
  if (status === "fetching") {
    return (
      <div className="absolute inset-0 top-[35%]">
        <LoadingAnimation />
      </div>
    );
  }

  if (status === "idle") {
    const isEmpty = documents.length === 0;

    if (isEmpty) {
      return (
        <div className="h-[70vh] flex flex-col items-center justify-center select-none">
          <img src={noDocPlaceholder} alt="" className="h-[15rem]" />
          <p className="w-[20rem] text-center">
            Aucun document, veuillez cliquer sur l'un des bouttons ci-dessous
            pour en ajouter 😁.
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap gap-4 justify-center w-[90%] ml-auto mr-auto mb-24">
          {documents !== undefined &&
            documents.map((d) => (
              <DocumentCard
                document={d}
                onOpen={() => {}}
                onShare={() => {}}
                onDelete={() => {}}
              />
            ))}
        </div>
      );
    }
  }
  return;
}

export default function DocumentManager() {
  const [state, setState] = useState<DocumentManagerState>({
    status: "fetching",
    documents: [],
  });

  const disableControls = state.status !== "idle";

  useEffect(() => {
    if (state.status === "fetching") {
      fetchDocuments().then((documents) => {
        setState({
          ...state,
          status: "idle",
          documents,
        });
      });
    }

    return () => {};
  }, [state]);

  function handleSearch(keyword: string) {}

  function handleInvitation() {}

  function handleImport() {}

  function handleCreate() {}

  function handleDelete(documentId: string) {}
  function handleShare(documentId: string) {}
  function handleOpen(documentId: string) {}

  if (state.status === "error") {
    alert("Une erreur est survenu.");
  }

  return (
    <div className="h-[100vh] flex-grow relative bg-white">
      <div className="h-[100vh] overflow-y-scroll">
        <div className="flex gap-2 items-center ml-auto mr-auto mb-4 w-[90%]">
          <Searchbar disabled={disableControls} onTyping={handleSearch} />
          <InviteButton onClick={handleInvitation} />
        </div>
        <Content status={state.status} documents={state.documents} />
      </div>
      <div className="flex gap-4 w-fit ml-auto absolute z-10 right-4 bottom-4">
        <Button
          disabled={disableControls}
          onClick={handleImport}
          primary={false}
        >
          Importer un document (docx/odt)
        </Button>
        <Button disabled={disableControls} onClick={handleCreate}>
          Créer un nouveau document
        </Button>
      </div>
    </div>
  );
}
