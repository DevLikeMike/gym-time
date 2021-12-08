import styled from "styled-components";
import StyledContainer from "./StyledContainer";

const HeroSection = styled.section`
  padding: 1rem 0;
  background-color: #000000;
  color: #fff;
  position: relative;
  min-height: 50vh;
  width: 100%;
  background-image: url("https://images.pexels.com/photos/4753898/pexels-photo-4753898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;

  .hero--content {
    max-width: 40rem;

    @media (max-width: 900px) {
      max-width: 25rem;
    }

    @media (max-width: 768px) {
      max-width: 20rem;
    }
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <StyledContainer>
        <div className='hero--content'>
          <h1>Metro Fitness Gym</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, laboriosam? Repellat, ratione. Eos ratione at rem,
            doloremque maiores omnis ab deserunt aperiam in, dolores eaque
            voluptatibus assumenda illum quas distinctio!
          </p>
        </div>
      </StyledContainer>
    </HeroSection>
  );
}
