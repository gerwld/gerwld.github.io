import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const ProjectItem = ({ title, desc, img, source_url, preview_url, id }) => {
 return (
  <article className="projects__item">
   <div className="projects__group">
    <h3 className="projects__title">{title}</h3>
    <p className="project__desc">{desc}</p>

    <div className="project__links">
      <NavLink><HiOutlineExternalLink/>Live demo</NavLink>
      <NavLink><AiOutlineGithub/>View source</NavLink>
    </div>
   </div>
   <div className="projects__img">
    <img src={img} alt={title} />
   </div>
  </article>
 );
};

export default ProjectItem;
