import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme, theme } from '../../styles';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
