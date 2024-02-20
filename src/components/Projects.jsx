import { HiArrowRight } from "react-icons/hi";
import { withLatestPosts } from "../hoc";
import { SecLoader, ProjectItem } from ".";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "preact/hooks";

const Projects = ({ latestPosts }) => {
  const { t } = useTranslation();
  const bottom = useRef(null);
  const PORTION = 20;
  const [lazy, setLazy] = useState({
    isInit: true,
    page: 1,
    totalPages: Math.ceil(latestPosts.length / PORTION),
    delay: 400,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        lazy.page < lazy.totalPages &&
        lazy.isInit
      ) {
        setLazy({ ...lazy, isInit: false });

        setTimeout(() => {
          setLazy((prevLazy) => ({
            ...prevLazy,
            page: prevLazy.page + 1,
            isInit: true,
          }));
        }, lazy.delay);
      }
    });

    if (bottom.current) {
      observer.observe(bottom.current);
    }

    return () => {
      if (bottom.current) {
        observer.unobserve(bottom.current);
      }
    };
  }, [lazy]);

  return (
    <section className="projects content_wrapper">
      <h2 className="section__title">{t("projects.title")}:</h2>

      <div className="projects__content">
        {latestPosts?.length ? (
          latestPosts
            .filter((_, i) => i < lazy.page * PORTION)
            .map((i) => <ProjectItem key={i.id} {...i} />)
        ) : (
          <SecLoader />
        )}
      </div>

      <div className="projects__intersect" ref={bottom} />

      {!lazy.isInit && <SecLoader />}

      <div className="projects__footer">
        <a
          href="https://github.com/gerwld?tab=repositories"
          className="projects__seemore grho"
          target="_blank"
          rel="noopener"
        >
          <span>{t("main.view-more")}</span>
          <HiArrowRight />
        </a>
      </div>
    </section>
  );
};

export default withLatestPosts(Projects);
