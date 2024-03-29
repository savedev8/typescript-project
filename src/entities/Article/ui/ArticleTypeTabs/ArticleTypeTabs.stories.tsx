import { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from 'entities/Article/model/types/article';

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
    }
}
