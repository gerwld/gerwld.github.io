import React from "react";
import { useEffect } from "react";
import { Hero, MainLoader, Navbar, Projects, Skills } from "./components/";

const App = () => {
  const {isInit, setInit} = useEffect(false);

  React.useEffect(() => {
    setInterval(() => setInit(true), 1000);
  }, [])

 return (
  <div className="app_content">
   <Navbar />
   <Hero />
   <Skills />
   <Projects />

   <MainLoader isInit={isInit}/>
  </div>
 );
};

export default App;
