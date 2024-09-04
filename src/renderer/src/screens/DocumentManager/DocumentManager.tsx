import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import Button from "@renderer/components/Button";

import Content from "./components/Content";
import Searchbar from "./components/Searchbar";
import InviteButton from "./components/InviteButton";
import NewDocumentModal from "./components/NewDocumentModal";

import { filter, fetchAll, selectStatus } from "./documentsSlice";
import { useToast } from "@chakra-ui/react";

export default function DocumentManager() {
  const [isDialogOpen, setIsDialogIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const role = useAppSelector((state) => state.role.role);
  const disableControls = status !== "idle";
  const toast = useToast();
  const message = useAppSelector((state) => state.documents.message);

  useEffect(() => {
    if (status == "fetching") {
      dispatch(fetchAll());
    }
  }, [status]);

  useEffect(() => {
    if (status === "error") {
      toast({
        title: "Une erreur est survenue",
        description: message,
        status: "error",
      });
    }
  }, [status]);

  function handleSearch(keyword: string) {
    dispatch(filter(keyword));
  }

  function handleInvitation() {}

  function toggleDialog() {
    setIsDialogIsOpen(!isDialogOpen);
  }

  return (
    <div className="h-[100vh] flex-grow relative bg-white">
      <NewDocumentModal isOpen={isDialogOpen} onClose={toggleDialog} />
      <div className="h-[100vh] overflow-y-scroll">
        <div className="flex gap-2 items-center ml-auto mr-auto mb-4 w-[90%]">
          <Searchbar disabled={disableControls} onChange={handleSearch} />
          <InviteButton onClick={handleInvitation} />
        </div>
        <Content />
      </div>
      {role === "host" && (
        <div className="flex gap-4 w-fit ml-auto absolute z-10 right-4 bottom-4">
          <Button disabled={disableControls} onClick={toggleDialog}>
            Créer un nouveau document
          </Button>
        </div>
      )}
    </div>
  );
}
