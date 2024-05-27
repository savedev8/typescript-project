import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {};
AuthNavbar.decorators = [StoreDecorator({ user: { authData: {} } })];
