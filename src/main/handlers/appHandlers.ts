import { ipcMain } from "electron";
import { appService } from "../services";

export default function setupAppHandlers() {
  ipcMain.handle("get-app-state", async (_, user: User) => {
    const result = await appService.init(user);
    return result;
  });
}
