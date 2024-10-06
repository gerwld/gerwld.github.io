import setCurrentTheme from "./setCurrentTheme";

//prevents theme blinking
const setThemeFromStorage = () => {
  const theme = localStorage.getItem("currentTheme");
  setCurrentTheme(theme ? theme : "light");
};

export default setThemeFromStorage;
