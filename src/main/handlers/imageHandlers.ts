import { app, dialog, ipcMain } from "electron";
import fs from "fs";
import path from "path";
import FormData from "form-data";
import axios from "axios";

function uploadLocally(src: string) {
  const filename = path.parse(path.basename(src)).name;
  const fileExtension = path.parse(path.basename(src)).ext;
  const destName = path.join(
    app.getPath("userData"),
    `${filename}--${Date.now()}${fileExtension}`
  );

  fs.copyFile(src, destName, (err) => {
    if (err) {
      console.error(err);
    }
  });

  return path.basename(destName);
}

async function uploadToHost(src: string, url: string) {
  const formData = new FormData();

  formData.append("image", fs.createReadStream(src));

  const response = await axios.post(`${url}/images`, formData);

  return response.data["filename"];
}

export default function setupImageHandlers() {
  ipcMain.handle(
    "upload-image",
    async (_, role: "host" | "guest" | undefined, url: string | undefined) => {
      const imgSourcePath = dialog.showOpenDialogSync({
        properties: ["openFile"],
        filters: [{ name: "Images", extensions: ["jpg", "png", "jpeg"] }],
      });

      if (imgSourcePath) {
        const src = imgSourcePath[0];
        if (role === "host") return uploadLocally(src);
        if (role === "guest") return uploadToHost(src, url!);
      }

      return;
    }
  );
}
