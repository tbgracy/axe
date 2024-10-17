import { useAppSelector } from "@renderer/app/hooks";

export default function useImage() {
  const role = useAppSelector((state) => state.role.role);
  const url = useAppSelector((state) => state.role.hostUrl);

  async function handleImageInsertion() {
    const imageName: string | undefined = await window.electron.ipcRenderer.invoke(
      "upload-image",
      role,
      url
    );
    console.log(imageName);
    return imageName;
  }

  return handleImageInsertion;
}
