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
    img: "assets/music-app.jpg",
    source_url: "https://123.com",
    preview_url: "https://123.com",
   },
   {
    id: 'fbd07wavab0987erab709adb',
    title: "AnyDo Clone ReactJs Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam id consectetur expedita.",
    img: "assets/anydo-clone.jpg",
    source_url: "https://123.com",
    preview_url: "https://123.com",
   },
   {
    id: 'fadb0978a8f90b7986da0968',
    title: "Twitter ReactTs Project",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam consectetur id expedita.",
    img: "assets/twitter-clone.jpg",
    source_url: "https://123.com",
    preview_url: "https://123.com",
   },
   {
    id: '0879fbd9078adfb0a7dfb908',
    title: "Nolk Template",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus natus aliquam id consectetur expedita.",
    img: "assets/nolk-template.jpg",
    source_url: "https://123.com",
    preview_url: "https://123.com",
   },
  ],
 },
};

export default initialState;

