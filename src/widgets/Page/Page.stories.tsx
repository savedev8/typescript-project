import { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
    title: 'widget/Page',
    component: Page,
    argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: 'normal',
    },
};
