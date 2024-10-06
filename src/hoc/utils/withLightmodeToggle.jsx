import { useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { onSetTheme } from "../../redux/reducers/apr-reducer";
import setCurrentTheme from "../../utils/setCurrentTheme";

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
      let theme = currentTheme && currentTheme === "dark" ? "light" : "dark";
      toggleLightmode(theme);
    };

    //If system theme changes, so both user & sys can change it
    useEffect(() => {
      const sysThemeMedia = window.matchMedia("(prefers-color-scheme: Light)");
      let onThemeChangeSet = (e) =>
        toggleLightmode(e.matches ? "light" : "dark") && console.log("changed");

      sysThemeMedia.addEventListener &&
        sysThemeMedia.addEventListener("change", onThemeChangeSet);
      return () =>
        sysThemeMedia?.removeEventListener &&
        sysThemeMedia.removeEventListener("change", onThemeChangeSet);
    }, []);

    //Body class toggle on change
    useEffect(() => {
      setCurrentTheme(currentTheme);
    }, [currentTheme]);

    return (
      <WrappedComponent
        {...props}
        hocToggleLightmode={hocToggleLightmodeManual}
        hocIsLight={currentTheme === "light"}
      />
    );
  };
};

export default withLightmodeToggle;
