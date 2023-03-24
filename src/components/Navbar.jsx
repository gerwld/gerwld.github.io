import React from "react";
import { compose } from "redux";
import { withTranslation } from "react-i18next";
import { withLightmodeToggle } from "@/hoc/";
import { ModalSetLang } from ".";

import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = ({ t, hocToggleLightmode, hocIsLight }) => {
 return (
  <div className="header content_wrapper">
   <button onClick={hocToggleLightmode} className="header__theme-btn">
   {hocIsLight ? <BsMoon /> : <BsSun />}
   </button>

   <ModalSetLang />
  
  </div>
 );
};

export default compose(withLightmodeToggle, withTranslation())(Navbar);
