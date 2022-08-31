import styled from "styled-components";
import StyledContainer from "./StyledContainer";

const HeroSection = styled.section`
  padding: 1rem ${(props) => props.theme.standardPadding};
  background-color: #000000;
  color: #000;
  position: relative;
  min-height: 50vh;
  width: 100%;

  @media (max-width: 500px) {
    padding: 1rem ${(props) => props.theme.mobilePadding};
  }

  // Using the psuedo selector to add opacity to the background for better use of white text
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    background-image: url("/imgs/GymFloor.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
  }

  .hero--content {
    position: relative;
    max-width: 66rem;
    color: #fff;
    padding: 0.25rem 0.5rem;

    h1 {
      font-size: 3rem;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    p {
      max-width: 40rem;
    }

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
        <div className='bg-filter'></div>
        <div className='hero--content'>
          <h1>Bailey's Health {"&"} Fitness</h1>
          <p>
            For 30 years Bailey's has led the Jacksonville community in the
            fitness industry. Visit any of our four locations for a fun,
            friendly and inviting experience that caters to your fitness needs.
            Come join our Bailey Fitness family and thrive in an atmosphere that
            is unparalleled to any other in North Florida.
          </p>
        </div>
      </StyledContainer>
    </HeroSection>
  );
}
