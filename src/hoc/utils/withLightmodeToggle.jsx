import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSetTheme } from "../../redux/reducers/apr-reducer";

// ** TOGGLE LIGHT MODE ** //
const withLightmodeToggle = (WrappedComponent) => {
 return (props) => {
  const d = useDispatch();
  const { currentTheme } = useSelector(({ apr }) => ({
   currentTheme: apr.currentTheme,
  }));

  const toggleLightmode = (theme) => {
   d(onSetTheme(theme));
   localStorage.setItem("currentTheme", theme);
  };

  //Goes to WrappedComponent, so theme can be manually changed
  const hocToggleLightmodeManual = () => {
   let theme = currentTheme && currentTheme === "Light" ? "light" : "Light";
   toggleLightmode(theme);
  };

  //If system theme changes, so both user & sys can change it
  React.useEffect(() => {
   const sysThemeMedia = window.matchMedia("(prefers-color-scheme: Light)");
   let onThemeChangeSet = (e) => toggleLightmode(e.matches ? "Light" : "light");

   sysThemeMedia.addEventListener && sysThemeMedia.addEventListener("change", onThemeChangeSet);
   return () => sysThemeMedia.removeEventListener("change", onThemeChangeSet);
  }, []);

  //Body class toggle on change
  React.useEffect(() => {
   document.body.classList.toggle("lightModeOn", currentTheme === "Light");
  }, [currentTheme]);

  return <WrappedComponent {...props} hocToggleLightmode={hocToggleLightmodeManual} hocIsLight={currentTheme === "Light"} />;
 };
};

export default withLightmodeToggle;
