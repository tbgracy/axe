import { useEffect, useState } from "react";

import { Content } from "./Content";
import Button from "../../components/Button";
import Searchbar from "../../components/Searchbar";
import InviteButton from "../../components/InviteButton";

import { fetchDocuments } from "./data";
import NewDocumentModal from "./NewDocumentModal";

export type Status = "fetching" | "idle" | "error";

type DocumentManagerState = {
  status: Status;
  message?: string;
  isDialogOpen: boolean;
};

export default function DocumentManager() {
  const [state, setState] = useState<DocumentManagerState>({
    status: "fetching",
    isDialogOpen: false,
  });
  const [documents, setDocuments] = useState<TextDocument[]>([]);

  const disableControls = state.status !== "idle";

  useEffect(() => {
    if (state.status === "fetching") {
      fetchDocuments().then((result) => {
        setDocuments(result.data ?? []);
        setDocuments(result.data ?? []);
        setState({
          ...state,
          status: result.success ? "idle" : "error",
          message: result.message,
        });
      });
    }

    return () => {};
  }, [state]);

  function handleSearch(keyword?: string) {
    console.log(keyword);
  }

  function handleInvitation() {}

  function handleImport() {}

  function toggleDialog() {
    setState({ ...state, isDialogOpen: !state.isDialogOpen });
  }

  async function handleCreate() {
    toggleDialog();
  }

  function handleDelete(documentId: string) {}

  function handleShare(documentId: string) {
    console.log('toggling doc ');
    
    window.electron.ipcRenderer
      .invoke(
        "toggle-share-state",
        documents.find((d) => d.id === documentId) as TextDocument
      )
      .then((result: Result<TextDocument>) => {
        setDocuments(
          documents.map((d) => {
            if (d.id === documentId) {
              return {
                ...d,
                shared: result.data?.shared ?? d.shared,
              };
            }
            return d;
          })
        );
      });
  }
  function handleOpen(documentId: string) {}

  function handleNewDoc(newDoc: TextDocument) {
    setDocuments((prevState) => [...prevState, newDoc]);
  }

  return (
    <div className="h-[100vh] flex-grow relative bg-white">
      <NewDocumentModal
        isOpen={state.isDialogOpen}
        onClose={toggleDialog}
        updateDocuments={handleNewDoc}
      />
      <div className="h-[100vh] overflow-y-scroll">
        <div className="flex gap-2 items-center ml-auto mr-auto mb-4 w-[90%]">
          <Searchbar disabled={disableControls} onChange={handleSearch} />
          <InviteButton onClick={handleInvitation} />
        </div>
        <Content
          status={state.status}
          documents={documents}
          onShare={handleShare}
        />
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
