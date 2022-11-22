import Vacay from "../assests/images/vacay.png"
import Space from "../assests/images/space-x.png"
import Countries from "../assests/images/countries.png"
import Math from "../assests/images/math.png"

const ProjectData = [
  {
    id: 1,
    name: "VacayHome",
    description: "Vacay home is a rental site in which users can create reservations for vacation homes and create listings.",
    img: Vacay,
    link1: "https://github.com/Ugboaja-Uchechi/Vacayhome-front-end",
    tags: ["React", "RubyonRails", "Bootstrap", "Jest", "css"],
    link2: "https://vacay-home.netlify.app/"
  },
  {
    id: 2,
    name: "Space Traveler's Hub",
    description: "Space Traveler's Hub is a web app that allows users to book rockets and join selected space missions.",
    img: Space,
    tags: ["React", "Bootstrap", "Jest", "css"],
    link1: "https://github.com/Ugboaja-Uchechi/space-x-hub",
    link2: "https://space-x-hub.netlify.app/"
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
    name: "Math Magicians",
    description: "Math Magicians is a calculator site that solves basic math operations which can be accessed on any screen size.",
    img: Math,
    tags: ["React", "JavaScript", "css"],
    link1: "https://github.com/Ugboaja-Uchechi/math-sorcerer",
    link2: "https://math-sorcerer.netlify.app"
  }
]
export default ProjectData;
