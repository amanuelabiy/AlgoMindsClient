import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaQuestionCircle } from "react-icons/fa";
import Image from "next/image";

interface QuestionAccordionProps {
  questionAsked: { question: string; answer: string };
  value: string;
}

function QuestionAccordion({ questionAsked, value }: QuestionAccordionProps) {
  const { question, answer } = questionAsked;
  return (
    <AccordionItem
      className="pr-4 py-4 pl-6 bg-white rounded-3xl mt-2"
      value={value}
    >
      <AccordionTrigger className="text-primaryColor hover:no-underline text-center text-xl font-bold leading-normal">
        <div className="flex flex-row justify-center gap-4 items-center">
          <div className="">
            <Image
              alt="questionMark"
              src="/assets/images/questionMark.png"
              width={30}
              height={30}
            />
          </div>
          <p>{question}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-primaryColor text-left text-base font-extrabold leading-normal flex flex-row justify-start items-start">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default QuestionAccordion;
