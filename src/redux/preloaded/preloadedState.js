const currentThemeFromStorage = localStorage.getItem("currentTheme") || "dark";
const currentLangFromStorage = localStorage.getItem("i18nextLng") || "en";

const initialState = {
 apr: {
  currentTheme: currentThemeFromStorage,
  currentLang: currentLangFromStorage
 },
};

export default initialState;
