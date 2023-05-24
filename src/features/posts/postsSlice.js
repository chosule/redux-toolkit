import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'first title',
        content: "redux toolkit",
    },
    {
        id: '2',
        title: 'second title',
        content: "redux toolkit study",
    },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
    },
});

export const { postAdded } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
