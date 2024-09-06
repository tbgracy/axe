import express from "express";
let cors = require("cors");

import { documentsService } from "./services";

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log("Axe express server listening on port 3000");
});
