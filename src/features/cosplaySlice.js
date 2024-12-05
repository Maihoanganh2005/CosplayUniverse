import { createSlice } from "@reduxjs/toolkit";

const cosplaySlice = createSlice({
  name: "cosplay",
  initialState: {
    cosplays: [],
  },
  reducers: {
    setCosplays: (state, action) => {
      state.cosplays = action.payload;
    },
    addCosplay: (state, action) => {
      state.cosplays.push(action.payload);
    },
  },
});

export const { setCosplays, addCosplay } = cosplaySlice.actions;
export default cosplaySlice.reducer;
