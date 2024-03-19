import { SectionContainer } from './SectionContainer';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim
          in culpa corrupti provident accusantium fugit alias optio, repudiandae
          magnam harum iusto illum architecto error, voluptatum, cupiditate non
          rerum natus!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
