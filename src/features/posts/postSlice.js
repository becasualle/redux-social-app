import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // added "prepare callback" function in order to create payload object inside reducer, not in component (reusability)
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title, content) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
        postUpdated: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        },
    }
});

// actions
export const { postAdded, postUpdated } = postSlice.actions;

// selectors
export const selectPosts = state => state.posts;

// reducer
export default postSlice.reducer;