import styled from "styled-components";

const Container = styled.div`
  padding: 0 3rem;
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

function StyledContainer({ children }) {
  return <Container>{children}</Container>;
}

export default StyledContainer;
