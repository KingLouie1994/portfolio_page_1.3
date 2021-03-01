// Import of project icons
import SlackIcon from "./Slack.png";
import ZoomIcon from "./Zoom.png";
import UrlIcon from "./Url.png";
import BlockchainIcon from "./Blockchain.png";
import PriceTracker from "./PriceTracker.png";
import DecksifyIcon from "./Decksify.png";

// Import of projects
import BlockChainZip from "./blockchain_project.zip";
import PriceTrackerZip from "./amazon_pricetracker.zip";

const projectData = [
  {
    id: 0,
    name: "Slack Clone",
    icon: SlackIcon,
    desciption:
      "A Slack clone that includes the main functionality of the real slack. The real-time chat in the different channels is my personal highlight. The backend is provided by Firebase.",
    gitHub: "https://github.com/KingLouie1994/slack-clone-frontend",
    url: "https://slack-clone-frontend.vercel.app/",
    techStack: ["JavaScript", "React", "Firebase"],
    role:
      "This project was created just by my own as part of a ReactJS Challenge by Clever Programmer. Over 5 days, several hours a day were spent working on it and implementing various features.",
  },
  {
    id: 1,
    name: "Zoom Clone",
    icon: ZoomIcon,
    desciption:
      "This project was about understanding and applying the basics of WebRTC, WebSockets and peer to peer communication. The result is a Zoom clone that masters the most rudimentary functions of its big role model.",
    gitHub: "https://github.com/KingLouie1994/Zoom_Clone_Node",
    url: "https://zoom-clone-fullstack-2021.herokuapp.com/",
    techStack: ["Node", "Express", "Heroku"],
    role: "The project is built completely by my own from scratch.",
  },
  {
    id: 2,
    name: "URL Shortener",
    icon: UrlIcon,
    desciption:
      "The user sends in a long link that is stored in the Database. As a response users get back a short link that holds a 5 figures id at the end. When this link is used a request to the database asks for the URL stored for that 5 figure id, get it and redirects to it.",
    gitHub: "https://github.com/KingLouie1994/url-shortener",
    url: "https://url-shortener-node-2021.herokuapp.com/",
    techStack: ["Vue", "Node", "Express", "MongoDB", "Heroku"],
    role:
      "I did this project to practice my Node and Express skills and to get some first experience with Vue.",
  },
  {
    id: 3,
    name: "Blockchain",
    icon: BlockchainIcon,
    desciption:
      "The blockchain can create wallets consisting of public and private keys, mine blocks, perform transactions between users, display open transactions as well as previous blocks, and detect and prevent attacks on the blocks already created.",
    gitHub: "https://github.com/KingLouie1994/python_blockchain_project",
    project: BlockChainZip,
    techStack: ["Vue", "Python", "Flask"],
    role:
      "The blockchain I built in this project is the final work of a Python course I participated in. The course included all the basics about Python, Flask and Blockchain.",
  },
  {
    id: 4,
    name: "Price Tracker",
    icon: PriceTracker,
    desciption:
      "This project is a pricetracker optimized for the german amazon page. It is built from scratch only using Python and Selenium. The user can setup all parameters like price filter, currency, product name and even base url. To be able to use the script the user needs all dependenies listet in the requirements file.",
    gitHub: "https://github.com/KingLouie1994/amazon_pricetracker",
    project: PriceTrackerZip,
    techStack: ["Python"],
    role:
      "This project is my first experience in web scraping. Building everything myself from scratch only using Python and Selenium was fun and a great experience",
  },
  {
    id: 5,
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
