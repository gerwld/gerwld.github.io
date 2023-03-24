import React from "react";
import { compose } from "redux";
import { withTranslation } from "react-i18next";
import { withDarkmodeToggle } from "@/hoc/";
import { ModalAuth, ModalSetLang } from "..";

import { BsSun } from "react-icons/bs";
import en from "@/assets/flags/4x3/gb.svg";

const Navbar = ({ t, hocToggleDarkmode, hocIsDark }) => {
 return (
  <div className="header content_wrapper">
   <button className="header__theme-btn">
    <BsSun />
   </button>
   <button className="header__lang-btn">
    <img src={en} alt="" />
    <span>EN</span>
   </button>

   <ModalSetLang />
     <ModalAuth toggleDarkmode={hocToggleDarkmode} hocIsDark={hocIsDark} />
  </div>
 );
};

export default compose(withDarkmodeToggle, withTranslation())(Navbar);
