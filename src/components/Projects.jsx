import React from "react";
import { NavLink } from "react-router-dom";
import ProjectItem from "./UI/ProjectItem";
import {HiArrowRight} from 'react-icons/hi';

const Projects = () => {
 return (
  <section className="projects content_wrapper">
   <h2 className="section__title">Last Projects:</h2>

   <div className="projects__content">
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
    <ProjectItem />
   </div>
   <div className="projects__footer">
    <a href="" className="projects__seemore"><span>View more</span><HiArrowRight/></a>
   </div>
  </section>
 );
};

export default Projects;
