const withLightmodeStorage = () => {
 const theme = localStorage.getItem("currentTheme");
 theme && document.body.classList.toggle("lightModeOn", theme === "dark");
};

export default withLightmodeStorage;
