import type { Preview, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
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
    },
};

export default preview;
