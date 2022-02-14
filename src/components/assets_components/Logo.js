import styled from 'styled-components';
import { device } from '../../styles/queries';
import logo from '../../images/logo.png';

const ImageStyled = styled.img`
  width: 100px;
  height: 100px;

  @media ${device.laptop} {
    width: 200px;
    height: 200px;
  }
`;

const Logo = () => {
  return <ImageStyled src={logo} alt='covid-logo' width='100' height='100' />;
};

export default Logo;
