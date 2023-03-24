const setCurrentTheme = (theme) => {
 const LIGHT_BG = "#1c1c2a";
 const DARK_BG = "#f2f5fb";
 if (theme) {
  document.body.classList.toggle("lightModeOn", theme === "light");

  const bgColor = theme === "light" ? DARK_BG : LIGHT_BG;
  document.querySelector("html").style.backgroundColor = bgColor;
  document.querySelector('meta[name="theme-color"]').setAttribute("content", bgColor);
 }
};

export default setCurrentTheme;
