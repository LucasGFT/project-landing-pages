import { GridContent } from './GridContent';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridContent />', () => {
  it('should render content grid', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render content grid', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
