import { GridText } from './GridText';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import mock from './mock';

describe('<GridText />', () => {
  it('should render the component', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render the component in background undefined', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
