import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    // {
    //   name: "Flutter",
    //   icon: "/assets/tech/flutter.svg",
    //   link: "https://flutter.dev/",
    // },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    // {
    //   name: "NextAuth.js",
    //   icon: "/assets/tech/nextauthjs.png",
    //   link: "https://next-auth.js.org/",
    // },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    // {
    //   name: "Figma",
    //   icon: "/assets/tech/figma.svg",
    //   link: "https://www.figma.com/",
    // },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  
  {
    title: "Chandigarh University ",
    company_name: "Bachelor of Engineering in Computer Science and Engineering (B.E.) - CGPA: 7.78",
    icon: "/assets/company/CU.svg",
    iconBg: "#E6DEDD",
    date: "August 2023 - June 2027 (Expected)",
    points: [
      "Pursuing a Bachelor of Engineering degree in Computer Science and Engineering with a focus on software development, algorithms, and data structures.",
      "Gained hands-on experience in web development technologies including React, Node.js, and database management through coursework and projects.",
      "Actively participated in coding competitions and hackathons, enhancing problem-solving skills and teamwork.",
      "Collaborated on various academic projects that involved building web applications and software solutions.",
    ],
  },
  {
    title: "College Of Commerce Arts & Science",
    company_name: "Intermediate in PCM",
    icon: "/assets/company/COC.svg",
    iconBg: "#E6DEDD",
    date: "March 2020 - June 2022",
    points: [
      "Graduated with a strong foundation in Physics, Chemistry, and Mathematics, achieving a score of 85%.",
      "Engaged in various extracurricular activities, including coding competitions and science fairs, enhancing problem-solving skills.",
      "Collaborated on group projects that fostered teamwork and effective communication.",
      "Participated in workshops and seminars to broaden knowledge in emerging technologies.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
    {
  name: "Shortest Path Spotlight",
  description:
    "Shortest Path Spotlight is a full-stack MERN application that lets users build weighted graphs and visually compare Dijkstra's, Bellman-Ford, and A* shortest path algorithms through an interactive, step-by-step animation.",
  tags: [
    {
      name: "javascript",
      color: "blue-text-gradient",
    },
    {
      name: "react",
      color: "green-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
    {
      name: "node.js",
      color: "orange-text-gradient",
    },
    {
      name: "mongodb",
      color: "yellow-text-gradient",
    },
  ],
  image: "/assets/projects/shortest-path.png",
  source_code_link:
    "https://github.com/Harshit-Arya-07/Shortest-path-spotlight",
  deployed_link:
    "https://shortest-path-spotlight.netlify.app/",
}
,
 
  {
    "name": "StressFree",
  "description": "StressFree is an AI-powered mental health companion app for Indian college students. Track daily stress/mood patterns, get personalized study insights, access instant coping tools, and discover campus safe zones. Built with React Native, Node.js, and AI/ML for real-time emotional support.",
  "tags": [
    {
      "name": "react-native",
      "color": "green-text-gradient"
    },
    {
      "name": "typescript",
      "color": "blue-text-gradient"
    },
    {
      "name": "node.js",
      "color": "orange-text-gradient"
    },
    {
      "name": "mongodb",
      "color": "green-text-gradient"
    },
    {
      "name": "tailwindcss",
      "color": "pink-text-gradient"
    },
    {
      "name": "openai",
      "color": "purple-text-gradient"
    },
    {
      "name": "socket.io",
      "color": "yellow-text-gradient"
    },
    {
      "name": "ai-ml",
      "color": "indigo-text-gradient"
    }
  ],
  image: "/assets/projects/Stress-free.png",
  source_code_link: "https://github.com/Harshit-Arya-07/StressFree",
  deployed_link: "https://github.com/Harshit-Arya-07/StressFree"
},

  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
    source_code_link:
      "https://github.com/Harshit-Arya-07/Facility-Management-System",
    deployed_link:
      "https://github.com/Harshit-Arya-07/Facility-Management-System",
  },
  
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Harshit-Arya-07",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/harshitarya7",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/HarshitAry6327",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/_harshit_07_x?igsh=MXg1MjZ4NWV6ejBrdA==",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
