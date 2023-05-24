import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
const initialState = [
  {
    id: "1",
    title: "first title",
    content: "redux toolkit",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "second title",
    content: "redux toolkit study",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const { postAdded } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
