import { useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Hero, MainLoader, Navbar, Projects, Skills } from "./components/";
import { setInit } from "./redux/reducers/app-reducer";

const App = () => {
 const d = useDispatch();
 const { isInit } = useSelector(({ app }) => ({
  isInit: app.isInit,
 }));

 useEffect(() => {
  setTimeout(() => d(setInit(true)), 200);
  return clearTimeout(() => d(setInit(true)), 200);
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
