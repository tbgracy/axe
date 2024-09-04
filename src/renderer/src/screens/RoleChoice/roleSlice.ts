import axios from "axios";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Role = "host" | "guest";

type RoleState = {
  status: "idle" | "loading";
  role?: Role;
  hostUrl?: string;
  errorMessage?: string;
};

const initialState: RoleState = {
  status: "idle",
};

export const pingHost = createAsyncThunk<string, string>(
  "role/pingHost",
  async (url) => {
    await axios.get(url);
    return url;
  }
);

export const startServer = createAsyncThunk<Result<string>>(
  "role/startServer",
  async () => {
    window.electron.ipcRenderer.send("start-server");
    const RETRY = 5;
    for (let i = 0; i < RETRY; i++) {
      console.log("TRY #", i);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      try {
        const result = await axios.get("http://localhost:3000");
        console.log(result);
        if (result.status === 200) {
          const ipAddress = await window.electron.ipcRenderer.invoke("get-ip");
          return {
            success: true,
            data: ipAddress,
          };
        }
      } catch (err) {
        console.error(err);
      }
    }
    return {
      success: false,
    };
  }
);

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    chooseRole(state, action: PayloadAction<Role>) {
      state.role = action.payload;
    },
    clearErrorMessage(state) {
      state.errorMessage = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(pingHost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(pingHost.fulfilled, (state, action) => {
        state.status = "idle";
        state.role = "guest";
        state.hostUrl = action.payload;
      })
      .addCase(pingHost.rejected, (state) => {
        state.status = "idle";
        state.errorMessage =
          "Impossible de se connecter à l'hôte 😢, veuillez réessayer.";
      })
      .addCase(startServer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(startServer.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.success) {
          state.role = "host";
          state.hostUrl = `http://${action.payload.data}:3000`;
        } else {
          state.errorMessage =
            "Une erreur est survenue lors de l'initialisation, veuillez rééssayer.";
        }
      })
      .addCase(startServer.rejected, (state) => {
        state.status = "idle";
        state.errorMessage =
          "Une erreur est survenue lors de l'initialisation, veuillez rééssayer.";
      });
  },
});

export const { chooseRole, clearErrorMessage } = roleSlice.actions;

export default roleSlice.reducer;
