import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading uppercase size="medium">
      <Styled.Link href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Link>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
