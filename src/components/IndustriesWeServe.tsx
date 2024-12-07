import {
  FaHospital,
  FaDollarSign,
  FaShoppingCart,
  FaChalkboardTeacher,
  FaCogs,
  FaHome,
  FaIndustry,
  FaBuilding,
  FaPlane,
  FaGavel,
  FaBullhorn,
  FaCar,
} from "react-icons/fa";

const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: <FaHospital size={40} />,
      description: "Providing tailored software for healthcare management.",
    },
    {
      name: "Finance",
      icon: <FaDollarSign size={40} />,
      description:
        "Innovative solutions for financial institutions and fintech.",
    },
    {
      name: "E-commerce",
      icon: <FaShoppingCart size={40} />,
      description: "Custom e-commerce platforms and integrations.",
    },
    {
      name: "Education",
      icon: <FaChalkboardTeacher size={40} />,
      description: "Developing learning management systems and platforms.",
    },
    {
      name: "Technology",
      icon: <FaCogs size={40} />,
      description:
        "Advanced tech solutions for software development and automation.",
    },
    {
      name: "Real Estate",
      icon: <FaHome size={40} />,
      description:
        "Building platforms for real estate property management and sales.",
    },
    {
      name: "Manufacturing",
      icon: <FaIndustry size={40} />,
      description: "Optimizing manufacturing processes with custom software.",
    },
    {
      name: "Retail",
      icon: <FaBuilding size={40} />,
      description: "Transforming retail with e-commerce and inventory systems.",
    },
    {
      name: "Travel & Hospitality",
      icon: <FaPlane size={40} />,
      description:
        "Building booking systems and managing customer experiences.",
    },
    {
      name: "Legal",
      icon: <FaGavel size={40} />,
      description: "Custom solutions for law firms and legal processes.",
    },
    {
      name: "Marketing",
      icon: <FaBullhorn size={40} />,
      description: "Helping marketing agencies with automation and analytics.",
    },
    {
      name: "Automotive",
      icon: <FaCar size={40} />,
      description: "Providing solutions for vehicle management and services.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Industries We Serve
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We have experience working with businesses from a variety of
            industries, providing tailored solutions for unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="mb-4 text-blue-600">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
