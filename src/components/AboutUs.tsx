import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Since 2015, we have been dedicated to helping businesses succeed by
            leveraging cutting-edge technology. Our team of experienced
            professionals is driven by a passion for innovation, collaboration,
            and delivering exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To empower businesses with innovative and scalable software
              solutions that drive growth, efficiency, and success.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To be a global leader in software development, recognized for our
              expertise, quality, and transformative impact on businesses.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
              <li>Over a decade of software development experience</li>
              <li>Expertise in web, mobile, and cloud technologies</li>
              <li>Client-centric approach to delivering custom solutions</li>
              <li>Proven track record of driving innovation and results</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/team-photo.jpg"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
