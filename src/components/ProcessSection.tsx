import {
  FaHandshake,
  FaPencilRuler,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Our Process
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Here’s how we work with you to bring your project to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Step 1: Consultation and Requirement Analysis */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaHandshake className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Consultation & Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We begin by understanding your business needs and gathering all
              the necessary requirements for your project.
            </p>
          </div>

          {/* Step 2: Design and Prototyping */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaPencilRuler className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Design & Prototyping
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our designers create wireframes and prototypes that bring your
              vision to life with a focus on user experience.
            </p>
          </div>

          {/* Step 3: Development and Testing */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Development & Testing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We develop high-quality code while running extensive tests to
              ensure the product works as expected.
            </p>
          </div>

          {/* Step 4: Deployment and Maintenance */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <FaCogs className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Deployment & Maintenance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Once everything is in place, we deploy your project and continue
              to provide maintenance for optimal performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
