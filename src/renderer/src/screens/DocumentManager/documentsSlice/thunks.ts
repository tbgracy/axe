import { createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchAll = createAsyncThunk<Result<TextDocument[]>>(
  "documents/fetchAll",
  async () => {
    const result: Result<TextDocument[]> =
      await window.electron.ipcRenderer.invoke("fetch-documents");
    return result;
  }
);

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
