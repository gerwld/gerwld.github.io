import React from "react";
import { compose } from "redux";
import { withTranslation } from "react-i18next";
import { withLightmodeToggle } from "@/hoc/";
import { ModalSetLang } from ".";

import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = ({ t, hocToggleLightmode, hocIsLight }) => {
 return (
  <div className="header content_wrapper">
   <button onClick={hocToggleLightmode} className="header__theme-btn" title={`Change theme to ${hocIsLight ? 'dark' : 'light'}`}>
   {hocIsLight ? <BiMoon /> : <BiSun />}
   </button>

   <ModalSetLang />
  
  </div>
 );
};

export default compose(withLightmodeToggle, withTranslation())(Navbar);
