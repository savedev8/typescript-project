import { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

const meta =  {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
} satisfies Meta<typeof ArticleEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {args: {}};
