import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useImgCache } from "../../hooks/useImgCache";
import { useTranslation } from "react-i18next";

const ProjectItem = ({ id, title, date, img, img__jpg, source_url, preview_url, stack }) => {
  const { t } = useTranslation();
  useImgCache([img]);

  return (
    <article className="projects__item">
      <div className="projects__group">
        <p className="project__crdate"> {date ? date : "21.02.2022"}</p>
        <h3 className="projects__title">
          <a href={preview_url?.length ? preview_url : source_url} target="_blank" rel="noopener">
            {t(`projects.items.${id}.title`)}
          </a>
        </h3>

        {stack?.length
          ? <div className="projects__stack">
            {stack.map(tech => <span aria-label={tech}>{tech}</span>)}
          </div>
          : ""}

        <p className="project__desc">{t(`projects.items.${id}.desc`)}</p>

        <div className="project__links">
          {preview_url?.length ? (
            <a className="grho" href={preview_url} target="_blank" rel="noopener">
              <HiOutlineExternalLink />
              {t("projects.navigation.live")}
            </a>
          ) : (
            ""
          )}

          {source_url?.length ? (
            <a className="grho" href={source_url} target="_blank" rel="noopener">
              <AiOutlineGithub />
              {t("projects.navigation.source")}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="projects__img">
        <picture>
          <source srcset={img} type="image/webp" />
          <source srcset={img__jpg} type="image/jpeg" />
          <img src={img__jpg} alt={title ? title : t(`projects.items.${id}.title`)} />
        </picture>
        {(preview_url?.length || source_url?.length) ?
          <a href={preview_url?.length ? preview_url : source_url} target="_blank" aria-label={t(`projects.items.${id}.title`)}>
            <HiOutlineExternalLink />
          </a>
          : ""}
      </div>
    </article>
  );
};

export default ProjectItem;