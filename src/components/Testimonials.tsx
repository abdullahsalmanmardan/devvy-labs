"use client"
import { useState } from "react";
import { testimonials } from "../../data/data"; // Assuming you have a testimonials data file.

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from our satisfied clients who have benefited from our
            solutions.
          </p>
        </div>

        {/* Carousel for Testimonials */}
        <div id="testimonial-carousel" className="relative w-full">
          {/* Carousel wrapper */}
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.projectName}
                className={`${
                  currentIndex === index ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
                  <p className="text-lg italic text-gray-600 dark:text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex justify-center mt-4">
                    {/* Display client stars */}
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < testimonial.rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 17.25l-6.18 3.25 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.23 1.64 7.03L12 17.25z"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-800 dark:text-white">
                    {testimonial.clientName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.projectName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

export default Testimonials;
