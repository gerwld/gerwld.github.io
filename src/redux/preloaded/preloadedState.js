import { music_app_img, nolk_template_img, twitter_clone_img, anydo_clone_img, music_app_img__jpg, anydo_clone_img__jpg, twitter_clone_img__jpg, nolk_template_img__jpg, onlinestats__jpg, training_app__jpg } from "@/assets"

const currentThemeFromStorage = localStorage.getItem("currentTheme") || "dark"
const currentLangFromStorage = localStorage.getItem("i18nextLng") || "en"

const initialState = {
 apr: {
  currentTheme: currentThemeFromStorage,
  currentLang: currentLangFromStorage,
  lastProjects: [
    {
      id: "db64-be46b8r8b54e3f",
      img: null,
      img__jpg: training_app__jpg,
      source_url: "https://github.com/gerwld/music-app",
      preview_url: "/training-app/",
      is_act: true
     },
   {
    id: "dbf0-beqr56b8r8brbe5l",
    img: null,
    img__jpg: onlinestats__jpg,
    preview_url: "https://onlinestats.info",
    is_act: true
   },
   {
    id: "dbf0-beqr0b890eq9r8b98",
    img: music_app_img,
    img__jpg: music_app_img__jpg,
    source_url: "https://github.com/gerwld/music-app",
    preview_url: "/music-app/",
   },
   {
    id: "fbd07wavab0987erab709adb",
    img: anydo_clone_img,
    img__jpg: anydo_clone_img__jpg,
    source_url: "https://github.com/gerwld/anydo-clone",
    preview_url: "/anydo-clone/",
   },
   {
    id: "fadb0978a8f90b7986da0968",
    img: twitter_clone_img,
    img__jpg: twitter_clone_img__jpg,
    source_url: "https://github.com/gerwld/reactTS-twitter",
    preview_url: null,
   },
   {
    id: "0879fbd9078adfb0a7dfb908",
    img: nolk_template_img,
    img__jpg: nolk_template_img__jpg,
    source_url: "https://github.com/gerwld/nolk-template",
    preview_url: "/nolk-template/",
   },
  ],
 },
}

export default initialState
