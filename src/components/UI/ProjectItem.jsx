import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useImgCache } from "../../hooks/useImgCache";

const ProjectItem = ({ title, desc, img, source_url, preview_url }) => {
  useImgCache([img]);

 return (
  <article className="projects__item">
   <div className="projects__group">
    <h3 className="projects__title">{title}</h3>
    <p className="project__desc">{desc}</p>

    <div className="project__links">
      {preview_url?.length ? 
        <a href={preview_url}  target="_blank" rel="noopener"><HiOutlineExternalLink/>Live demo</a>
        : <span className='inactive' target="_blank" rel="noopener"><HiOutlineExternalLink/>Live demo</span>
      }
      
      {source_url?.length ?
        <a href={source_url} target="_blank" rel="noopener"><AiOutlineGithub/>View source</a>
        : <span className='inactive' target="_blank" rel="noopener"><AiOutlineGithub/>View source</span>
      }
    </div>
   </div>
   <div className="projects__img">
    <img src={img} alt={title} />
   </div>
  </article>
 );
};

export default ProjectItem;
