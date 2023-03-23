import React from "react";

const SkillsItem = ({children, title}) => {
 return (
  <div className="skills__item">
   <div className="skills__item_content">
    <h3 className="skills__title">{title}</h3>
    <div className="skills__icon">
     {children}
    </div>
   </div>
  </div>
 );
};

export default SkillsItem;