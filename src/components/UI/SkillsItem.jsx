import clsx from "clsx";

const SkillsItem = ({ children, title, bigger_style, small, spaceBetween }) => {
  return (
    <div className={clsx('skills__item grho grho__medium ', {
      "skills__item__bigger": bigger_style,
      "skills__item__sm": small,
      "skills__item__sb": spaceBetween
    })}>
      <h3 className="skills__title">{title}</h3>
      <div className="skills__icon">{children}</div>
    </div>
  );
};

export default SkillsItem;
