import { configureStore } from "@reduxjs/toolkit";
import documents from "@renderer/screens/DocumentManager/documentsSlice";

export const store = configureStore({
  reducer: {
    documents,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
