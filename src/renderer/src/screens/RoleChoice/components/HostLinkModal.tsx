import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@renderer/app/hooks";
import Button from "@renderer/components/Button";
import { FormEvent, useState } from "react";
import { pingHost } from "../roleSlice";

type HostLinkModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HostLinkModal({ isOpen, onClose }: HostLinkModalProps) {
  const [url, setUrl] = useState("");
  const toast = useToast();

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.role.status);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (url.startsWith("http://") || url.startsWith("https://"))
      dispatch(pingHost(url));
    else
      toast({
        title: 'Le lien doit commencer par "http://" ou "https://"',
        status: "error",
        duration: 3000,
        isClosable: true,
      });
  }

  return (
    <Modal
      isOpen={isOpen}
      closeOnOverlayClick={false}
      onClose={onClose}
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent p="10px">
        <ModalHeader>Lien pour se connecter à un hôte Axe</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <p>Vous pouvez demander se lien à l'utilisateur hôte 🙂 .</p>
          <ModalBody>
            <Input
              required
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </ModalBody>
          <ModalFooter className="space-x-4">
            <Button
              disabled={status === "loading"}
              onClick={onClose}
              primary={false}
            >
              Annuler
            </Button>
            <Button disabled={status === "loading"} onClick={() => {}}>
              Se connecter
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
