import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { initialValue as services } from "../../app/dependency_injection";
import { TextDocument } from "../../types";

export interface DocumentsState {
  status: "loading" | "error" | "fetched";
  documents?: TextDocument[];
  message?: string;
}

const initialState: DocumentsState = {
  status: "loading",
};

const fetchDocuments = createAsyncThunk(
  "documents/fethDocuments",
  async (userId: string) => {
    const response = await services.document.getDocumentsOf(userId);
    if (response.success) {
      return response.data;
    }
    throw Error(response.message);
  }
);

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    filterDocuments(state) {},
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.status = "fetched";
        state.documents = action.payload;
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.status = "error";
        state.message = `${action.payload}`;
      });
  },
});

export { fetchDocuments };

export const { filterDocuments } = documentsSlice.actions;

export default documentsSlice.reducer;
