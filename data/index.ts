export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "/resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    mainTitle: "About Me",
    title:
      "I am a third-year Information Technology student, deeply passionate about the ever-evolving world of web development. ",
    description: "",
    para: "I am an enthusiastic MERN Stack Developer with a passion for crafting user-friendly web applications. Adept in the MERN stack along with NextJs 13 and driven to leverage these skills to develop impactful solutions.",
    para2:
      "Let's connect and explore how we can collaborate to create innovative solutions in the dynamic world of web development!🚀",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] w-full",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for web development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently building a Anonymous Ouestion Application with MernStack as well as integrating AI with it.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "FramePhase",
    des: "FramePhase a cutting-edge Captions Generator Application that transcribes videos and applies adjustable captions with a user- friendly editor.",
    img: "/framephase.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.png", "/aws.png"],
    link: "https://frame-phase.netlify.app/",
  },
  {
    id: 2,
    title: "DevLink",
    des: "DevLink is a collaborative platform for developers to create and join rooms, where they can collaborate, share knowledge, and work together on projects. With features like room browsing, video calls, screen sharing, and project management, DevLink aims to foster a supportive community for developers to connect and grow together.",
    img: "/devlink.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://devlink-production-8e5f.up.railway.app/",
  },
  {
    id: 3,
    title: "WhisperBox",
    des: "Whisper Box is an anonymous feedback platform created to help users gather genuine insights while safeguarding the identities of the respondents. By ensuring complete anonymity, Whisper Box encourages honest and constructive feedback, fostering open and transparent communication.",
    img: "/whisperbox.png",
    iconLists: ["/re.svg", "/tail.svg", "/redux.png", "/css.png"],
    link: "https://github.com/kyadapavan/whisperbox",
  },
  {
    id: 4,
    title: "Myntra React Clone",
    des: "This project is a clone of the popular e-commerce platform Myntra, built using React and React Router.",
    img: "/myntra.png",
    iconLists: ["/re.svg", "/tail.svg", "/redux.png", "/css.png"],
    link: "https://github.com/KyadaPavan/Myntra-Clone-React",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer at Codeway Solution",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "MernStack Devleoper at BrainyBeam InfoTech",
    desc: "Spearheaded the creation of a feature-rich food product application using the MERN Stack",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/kyadapavan",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pavankyada/",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://twitter.com/KyadaPavan",
  },
];
