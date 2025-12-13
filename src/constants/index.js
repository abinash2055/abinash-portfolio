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
  robust,
  tesla,
  shopify,
  pose,
  music,
  Estore,
  Cambridge,
  BlogApp,
  Shikshalaya,
  threejs,
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

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sushil Subedi",
//     designation: "Founder",
//     company: "Robust InfoTech",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38q24-mOA8IBBrOStB750OwqQK-ifcBYU5w&s",
//   },
//   {
//     testimonial:
//       "I've never met a developer who truly cares about their clients' success like Rick does with Machine Learning projects.",
//     name: "Mahesh Singh Khathayat",
//     designation: "HOD",
//     company: "Department Head",
//     image:
//       "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/486481325_10152182311344978_7880530672113910804_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5wttvY7DH-0Q7kNvwEJBl7e&_nc_oc=Adnsx80hfwGu_NAf2xuKSLuZ7mt_vHYC9SKVJ9aMfPYU621rNWk-NMqFPo7lMMCycT_dpa4SumYP9CxzNfftqndO&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=Y9yHXsfzmvLE4H7Usn9KNg&oh=00_Afj7nHEi17tK-iLQvkxgzFywPNR_bfNI2ZyHvPBRa9P15w&oe=69207375",
//   },
//   {
//     testimonial:
//       "After Abinash optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

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
      "A Django-based web application built with Python that allows users to play local MP3 music files with a simple text-based interface.",
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
      "An e-commerce platform that allows users to browse products, order item to a shopping cart, place orders, and manage their account with a secure checkout process.",
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
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
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
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
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

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, experiences, projects };
