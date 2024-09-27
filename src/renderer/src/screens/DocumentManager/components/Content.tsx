import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import LoadingAnimation from "@renderer/components/LoadingAnimation";

import DocumentCard from "./DocumentCard";

import noDocPlaceholder from "@renderer/assets/illustrations/add_files.svg";
import darkNoDocPlaceholder from "@renderer/assets/illustrations/add_files_dark.png";
import noFilterResultPlaceholder from "@renderer/assets/illustrations/empty_filter.svg";
import darkNoFilterResultPlaceholder from "@renderer/assets/illustrations/empty_filter_dark.png";

import {
  deleteOne,
  toggleShare,
  selectStatus,
  selectDocuments,
} from "../documentsSlice";
import { selectTheme } from "@renderer/app/themeSlice";

export default function Content() {
  const status = useAppSelector(selectStatus);
  const role = useAppSelector((state) => state.role.role);
  const filteredDocuments = useAppSelector(selectDocuments);
  const filter = useAppSelector((state) => state.documents.filter);
  const allDocuments = useAppSelector((state) => state.documents.documents);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectTheme);

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
          ? {
              dark: darkNoFilterResultPlaceholder,
              light: noFilterResultPlaceholder,
            }[themeMode]
          : { dark: darkNoDocPlaceholder, light: noDocPlaceholder }[themeMode];
      const message =
        filter !== "" && allDocuments.length !== 0
          ? "Aucun document ne correspond à ce que vous avez saisi"
          : " Aucun document, veuillez cliquer sur l'un des bouttons ci-dessous pour en ajouter 😁.";
      return (
        <div className="h-[70vh] flex flex-col items-center justify-center select-none">
          <img src={placeholder} alt="" className="h-[15rem]" />
          <p className="w-[20rem] text-center dark:text-lightGrey">{message}</p>
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
              onShare={role === "host" ? () => handleShare(d) : undefined}
              onDelete={role === "host" ? () => handleDelete(d.id) : undefined}
            />
          ))}
        </div>
      );
    }
  }
  return;
}
