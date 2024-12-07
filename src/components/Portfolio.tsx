import { caseStudies } from "../../data/data";
import Image from "next/image";
import { useState } from "react";

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length
    );
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our successful projects and see how we’ve delivered
            innovative solutions for our clients.
          </p>
        </div>

        {/* Carousel Section */}
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Carousel Item */}
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`${
                  currentIndex === index ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <Image
                  src={study.image}
                  alt={study.title}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-white"
                }`}
                aria-current={currentIndex === index ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;