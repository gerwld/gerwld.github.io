import { music_app_img, nolk_template_img, twitter_clone_img, anydo_clone_img, music_app_img__jpg, anydo_clone_img__jpg, twitter_clone_img__jpg, nolk_template_img__jpg } from "@/assets"

const currentThemeFromStorage = localStorage.getItem("currentTheme") || "dark"
const currentLangFromStorage = localStorage.getItem("i18nextLng") || "en"

document.querySelector("html").setAttribute("lang", currentLangFromStorage)

const initialState = {
 apr: {
  currentTheme: currentThemeFromStorage,
  currentLang: currentLangFromStorage,
  lastProjects: [
   {
    id: "dbf0-beqr0b890eq9r8b98",
    title: "Music App Project",
    desc: "ReactJS & Redux Music player. Contains usable mobile version, localStorage cache. Also works with AudioSession Api, so hotkey Next/Prev buttons is working right.",
    img: music_app_img,
    img__jpg: music_app_img__jpg,
    source_url: "https://github.com/gerwld/music-app",
    preview_url: "/music-app/",
   },
   {
    id: "fbd07wavab0987erab709adb",
    title: "AnyDo Clone ReactJs Project",
    desc: "Anydo-like To-do list. Functional: all CRUD operations (add, update, read or delete any task), sort by tags, JWT Auth. Also contains mobile verison with Safari viewport improvements.",
    img: anydo_clone_img,
    img__jpg: anydo_clone_img__jpg,
    source_url: "https://github.com/gerwld/anydo-clone",
    preview_url: "/anydo-clone/",
   },
   {
    id: "fadb0978a8f90b7986da0968",
    title: "Twitter ReactTs Project",
    desc: "Clone of Twitter. Currently works: final-form validation, tweet posting, routings and  tweets fetching. Created on ReactTS CRA, but currently is used on Vite",
    img: twitter_clone_img,
    img__jpg: twitter_clone_img__jpg,
    source_url: "https://github.com/gerwld/reactTS-twitter",
    preview_url: null,
   },
   {
    id: "0879fbd9078adfb0a7dfb908",
    title: "Nolk Template",
    desc: "Just a responsive template. Uses svg animation and simple 3-steps form created on vanilla Js. Also contains beautiful CSS animations and transitions. Task-runner for minify files, etc - Gulp.",
    img: nolk_template_img,
    img__jpg: nolk_template_img__jpg,
    source_url: "https://github.com/gerwld/nolk-template",
    preview_url: "/nolk-template/",
   },
  ],
 },
}

export default initialState
