import BlurFade from "@/components/magicui/blur-fade";
import Particles from "@/components/magicui/particles";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [primaryColor, setPrimaryColor] = useState("#ffffff");

  useEffect(() => {
    // Extract the primary color from CSS
    const rootStyle = getComputedStyle(document.documentElement);
    const primaryColorValue = rootStyle
      .getPropertyValue("--primary-color")
      .trim();
    setPrimaryColor(primaryColorValue);
  }, []);

  return (
    <section className="snap-section flex items-center justify-center relative">
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={80}
        size={2}
        color={primaryColor}
        refresh
      />
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
