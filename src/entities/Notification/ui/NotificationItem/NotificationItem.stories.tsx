import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        item: {
            id: '1',
            title: 'Hello',
            description: 'Hello world',
            href: 'http://localhost:',
        },
    },
};
