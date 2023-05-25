import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "김초슬" },
  { id: "1", name: "김보슬" },
  { id: "2", name: "김보슬2" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
