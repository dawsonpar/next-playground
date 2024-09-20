import BlurFade from "@/components/magicui/blur-fade";

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col gap-1">
        <BlurFade delay={0.25} inView>
          <h1 className="text-5xl sm:text-8xl font-medium text-pretty text-primaryColor">
            Dawson Par
          </h1>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <h2 className="text-xl sm:text-3xl xl:text-4xl/none font-thin text-pretty text-center text-primaryColor">
            Software Engineer
          </h2>
        </BlurFade>
      </div>
    </section>
  );
};
