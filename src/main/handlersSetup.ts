import { ipcMain } from "electron";
import { repo } from "./services";

export default function setupIpcHandlers() {
  ipcMain.handle(
    "create-document",
    async (_, title: string, height: number, width: number) => {
      const result = await repo.createNewDocument(title, height, width);
      return result;
    }
  );

  ipcMain.handle("fetch-documents", async (_) => {
    const result = await repo.getDocuments();
    return result;
  });

  ipcMain.handle("delete-document", async (_, id: string) => {
    const result = await repo.deleteDocument(id);
    return result;
  });

  ipcMain.handle("toggle-share-state", async (_, document: TextDocument) => {
    const result = await repo.toggleShareOf(document);
    return result;
  });
}
