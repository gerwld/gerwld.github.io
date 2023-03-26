import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hero, MainLoader, Navbar, Projects, Skills } from "./components/";
import { setInit } from "./redux/reducers/app-reducer";

const App = () => {
 const d = useDispatch();
 const { isInit } = useSelector(({ app }) => ({
  isInit: app.isInit,
 }));

 useEffect(() => {
  setTimeout(() => d(setInit(true)), 300);
  return clearTimeout(() => d(setInit(true)), 300);
 }, []);

 return (
  <div className="app_content">
   <Navbar />
   <Hero />
   <Skills isInit={isInit} />
   <Projects />
   <MainLoader isInit={isInit} />
  </div>
 );
};

export default App;
