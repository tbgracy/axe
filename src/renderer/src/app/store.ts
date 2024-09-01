import { configureStore } from "@reduxjs/toolkit";
import { documents } from "@renderer/screens/DocumentManager";
import { onboarding } from "@renderer/screens/Onboarding";

export const store = configureStore({
  reducer: {
    documents,
    onboarding,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
