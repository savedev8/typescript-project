// import type { Meta, StoryObj } from '@storybook/react';

// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Button, ButtonSize, ButtonTheme } from './Button';
// import { Theme } from '@/shared/const/theme';

// const meta = {
//     title: 'shared/Button',
//     component: Button,
//     parameters: {
//         layout: 'centered',
//     },
//     tags: ['autodocs'],
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//     args: {
//         children: 'Text',
//     },
// };

// export const Clear: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.CLEAR,
//     },
// };

// export const ClearInverted: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.CLEAR_INVERTED,
//     },
// };

// export const Outline: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.OUTLINE,
//     },
// };

// export const OutlineDark: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.OUTLINE,
//     },
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

// export const BackgroundTheme: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.BACKGROUND,
//     },
// };

// export const BackgroundInverted: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//     },
// };

// export const Square: Story = {
//     args: {
//         children: 'L',
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//         square: true,
//     },
// };

// export const SquareSizeL: Story = {
//     args: {
//         children: '>',
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//         square: true,
//         size: ButtonSize.L,
//     },
// };

// export const SquareSizeXL: Story = {
//     args: {
//         children: '>',
//         theme: ButtonTheme.BACKGROUND_INVERTED,
//         square: true,
//         size: ButtonSize.XL,
//     },
// };

// export const Disabled: Story = {
//     args: {
//         children: '>',
//         theme: ButtonTheme.OUTLINE,
//         disabled: true,
//     },
// };

// export const OutlineSizeL: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.OUTLINE,
//         size: ButtonSize.L,
//     },
// };

// export const OutlineSizeXL: Story = {
//     args: {
//         children: 'Text',
//         theme: ButtonTheme.OUTLINE,
//         size: ButtonSize.XL,
//     },
// };
