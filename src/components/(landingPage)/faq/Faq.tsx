"use client";
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { generalQuestions, launchQuestions } from "@/utils/faq/questions";
import QuestionAccordion from "./QuestionAccordion";
import { motion } from "framer-motion";
import { faqTextContainer } from "@/utils/framerMotion/container";

function Faq() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 custom-lg:px-[20rem] px-4 pt-10 pb-20">
      {" "}
      <motion.div
        variants={faqTextContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-secondaryColor text-center text-md md:text-xl font-semibold leading-normal">
          FAQ
        </p>
        <h1 className="text-primaryColor text-center text-4xl font-bold leading-normal max-w-lg">
          Frequently Asked Questions
        </h1>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-center items-center w-full gap-4"
      >
        <div>
          <h1 className="text-primaryColor text-center text-md md:text-xl leading-normal font-extrabold">
            General
          </h1>
        </div>
        {/* General Questions FAQ Accordion */}
        <Accordion type="single" collapsible className="w-[90%]">
          {generalQuestions.map((question, index) => (
            <QuestionAccordion
              key={index}
              questionAsked={question}
              value={`item-${index}`}
            />
          ))}
        </Accordion>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-center items-center w-full gap-4"
      >
        <div>
          <h1 className="text-primaryColor text-center text-md md:text-xl leading-normal font-extrabold">
            Launch & Development 🚀
          </h1>
        </div>
        {/* General Questions FAQ Accordion */}
        <Accordion type="single" collapsible className="w-[90%]">
          {launchQuestions.map((question, index) => (
            <QuestionAccordion
              key={index}
              questionAsked={question}
              value={`item-${index}`}
            />
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}

export default Faq;
{
  /* <AccordionItem
            className="border-2 p-3 border-primaryColor"
            value="item-1"
          >
            <AccordionTrigger>What is it?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-2 p-3 border-primaryColor"
            value="item-2"
          >
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="border-2 p-3 border-primaryColor"
            value="item-3"
          >
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem> */
}
