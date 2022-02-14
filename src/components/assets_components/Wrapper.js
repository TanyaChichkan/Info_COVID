import styled from 'styled-components';
import { device } from '../../styles/queries';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.parent && '100%'};

  @media ${device.tablet} {
    width: auto;
  }
`;

const Wrapper = ({ children, isFromHeader }) => {
  return <StyledDiv parent={isFromHeader}>{children}</StyledDiv>;
};

export default Wrapper;
