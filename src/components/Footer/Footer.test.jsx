import { Footer } from './Footer';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render the component', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Olá</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
