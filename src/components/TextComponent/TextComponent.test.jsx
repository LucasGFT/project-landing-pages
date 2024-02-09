import { renderTheme, theme } from '../../styles';
import { TextComponent } from './TextComponent';
import { screen } from '@testing-library/react';

describe('<TextComponent />', () => {
  it('should render with default values', () => {
    renderTheme(<TextComponent>texto</TextComponent>);
    const paragraph = screen.getByText('texto');

    expect(paragraph).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
