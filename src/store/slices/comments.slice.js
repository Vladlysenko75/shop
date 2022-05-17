import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services/comments.service";

export const getComments = createAsyncThunk(
    'commentsSlice/getComments',
    async (id, {rejectWithValue}) => {
        try {
            return await commentsService.productComments(id)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const postComment = createAsyncThunk(
    'commentsSlice/postComment',
    async ({id, comment}, {rejectWithValue}) => {
        try {
            return await commentsService.addComment(id, comment)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const deleteComment = createAsyncThunk(
    'commentsSlice/deleteComment',
    async ({productId, commentId}, {rejectWithValue}) => {
        try {
            return await commentsService.deleteComment(productId, commentId)
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getComments.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getComments.rejected]: (state, action) => {
            state.status = 'error';
            state.comments = action.payload;
        },
        [postComment.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [postComment.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments.push(action.payload)
        },
        [postComment.rejected]: (state, action) => {
            state.status = 'error';
            state.comments = action.payload;
        },
        [deleteComment.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
        },
        [deleteComment.rejected]: (state, action) => {
            state.status = 'error';
            state.comments = action.payload;
        },
    }
})

const commentsReducer = commentsSlice.reducer;

export default commentsReducer;