// import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article/model/consts/articleConsts';
// import { fetchNextArticlesPage } from './fetchNextArticlesPage';
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

// jest.mock('../fetchArticlesList/fetchArticlesList');

// describe('fetchNextArticlesPage.test', () => {
//     test('success', async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 view: ArticleView.BIG,
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: true,
//                 _inited: false,
//                 sort: ArticleSortField.CREATED,
//                 search: '',
//                 order: 'asc',
//                 type: ArticleType.ALL,
//             },
//         });

//         await thunk.callThunk();

//         expect(thunk.dispatch).toHaveBeenCalledTimes(4);
//         expect(fetchArticlesList).toHaveBeenCalled();
//     });
//     test('fetchAritcleList not called', async () => {
//         const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
//             articlesPage: {
//                 page: 2,
//                 ids: [],
//                 view: ArticleView.BIG,
//                 entities: {},
//                 limit: 5,
//                 isLoading: false,
//                 hasMore: false,
//                 _inited: false,
//                 sort: ArticleSortField.CREATED,
//                 search: '',
//                 order: 'asc',
//                 type: ArticleType.ALL,
//             },
//         });

//         await thunk.callThunk();

//         expect(thunk.dispatch).toHaveBeenCalledTimes(2);
//         expect(fetchArticlesList).not.toHaveBeenCalled();
//     });
// });
