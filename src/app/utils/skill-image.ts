import bootstrap from "../assets/svg/skills/bootstrap.svg"
import canva from "../assets/svg/skills/canva.svg"
import css from "../assets/svg/skills/css.svg"
import docker from "../assets/svg/skills/docker.svg"
import figma from "../assets/svg/skills/figma.svg"
import firebase from "../assets/svg/skills/firebase.svg"
import git from "../assets/svg/skills/git.svg"
import html from "../assets/svg/skills/html.svg"
import java from "../assets/svg/skills/java.svg"
import javascript from "../assets/svg/skills/javascript.svg"
import lightroom from "../assets/svg/skills/lightroom.svg"
import linux from "../assets/svg/skills/linux.svg"
import mongoDB from "../assets/svg/skills/mongoDB.svg"
import mysql from "../assets/svg/skills/mysql.svg"
import nextJS from "../assets/svg/skills/nextJS.svg"
import pandas from "../assets/svg/skills/pandas.svg"
import photoshop from "../assets/svg/skills/photoshop.svg"
import python from "../assets/svg/skills/python.svg"
import react from "../assets/svg/skills/react.svg"
import tailwind from "../assets/svg/skills/tailwind.svg"
import typescript from "../assets/svg/skills/typescript.svg"

export const skillImage = (skill: string) => {
  switch (skill) {
    case "Bootstrap":
      return bootstrap;
    case "Canva":
      return canva;
    case "CSS":
      return css;
    case "Docker":
      return docker;
    case "Figma":
      return figma;
    case "Firebase":
      return firebase;
    case "Git":
      return git;
    case "HTML":
      return html;
    case "Java":
      return java;
    case "JavaScript":
      return javascript;
    case "Lightroom":
      return lightroom;
    case "Linux":
      return linux;
    case "MongoDB":
      return mongoDB;
    case "MySQL":
      return mysql;
    case "Next JS":
      return nextJS;
    case "Pandas":
      return pandas;
    case "Photoshop":
      return photoshop;
    case "Python":
      return python;
    case "React":
      return react;
    case "Tailwind":
      return tailwind;
    case "TypeScript":
      return typescript;
    default:
      return null;
  }
};
