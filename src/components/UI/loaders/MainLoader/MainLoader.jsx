import React from "react";
import s from "./s.module.css";

const MainLoader = ({ isInit }) => {
 return (
  <div className={`${s.loader_content} ${isInit ? s.loader_ready : ""}`}>
  </div>
 );
};

export default MainLoader;
