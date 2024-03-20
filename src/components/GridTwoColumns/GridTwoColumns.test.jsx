import { GridTwoColumns } from './GridTwoColumns';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
