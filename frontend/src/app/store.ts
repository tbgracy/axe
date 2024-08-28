import { configureStore } from "@reduxjs/toolkit";
import documentsSlice from "../screens/Editor/documentsSlice";

export const store = configureStore({
  reducer: {
    documents: documentsSlice,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type Store = typeof store;
