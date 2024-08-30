import DocumentCard from "../../components/DocumentCard";
import LoadingAnimation from "../../components/LoadingAnimation";
import noDocPlaceholder from "./add_files.svg";
import { Status } from "./DocumentManager";

export function Content({
  documents, status,
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
        <div className="flex flex-wrap justify-center md:justify-normal lg:justify-normal gap-4 w-[90%] ml-auto mr-auto mb-24">
          {documents !== undefined &&
            documents.map((d) => (
              <DocumentCard
                document={d}
                onOpen={() => { }}
                onShare={() => { }}
                onDelete={() => { }} />
            ))}
        </div>
      );
    }
  }
  return;
}
