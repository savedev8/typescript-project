import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const WithError: Story = {};
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading: Story = {};
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
