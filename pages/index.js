import Hero from "@/components/Hero";
import Section from "@/components/StyledSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <Section dark={true}>
          <h2 className='text-center'>Turn Your New Years into Confetti!!!</h2>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            incidunt? Eum illum dolor laboriosam nulla sed quia, itaque magni?
            Laborum nihil quas dicta et eius cumque qui dolorem placeat.
            Cupiditate debitis nam rem iste autem, pariatur porro aliquam
            voluptates possimus laboriosam, nisi, dignissimos commodi non!
          </p>
        </Section>
      </div>
    </>
  );
}
