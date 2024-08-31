import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import Content from "./Content";
import Button from "../../components/Button";
import Searchbar from "../../components/Searchbar";
import InviteButton from "../../components/InviteButton";

import NewDocumentModal from "./NewDocumentModal";
import { filter, fetchAll, selectStatus } from "./documentsSlice";

export default function DocumentManager() {
  const [isDialogOpen, setIsDialogIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const disableControls = status !== "idle";

  useEffect(() => {
    if (status == "fetching") {
      dispatch(fetchAll());
    }
  }, []);

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
      <div className="flex gap-4 w-fit ml-auto absolute z-10 right-4 bottom-4">
        <Button disabled={disableControls} onClick={toggleDialog}>
          Créer un nouveau document
        </Button>
      </div>
    </div>
  );
}
