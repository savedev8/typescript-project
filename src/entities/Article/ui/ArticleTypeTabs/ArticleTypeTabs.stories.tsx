import { Meta, StoryObj } from '@storybook/react';

import { ArticleType } from 'entities/Article/model/consts/articleConsts';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {},
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: ArticleType.ALL,
        onChangeType: (type: ArticleType) => console.log(type),
    },
};
