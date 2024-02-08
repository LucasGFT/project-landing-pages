import { Heading } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto esta claro',
  },
  argTypes: {
    children: {
      type: 'string',
    },
    colorDark: {
      type: 'boolean',
    },
    as: {
      type: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = {
  args: {
    children: 'O texto esta escuro',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
export const Dark = {
  args: {
    colorDark: false,
  },
};
