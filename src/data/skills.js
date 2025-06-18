import { BiCodeAlt, BiBookHeart } from "react-icons/bi";
import { RiPencilRuler2Line } from "react-icons/ri";

export const skillsData = [
  {
    Icon: BiCodeAlt,
    title: "Software Developer",
    description:
      "I love to code and enjoy bringing ideas to life on a browser or mobile device.",
    subtitles: [
      { heading: "Languages I speak:", content: "JS, TS, HTML, CSS" },
      {
        heading: "Dev Skills:",
        content: [
          "React & React Native",
          "Node.js & API Integration",
          "Frontend & Backend",
          "Web & Mobile Dev",
          "AI/ML Integration",
          "...and more!",
        ],
      },
    ],
  },
  {
    Icon: RiPencilRuler2Line,
    title: "Designer",
    description:
      "I value clean and simple design patterns and thoughtful UI/UX decisions.",
    subtitles: [
      {
        heading: "Things I enjoy designing:",
        content: "Web & Mobile Apps, UI/UX",
      },
      {
        heading: "Design Skills:",
        content: [
          "Photoshop",
          "Illustrator",
          "Adobe XD",
          "Figma",
          "Wireframes",
          "Modern design principles",
        ],
      },
    ],
  },
  {
    Icon: BiBookHeart,
    title: "Mentor",
    description:
      "I am empathy-driven and want to ensure everyone is coding to the best of their ability.",
    subtitles: [
      {
        heading: "Experiences I draw from:",
        content:
          "1000s of hours of dev experience, creating all types of projects",
      },
      {
        heading: "Mentorship Offerings:",
        content: [
          "Code Reviews",
          "Project Consultations",
          "One-on-one Instruction",
          "Rubber Ducking",
          "Practice Interviews",
          "Testing & Feedback",
        ],
      },
    ],
  },
];
