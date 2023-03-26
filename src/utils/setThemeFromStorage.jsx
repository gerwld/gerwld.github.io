import setCurrentTheme from "./setCurrentTheme";

//prevents theme blinking
const setThemeFromStorage = () => {
 const theme = localStorage.getItem("currentTheme");
 setCurrentTheme(theme);
};

export default setThemeFromStorage;
