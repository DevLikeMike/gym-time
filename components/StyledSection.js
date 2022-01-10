import styled from "styled-components";

const Section = styled.section`
  padding: 1rem 3rem;
  margin: 0 auto;

  p,
  h2 {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

function StyledSection({ children, dark }) {
  return (
    <Section className={dark ? "section-black" : "section-white"}>
      {children}
    </Section>
  );
}

export default StyledSection;
