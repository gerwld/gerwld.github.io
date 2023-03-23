import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
 return (
  <div className="app_content">
   <Hero />
   <Skills/>
   <Projects />
  </div>
 );
};

export default App;
