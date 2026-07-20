import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

const Platform = () => {
  return (
    <section className="md:pt-44 sm:pt-24 pt-12 relative z-1">
      <div className="container px-4">
        <div className="bg-section/10 px-16 py-14 rounded-3xl border-2 border-white/10 grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-6 overflow-hidden lg:before:right-0 before:-z-1 before:opacity-10 ">
          <div className="lg:col-span-8 col-span-12">
            <h2 className="text-white sm:text-[40px] text-3xl mb-6">
              Have a project in mind?
            </h2>
            <p className="text-muted/60 text-lg">
              Whether it&apos;s a web app, an API, or something that needs a
              microcontroller and a soldering iron — let&apos;s talk about it.
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex lg:justify-end lg:mt-0 mt-7 justify-center">
              <Button
                render={<Link href="/#contact" />}
                className="flex items-center gap-2.5 text-background bg-primary hover:bg-primary/80 border border-primary py-6 px-5 rounded-lg sm:text-21 text-lg font-medium h-14"
              >
                Get in touch
                <Icon icon="lucide:arrow-right" width={20} height={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
