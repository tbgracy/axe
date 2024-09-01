import { ipcMain } from "electron";
import { userService } from "../services";

export default function setupUserHandlers() {
  console.log("Setting up user handlers ...");

  ipcMain.handle("get-current-user", async (_) => {
    const result = await userService.getCurrentUser();
    return result;
  });

  ipcMain.handle("create-user", async (_, user: User) => {
    const result = await userService.create(user);
    return result;
  });

  ipcMain.handle("delete-user", async (_, user?: User) => {
    const result = await userService.delete(user);
    return result;
  });
}
