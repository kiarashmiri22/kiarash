"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const faqData = [
  {
    question: "What technologies do you work with?",
    answer:
      "Mainly React, Next.js, TypeScript, and Tailwind on the frontend, Node.js and Python on the backend, and Arduino/embedded C++ for hardware projects.",
  },
  {
    question: "Do you take on freelance or contract work?",
    answer:
      "Yes. Reach out with a short description of the project and I'll get back to you.",
  },
  {
    question: "Can you handle both frontend and backend?",
    answer:
      "Yes — I usually work across the full stack, from the UI down to the API and database.",
  },
  {
    question: "Do you also work on hardware projects?",
    answer:
      "Yes. I design and build embedded projects with Arduino, including custom PCB-free builds like the LED word clock in my projects section.",
  },
  {
    question: "What's the best way to reach you?",
    answer:
      "Email or Telegram both work — see the Contact section below.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className=" py-16 text-white">
      <div className="container">
        <div className=" mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-green-400 uppercase text-sm">
              Popular questions
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Frequently asked questions
            </h2>
          </div>
          <Accordion className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 rounded-lg border-none px-4"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-4 **:data-[slot=accordion-trigger-icon]:hidden">
                  {item.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
