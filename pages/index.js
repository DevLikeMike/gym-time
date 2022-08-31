import Hero from "@/components/Hero";
import Section from "@/components/StyledSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Section color={true} imgSrc='GymFloor.jpeg' left={true}>
          <h2>Enroll Today</h2>
          <p>
            Bailey's offers many flexible plans to fit your needs. If you're
            looking fo 24/7 access we got you covered! Need multiple locations
            or just want to stick to one, choose what is best for you! We have
            many options for you to choose from!
          </p>
          <Link href='/plans'>
            <a className='link'>Enroll Today...</a>
          </Link>
        </Section>
        <Section color={false} imgSrc='GymFloor.jpeg' left={false}>
          <h2>Summer Is Ending Soon</h2>
          <p>
            With summer ending school is right around the corner. Don't miss out
            on your chance to join before classes. If you sign up before 9/30/22
            you can save with our Back To School Bundle. Skip the fees and focus
            on your next class with Bailey's Health and fitness.
          </p>
          <Link href='/plans'>
            <a className='link'>Browse our plans...</a>
          </Link>
        </Section>
      </div>
    </>
  );
}
