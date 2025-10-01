import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { getArticleDetailsData } from '../../../../../entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from '../../../../../entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentFormArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'addCommentForm/addCommentFormArticle',
    async (text, { extra, rejectWithValue, getState, dispatch }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) return rejectWithValue('no data');

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) return rejectWithValue('error');

            dispatch(fetchCommentsByArticleId(String(article.id)));

            return response.data;
        } catch {
            return rejectWithValue('error');
        }
    },
);
