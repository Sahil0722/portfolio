export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
};

export type ProjectItem = {
  name: string;
  stack: string[];
  description: string;
  github: string;
  demo: string;
  details: string;
};

export const profile = {
  name: "Sahil Tanawade",
  role: "Software Engineer (Backend)",
  intro:
    "Backend engineer with 4 years of experience designing scalable systems, automation pipelines, and data-driven architectures across logistics and AI-powered recruitment platforms. I focus on reliability, performance, and maintainable software that delivers measurable impact.",
  taglineWords: [
    "Designing scalable backend systems.",
    "Optimizing performance at scale.",
    "Building reliable data architectures."
  ],
  avatar: "/profile-photo.png"
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

export const skillPills = [
  "Ruby on Rails",
  "FastAPI",
  "React.js",
  "Redis",
  "PostgreSQL",
  "MySQL",
  "RabbitMQ",
  "Kafka",
  "Docker",
  "Kubernetes",
  "AWS",
  "Data Structures & Algorithms",
  "System Design"
];

export const journey = [
  { year: "2018", title: "Computer Engineering", note: "Started B.E. at MCT's Rajiv Gandhi Institute Of Technology." },
  { year: "2022", title: "Industry entry", note: "Joined Cogoport and moved from intern to associate engineer." },
  { year: "2025", title: "SDE 2 role", note: "Advanced into senior ownership with backend-heavy product systems." }
];

export const experiences: ExperienceItem[] = [
  {
    company: "Eagle Inbrit",
    role: "SDE 2",
    duration: "Oct 2025 - Present",
    achievements: [
      "Leading backend implementation for scalable product modules.",
      "Designing robust system components with a strong focus on reliability.",
      "Driving architecture and code quality decisions across services."
    ]
  },
  {
    company: "Skima AI",
    role: "Software Engineer",
    duration: "Aug 2024 - Oct 2025",
    achievements: [
      "Built backend systems for AI-powered recruitment workflows.",
      "Contributed to data-driven architecture for high-volume candidate processing.",
      "Improved performance and maintainability of core platform services."
    ]
  },
  {
    company: "PROPERTYPISTOL.com",
    role: "Software Engineer",
    duration: "May 2023 - Jul 2024",
    achievements: [
      "Developed backend services supporting business-critical workflows.",
      "Designed scalable APIs and improved operational stability.",
      "Collaborated across teams to ship high-impact features."
    ]
  },
  {
    company: "Cogoport",
    role: "Associate Software Engineer",
    duration: "Jul 2022 - Apr 2023",
    achievements: [
      "Built and maintained backend modules in logistics domain systems.",
      "Delivered production features with focus on performance and correctness.",
      "Worked with peers to improve engineering velocity and reliability."
    ]
  },
  {
    company: "Cogoport",
    role: "Associate Software Engineer Intern",
    duration: "Feb 2022 - Jun 2022",
    achievements: [
      "Contributed to backend feature development in production systems.",
      "Learned and applied software engineering fundamentals in a fast-paced team.",
      "Supported feature delivery with testing and debugging."
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    name: "Customer Attrition Analysis",
    stack: ["Python", "Machine Learning", "Neural Networks", "Decision Trees", "Gradient Boosting"],
    description:
      "Telecom attrition prediction project with model benchmarking and data-driven feature engineering.",
    github: "https://github.com/your-username/customer-attrition-analysis",
    demo: "https://example.com/customer-attrition-analysis",
    details:
      "Built and compared multiple ML models with strong results (up to 95.5% accuracy). Performed data cleaning, correlation analysis, feature selection, and end-to-end evaluation."
  },
  {
    name: "Fitness Gym Website",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    description: "Functional gym membership website with registration workflows and printable confirmations.",
    github: "https://github.com/your-username/fitness-gym-website",
    demo: "https://example.com/fitness-gym-website",
    details:
      "Developed a full web workflow for user registration and membership plan selection, with server-backed form handling and print-ready confirmation generation."
  }
];

export const skillCategories = [
  {
    category: "Backend",
    items: [
      { name: "Ruby on Rails", value: 92 },
      { name: "FastAPI", value: 84 },
      { name: "REST APIs", value: 91 },
      { name: "Data Modeling", value: 88 },
      { name: "Redis", value: 85 },
      { name: "PostgreSQL / MySQL", value: 89 }
    ]
  },
  {
    category: "Core Engineering",
    items: [
      { name: "Data Structures & Algorithms", value: 90 },
      { name: "System Design", value: 90 },
      { name: "OOP", value: 88 },
      { name: "RDBMS", value: 88 },
      { name: "Problem Solving", value: 92 }
    ]
  },
  {
    category: "DevOps & Messaging",
    items: [
      { name: "Docker", value: 88 },
      { name: "Kubernetes", value: 80 },
      { name: "RabbitMQ", value: 86 },
      { name: "Kafka", value: 84 },
      { name: "CI/CD", value: 86 },
      { name: "AWS", value: 84 }
    ]
  },
  {
    category: "Frontend & Languages",
    items: [
      { name: "React.js", value: 82 },
      { name: "JavaScript", value: 86 },
      { name: "Python", value: 85 },
      { name: "C++", value: 78 },
      { name: "SQL", value: 88 }
    ]
  }
];

export const socials = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/sahil-tanawade-577098201",
  email: "tanawadesahil13@gmail.com",
  phone: "+91 9892162794"
};
