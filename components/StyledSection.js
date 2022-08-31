import styled from "styled-components";
// Next Imports
import Image from "next/image";

const Section = styled.section`
  padding: 1rem 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  .right {
    order: 2;
  }

  .section__imgContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 500px) {
      align-items: center;
    }
  }

  .section__infoContainer {
    overflow: hidden;
    border-radius: 8px;
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  p,
  h2 {
    max-width: 75rem;
    margin: 0 auto;
  }

  h2 {
    font-weight: 500;
  }

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

function StyledSection({ children, color, imgSrc, left }) {
  return (
    <Section className={color ? "section-standard" : "section-white"}>
      <div
        className={
          left ? "section__infoContainer left" : "section__infoContainer right"
        }
      >
        {children}
      </div>
      <div className='section__imgContainer'>
        <Image src={`/imgs/${imgSrc}`} alt={imgSrc} width='250' height='300' />
      </div>
    </Section>
  );
}

export default StyledSection;
