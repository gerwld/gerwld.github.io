import React from "react";
import { Hero, Navbar, Projects, Skills } from "./components/";

const App = () => {
 return (
  <div className="app_content">
   <Navbar />
   <Hero />
   <Skills />
   <Projects />
  </div>
 );
};

export default App;
