import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Sample FAQ data
  const faqData: FAQItem[] = [
    {
      question: "What services do you provide?",
      answer:
        "We offer custom software development, cloud integration, AI/ML solutions, mobile app development, and more. Our team specializes in building scalable, high-performance solutions tailored to your business needs.",
    },
    {
      question: "How much does it cost to build custom software?",
      answer:
        "The cost of building custom software depends on various factors such as the complexity of the project, features required, and the timeline. We offer flexible pricing models based on the project scope and requirements.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process is broken down into several phases: consultation and requirement analysis, design and prototyping, development, and testing, followed by deployment and post-launch maintenance. Each phase ensures quality and timely delivery.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline for a project depends on the scope and complexity of the requirements. On average, a typical custom software project takes between 3 to 6 months. We provide detailed project timelines during the initial consultation.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer post-launch support to ensure smooth operation and address any issues that may arise. We also provide software maintenance services to keep your application up to date with new features and security patches.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null); // To track which FAQ is expanded

  const toggleAnswer = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index)); // Toggle the visibility of answer
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Here are answers to some common questions we receive.
        </p>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <div className="text-gray-600 mt-4">
                {expanded === index ? (
                  <p>{faq.answer}</p>
                ) : (
                  <>
                    <p>{faq.answer.slice(0, 150)}...</p>
                    <button
                      onClick={() => toggleAnswer(index)}
                      className="text-blue-600 hover:text-blue-800 focus:outline-none mt-2"
                    >
                      Show More
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
