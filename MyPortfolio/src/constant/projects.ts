
interface Project {
    id: number;
    title: string;
    image: string;
    technologies: string[];
    liveDemo: string;
    github: string;
  }

const projects: Project[] = [
    {
      id: 1,
      title: "Field Ops",
      image: "/project1.jpg", // Replace with your project image
      technologies: ["/nodejs.png", "/express.svg", "/typescript.png", "/reactjs.png"],
      liveDemo: "https://example.com",
      github: "https://github.com/Neon-099/FieldOps",
    },
    {
      id: 2,
      title: "Pet Shop",
      image: "/project2.jpg", // Replace with your project image
      technologies: ["/vite.svg" , "/reactjs.png", "/tailwind.svg", "/php.png"],
      liveDemo: "https://example.com",
      github: "https://github.com/Neon-099/PetShop",
    },
    {
      id: 3,
      title: "Stunimate",
      image: "/projects/STUN.png", 
      technologies: ["/reactjs.png", "/tailwind.svg", "/vite.svg"],
      liveDemo: "https://example.com",
      github: "https://github.com/Neon-099/Stunimate",
    },
    {
      id: 4,
      title: "Vaccination.ng",
      image: "/project4.jpg", // Replace with your project image
      technologies: ["/vite.svg", "/typescript.png", "/tailwind.svg"],
      liveDemo: "https://example.com",
      github: "https://github.com/example",
    },
    {
      id: 5,
      title: "NoobNet",
      image: "/project5.jpg", // Replace with your project image
      technologies: ["/javascript.png", "/css.png", "/html.png"],
      liveDemo: "https://example.com",
      github: "https://github.com/example",
    },
  ];

  export default projects;
