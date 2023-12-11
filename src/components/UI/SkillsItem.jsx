const SkillsItem = ({ children, title, bigger_style, small }) => {
  return (
    <div
      className={`skills__item grho grho__medium${bigger_style ? " skills__item__bigger" : ""} ${small ? " skills__item__sm" : ""}`}
    >
      <h3 className="skills__title">{title}</h3>
      <div className="skills__icon">{children}</div>
    </div>
  );
};

export default SkillsItem;
