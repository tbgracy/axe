import express from "express";
import multer from "multer";
let cors = require("cors");

import { documentsService } from "./services";
import path from "path";

const app = express();
const port = 3000;

const userDataPath = process.env.USER_DATA_PATH;

if (userDataPath) {
  const storage = multer.diskStorage({
    destination: (_, __, cb) => {
      cb(null, userDataPath);
    },
    filename: (_, file, cb) => {
      const uniqueSuffix = Date.now();
      cb(
        null,
        path.parse(file.originalname).name +
          "--" +
          uniqueSuffix +
          path.parse(file.originalname).ext
      );
    },
  });

  const upload = multer({ storage: storage });

  app.use(express.json());

  app.use(cors());

  app.get("/", (_, res) => {
    res.send({ message: "Hello World!" });
  });

  app.get("/documents", async (_, res) => {
    const result = await documentsService.getDocuments();
    if (result.success) {
      result.data = result.data?.filter((doc) => doc.shared);
    }
    res.send(result);
  });

  app.get("/documents/:documentId", async (req, res) => {
    const result = await documentsService.openDocument(req.params.documentId);
    if (result.success) {
      res.send(result);
    }
  });

  app.post("/image", upload.single("image"), (req, res) => {
    res.send({
      message: "Successfully uploaded files",
      filename: req.file?.filename,
    });
  });

  app.listen(port, () => {
    console.log("Axe express server listening on port 3000");
  });
}
