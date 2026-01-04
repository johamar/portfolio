import krisefikser from "../assets/projects/krisefikser_home.png";
import secondgo from "../assets/projects/secondgo_login.png";
import smartlist from "../assets/projects/smartlist.png";

export const contentBase = {
    email: "johan.ma@hotmail.no",
  skills: ["Frontend", "Backend", "Testing", "Databases", "Agile/Scrum"],
  technologies: ["React", "Vue", "Spring Boot", "Java", "JavaScript/TypeScript", "C/C++", "Kotlin", "MySQL", "Git"],
  projects: [
    { key: "smartlist", image: smartlist, tech: ["Ionic", "Angular"], links: { demo: "", github: "" } },
    { key: "krisefikser", image: krisefikser, tech: ["Spring Boot", "JWT", "MySQL", "Vue.js"], links: { demo: "", github: "" } },
    { key: "secondgo", image: secondgo, tech: ["Spring Boot", "JWT", "MySQL", "Vue.js"], links: { demo: "", github: "" } }
  ],
  links: {
    github: "https://github.com/johamar",
    gitlab: "https://gitlab.stud.idi.ntnu.no/johamar",
    linkedin: "https://www.linkedin.com/in/johan-martin-arntsen",
    youtube: "https://www.youtube.com/@johanarntsen"
  }
};
