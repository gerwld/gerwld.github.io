import React from "react";
import { compose } from "redux";
import { withTranslation } from "react-i18next";
import { withDarkmodeToggle } from "@/hoc/";
import { ModalSetLang } from ".";

import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = ({ t, hocToggleDarkmode, hocIsDark }) => {
 return (
  <div className="header content_wrapper">
   <button onClick={hocToggleDarkmode} className="header__theme-btn">
   {hocIsDark ? <BsSun /> : <BsMoon />}
   </button>

   <ModalSetLang />
  
  </div>
 );
};

export default compose(withDarkmodeToggle, withTranslation())(Navbar);
