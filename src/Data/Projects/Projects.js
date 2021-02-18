// Import of project icons
import ZoomIcon from "./Zoom.png";
import DecksifyIcon from "./Decksify.png";

const projectData = [
  {
    id: 0,
    name: "Zoom Clone",
    icon: ZoomIcon,
    desciption:
      "This project is a Zoom Clone that was about understanding and applying the basics of WebRTC, WebSockets and peer to peer communication.",
    gitHub: "https://github.com/KingLouie1994/Zoom_Clone_Node",
    url: "https://zoom-clone-fullstack-2021.herokuapp.com/",
    techStack: ["Node", "Express", "Heroku"],
    role:
      "I built the project on my own to broaden my experience in WebRTC and WebSockets.",
  },
  {
    id: 1,
    name: "Decksify",
    icon: DecksifyIcon,
    desciption:
      "A flashcard application to make everybody’s study-sessions more effective, while saving them time and money",
    gitHubFrontend: "https://github.com/Labs-EU4/flashcards-client",
    gitHubBackend: "https://github.com/Labs-EU4/flashcards-server",
    url: "https://app.decksify.com/",
    techStack: ["JavaScript", "React", "Redux", "Express", "Postgresql"],
    role:
      "The project was developed within 6 weeks in a team of 6 people. Since this project was a learning project, the tasks were not clearly distributed, but everyone worked on everything. Most of the time I worked on the dashboard, which contains the vertical navigation, the list of own decks, the recent decks and the possibility to create new decks. The thing I'm most proud of in this project is the Game Mode, which you can use with your own decks as well as with public decks to test your knowledge in the respective subject.",
  },
];

export default projectData;
