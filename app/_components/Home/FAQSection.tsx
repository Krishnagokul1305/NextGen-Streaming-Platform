"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What devices can I watch on?",
    answer:
      "You can watch on smart TVs, smartphones, tablets, streaming media players, and game consoles. Our app is available on iOS, Android, Apple TV, Roku, Fire TV, and more.",
  },
  {
    question: "How much does a subscription cost?",
    answer:
      "We offer various plans to fit your needs. Our Basic plan starts at $9.99/month, Premium at $14.99/month, and an Annual plan for $99.99/year, offering significant savings.",
  },
  {
    question: "How often is new content added?",
    answer:
      "We constantly update our library with new movies, series, and exclusive originals every week. Stay tuned to our 'New Releases' section for the latest additions!",
  },
  {
    question: "Can I create multiple profiles?",
    answer:
      "Yes, you can create up to 5 individual profiles within a single account, each with personalized recommendations and watch history. Perfect for families!",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-5 md:py-24 lg:py-32 bg-gradient-to-br  relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent opacity-50 z-0" />
      <div className="container md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            <p className="text-[#E57B78] font-normal italic text-sm mb-2">
              Frequently Asked
            </p>
            Your Questions, Our Answers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 max-w-lg text-base text-center md:text-lg"
          >
            Dive into our knowledge base for quick solutions and insights into
            your streaming experience.
          </motion.p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="mb-4"
            >
              <AccordionItem
                value={`item-${index}`}
                className="group border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-gray-800/60 to-gray-700/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-indigo-500/50"
              >
                <AccordionTrigger className="px-6 py-4 text-lg md:text-xl font-semibold text-left text-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
