import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { SectionBackground } from '../SectionBackground';

export const GridText = ({ title, grid, description, background = false }) => {
  return (
    <SectionBackground background={background}>
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
      <video
        className="vjs-tech"
        // playsInline
        playsInline="playsinline"
        id="vjs_video_2108_html5_api"
        tabIndex="-1"
        role="application"
        autoPlay=""
        src="https://video.privacy.com.br/bbfc5610-e3f1-4779-b05c-eaf636a405b8/mp4/adbdbdef-3010-4758-be2f-5af11bc93094-638466691110364374--feercamppos_Mp4_Avc_Aac_16x9_1280x720p_24Hz_8.5Mbps_qvbr.mp4"
      ></video>
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
};
