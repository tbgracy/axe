import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@renderer/app/store";
import axios from "axios";

export const createNew = createAsyncThunk<Result<TextDocument>, string>(
  "documents/createNew",
  async (newDocumentTitle) => {
    const result: Result<TextDocument> =
      await window.electron.ipcRenderer.invoke(
        "create-document",
        newDocumentTitle
      );
    return result;
  }
);

export const fetchAll = createAsyncThunk<
  Result<TextDocument[]>,
  void,
  {
    state: RootState;
  }
>("documents/fetchAll", async (_, options) => {
  const role = options.getState().role.role!;
  let result: Result<TextDocument[]> = { success: false };

  if (role === "host") {
    result = await window.electron.ipcRenderer.invoke("fetch-documents");
  } else if (role === "guest") {
    const url = options.getState().role.hostUrl!;
    const response = await axios.get(`${url}/documents`);
    result = response.data;
  }

  return result;
});

export const deleteOne = createAsyncThunk<Result<TextDocument>, string>(
  "documents/delete",
  async (documentId) => {
    const result: Result<TextDocument> =
      await window.electron.ipcRenderer.invoke("delete-document", documentId);
    return result;
  }
);

export const toggleShare = createAsyncThunk<Result<TextDocument>, TextDocument>(
  "documents/share",
  async (documentToToggleShare) => {
    const result: Result<TextDocument> =
      await window.electron.ipcRenderer.invoke(
        "toggle-share-state",
        documentToToggleShare
      );
    return result;
  }
);
