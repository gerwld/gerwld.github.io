import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useImgCache } from "../../hooks/useImgCache";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ id, title, desc, img, img__jpg, source_url, preview_url, is_act }) => {
  const {t} = useTranslation();
  useImgCache([img]);

 return (
  <article className="projects__item">
   <div className="projects__group">
    <h3 className="projects__title">
      <a href={preview_url?.length ? preview_url :  source_url}  target="_blank" rel="noopener">
        {t(`projects.items.${id}.title`)}
      </a>
    </h3>
    <p className="project__desc">{t(`projects.items.${id}.desc`)}</p>

    <div className="project__links">
      {preview_url?.length ? 
        <a href={preview_url}  target="_blank" rel="noopener"><HiOutlineExternalLink/>{t("projects.navigation.live")}</a>
        : <span className='inactive' target="_blank" rel="noopener"><HiOutlineExternalLink/>{t("projects.navigation.live")}</span>
      }
      
      {source_url?.length ?
        <a href={source_url} target="_blank" rel="noopener"><AiOutlineGithub/>{t("projects.navigation.source")}</a>
        : <span className='inactive' target="_blank" rel="noopener"><AiOutlineGithub/>{t("projects.navigation.source")}</span>
      }
    </div>
   </div>
   <div className="projects__img">
    <picture>
      <source srcset={img} type="image/webp"/>
      <source srcset={img__jpg} type="image/jpeg"/>
      <img class="img-fluid" src={img__jpg} alt={title ? title : t(`projects.items.${id}.title`)}/>
    </picture>
   </div>
  </article>
 );
};

export default ProjectItem;
