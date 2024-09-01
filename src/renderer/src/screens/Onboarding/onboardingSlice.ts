import { App } from "@prisma/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@renderer/app/store";

type OnboardingState = {
  status: "loading" | "idle" | "error";
  user?: User;
  nextStep?: "onboarding" | "home";
  appState?: App;
};

const initialState: OnboardingState = {
  status: "loading",
};

export const getCurrentUser = createAsyncThunk<Result<User | undefined>, void>(
  "onboarding/getCurrentUser",
  async () => {
    const result: Result<User> =
      await window.electron.ipcRenderer.invoke("get-current-user");
    return result;
  }
);

export const createUser = createAsyncThunk<Result<User>, User>(
  "onboarding/createUser",
  async (user) => {
    const result: Result<User> = await window.electron.ipcRenderer.invoke(
      "create-user",
      user
    );
    return result;
  }
);

export const getAppState = createAsyncThunk<Result<App>, User>(
  "onboarding/getAppState",
  async (user) => {
    const result: Result<App> = await window.electron.ipcRenderer.invoke(
      "get-app-state",
      user
    );
    return result;
  }
);

const onboardingSlice = createSlice({
  name: "splashscreen",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.user = action.payload.data;
          state.nextStep = "home";
        } else {
          state.nextStep = "onboarding";
          state.status = "idle";
        }
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.success) {
          state.user = action.payload.data;
        }
      })
      .addCase(getAppState.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAppState.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.status = "idle";
          state.appState = action.payload.data;
          state.nextStep = "home";
        }
      });
  },
});

export const selectStatus = (state: RootState) => state.onboarding.status;
export const selectStep = (state: RootState) => state.onboarding.nextStep;

export default onboardingSlice.reducer;
