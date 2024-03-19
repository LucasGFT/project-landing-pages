import { SectionContainer } from '../SectionContainer';
import { SectionBackground } from './SectionBackground';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
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
      <SectionBackground {...args} />
    </div>
  );
};
