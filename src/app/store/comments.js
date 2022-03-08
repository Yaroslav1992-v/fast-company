import { createSlice } from "@reduxjs/toolkit";
import commentService from "../services/comment.service";
const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        commentsRequested: (state) => {
            state.isLoading = true;
        },
        commentsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentAddRequested: (state) => {
            state.isLoading = true;
        },
        commentAddFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentDeleteRequested: (state) => {
            state.isLoading = true;
        },
        commentDeleteFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        commentAdded: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
            state.isLoading = false;
        },
        commentDeleted: (state, action) => {
            const newArray = state.entities.filter(
                (comment) => comment._id !== action.payload
            );
            state.entities = newArray;
            state.isLoading = false;
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
    commentAdded,
    commentAddRequested,
    commentAddFailed,
    commentsReceived,
    commentDeleteRequested,
    commentDeleted,
    commentsRequestFailed
} = actions;

export const loadCommentsList = (userId) => async (dispatch) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentService.getComments(userId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};
export const addComment = (comment) => async (dispatch) => {
    dispatch(commentAddRequested());
    try {
        const { content } = await commentService.createComment(comment);
        console.log(content);
        dispatch(commentAdded(content));
    } catch (error) {
        dispatch(commentAddFailed(error.message));
    }
};
export const deleteComment = (comment) => async (dispatch) => {
    dispatch(commentDeleteRequested());
    try {
        await commentService.removeComment(comment);
        dispatch(commentDeleted(comment));
    } catch (error) {
        dispatch(commentAddFailed(error.message));
    }
};

export const getComments = () => (state) => {
    return state.comments.entities;
};
export const getCommentsLoadingStatus = () => (state) =>
    state.comments.isLoading;

export default commentsReducer;
