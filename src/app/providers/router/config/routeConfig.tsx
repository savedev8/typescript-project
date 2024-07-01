import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { AppRoutes, RoutePath, getRouteAbout, getRouteAdmin, getRouteArticleCreate, getRouteArticleDetails, getRouteArticleEdit, getRouteArticles, getRouteForbidden, getRouteLocal, getRouteProd, getRouteProfile } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';


export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteAbout(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path:  getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.TEST_LOC]: {
        path: getRouteLocal(),
        element: <NotFoundPage />,
        authOnly: false,
    },
    [AppRoutes.TEST_PROD]: {
        path: getRouteProd(),
        element: <NotFoundPage />,
        authOnly: false,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
