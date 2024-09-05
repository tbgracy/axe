import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useAppSelector } from "@renderer/app/hooks";

import Button from "@renderer/components/Button";
import { ContentCopy } from "@mui/icons-material";

type InvitationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function InvitationModal({
  isOpen,
  onClose,
}: InvitationModalProps) {
  const hostUrl = useAppSelector((state) => state.role.hostUrl);
  const toast = useToast();

  function handleCopy() {
    navigator.clipboard.writeText(hostUrl!);
    toast({
      status: "success",
      description: "Lien copié dans le presse-papier !",
      duration: 2000,
    });
  }

  return (
    <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="10px">
        <ModalHeader>Invitation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p className="text-justify">
            Pour rejoindre la session actuelle, il faut que l'intéréssé ouvre sa
            copie de l'application Axe et tape le lien ci-dessous dans le champs
            correspondant :
          </p>
          <br />
          <div className="flex items-center justify-center gap-2 text-primary text-xl font-bold">
            <p className="text-center">{hostUrl}</p>
            <div onClick={handleCopy}>
              <ContentCopy className="cursor-pointer active:scale-90 duration-100" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onClose()}>OK</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
