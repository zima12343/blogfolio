import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const GetPosts = createAsyncThunk(
    'posts/get',
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&limit=12&offset=${(page - 1) * 12}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData?.detail ?? "error!!!!");
            }
            const data = await response.json();
            return data;
        } catch (err) {
            return rejectWithValue((err as Error).message)
        }
    }
)

export const GetPost = createAsyncThunk(
    'posts/current',
    async (id: number, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://studapi.teachmeskills.by/blog/posts/${id}/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData?.detail ?? "error!!!!");
            }
            const data = await response.json();
            return data;
        } catch (err) {
            return rejectWithValue((err as Error).message)
        }
    }
)


const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        page: 1,
        qty: 0,
        selectPost: {},
        favoritePosts: []

    },
    reducers: {
        toPage: (state, action) => {
            state.page = action.payload;
        },
        toFavorite: (state, action) => {
            const obj = action.payload;
            if (state.favoritePosts.filter((x: any) => x.id === obj.id).length === 0) {
                state.favoritePosts.push(obj);
            }
        }
    },
    extraReducers: (builder: any) => {
        builder.addCase(GetPosts.fulfilled, (state: any, action: any) => {
            state.posts = action.payload.results;
            state.qty = action.payload.count;
        });
        builder.addCase(GetPost.fulfilled, (state: any, action: any) => {
            state.selectPost = action.payload;
        });
        builder.addCase(GetPost.pending, (state: any) => {
            state.selectPost = null;
        });
    },

});

export const { toFavorite } = postSlice.actions;

export default postSlice.reducer;