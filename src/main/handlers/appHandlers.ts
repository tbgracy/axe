import { ipcMain } from "electron";
import { appService } from "../services";
import getIPAddress from "../utils/getIPAddress";

export default function setupAppHandlers() {
  console.log("Setting up app handlers ...");

  ipcMain.handle("get-app-state", async (_, user: User) => {
    const result = await appService.init(user);
    return result;
  });

  ipcMain.handle("get-ip", () => {
    return getIPAddress();
  });
}
