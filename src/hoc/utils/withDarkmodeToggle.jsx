import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSetTheme } from "../../redux/reducers/apr-reducer";

// ** TOGGLE DARK MODE ** //
const withDarkmodeToggle = (WrappedComponent) => {
 return (props) => {
  const d = useDispatch();
  const { currentTheme } = useSelector(({ apr }) => ({
   currentTheme: apr.currentTheme,
  }));

  const hocToggleDarkmode = (theme) => {
   d(onSetTheme(theme));
   localStorage.setItem("currentTheme", theme);
  };

  //Goes to WrappedComponent, so theme can be manually changed
  const hocToggleDarkmodeManual = () => {
   let theme = currentTheme && currentTheme === "dark" ? "light" : "dark";
   hocToggleDarkmode(theme);
  }

  //If system theme changes, so both user & sys can change it
  React.useEffect(() => {
   const sysThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
   let onThemeChangeSet = (e) => hocToggleDarkmode(e.matches ? 'dark' : 'light');

   sysThemeMedia.addEventListener && sysThemeMedia.addEventListener("change", onThemeChangeSet);
   return () => sysThemeMedia.removeEventListener("change", onThemeChangeSet);
  }, []);

  //Body class toggle on change
  React.useEffect(() => {
   document.body.classList.toggle("darkModeOn", currentTheme === "dark");
  }, [currentTheme]);

  return <WrappedComponent {...props} hocToggleDarkmode={hocToggleDarkmodeManual} hocIsDark={currentTheme === "dark"} />;
 };
};

export default withDarkmodeToggle;
