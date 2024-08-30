export async function fetchDocuments(): Promise<Result<TextDocument[]>> {
  const documents: Result<TextDocument[]> =
    await window.electron.ipcRenderer.invoke("fetch-documents");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return documents;
}
