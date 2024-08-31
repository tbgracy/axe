import { ipcMain } from "electron";
import { service } from "./services";

export default function setupIpcHandlers() {
  ipcMain.handle(
    "create-document",
    async (_, title: string, height: number, width: number) => {
      const result = await service.createNewDocument(title, height, width);
      return result;
    }
  );

  ipcMain.handle("fetch-documents", async (_) => {
    const result = await service.getDocuments();
    return result;
  });

  ipcMain.handle("delete-document", async (_, id: string) => {
    const result = await service.deleteDocument(id);
    return result;
  });

  ipcMain.handle("toggle-share-state", async (_, document: TextDocument) => {
    const result = await service.toggleShareOf(document);
    return result;
  });

  ipcMain.handle("open-document", async (_, id: string) => {
    const result = await service.openDocument(id);
    return result;
  });

  ipcMain.handle("save-document", async (_, document: TextDocument) => {
    const result = await service.saveDocument(document);
    return result;
  });
}
