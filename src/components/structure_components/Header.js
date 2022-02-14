import styled from 'styled-components';
import Logo from '../assets_components/Logo';
import Container from '../assets_components/Container';
import Wrapper from '../assets_components/Wrapper';
import SearchInput from './SearchInput';
import { device } from '../../styles/queries';

const HeadingStyled = styled.h1`
  font-weight: bold;
  font-size: 35px;
  line-height: 1.167;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: min(4vw, 48px);
  }
`;

const Header = () => {
  return (
    <header>
      <Container isFromHeader={true}>
        <Wrapper isFromHeader={true}>
          <Logo />
          <HeadingStyled>Statistic</HeadingStyled>
        </Wrapper>
        <SearchInput />
      </Container>
    </header>
  );
};

export default Header;
