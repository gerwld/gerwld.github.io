import { compose } from "redux";
import { useTranslation, withTranslation } from "react-i18next";
import { withLightmodeToggle } from "@/hoc/";
import { ModalSetLang } from ".";

import { BiMoon, BiSun } from "react-icons/bi";

const Navbar = ({ hocToggleLightmode, hocIsLight }) => {
  const {t} = useTranslation();
 return (
  <div className="header content_wrapper">
   <button onClick={hocToggleLightmode} className="header__theme-btn" title={t(hocIsLight ? "main.theme.dark" : "main.theme.light")}>
   {hocIsLight ? <BiMoon /> : <BiSun />}
   </button>

   <ModalSetLang />
  
  </div>
 );
};

export default compose(withLightmodeToggle, withTranslation())(Navbar);
