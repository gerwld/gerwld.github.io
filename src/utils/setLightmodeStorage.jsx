import setCurrentTheme from "./setCurrentTheme";

//prevents theme blinking
const setLightmodeStorage = () => {
 const theme = localStorage.getItem("currentTheme");
 setCurrentTheme(theme);
};

export default setLightmodeStorage;
