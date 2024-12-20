import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from '@/shared/ui/deprecated/Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
    args: {
        title: 'Size Lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Size Lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Size Lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.S,
    },
};
