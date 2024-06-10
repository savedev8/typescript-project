import type { Preview, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        SuspenseDecorator,
        (Story) => Story(),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen', // убираем padding в storybook
    },
};

export default preview;
