import type { Meta, StoryObj } from '@storybook/react';

import  MainPage from './MainPage';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    // parameters: {
    //     layout: 'centered',
    // },
    // tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
