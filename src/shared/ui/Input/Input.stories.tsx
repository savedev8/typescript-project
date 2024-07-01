import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/shared/ui/Input';

const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.args = {
    placeholder: 'Type text',
    value: '123123',
};
