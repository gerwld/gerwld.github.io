const currentThemeFromStorage = localStorage.getItem("currentTheme") || "dark";
const currentLangFromStorage = localStorage.getItem("i18nextLng") || "en";

document.querySelector("html").setAttribute("lang", currentLangFromStorage);

const initialState = {
 apr: {
  currentTheme: currentThemeFromStorage,
  currentLang: currentLangFromStorage,
  lastProjects: [
   {
    id: 'dbf0-beqr0b890eq9r8b98',
    title: "Music App Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam id consectetur expedita.",
    img: "assets/music-app.webp",
    source_url: "https://github.com/gerwld/music-app",
    preview_url: "/music-app/",
   },
   {
    id: 'fbd07wavab0987erab709adb',
    title: "AnyDo Clone ReactJs Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam id consectetur expedita.",
    img: "assets/anydo-clone.webp",
    source_url: "https://github.com/gerwld/anydo-clone",
    preview_url: "/anydo-clone/",
   },
   {
    id: 'fadb0978a8f90b7986da0968',
    title: "Twitter ReactTs Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam consectetur id expedita.",
    img: "assets/twitter-clone.webp",
    source_url: "https://github.com/gerwld/reactTS-twitter",
    preview_url: null,
   },
   {
    id: '0879fbd9078adfb0a7dfb908',
    title: "Nolk Template",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam id consectetur expedita.",
    img: "assets/nolk-template.webp",
    source_url: "https://github.com/gerwld/nolk-template",
    preview_url: "/nolk-template/",
   },
  ],
 },
};

export default initialState;

