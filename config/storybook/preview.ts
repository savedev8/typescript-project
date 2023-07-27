import type { Preview, StoryObj } from "@storybook/react";
import 'app/styles/index.scss';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      constext = ThemeContext;
      return <div className={`app ${theme}`}>Story()</div>;
    },
  ];
  // decorators: [
  //   (Story) => (theme: Theme) => <div className= {`app ${theme}`}>Story()</div>,
  // ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
