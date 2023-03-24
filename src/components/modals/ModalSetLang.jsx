import React from "react";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import {withClickOutside, withUrlLangSetter} from "../../hoc";
import s from "./s.module.css";

const ModalSetLang = ({hocLang, hocIsCurrent, isShow, toggleShow, refElement}) => {
 return (
  <div ref={refElement} className={s.content}>
   
   <button onClick={toggleShow}
           className={`text_btn header__lang-btn select_line ${isShow ? "select_line-active" : ""}`}>{hocLang}</button>

   <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`}>
    <ul>
     <li><NavLink to="?setLn=en" className={hocIsCurrent("en")}>English</NavLink></li>
     <li><NavLink to="?setLn=uk" className={hocIsCurrent("uk")}>Українська</NavLink></li>
     <li><NavLink to="?setLn=be" className={hocIsCurrent("be")}>Беларуская</NavLink></li>
     <li><NavLink to="?setLn=pl" className={hocIsCurrent("pl")}>Polski</NavLink></li>
     <li><NavLink to="?setLn=ka" className={hocIsCurrent("ka")}>ქართული (Beta)</NavLink></li>
     <li><NavLink to="?setLn=tr" className={hocIsCurrent("tr")}>Türkçe (Beta)</NavLink></li>
     <li><NavLink to="?setLn=de" className={hocIsCurrent("de")}>Deutsch (Beta)</NavLink></li>
    </ul>
   </div>

  </div>
 );
};

export default compose(withClickOutside, withUrlLangSetter)(ModalSetLang);
