import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skills = [
  // Languages
  { name: "Python", icon: SiPython, color: "#3776AB", hint: "Backend & ML" },
  { name: "Java", icon: FaJava, color: "#ED1D25", hint: "JSP & Backend" },
  { name: "C", icon: SiC, color: "#00599C", hint: "Fundamentals & DSA" },

  // Frontend
  { name: "React", icon: SiReact, color: "#61DAFB", hint: "UI Development" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", hint: "Frontend Logic" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", hint: "Structure" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", hint: "Styling & Layout" },

  // Backend
  { name: "Django", icon: SiDjango, color: "#092E20", hint: "APIs & Auth" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", hint: "Server Runtime" },
  { name: "Express", icon: SiExpress, color: "#888888", hint: "API Framework" },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", hint: "Relational DB" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57", hint: "Local DB" },

  // DevOps & Tools
  { name: "Docker", icon: SiDocker, color: "#2496ED", hint: "Containers" },
  { name: "Git", icon: SiGit, color: "#F05032", hint: "Version Control" },
  { name: "GitHub", icon: SiGithub, color: "#181717", hint: "Collaboration" },

  // Data & ML
  { name: "Pandas", icon: SiPandas, color: "#150458", hint: "Data Analysis" },
  { name: "NumPy", icon: SiNumpy, color: "#013243", hint: "Numerical Ops" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", hint: "ML Models" },

  
];
