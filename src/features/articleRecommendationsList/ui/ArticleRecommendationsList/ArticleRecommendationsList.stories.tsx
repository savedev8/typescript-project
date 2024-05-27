import { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from '@/entities/Article';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    decorators: [withMock],
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {}};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
