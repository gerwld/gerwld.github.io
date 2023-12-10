import { compose } from "redux";
import { useTranslation, withTranslation } from "react-i18next";
import { withLightmodeToggle } from "@/hoc/";
import { ModalSetLang } from ".";

const Navbar = ({ hocToggleLightmode, hocIsLight }) => {
  const { t } = useTranslation();
  return (
    <div className="header content_wrapper">
      <button onClick={hocToggleLightmode} className="header__theme-btn grho" title={t(hocIsLight ? "main.theme.dark" : "main.theme.light")}>
        {hocIsLight ?
          <svg viewBox="0 0 53.6 54.1">
            <path fill="none" stroke="#C5C8D0" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" d="M45.8,32.6
       c-2.4,7.6-9.4,13.3-17.8,13.6c-10.7,0.4-19.8-8-20.2-18.8c-0.3-9.2,5.6-17.1,14-19.5c-0.7,2.1-1,4.3-0.9,6.7
       c0.4,10.8,9.4,19.2,20.2,18.8C42.7,33.3,44.3,33,45.8,32.6L45.8,32.6z"/>
          </svg>
          : <svg viewBox="0 0 59.2 59.2">
            <circle fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" cx="29.5" cy="29.6" r="12" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="7.6" y1="29.6" x2="2.5" y2="29.6" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="56.6" y1="29.6" x2="51.5" y2="29.6" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="14" y1="14" x2="10.4" y2="10.5" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="48.7" y1="48.7" x2="45.1" y2="45.1" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="14" y1="45.1" x2="10.4" y2="48.7" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="48.7" y1="10.5" x2="45.1" y2="14" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="29.5" y1="51.6" x2="29.5" y2="56.6" />
            <line fill="none" stroke="#5E6267" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" x1="29.5" y1="2.6" x2="29.5" y2="7.6" />
          </svg>
        }
      </button>

      <ModalSetLang />

    </div>
  );
};

export default compose(withLightmodeToggle, withTranslation())(Navbar);
