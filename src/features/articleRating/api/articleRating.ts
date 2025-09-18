import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
    articleId: string,
    userId: string
}

interface ArticleRateArg {
    articleId: string,
    userId: string,
    rate: number,
    feedback?: string
}

export const articleRating = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        articleRate: build.mutation<void, ArticleRateArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRating.useGetArticleRatingQuery;
export const useArticleRate = articleRating.useArticleRateMutation;
