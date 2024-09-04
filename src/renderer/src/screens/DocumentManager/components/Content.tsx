import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import LoadingAnimation from "@renderer/components/LoadingAnimation";

import DocumentCard from "./DocumentCard";

import noDocPlaceholder from "@renderer/assets/illustrations/add_files.svg";
import noFilterResultPlaceholder from "@renderer/assets/illustrations/empty_filter.svg";

import {
  deleteOne,
  toggleShare,
  selectStatus,
  selectDocuments,
} from "../documentsSlice";

export default function Content() {
  const status = useAppSelector(selectStatus);
  const filter = useAppSelector((state) => state.documents.filter);
  const allDocuments = useAppSelector((state) => state.documents.documents);
  const filteredDocuments = useAppSelector(selectDocuments);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleDelete(documentId: string) {
    dispatch(deleteOne(documentId));
  }

  function handleOpen(documentId: string) {
    navigate(`/documents/${documentId}`);
  }

  function handleShare(document: TextDocument) {
    dispatch(toggleShare(document));
  }

  if (status === "fetching") {
    return (
      <div className="absolute inset-0 top-[35%]">
        <LoadingAnimation />
      </div>
    );
  }

  if (status === "idle") {
    const isEmpty = filteredDocuments.length === 0;

    if (isEmpty) {
      const placeholder =
        filter !== "" && allDocuments.length !== 0
          ? noFilterResultPlaceholder
          : noDocPlaceholder;
      const message =
        filter !== "" && allDocuments.length !== 0
          ? "Aucun document ne correspond à ce que vous avez saisi"
          : " Aucun document, veuillez cliquer sur l'un des bouttons ci-dessous pour en ajouter 😁.";
      return (
        <div className="h-[70vh] flex flex-col items-center justify-center select-none">
          <img src={placeholder} alt="" className="h-[15rem]" />
          <p className="w-[20rem] text-center">{message}</p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap justify-center md:justify-normal lg:justify-normal gap-4 w-[90%] ml-auto mr-auto mb-24">
          {filteredDocuments.map((d) => (
            <DocumentCard
              key={d.id}
              document={d}
              onOpen={() => handleOpen(d.id)}
              onShare={() => handleShare(d)}
              onDelete={() => handleDelete(d.id)}
            />
          ))}
        </div>
      );
    }
  }
  return;
}
