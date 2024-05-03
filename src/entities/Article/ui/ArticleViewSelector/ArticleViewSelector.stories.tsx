import { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'shared/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        view: ArticleView.BIG,
        onViewClick: (view: ArticleView) => console.log(view),
    },
};
