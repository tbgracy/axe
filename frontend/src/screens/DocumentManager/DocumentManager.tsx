import { useAppSelector } from "../../app/reduxHooks";
import Button from "../../components/Button";
import DocumentCard from "../../components/DocumentCard";
import InviteButton from "../../components/InviteButton";
import Searchbar from "../../components/Searchbar";

export default function DocumentManager() {
  const status = useAppSelector((state) => state.documents.status);
  const documents = useAppSelector((state) => state.documents.documents);

  function handleSearch(keyword: string) {}

  function handleInvitation() {}

  function handleImport() {}

  function handleCreate() {}

  function handleDelete(documentId: string) {}
  function handleShare(documentId: string) {}
  function handleOpen(documentId: string) {}

  return (
    <div className="h-[100vh] flex-grow relative bg-white">
      {status === "error" ? confirm("Une erreur est survenue") : <></>}
      {status === "loading" ? (
        <p>Loading documents ... </p>
      ) : (
        <>
          <div className="h-[100vh] overflow-y-scroll">
            <div className="flex gap-2 items-center ml-auto mr-auto mb-4 w-[90%]">
              <Searchbar onTyping={handleSearch} />
              <InviteButton onClick={handleInvitation} />
            </div>
            <div className="flex flex-wrap gap-4 justify-center w-[90%] ml-auto mr-auto mb-24">
              {documents !== undefined &&
                documents.map((d) => (
                  <DocumentCard
                    document={d}
                    onOpen={() => handleOpen(d.id)}
                    onShare={() => handleShare(d.id)}
                    onDelete={() => handleDelete(d.id)}
                  />
                ))}
            </div>
          </div>
          <div className="flex gap-4 w-fit ml-auto absolute z-10 right-4 bottom-4">
            <Button onClick={handleImport} primary={false}>
              Importer un document (docx/odt)
            </Button>
            <Button onClick={handleCreate}>Créer un nouveau document</Button>
          </div>
        </>
      )}
    </div>
  );
}
