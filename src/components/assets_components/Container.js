import styled from 'styled-components';
import { device } from '../../styles/queries';

const ContainerStyled = styled.div`
  width: 90%;
  padding: 0 15px;
  margin: 0 auto;
  display: ${(props) => (props.parent ? 'flex' : 'block')};
  align-items: center;
  justify-content: ${(props) => props.parent && 'space-between'};
  flex-wrap: ${(props) => props.parent && 'wrap'};

  @media ${device.tablet} {
    flex-wrap: ${(props) => props.parent && 'no-wrap'};
  }
`;

const Container = ({ children, isFromHeader }) => {
  return <ContainerStyled parent={isFromHeader}>{children}</ContainerStyled>;
};

export default Container;
