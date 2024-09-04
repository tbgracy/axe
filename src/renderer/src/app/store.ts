import { configureStore } from "@reduxjs/toolkit";

import { role } from "@renderer/screens/RoleChoice";
import { onboarding } from "@renderer/screens/Onboarding";
import { documents } from "@renderer/screens/DocumentManager";

export const store = configureStore({
  reducer: {
    role,
    documents,
    onboarding,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
