export async function fetchDocuments(): Promise<TextDocument[]> {
  const documents = await window.api.fetchDocuments();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(documents);
  return documents;
}
