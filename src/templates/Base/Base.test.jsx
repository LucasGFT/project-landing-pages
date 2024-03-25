import { Base } from './Base';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
