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

import Button from "@renderer/components/Button";
import { useState } from "react";

type NewDocumentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  updateDocuments: (newDoc: TextDocument) => void;
};

export default function NewDocumentModal({
  isOpen,
  onClose,
  updateDocuments,
}: NewDocumentModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    window.electron.ipcRenderer
      .invoke("create-document", title, 200, 200)
      .then((result: Result<TextDocument>) => {
        setTitle("");
        setIsLoading(false);
        if (result.success) {
          updateDocuments(result.data!);
          onClose();
        }
      });
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
