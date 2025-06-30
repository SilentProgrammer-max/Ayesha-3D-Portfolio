import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Scientist & Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "ayeshaTech | X",
    icon: tcs,
    iconBg: "#383E56",
    date: "September 2023 -  Present",
    points: [
      // "Analyzing large datasets to uncover insights using Python, Pandas, and advanced statistical methods.",
      "Designed and deployed interactive dashboards and data tools using Python, Streamlit, and Matplotlib at AyeshaTech | X.",
      "Built scalable ETL pipelines and managed structured data with SQL, ensuring clean and reliable data processing.",
      "Collaborated with analysts, developers, and designers to deliver intelligent solutions using machine learning models.",
      // "Performing data cleaning, transformation, and visualization to support business decision-making.",
      "Participated in model evaluation, version control, and team reviews using Git and Jupyter Notebooks.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "AyeshaTech | X",
    icon: intelligence,
    iconBg: "#000000",
    date: "July 2023 - Present",
    points: [
      "As a Full Stack Developer at AyeshaTech | X, I build responsive and scalable web applications using modern front-end and back-end technologies.",
      "I handle both client-side and server-side development, ensuring clean code, optimized performance, and cross-platform compatibility.",
      "I convert complex requirements into seamless digital experiences, delivering fast, secure, and user-friendly web solutions.",
      "At AyeshaTech | X, I’ve developed multiple full-stack projects that enhanced client productivity and delivered measurable business results.",
    ],
  },
  {
    title: "Hacker",
    company_name: "AyeshaTech | X",
    icon: sun,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
"Worked on real-time systems and simulated cyber scenarios, gaining hands-on experience in ethical hacking and penetration testing tools.",
"Assisted in identifying vulnerabilities in web applications, ensuring secure development practices using OWASP and other security protocols.",
"Contributed to securing full-stack projects by testing, debugging, and strengthening backend APIs and user authentication systems.",
"Explored tools like Metasploit, Wireshark, and Burp Suite under AyeshaTechX, building practical skills in ethical hacking and cyber defense.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ayesha proved me wrong.",
    name: "Zella Khan",
    designation: "CFO",
    company: "Content Writers Pakistan",
    image: "https://i.ibb.co/bMBqDDv2/Zella-Khan.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ayesha does.",
    name: "VA Freelancer",
    designation: "COO",
    company: "Loker Freelance ",
    image: "https://i.ibb.co/sphKyFkn/Va.png",
  },
  {
    testimonial:
      "After Ayesha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "John",
    designation: "CEO",
    company: "USA-Based",
    image: "https://i.ibb.co/nMdg2JBx/John.jpg",
  },
];

const projects = [
  {
    name: "This Portfolio",
    description:
// "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
"A visually rich 3D portfolio built with React, Three.js, Tailwind CSS, and Vite, featuring interactive UI, animated sections, and a 3D Earth contact form powered by EmailJS. Perfect for showcasing modern web development skills in a creative, responsive layout.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tree.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "",
  },
  {
    name: "Ayesha osint toolkit",
    description:
"A full-featured OSINT (Open Source Intelligence) toolkit developed in Python to automate the extraction and analysis of publicly available data for ethical hacking and cyber investigation. It enables fast intelligence gathering from platforms such as social media, email addresses, domains, IPs—supporting digital forensics, and threat analysis with efficiency and accuracy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: intelligence2,
    source_code_link: "https://github.com/SilentProgrammer-max/Ayesha-osint-toolkit",
  },
  {
    name: "Ayesha AI Idea Generator",
    description:
"Ayesha AI Idea Generator is an AI-powered web app designed to generate unique and creative startup or project ideas based on user inputs like category, tools, and goals. Built with ReactJS, Tailwind CSS, and OpenAI API, this tool helps developers and students brainstorm innovative concepts efficiently. The system ensures smooth interaction, stores sessions, and displays AI-generated ideas in real-time, making it a valuable solution for idea planning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "markdown",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: rental,
    source_code_link: "https://github.com/SilentProgrammer-max/Ayesha-AI-Idea-Generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
