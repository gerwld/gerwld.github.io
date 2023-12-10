import { HiArrowRight } from 'react-icons/hi';
import { withLatestPosts } from "../hoc";
import { SecLoader, ProjectItem } from ".";
import { useTranslation } from 'react-i18next';

const Projects = ({ latestPosts }) => {
    const { t } = useTranslation();
    return (
        <section className="projects content_wrapper">
            <h2 className="section__title">{t("projects.title")}:</h2>

            <div className="projects__content">
                {latestPosts?.length
                    ? latestPosts.map(i => <ProjectItem key={i.id} {...i} />)
                    : <SecLoader />}
            </div>
            <div className="projects__footer">
                <a href="https://github.com/gerwld?tab=repositories" className="projects__seemore" target="_blank" rel="noopener"><span>{t("main.view-more")}</span><HiArrowRight /></a>
            </div>
        </section>
    );
};

export default withLatestPosts(Projects);
