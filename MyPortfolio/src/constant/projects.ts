
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
      image: "/projects/field.png", 
      technologies: ["/nodejs.png", "/express.svg", "/typescript.png", "/reactjs.png"],
      liveDemo: "https://fieldoperations.netlify.app/",
      github: "https://github.com/Neon-099/FieldOps",
    },
    {
      id: 2,
      title: "Pet Shop",
      image: "/projects/furryhaven.png", 
      technologies: ["/vite.svg" , "/reactjs.png", "/tailwind.svg", "/php.png"],
      liveDemo: "https://pet-shop-rosy-zeta.vercel.app/",
      github: "https://github.com/Neon-099/PetShop",
    },
    {
      id: 3,
      title: "Stunimate",
      image: "/projects/stunimated.png", 
      technologies: ["/reactjs.png", "/tailwind.svg", "/vite.svg"],
      liveDemo: "https://stunimate.vercel.app/",
      github: "https://github.com/Neon-099/Stunimate",
    },
  ];

  export default projects;
