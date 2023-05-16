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
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
import GFA from "../assets/company/GFA.png";
import UTime from "../assets/company/U_Time.png";
import WebDev from "../assets/company/webdev.png";

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
        "I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Alex does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Alex optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };