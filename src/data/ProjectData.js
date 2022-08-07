import Vacay from "../assests/images/vacay.png"
import Space from "../assests/images/space-x.png"
import Ip from "../assests/images/ip-tracker.png"
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
    name: "IP Address Tracker",
    description: "IP Address Tracker is a web applcation. Users can see their IP Address on the map on the initial page load. Search for any IP addresses or domains and see the key information and location.",
    img: Ip,
    tags: ["JavaScript", "HTML", "css"],
    link1: "https://github.com/Ugboaja-Uchechi/ip-address-tracker",
    link2: "https://ip-address-tracker1.netlify.app/"
  },
  {
    id: 4,
    name: "Math Magicians",
    description: "Math Magicians is a web app. A calculator site that solves basic math operations which can be accessed on any screen size.",
    img: Math,
    tags: ["React", "JavaScript", "css"],
    link1: "https://github.com/Ugboaja-Uchechi/math-sorcerer",
    link2: "https://math-sorcerer.netlify.app/calculator"
  }
]
export default ProjectData;