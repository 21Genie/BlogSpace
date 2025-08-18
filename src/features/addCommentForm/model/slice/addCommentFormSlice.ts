import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (create) => {
    //    create
    //        .addCase(addCommentFormByUsername.pending, (state, action) => {
    //            state.isLoading = true;
    //            state.error = undefined;
    //        })
    //        .addCase(addCommentFormByUsername.fulfilled, (state, action) => {
    //            state.isLoading = false;
    //        })
    //        .addCase(addCommentFormByUsername.rejected, (state, action) => {
    //            state.isLoading = false;
    //            state.error = action.payload;
    //        });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
