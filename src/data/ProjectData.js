import Dictionary from "../assests/images/dictionary.png"
import AutoMagic from "../assests/images/automagic-portfolio.png"
import Countries from "../assests/images/countries.png"
import DOPE from "../assests/images/dope.png"

const ProjectData = [
  {
    id: 1,
    name: "DOPE",
    description: "A production ready chrome extension that gamifies learning experience and connect users to a vibrant community of learners.",
    img: DOPE,
    tags: ["React", "Vite", "TypeScript", "Tailwind", "CSS"],
    link1: "",
    link2: "https://dope.foundafrica.tech/"
  },
  {
    id: 2,
    name: "Automagic Agency Site",
    description: "Built a production-ready website for an agency using Next.js, Tailwind CSS, and Framer Motion.",
    img: AutoMagic,
    tags: ["Next", "TypeScript", "Tailwind", "Framer Motion", "CSS"],
    link1: "",
    link2: "https://www.atmgc.xyz/"
  },
  {
    id: 3,
    name: "REST Countries API",
    description: "REST Countries API is a web app that allows users to see all countries and their details when clicked.",
    img: Countries,
    tags: ["Next.Js", "REST Countries API", "CSS"],
    link1: "https://github.com/Ugboaja-Uchechi/countries",
    link2: "https://allcountry.vercel.app/"
  },
  {
    id: 4,
    name: "Dictionary web app",
    description: "Search for words using the input field, play the audio file for a word when it's available, switch between available fonts",
    img: Dictionary,
    link1: "https://github.com/Ugboaja-Uchechi/dictionary",
    tags: ["Next", "Typescript", "CSS"],
    link2: "https://dictionsearch.vercel.app/"
  }
]
export default ProjectData;
