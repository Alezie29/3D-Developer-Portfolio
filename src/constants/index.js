import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    shopify,
    tripguide,
    threejs,
  } from "../assets";
  
import GFA from "../assets/company/GFA.png";
import UTime from "../assets/company/U_Time.png";
import WebDev from "../assets/company/webdev.png";
import JSexercises from "../assets/company/jsexercises.png";
import RPS from "../assets/company/rps.png";
import AM from "../assets/company/website.png";
import andrewImage from "../assets/images/Andrew.jpg";
import faiiImage from "../assets/images/Faii.jpg";
import fraImage from "../assets/images/Francesco.jpg";

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
      title: "React Native Developer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Documentat Management",
      company_name: "GFA Consulting LTD",
      icon: GFA,
      iconBg: "#FFFFFF",
      date: "July 2021 - Sep 2021",
      points: [
        "Remotely working in Thailand during COVID-19 pandemic.",
        "Filing, Spreadsheet Organization, Documentation Management",
        "Improving Microsoft Suite Skills",
      ],
    },
    {
      title: "Graphic Design",
      company_name: "U-Time Fitness",
      icon: UTime,
      iconBg: "#2C2C2C",
      date: "Oct 2022 - Dec 2022",
      points: [
        "Created posters for my local gym to use for advertising and marketing purposes.",
        "Collaborating with cross-functional teams including designers and managers to create high-quality products.",
        "Used tools such as PhotoShop, Adobe Illustrator and Canva",
      ],
    },
    {
      title: "Website Development",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Created my own website for Shopify to sell my products.",
        "Learnt and implemented the fundamentals of web design and including Colour Theory and Functionality.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Self-Employed",
      icon: WebDev,
      iconBg: "#3F5B70",
      date: "Nov 2022 - Present",
      points: [
        "Creating visually appealing and user-friendly website layouts.",
        "Implementing responsive design principles to ensure optimal viewing experience across devices.",
        "Collaborating with clients to understand their brand identity and incorporating it into the website design.",
        "Developing custom website features and functionalities using HTML, CSS, and JavaScript.",
        "Conducting thorough testing and debugging to ensure the website functions smoothly.",
       "Optimizing websites for search engines (SEO) to improve visibility and organic traffic.",
       " Providing ongoing website maintenance and updates to keep the site current and secure.",
        "Incorporating accessibility standards to ensure inclusive user experiences.",
        "Keeping up-to-date with industry trends and best practices in web design.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make such beautiful products, but Alex proved me wrong.",
      name: "Faii Rittiron",
      designation: "Marketing",
      company: "U-Time Fitness Phuket",
      image: faiiImage,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Alex does.",
      name: "Francesco Palazzoli",
      designation: "Staff",
      company: "The Modern Estate",
      image: fraImage,
    },
    {
      testimonial:
        "After Alex optimized our website, our traffic increased by 30%. It look's alot more modern and professional.",
      name: "Andrew Mckenzie",
      designation: "CEO",
      company: "GFA Consulting Ltd.",
      image: andrewImage,
    },
  ];
  
  const projects = [
    {
      name: "JavaScript Exercises",
      description:
        "Solved several problems provided by 'The Odin Project' that helped me understand core principles of programming, all done in the JavaScript programming lanaguage",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: JSexercises,
      source_code_link: "https://github.com/Alezie29/JavaScript-Exercises-Solutions",
    },
    {
      name: "Rock, Paper, Scissors",
      description:
        "Created a fully functional game of Rock, Paper, Scissors that the user can play with the computer, scores are tracked and a winner is declared at the end of the game!",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: RPS,
      source_code_link: "https://github.com/Alezie29/rock-paper-scissors-",
    },
    {
      name: "This Website!",
      description:
        "Creating this website has helped me strenghten my fundamentals and taught me many things about JS including different libraries such as three.js that help make 3D models.",
      tags: [
        {
          name: "JavaScript, Three.js, React.js",
          color: "blue-text-gradient",
        },
        {
          name: "HTML, CSS",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: AM,
      source_code_link: "https://github.com/Alezie29/3D-Developer-Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };