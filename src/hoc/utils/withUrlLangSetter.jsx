import { useEffect } from "preact/hooks";
import { useTranslation } from "react-i18next";
import { useRouter } from "preact-router";

const langLok = ["en", "uk", "be", "pl", "ka", "tr", "de"];

// ** SETS CURRENT LANGUAGE FROM URL QUERY ** //
const withUrlLangSetter = (WrappedComponent) => {
 return (props) => {
  const searchParams = useRouter()[0];
  let { i18n } = useTranslation();
  let lang = localStorage.getItem("i18nextLng");
  if (langLok.indexOf(lang) === -1) lang = "en";

  const hocIsCurrent = (locale) => (locale === lang ? "active_lang" : "");

  //set lang when lang param changes
  useEffect(() => {
   let pLang = searchParams.matches.setLn,
    isLocale = langLok.indexOf(pLang) !== -1;

   if (pLang && lang !== pLang && isLocale) {
    i18n.changeLanguage(pLang);
    document.body.style.opacity = "0";
    window.location.reload(false);
   }
  }, [searchParams.matches.setLn]);

  return <WrappedComponent {...props} hocIsCurrent={hocIsCurrent} hocLang={lang} />;
 };
};

export default withUrlLangSetter;
