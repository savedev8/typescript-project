import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 29,
            country: Country.Armenia,
            lastname: 'orlova',
            first: 'first',
            currency: Currency.RUB,
            city: 'Omsk',
            avatar,
        },
    },
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 29,
            country: Country.Armenia,
            lastname: 'orlova',
            first: 'first',
            currency: Currency.RUB,
            city: 'Omsk',
            avatar,
        },
    },
})];
