"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/components/ui/card";
import { contactData } from "@/app/api/data";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-1">
      <div className="container px-4">
        <div className="text-center flex flex-col gap-4 mb-16">
          <p className="text-white font-medium">
            Better Call <span className="text-primary">Kiarash</span>
          </p>
          <h2 className="text-white sm:text-5xl text-3xl font-medium">
            Let&apos;s talk about your project
          </h2>
          <p className="text-muted/60 text-lg max-w-xl mx-auto">
            Pick whichever channel is easiest for you — I check all three and
            reply as soon as I can.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
          {contactData.map((item, index) => {
            const isExternal = item.href.startsWith("http");
            return (
              <Link
                key={index}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group block"
              >
                <Card className="h-full bg-dark_grey/35 border border-border ring-0 shadow-none hover:border-primary/60 transition-all duration-300">
                  <CardContent className="flex flex-col items-center text-center gap-4 py-4">
                    <div className="bg-primary/15 group-hover:bg-primary/25 transition-all duration-300 p-4 rounded-full">
                      <Icon
                        icon={item.icon}
                        width={32}
                        height={32}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-medium">
                        {item.label}
                      </h3>
                      <p className="text-muted/60 mt-1 break-all">
                        {item.handle}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Reach out
                      <Icon icon="lucide:arrow-right" width={16} height={16} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
