import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload);
        },
    }
});

// actions
export const { postAdded } = postSlice.actions;

// selectors
export const selectPosts = state => state.posts;

// reducer
export default postSlice.reducer;