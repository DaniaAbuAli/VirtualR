import user1 from "./assets/profile-pictures/user1.jpg";
import user2 from "./assets/profile-pictures/user2.jpg";
import user3 from "./assets/profile-pictures/user3.jpg";
import user4 from "./assets/profile-pictures/user4.jpg";
import user5 from "./assets/profile-pictures/user5.jpg";
import user6 from "./assets/profile-pictures/user6.jpg";


const featuresData = [
  {
    id: 1,
    title: "Drag-and-Drop Interface",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6V2H8"></path>
        <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
        <path d="M2 12h2"></path>
        <path d="M9 11v2"></path>
        <path d="M15 11v2"></path>
        <path d="M20 12h2"></path>
      </svg>
    ),
    text: "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    id: 2,
    title: "Multi-Platform Compatibility",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-fingerprint"
      >
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path>
        <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"></path>
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
        <path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
        <path d="M2 16h.01"></path>
        <path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
        <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"></path>
      </svg>
    ),
    text: "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    id: 3,
    title: "Built-in Templates",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shield-half"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        <path d="M12 22V2"></path>
      </svg>
    ),
    text: "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    id: 4,
    title: "Real-Time Preview",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-battery-charging"
      >
        <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
        <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
        <path d="m11 7-3 5h4l-3 5"></path>
        <line x1="22" x2="22" y1="11" y2="13"></line>
      </svg>
    ),
    text: "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    id: 5,
    title: "Collaboration Tools",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plug-zap"
      >
        <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
        <path d="m2 22 3-3"></path>
        <path d="M7.5 13.5 10 11"></path>
        <path d="M10.5 16.5 13 14"></path>
        <path d="m18 3-4 4h6l-4 4"></path>
      </svg>
    ),
    text: "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-globe-lock"
      >
        <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"></path>
        <path d="M2 12h8.5"></path>
        <path d="M20 6V4a2 2 0 1 0-4 0v2"></path>
        <rect width="8" height="5" x="14" y="6" rx="1"></rect>
      </svg>
    ),
    text: "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

const cardsDetails = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    name: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    name: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

const reviews = [
    {
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
      user: user1,
      name: "John Doe",
      section: "Stellar Solutions",
    },
    {
      text: `I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life`,
      user: user2,
      name: "Jane Smith",
      section: "Blue Horizon Technologies",
    },
    {
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
      user: user3,
      name: "David Johnson",
      section: "Quantum Innovations",
    },
    {
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
      user: user4,
      name: "Ronee Brown",
      section: "Fusion Dynamics",
    },
    {
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
      user: user5,
      name: "Michael Wilson",
      section: "Visionary Creations",
    },
    {
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
      user: user6,
      name: "Emily Davis",
      section: "Synergy Systems",
    },
  ];

  const items=[
    {
        id:1,
        title:'Code merge made easy',
        text:'Track the performance of your VR apps and gain insights into user behavior.'
    },
    {
        id:2,
        title:'Review code without worry',
        text:'Track the performance of your VR apps and gain insights into user behavior.'
    },
    {
        id:3,
        title:'AI Assistance to reduce time',
        text:'Track the performance of your VR apps and gain insights into user behavior.',
    },
    {
        id:4,
        title:'Share work in minutes',
        text:'Track the performance of your VR apps and gain insights into user behavior.'
    }
]

export  {featuresData};
export {cardsDetails};
export {reviews};
export {items};
