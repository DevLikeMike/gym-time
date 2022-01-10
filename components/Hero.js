import styled from "styled-components";
import StyledContainer from "./StyledContainer";

const HeroSection = styled.section`
  padding: 1rem ${(props) => props.theme.standardPadding};
  background-color: #000000;
  color: #fff;
  position: relative;
  min-height: 50vh;
  width: 100%;
  background-image: url("https://images.pexels.com/photos/4753898/pexels-photo-4753898.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;

  @media (max-width: 500px) {
    padding: 1rem ${(props) => props.theme.mobilePadding};
  }

  .hero--content {
    max-width: 66rem;

    h1 {
      font-size: 6rem;
      line-height: 0.75;
      margin-bottom: 1.25rem;
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
        <div className='hero--content'>
          <h1>Metro Fitness Gym</h1>
          <p>
            For 30 years Metro Fitness has lead the Columbus community in the
            fitness industry. Visit any of our four locations for a fun,
            friendly and inviting experience that caters to your fitness needs.
            Come join our Metro Fitness family and thrive in an atmosphere that
            is unparalleled to any other in Central Ohio.
          </p>
        </div>
      </StyledContainer>
    </HeroSection>
  );
}
