import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="htpps://google.com">Feito com amor Lucas Gomes</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
