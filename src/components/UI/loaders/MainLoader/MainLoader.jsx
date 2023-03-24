import React from "react";
import s from "./s.module.css";

const MainLoader = ({ isInit }) => {
 return (
  <div className={`${s.loader_content} ${isInit ? s.loader_ready : ""}`}>
   <div className={s.lds_roller}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
   </div>
  </div>
 );
};

export default MainLoader;
