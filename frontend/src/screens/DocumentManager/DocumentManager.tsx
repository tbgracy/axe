import Button from "../../components/Button";
import DocumentCard from "../../components/DocumentCard";
import InviteButton from "../../components/InviteButton";
import Searchbar from "../../components/Searchbar";
import { TextDocument } from "../../types";

const documentsData: TextDocument[] = [
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
  {
    id: "1",
    title: "Document Title",
    content: "Document Content",
    shared: true,
    size: {
      id: "1",
      name: "A4",
      width: 210,
      height: 297,
    },
  },
];

export default function DocumentManager() {
  const documents: TextDocument[] = documentsData;

  function handleSearch(keyword: string) {}

  function handleInvitation() {}

  function handleImport() {}

  function handleCreate() {}

  function handleDelete(documentId: string) {}
  function handleShare(documentId: string) {}
  function handleOpen(documentId: string) {}

  return (
    <div className="h-[100vh] flex-grow relative bg-white">
      <div className="h-[100vh] overflow-y-scroll">
        <div className="flex gap-2 items-center ml-auto mr-auto mb-4 w-[90%]">
          <Searchbar onTyping={handleSearch} />
          <InviteButton onClick={handleInvitation} />
        </div>
        <div className="flex flex-wrap gap-4 justify-center w-[90%] ml-auto mr-auto mb-24">
          {documents.map((d) => (
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
    </div>
  );
}
