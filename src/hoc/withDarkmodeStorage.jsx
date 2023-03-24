export const withDarkmodeStorage = () => {
 const theme = localStorage.getItem("currentTheme");
 theme && document.body.classList.toggle("darkModeOn", theme === "dark");
};
