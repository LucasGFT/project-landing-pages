import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export const GridText = ({
  title,
  grid,
  description,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading colordark={!background} size="huge" uppercase as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((element, ind) => (
            <Styled.GridElement key={ind}>
              <Heading size="medium" colordark={!background} as="h3">
                {element.title}
              </Heading>
              <TextComponent>{element.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }).isRequired,
  ).isRequired,
  description: P.string,
  background: P.bool,
  sectionId: P.string,
};
