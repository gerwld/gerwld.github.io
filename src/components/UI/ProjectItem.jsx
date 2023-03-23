import React from 'react'
import {NavLink} from "react-router-dom";

const ProjectItem = ({title, desc, img, id}) => {
  return (
    <article className="projects__item">
      <div className="projects__group">
      <h3 className="projects__title">Coinchecker Project</h3>
      <p className="project__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo maiores eius iusto, magni quam nulla modi cupiditate pariatur odit minus.</p>
      <NavLink>Learn more</NavLink>
      </div>
      <div className="projects__img">
        <img src={img} alt={title} />
      </div>
    </article>
  )
}

export default ProjectItem