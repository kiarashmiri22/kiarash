"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "../BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { scrollToAnchor } from "@/lib/utils";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-24 pt-48 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div {...leftAnimation} className="flex flex-col items-center lg:items-start gap-10">
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <Badge
                  variant="outline"
                  className="text-base py-1.5 px-4 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-9"
                >
                  Full-Stack Developer
                </Badge>
              </div>
              <h1 className="font-medium xl:text-[64px] md:text-6xl sm:text-5xl text-4xl text-white">
                Hi, I&apos;m Kiarash Miri
              </h1>
              <p className="text-white/70 text-lg max-w-xl">
                I build products end to end — from React/Next.js interfaces
                and backend APIs to hardware and embedded systems. Comfortable
                anywhere between the browser and the circuit board.
              </p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-4 flex-wrap">
              <Button
                render={<Link href="/#portfolio" />}
                onClick={(e) => {
                  if (scrollToAnchor("/#portfolio")) e.preventDefault();
                }}
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-6 px-7 cursor-pointer h-12"
              >
                View Projects
                <Icon icon="lucide:arrow-right" width={20} height={20} />
              </Button>
              <Button
                render={<Link href="/#contact" />}
                onClick={(e) => {
                  if (scrollToAnchor("/#contact")) e.preventDefault();
                }}
                variant="outline"
                className="text-base bg-transparent hover:bg-white/5 flex items-center gap-2 border border-white/20 rounded-lg font-semibold text-white py-6 px-7 cursor-pointer h-12"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="justify-self-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-full bg-gradient-to-br from-primary/25 to-primary/5 border border-white/10 flex items-center justify-center">
              <div className="w-[85%] aspect-square rounded-full bg-dark_grey/40 border border-white/10 flex items-center justify-center">
                <span className="text-white/90 font-medium text-[96px] leading-none select-none">
                  KM
                </span>
              </div>
              <div className="absolute -top-3 -right-3 bg-primary/15 backdrop-blur-xs p-4 rounded-full border border-white/10">
                <Icon icon="logos:react" width={32} height={32} />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-primary/15 backdrop-blur-xs p-4 rounded-full border border-white/10">
                <Icon icon="devicon:arduino" width={32} height={32} />
              </div>
            </div>
          </motion.div>
        </div>
        <BrandLogo />
      </div>
    </section>
  );
};

export default Hero;
