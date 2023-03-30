import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectItem = ({ title, desc, img, source_url, preview_url }) => {
 return (
  <article className="projects__item">
   <div className="projects__group">
    <h3 className="projects__title">{title}</h3>
    <p className="project__desc">{desc}</p>

    <div className="project__links">
      <a href={preview_url} className={preview_url?.length ? '' : 'inactive'} target="_blank" rel="noopener"><HiOutlineExternalLink/>Live demo</a>
      <a href={source_url} className={source_url?.length ? '' : 'inactive'} target="_blank" rel="noopener"><AiOutlineGithub/>View source</a>
    </div>
   </div>
   <div className="projects__img">
    <img src={img} alt={title} />
   </div>
  </article>
 );
};

export default ProjectItem;
