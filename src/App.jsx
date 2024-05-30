import { useEffect } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Hero, MainLoader, Navbar, Projects, Skills } from "./components/";
import { setInit } from "./redux/reducers/app-reducer";
import { useGrad } from "./hooks/useGrad";
import HexGrid from "./components/UI/HexGrid/HexGrid";

const App = () => {
  const d = useDispatch();
  const g = useGrad();
  const { isInit } = useSelector(({ app }) => ({
    isInit: app.isInit,
  }));

  useEffect(() => {
    setTimeout(() => d(setInit(true)), 50);
    return clearTimeout(() => d(setInit(true)), 50);
  }, []);

  return (
    <div className="app_content">
      <HexGrid />
      <Navbar />
      <Hero />
      <Skills isInit={isInit} />
      <Projects />
      <MainLoader isInit={isInit} />
    </div>
  );
};

export default App;
