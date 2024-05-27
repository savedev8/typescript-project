import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkPrimary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const AppLinkSecondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const AppLinkRed: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};

export const AppLinkPrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
    },
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkSecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkRedDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.RED,
    },
};
AppLinkRedDark.decorators = [ThemeDecorator(Theme.DARK)];
