"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

interface CollapsibleProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {

  return (
    <div>
      <div
        className="faq-question flex items-center justify-between cursor-pointer "
        onClick={onToggle}
      >
        <button
          className="w-10 h-10 border-2 bg-[#D9D9D9] flex items-center justify-center text-xl font-bold rounded-full transition-transform duration-300"
          aria-label="Toggle"
        >
          <span
            className="text-3xl mb-1 font-extralight flex items-center justify-center"
           
          >
            {isOpen ? "-" : "+"}
          </span>
        </button>
        <h4 className="ml-4 flex-1 text-lg font-semibold">{question}</h4>
      </div>
      <div
        className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600 text-base pl-12 mt-2">{answer}</div>
      </div>
      <hr className="border-gray-300 mt-4" />
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

export const FrequentlyAskedQuestions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQ[] = [
    {
      question: "What is FBX?",
      answer: "Lorem ipsum dolor sit amet consectetur. A facilisis vestibulum faucibus nulla amet erat pellentesque habitasse.",
    },
    {
      question: "What is Fulfillment?",
      answer: "Fulfillment is the process of completing orders.",
    },
    {
      question: "How do I make payments for fulfillments made?",
      answer: "Payments can be made via our secure online payment gateway.",
    },
    {
      question:
        "Is there any way I can book a storehouse to keep my livestock?",
      answer:
        "Yes, our platform allows you to book storage spaces for livestock securely.",
    },
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <Fade duration={3000}>
    <div className="py-10 flex flex-col justify-center w-full h-auto bg-[#F8F2F2] gap-6 px-6 md:px-16 md:py-20">
      <h2 className="font-bold text-center text-3xl md:text-5xl mb-10">
        Answers to Your Questions
      </h2>
      {faqData.map((faq, index) => (
        <Collapsible
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleIndex(index)}
        />
      ))}
    </div>
    </Fade>
  );
};
