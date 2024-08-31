import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";

import Button from "@renderer/components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNew, selectStatus } from "../documentsSlice";

type NewDocumentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NewDocumentModal({
  isOpen,
  onClose,
}: NewDocumentModalProps) {
  const isLoading = useAppSelector(selectStatus) === "creating";
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const action = await dispatch(createNew(title));
    if (createNew.fulfilled.match(action)) {
      onClose();
      navigate(`/app/documents/${action.payload.data?.id}`);
    }
  }

  return (
    <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="10px">
        <ModalHeader>Titre du nouveau document</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Input required onChange={handleChange} />
          </ModalBody>
          <ModalFooter className="space-x-4">
            <Button disabled={isLoading} onClick={onClose} primary={false}>
              Annuler
            </Button>
            <Button disabled={isLoading} onClick={() => {}}>
              Créer le nouveau document
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
