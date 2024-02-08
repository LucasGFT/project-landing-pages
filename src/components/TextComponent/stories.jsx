import { TextComponent } from './TextComponent';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Nam eos ipsam earum, culpa tempore ducimus dolorem cumque
    fuga vitae obcaecati iure voluptas beatae dolore, distinctio,
    error hic sint. Earum, tempore.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
