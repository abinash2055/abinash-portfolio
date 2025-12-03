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
  robust,
  pose,
  eps,
  kec,
  manank,
  prasadi,
  music,
  Estore,
  Cambridge,
  BlogApp,
  Shikshalaya,
  threejs,
} from "../assets";

// Navbar
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

// About --> overview
const services = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "Laravel Developer",
    icon: mobile,
  },
  {
    title: "Full Stack MERN Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

// All Balls
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

// All Experiences
const experiences = [
  {
    title: "Laravel Developer",
    company_name: "Robust Information Technology",
    icon: robust,
    iconBg: "#383E56",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using Laravel and related PHP technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility with Blade templates and front-end frameworks.",
      "Participating in code reviews, optimizing queries, and providing constructive feedback to other developers.",
    ],
  },
];

// All Education
// const educations = [
//   // Bachelor
//   {
//     title: "BE in Computer Engineering (Tribhuvan University)",
//     school_name: "Kathmandu Engineering College",
//     icon: kec,
//     iconBg: "#383E56",
//     date: "July 2019 - August 2023",
//     points: [
//       "Gained strong fundamentals in programming, computer systems, algorithms, networking, and electronics. Worked on multiple projects involving web development, IoT, and machine learning.",
//       "Focused on software development, data structures, hardware-software integration, and system design. Developed hands-on experience through academic projects, labs, and teamwork.",
//     ],
//   },
//   // NEB
//   {
//     title: "National Examination Board (NEB)",
//     school_name: "Prasadi Academy Secondary School",
//     icon: prasadi,
//     iconBg: "#383E56",
//     date: "July 2016 - June 2018",
//     points: [
//       "Up to Grade 10, Science covers the fundamentals of Physics (Motion, Electricity, Light), Chemistry (Matter, Reactions, pH), and Biology (Cell, Life Processes, Heredity).",
//       "Optional Mathematics introduces advanced algebra like Matrices and Sequences, extended Trigonometry (Identities, Heights), Coordinate Geometry, transformations, and basic Differentiation (Calculus).",
//     ],
//   },
//   // SLC
//   {
//     title: "School Leaving Certificate (SLC)",
//     school_name: "N. K. Singh Memorial English Preparatory Secondary School",
//     icon: eps,
//     iconBg: "#383E56",
//     date: "April 2001 - March 2016",
//     points: [
//       "Up to Grade 10, Science covers the fundamentals of Physics (Motion, Electricity, Light), Chemistry (Matter, Reactions, pH), and Biology (Cell, Life Processes, Heredity).",
//       "Optional Mathematics introduces advanced algebra like Matrices and Sequences, extended Trigonometry (Identities, Heights), Coordinate Geometry, transformations, and basic Differentiation (Calculus).",
//     ],
//   },
//   // Nursery
//   {
//     title: "Nursery",
//     school_name: "Manank Children's Paradise Secondary School",
//     icon: manank,
//     iconBg: "#383E56",
//     date: "April 2000 - March 2001",
//     points: [
//       "Nursery was a time of joyful discovery through play! I developed curiosity and fine motor skills with fun art and building.",
//       "I learned to share, talk about my feelings, and follow routines, making me confident and enthusiastic about learning my letters and numbers.",
//     ],
//   },
// ];

// All Testimonials --> what other says
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abinash proved me wrong.",
    name: "Sushil Subedi",
    designation: "Founder",
    company: "Robust InfoTech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38q24-mOA8IBBrOStB750OwqQK-ifcBYU5w&s",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Abinash does with Machine Learning projects.",
    name: "Sudeep Shakya",
    designation: "HOD",
    company: "Computer Department ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJEXQfYcNw75Ywr2RkcRjNhZvhHn9hmQEew&s",
  },
  {
    testimonial:
      "After Abinash optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Nischal Acharya",
    designation: "Supervisor",
    company: "Pulchowk Campus",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkd0E2vVCRAP1UaRLiythNCEoV4rA6ZjRg-w&s",
  },
];

// All Projects
const projects = [
  {
    name: "Personal Trainer Human Pose Visualization",
    description:
      "ML project that uses AI, Mediapipe, OpenCV, Numpy, etc that chects bicep curl, Push-up, Sit Up, Squat ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "Python ",
        color: "pink-text-gradient",
      },
    ],
    image: pose,
    source_code_link:
      "https://github.com/abinash2055/Personal_Trainer_using_Human_Pose_Visualization",
  },
  {
    name: "Music Text Player",
    description:
      "A Django-based web app built with Python that allows users to play local MP3 music files through a clean, simple text-based interface, offering an easy lightweight way to manage and enjoy audio directly from the browser.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Virtual Environment",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/abinash2055/MusicTextPlayer",
  },
  {
    name: "E-store",
    description:
      "An e-commerce platform that allows users to browse products, add items to shopping cart, place orders, manage their accounts, all while providing a secure, streamlined checkout process for a smooth shopping experience.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Estore,
    source_code_link: "https://github.com/abinash2055/E-Commerce-MERN",
  },
  {
    name: "Cambridge Job Portal",
    description:
      "An e-commerce platform that allows users to browse products, order item to a shopping cart, place orders, and manage their account with a secure checkout process.",
    tags: [
      {
        name: "laravel-blade",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Cambridge,
    source_code_link:
      "https://github.com/abinash2055/CamBridge_Job_Portal-Robust",
  },
  {
    name: "Blog App Website",
    description:
      "An e-commerce platform that allows users to browse products, order item to a shopping cart, place orders, and manage their account with a secure checkout process.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: BlogApp,
    source_code_link: "https://github.com/abinash2055/Blog-Website",
  },
  {
    name: "Shikshalaya",
    description:
      "An e-commerce platform that allows users to browse products, order item to a shopping cart, place orders, and manage their account with a secure checkout process.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Swift",
        color: "pink-text-gradient",
      },
    ],
    image: Shikshalaya,
    source_code_link: "https://github.com/abinash2055/SIKSHALAYA",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
