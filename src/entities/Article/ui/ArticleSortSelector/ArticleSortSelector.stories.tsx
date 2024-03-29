import { Meta, StoryObj} from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

const meta = {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'desc',
        onChangeOrder: (newOrder: SortOrder) => console.log(newOrder),
        onChangeSort: (newSort: ArticleSortField) => console.log(newSort),
    }
};
