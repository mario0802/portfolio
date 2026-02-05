import type { ProjectDetails } from "@/types";

//Logos
import nestLog from "@/assets/image/logos/netLogo.png";
import reactLogo from "@/assets/image/logos/reactLogo.png";
import postgresLogo from "@/assets/image/logos/postgresLogo.png";
import pythonLogo from "@/assets/image/logos/python.png";
import netLogo from "@/assets/image/logos/netLogo.png"
import sqlLogo from "@/assets/image/logos/sqlServerLogo.svg"

//RPS
import RPS1 from "@/assets/image/rpsGame/001.png";
import RPS2 from "@/assets/image/rpsGame/002.png";
import RPS3 from "@/assets/image/rpsGame/003.png";
import RPS4 from "@/assets/image/rpsGame/004.png";
import RPS5 from "@/assets/image/rpsGame/005.png";
import RPS6 from "@/assets/image/rpsGame/006.png";
import RPS7 from "@/assets/image/rpsGame/007.png";

//Parking 
import PK1 from "@/assets/image/parking/001.jpg";

//Zone
import ZONE1 from "@/assets/image/zone/001.jpg";

//PERSONAL
import PERSONAL1 from "@/assets/image/personal/001.jpeg";
import PERSONAL2 from "@/assets/image/personal/002.jpeg";
import PERSONAL3 from "@/assets/image/personal/003.jpeg";
import PERSONAL4 from "@/assets/image/personal/004.jpeg";

//CONTADOR
import CONTADOR1 from "@/assets/image/contador/001.jpeg";
import CONTADOR2 from "@/assets/image/contador/002.jpeg";
import CONTADOR3 from "@/assets/image/contador/003.jpeg";

//BOT
import BOT1 from "@/assets/image/bot/001.jpeg";

export const projects: ProjectDetails[] = [
    {
        id: 1,
        name: "Rock, paper, scissors game",
        description: "Rock-paper-scissors game with computer vision, backend developed in Nest.js and frontend in React. It features login and authentication, guest play, and a results dashboard. All games are stored for statistics. Video processing from the webcam is handled through a Python API.",
        githubUrl: "https://github.com/mario0802/rpsReactFrontend",
        technologies: [
            { name: "Nest", logo: nestLog },
            { name: "React", logo: reactLogo },
            { name: "Postgresql", logo: postgresLogo },
            { name: "Python", logo: pythonLogo },
        ],
        images: [RPS1, RPS2, RPS3, RPS4, RPS5, RPS6, RPS7],
        mainImage: RPS3
    },
    {
        id: 2,
        name: "Personnel Monitoring ",
        description: "An automated system that uses computer vision to detect and count people in cleaning rooms. It includes advanced visualizations such as heat maps and a staff performance evaluation module, considering attendance, productivity, operational efficiency, and employee retention, centralizing the information on an analytics platform.",
        githubUrl: "https://github.com/mario0802",
        technologies: [
            { name: "Postgresql", logo: postgresLogo },
            { name: "Python", logo: pythonLogo },
            { name: ".Net", logo: netLogo },
            { name: "Sql Server", logo: sqlLogo },
        ],
        images: [PERSONAL1,PERSONAL2,PERSONAL3,PERSONAL4],
        mainImage: PERSONAL1
    },
    {
        id: 3,
        name: "Object Counting on the Production Line",
        description: "A computer vision application designed to detect and track objects on a production line, counting each unit that crosses a virtual counting line. The system ensures reliable, real-time production tracking.",
        githubUrl: "https://github.com/mario0802",
        technologies: [
            { name: "Postgresql", logo: postgresLogo },
            { name: "Python", logo: pythonLogo },
            { name: ".Net", logo: netLogo },
            { name: "Sql Server", logo: sqlLogo },
        ],
        images: [CONTADOR1,CONTADOR2,CONTADOR3],
        mainImage: CONTADOR1
    },
    {
        id: 4,
        name: "Contextual Chatbots and General Virtual Assistant",
        description: "A suite of chatbots designed to assist users in accessing information displayed on screen, providing contextual answers based on the displayed data. It also includes a general virtual assistant capable of answering broader questions, facilitating interaction with the system and enhancing the user experience.",
        githubUrl: "https://github.com/mario0802",
        technologies: [
            { name: "Python", logo: pythonLogo },
            { name: "Postgresql", logo: postgresLogo },
            { name: ".Net", logo: netLogo },
            { name: "Sql Server", logo: sqlLogo },
        ],
        images: [BOT1],
        mainImage: BOT1
    },
    {
        id: 5,
        name: "Smart Parking (under development)",
        description: "System under development that uses artificial vision technologies to detect and display in real time the occupancy of parking spaces, allowing for more efficient and automated management of available spaces.",
        githubUrl: "https://github.com/mario0802/rpsReactFrontend",
        technologies: [
            { name: "Nest", logo: nestLog },
            { name: "React", logo: reactLogo },
            { name: "Postgresql", logo: postgresLogo },
            { name: "Python", logo: pythonLogo },
        ],
        images: [PK1],
        mainImage: PK1
    },
    {
        id: 6,
        name: "Control of Prohibited Zones (under development)",
        description: "A system under development detects and verifies that individuals are not entering or passing through restricted areas. It uses computer vision for real-time monitoring, helping to enhance security and compliance with operational procedures.",
        githubUrl: "https://github.com/mario0802/rpsReactFrontend",
        technologies: [
            { name: "Nest", logo: nestLog },
            { name: "React", logo: reactLogo },
            { name: "Postgresql", logo: postgresLogo },
            { name: "Python", logo: pythonLogo },
        ],
        images: [ZONE1],
        mainImage: ZONE1
    },
]