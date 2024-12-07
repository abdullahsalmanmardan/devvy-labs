import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We go beyond delivering software; we deliver solutions that
            transform your business. Here&apos;s what makes us the trusted
            partner for businesses worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* USP Card */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/icons/expertise.svg"
              alt="Expertise"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Cutting-Edge Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mastery in AI, cloud, blockchain, and modern technologies to
              future-proof your solutions.
            </p>
          </div>
          {/* USP Card */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/icons/delivery.svg"
              alt="Fast Delivery"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Rapid Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Agile processes ensure your projects are delivered on time without
              compromising quality.
            </p>
          </div>
          {/* USP Card */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/icons/clients.svg"
              alt="Proven Track Record"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Proven Track Record
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Trusted by over 200+ clients globally with consistent 5-star
              reviews and referrals.
            </p>
          </div>
          {/* USP Card */}
          <div className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Image
              src="/icons/cost-effective.svg"
              alt="Cost-Effective Solutions"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Cost-Effective
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              High-quality solutions that meet your budget without sacrificing
              functionality or performance.
            </p>
          </div>
        </div>
        {/* Testimonials or Client Logos */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            What Our Clients Say
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Testimonial Card */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md">
              <p className="italic text-gray-600 dark:text-gray-300">
                &quot;This team exceeded our expectations! Their expertise and
                commitment transformed our business.&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-800 dark:text-white">
                - John Doe, CEO of TechCorp
              </p>
            </div>
            {/* Client Logos */}
            <div className="flex items-center gap-6 mt-6">
              <Image
                src="/logos/client1.png"
                alt="Client 1"
                width={100}
                height={50}
              />
              <Image
                src="/logos/client2.png"
                alt="Client 2"
                width={100}
                height={50}
              />
              <Image
                src="/logos/client3.png"
                alt="Client 3"
                width={100}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
