import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createNew, deleteOne, fetchAll, toggleShare } from "./thunks";
import { selectStatus, selectDocuments } from "./selectors";

export type DocumentsState = {
  status: "fetching" | "error" | "idle" | "creating";
  documents: TextDocument[];
  filter: string;
  message?: string;
};

const initialState: DocumentsState = {
  status: "fetching",
  documents: [],
  filter: "",
};

const documentSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    deleteMessage: (state) => {
      state.message = undefined;
    },
    refresh: (state) => {
      state.status = "fetching";
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
          console.log(action.payload);
          state.status = "error";
          state.message = action.payload.message;
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

export { createNew, fetchAll, deleteOne, toggleShare };
export const { filter, deleteMessage, refresh } = documentSlice.actions;
export { selectDocuments, selectStatus };

export default documentSlice.reducer;
