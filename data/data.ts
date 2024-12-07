interface Service {
  title: string;
  description: string;
  icon: string; // URL or icon class
}

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  stacks: string[]; // Technologies used
  duration: string; // e.g., "3 months", "6 weeks"
  start_date: string; // e.g., "2024-01-01"
  end_date: string; // e.g., "2024-03-31"
}

export interface Testimonial {
  quote: string;
  clientName: string;
  projectName: string;
  rating: number;
}

export const services: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Building responsive and scalable web applications tailored to your needs.",
    icon: "/icons/web-development.svg",
  },
  {
    title: "Frontend Development",
    description:
      "Creating stunning user interfaces with React, Next.js, and Tailwind CSS.",
    icon: "/icons/frontend.svg",
  },
  {
    title: "Backend Development",
    description:
      "Building robust APIs and server-side applications with Node.js, Express, and Ruby on Rails.",
    icon: "/icons/backend.svg",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications using React Native.",
    icon: "/icons/mobile.svg",
  },
  {
    title: "DevOps Solutions",
    description:
      "Automating CI/CD pipelines and managing cloud infrastructure using AWS, Terraform, and Docker.",
    icon: "/icons/devops.svg",
  },
  {
    title: "Database Management",
    description:
      "Optimizing databases with SQL, PostgreSQL, and MongoDB for high-performance applications.",
    icon: "/icons/database.svg",
  },
  {
    title: "Microservices Architecture",
    description:
      "Designing and implementing microservices with RabbitMQ and Kafka.",
    icon: "/icons/microservices.svg",
  },
  {
    title: "AI/ML Solutions",
    description:
      "Integrating AI/ML models into applications for smarter user experiences.",
    icon: "/icons/ai-ml.svg",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Developed a scalable e-commerce platform with real-time inventory and seamless checkout.",
    image: "/portfolio/ecommerce.png",
    stacks: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    duration: "3 months",
    start_date: "2024-01-01",
    end_date: "2024-03-31",
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Built an AI-based analytics dashboard to track user behavior and generate insights.",
    image: "/portfolio/analytics.png",
    stacks: ["Python", "TensorFlow", "React", "AWS"],
    duration: "4 months",
    start_date: "2023-09-01",
    end_date: "2023-12-31",
  },
  {
    title: "Mobile Banking App",
    description:
      "Created a secure, user-friendly mobile banking app with real-time transaction updates.",
    image: "/portfolio/banking.png",
    stacks: ["React Native", "Firebase", "Node.js"],
    duration: "6 months",
    start_date: "2023-04-01",
    end_date: "2023-09-30",
  },
  {
    title: "Cloud Migration",
    description:
      "Migrated an enterprise system to the cloud, improving performance and reducing costs.",
    image: "/portfolio/cloud.png",
    stacks: ["AWS", "Terraform", "Docker"],
    duration: "2 months",
    start_date: "2023-10-01",
    end_date: "2023-11-30",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "This is a fantastic service. The team delivered beyond expectations!",
    clientName: "John Doe",
    projectName: "E-Commerce Platform",
    rating: 5,
  },
  {
    quote: "Very satisfied with the outcome. Highly recommend!",
    clientName: "Jane Smith",
    projectName: "Mobile App Development",
    rating: 4,
  },
  {
    quote:
      "The software solution was tailored perfectly to our needs. Excellent work!",
    clientName: "Michael Johnson",
    projectName: "CRM System Integration",
    rating: 5,
  },
  {
    quote:
      "Great experience. The team was professional and efficient throughout the project.",
    clientName: "Sarah Williams",
    projectName: "AI Chatbot Development",
    rating: 4,
  },
  {
    quote: "A seamless process from start to finish. We saw great results!",
    clientName: "David Brown",
    projectName: "Custom ERP Solution",
    rating: 5,
  },
  {
    quote:
      "The team was responsive and quick to adapt to our changing requirements.",
    clientName: "Linda Martinez",
    projectName: "Cloud-based Data Management",
    rating: 4,
  },
  {
    quote: "Impressive turnaround time and exceptional attention to detail!",
    clientName: "James Lee",
    projectName: "Website Redesign",
    rating: 5,
  },
  {
    quote:
      "We are extremely happy with the product delivered. Highly recommended!",
    clientName: "Emily Clark",
    projectName: "E-Commerce Platform Redesign",
    rating: 5,
  },
  {
    quote:
      "Professional, knowledgeable, and easy to work with. Thank you for the great work!",
    clientName: "Robert Hall",
    projectName: "Business Analytics Tool",
    rating: 4,
  },
  {
    quote:
      "A very positive experience overall. The software really helped streamline our operations.",
    clientName: "Patricia Young",
    projectName: "Inventory Management System",
    rating: 5,
  },
];
