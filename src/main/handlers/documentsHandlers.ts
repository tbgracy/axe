import { ipcMain } from "electron";
import { documentsService } from "../services";

export default function setupDocumentsHandlers() {
  ipcMain.handle("create-document", async (_, title: string) => {
    const result = await documentsService.createNewDocument(title);
    return result;
  });

  ipcMain.handle("fetch-documents", async (_) => {
    const result = await documentsService.getDocuments();
    return result;
  });

  ipcMain.handle("delete-document", async (_, id: string) => {
    const result = await documentsService.deleteDocument(id);
    return result;
  });

  ipcMain.handle("toggle-share-state", async (_, document: TextDocument) => {
    const result = await documentsService.toggleShareOf(document);
    return result;
  });

  ipcMain.handle("open-document", async (_, id: string) => {
    const result = await documentsService.openDocument(id);
    return result;
  });

  ipcMain.handle("save-document", async (_, document: TextDocument) => {
    const result = await documentsService.saveDocument(document);
    return result;
  });
}
