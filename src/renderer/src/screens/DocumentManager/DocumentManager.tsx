import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import Button from "@renderer/components/Button";

import Content from "./components/Content";
import Searchbar from "./components/Searchbar";
import InviteButton from "./components/InviteButton";
import NewDocumentModal from "./components/NewDocumentModal";

import { filter, fetchAll, selectStatus, refresh } from "./documentsSlice";
import { useToast } from "@chakra-ui/react";
import RefreshButton from "./components/RefreshButton";
import InvitationModal from "./components/InvitationModal";

export default function DocumentManager() {
  const [isNewDocModalOpen, setIsNewDocModalOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
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

  function toggleNewDocModal() {
    setIsNewDocModalOpen(!isNewDocModalOpen);
  }

  return (
    <div className="h-[100vh] flex-grow relative bg-white dark:bg-darkGrey">
      <NewDocumentModal
        isOpen={isNewDocModalOpen}
        onClose={toggleNewDocModal}
      />
      <InvitationModal
        isOpen={isInvitationModalOpen}
        onClose={() => setIsInvitationModalOpen(false)}
      />
      <div className="h-[100vh] overflow-y-scroll">
        <div className="flex gap-2 items-center ml-auto mr-auto mb-4 w-[90%]">
          {role === "host" && (
            <InviteButton onClick={() => setIsInvitationModalOpen(true)} />
          )}
          <Searchbar disabled={disableControls} onChange={handleSearch} />
          <RefreshButton onClick={() => dispatch(refresh())} />
        </div>
        <Content />
      </div>
      {role === "host" && (
        <div className="flex gap-4 w-fit ml-auto mr-4 absolute z-10 right-4 bottom-4">
          <Button disabled={disableControls} onClick={toggleNewDocModal}>
            Créer un nouveau document
          </Button>
        </div>
      )}
    </div>
  );
}
