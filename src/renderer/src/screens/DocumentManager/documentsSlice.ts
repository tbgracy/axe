import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@renderer/app/store";

export type DocumentsState = {
  status: "fetching" | "error" | "idle" | "inviting" | "creating";
  documents: TextDocument[];
  filter: string;
  message?: string;
};

const initialState: DocumentsState = {
  status: "fetching",
  documents: [],
  filter: "",
};

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

const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    invite: (state) => {
      state.status = "inviting";
    },
    filter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    deleteMessage: (state) => {
      state.message = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createNew.pending, (state) => {
        state.status = "creating";
      })
      .addCase(createNew.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.status = "idle";
          state.documents = [...state.documents, action.payload.data!];
        } else {
          state.status = "error";
        }
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.status = "idle";
          state.documents = action.payload.data!;
        } else {
          state.status = "error";
        }
      })
      .addCase(deleteOne.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.status = "idle";
          state.message = "Document supprimé avec succès";
          state.documents = state.documents.filter(
            (d) => d.id !== action.payload.data!.id
          );
        } else {
          state.status = "error";
          state.message = "Une erreur est survenue lors de la suppression";
        }
      })
      .addCase(toggleShare.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.documents = state.documents.map((d) => {
            if (d.id === action.payload.data!.id) {
              return action.payload.data;
            } else {
              return d;
            }
          }) as TextDocument[];
        }
      });
  },
});

export const selectDocuments = (state: RootState) => {
  const filter = state.documents.filter;
  if (Boolean(filter)) {
    return state.documents.documents.filter((d) =>
      d.title.toLocaleLowerCase().includes(filter.toLowerCase())
    );
  }
  return state.documents.documents;
};

export const selectStatus = (state: RootState) => {
  return state.documents.status;
};

export const { invite, filter } = documentSlice.actions;

export default documentSlice.reducer;
