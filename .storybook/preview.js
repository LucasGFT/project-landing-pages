import { Story } from '@storybook/blocks';
import { ThemeProvider } from 'styled-components';
import {theme, GlobalStyles} from '../src/styles'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor,
        }
      ]
    },
  },
};

export const decorators = [
  (Story) => (<ThemeProvider theme={theme}><Story /><GlobalStyles /></ThemeProvider>)
]

export default preview;
