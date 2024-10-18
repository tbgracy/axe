import { useAppSelector } from "@renderer/app/hooks";
import { useSlate } from "slate-react";
import { insertImage } from "../components/Editor/imageExtension";

export default function useImage() {
  const role = useAppSelector((state) => state.role.role);
  const url = useAppSelector((state) => state.role.hostUrl);

  const editor = useSlate();

  async function handleImageInsertion() {
    const imageName: string | undefined =
      await window.electron.ipcRenderer.invoke("upload-image", role, url);

    if (imageName) {
      const fullImageUrl = `${url}/images/${imageName}`;
      console.log(fullImageUrl);
      insertImage(editor, fullImageUrl);
    }
    return imageName;
  }

  return handleImageInsertion;
}
