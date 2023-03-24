//prevents theme blinking
const withLightmodeStorage = () => {
 const theme = localStorage.getItem("currentTheme");
 theme && document.body.classList.toggle("lightModeOn", theme === "light");
};

export default withLightmodeStorage;
