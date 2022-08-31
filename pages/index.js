import Hero from "@/components/Hero";
import Section from "@/components/StyledSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Section color={true}>
          <h2 className='text-center'>Turn Your New Years into Confetti!!!</h2>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            incidunt? Eum illum dolor laboriosam nulla sed quia, itaque magni?
            Laborum nihil quas dicta et eius cumque qui dolorem placeat.
            Cupiditate debitis nam rem iste autem, pariatur porro aliquam
            voluptates possimus laboriosam, nisi, dignissimos commodi non!
          </p>
        </Section>
        <Section color={false}>
          <h2 className='text-center'>Summer Is Ending Soon</h2>
          <p className='text-center'>
            With summer ending school is right around the corner. Don't miss out
            on your chance to join before classes. If you sign up before 9/30/22
            you can save with our Back To School Bundle. Skip the fees and focus
            on your next class with Bailey's Health and fitness.
          </p>
        </Section>
      </div>
    </>
  );
}
