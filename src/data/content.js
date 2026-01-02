import krisefikser from "../assets/projects/krisefikser_home.png";
import secondgo from "../assets/projects/secondgo_login.png";
import smartlist from "../assets/projects/smartlist.png";

export const content = {
    name: "Johan Martin Arntsen",
    title: "Software Engineering Student • NTNU",
    location: "Trondheim, Norway",
    email: "johan.ma@hotmail.no",
    summary: "I am a dedicated and ambitious software engineering student at NTNU, passionate about developing efficient and innovative software solutions. With a strong foundation in both frontend and backend technologies, I thrive in collaborative environments and am eager to contribute to impactful projects. I am continuously seeking opportunities to expand my skill set and apply my knowledge in real-world scenarios.",

    skills: ["Frontend", "Backend", "Testing", "Databases", "Agile/Scrum"],
    technologies: ["React", "Vue", "Spring Boot", "Java", "JavaScript/TypeScript", "C/C++", "Kotlin", "MySQL", "Git"],

    hobbies: ["Golf", "Football", "Training", "Learning new tech"],

    work: [
        {
            role: "Loading Supervisor, Team Leader (2022)",
            company: "Aviator Airport alliance AS",
            location: "Trondheim/Tromsø, Norway",
            period: "2021 - present",
            points: ["Operational responsibility", "Team coordination", "High pace environment", "Safety compliance",
                "Customer service", "Training new employees"],
        },
        {
            role: "Customer Advisor (Summer Job)",
            company: "DNB",
            location: "Trondheim, Norway",
            period: "Mar 2025 – Aug 2025",
            points: ["Client interaction", "Problem-solving", "Team collaboration", "Efficient use of IT systems"],
        },
        {
            role: "Ramp agent / Baggage handler",
            company: "Widerøe Ground Handling AS",
            location: "Tromsø, Norway",
            period: "2019 - 2021",
            points: ["Loading and unloading baggage", "Ensuring safety compliance", "Team collaboration"],
        },
        {
            role: "Salesman / Driver",
            company: "Blekkhuset Kontorspar AS",
            location: "Tromsø, Norway",
            period: "2016 - 2021",
            points: ["Customer service", "Sales", "Logistics and delivery"],
        },
        {
            role: "Pizzachef / Driver",
            company: "Pizzabakeren Giæverbukta",
            location: "Tromsø, Norway",
            period: "2018 - 2019",
            points: ["Food preparation", "Customer service", "Delivery"],
        }
    ],

    projects: [
        {
            name: "Smartlist",
            image: smartlist,
            description: "Developed a crossplatform mobile application for managing shopping/to-do/etc. lists using Ionic and Angular.",
            tech: ["Ionic", "Angular"],
        },
        {
            name: "Krisefikser.no",
            image: krisefikser,
            description: "Developed a full-stack web application for household crisis management using Spring Boot and Vue.js.",
            tech: ["Spring Boot", "JWT", "MySQL", "Vue.js"],
            links: {
                demo: "",
                github: "",
            },
        },
        {
            name: "SecondGo",
            image: secondgo,
            description: "Marketplace platform for buying and selling used items, built with Spring Boot and Vue.js.",
            tech: ["Spring Boot", "JWT", "MySQL", "Vue.js"],
            links: {
                demo: "",
                github: "",
            },
        },
    ],
    links: {
        github: "https://github.com/johamar",
        gitlab: "https://gitlab.stud.idi.ntnu.no/johamar",
        linkedin: "https://www.linkedin.com/in/johan-martin-arntsen",
        youtube: "https://www.youtube.com/@johanarntsen",
    },
};
