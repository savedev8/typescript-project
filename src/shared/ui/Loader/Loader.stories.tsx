import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

export const Normal: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
