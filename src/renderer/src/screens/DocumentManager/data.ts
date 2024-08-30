export async function fetchDocuments(): Promise<Result<TextDocument[]>> {
  const documents: Result<TextDocument[]> =
    await window.electron.ipcRenderer.invoke("fetch-documents");
  return documents;
}
