// turtle speed images
import turtle_home_img from "./images/turtlespeed.png";
import turtle_services_img from "./images/turtlespeed_services.png";
import turtle_project_img from "./images/turtlespeed_projects.png";

// power of music images
import power_home_img from "./images/powerofmusic.png";
// import figma2 from "./images/figma_design_2.png";

//one piece images
import piece_home_img from "./images/one_piece.png";
// import figma1 from "./images/figma_design_1.png";

//ramen images
import ramen_home_img from "./images/foodwars.png";

const data = [
  {
    name: "Turtle Speed Renovation",
    imgs: [turtle_home_img, turtle_services_img, turtle_project_img],
    description:
      "My first client build which provided valuable experience in interacting with clients to create a business website that effectively sells their products and personal services. \n\n Visit the website at www.mrturtlespeed.com",
    id: 2,
    visit_link: "https://www.mrturtlespeed.com",
  },
  {
    name: "Power Of Music",
    imgs: [power_home_img],
    description:
      'If you pay attention to the top charted songs you will notice that the lyrics are designed to induce a destructive nature of thoughts, because repairing destruction results to profit. This website was designed and built by me to celebrate my awakening to the "trap music"',
    id: 1,
    visit_link: "",
  },
  {
    name: "One Piece",
    imgs: [piece_home_img],
    description:
      "Website built in tribute to my favorite anime one piece which inspired me in developing my characteristics, personality, and work ethic",
    id: 3,
    visit_link: "",
  },
  {
    name: "Ramen",
    imgs: [ramen_home_img],
    description:
      "Experimented with a different layout design. I am happy with the results :)",
    id: 4,
    visit_link: "",
  },
];

export default data;
