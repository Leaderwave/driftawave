
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Where do you operate?",
    answer: "We operate worldwide, with a focus on unique and inspiring destinations.",
  },
  {
    question: "What is a typical budget?",
    answer: "Budgets vary depending on the destination, duration, and activities. We work with you to create a bespoke package that fits your needs.",
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking at least 3-6 months in advance to ensure availability and the best rates.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-canvas-light py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold text-text-dark">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-stroke">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold text-text-dark">{faq.question}</p>
                {openIndex === index ? <Minus /> : <Plus />}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-text-dark/80">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
