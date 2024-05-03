import { Meta, StoryObj } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { Card, CardTheme } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        theme: { control: CardTheme.NORMAL },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
};
