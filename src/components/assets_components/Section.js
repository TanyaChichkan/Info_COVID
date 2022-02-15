import styled from 'styled-components';
import { device } from '../../styles/queries';

const SectionStyled = styled.section`
  height: calc(100vh - 155px);
  overflow: auto;

  @media ${device.tablet} {
    height: calc(100vh - 100px);
  }

  @media ${device.laptop} {
    height: calc(100vh - 220px);
  }
`;

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>;
};

export default Section;
