import React from "react";
import SkillsItem from "./UI/SkillsItem";

const Skills = () => {
 return (
  <section className="projects content_wrapper">
   <h2 className="section__title">Skills:</h2>

   <div className="skills__content">
    <SkillsItem title="React">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
       <ellipse rx="11" ry="4.2" />
       <ellipse rx="11" ry="4.2" transform="rotate(60)" />
       <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
     </svg>
    </SkillsItem>
    <SkillsItem title="Redux"></SkillsItem>
    <SkillsItem title="Vue.js"></SkillsItem>
    <SkillsItem title="Figma"></SkillsItem>
    <SkillsItem title="Gulp"></SkillsItem>
    <SkillsItem title="Sass"></SkillsItem>
    <SkillsItem title="Javascript"></SkillsItem>
    <SkillsItem title="HTML5"></SkillsItem>
    <SkillsItem title="CSS3"></SkillsItem>
    <SkillsItem title="Photoshop"></SkillsItem>
    <SkillsItem title="Illustrator"></SkillsItem>
   </div>
  </section>
 );
};

export default Skills;
