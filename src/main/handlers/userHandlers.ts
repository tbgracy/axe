import { ipcMain } from "electron";
import { userService } from "../services";

export default function setupUserHandlers() {
  ipcMain.handle("get-current-user", async (_) => {
    const result = await userService.getCurrentUser();
    return result;
  });

  ipcMain.handle("create-user", async (_, user: User) => {
    const result = await userService.create(user);
    return result;
  });
}
