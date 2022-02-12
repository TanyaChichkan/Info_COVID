import styled from 'styled-components';

const ContainerStyled = styled.div`
  width: 90%;
  padding: 0 15px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
