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
}
