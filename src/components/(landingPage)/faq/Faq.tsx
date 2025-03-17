import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 px-[20rem] pt-16 pb-20">
      {" "}
      <div>
        <p className="text-secondaryColor text-center text-md md:text-xl font-semibold leading-normal">
          FAQ
        </p>
        <h1 className="text-primaryColor text-center text-4xl font-bold leading-normal max-w-lg">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-[90%]">
          <AccordionItem
            className="border-2 p-3 border-primaryColor"
            value="item-1"
          >
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
