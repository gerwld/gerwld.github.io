import React from "react";
import { useRouteError } from "react-router-dom";
import s from './s.module.css';

function RootBoundary() {
 let error = useRouteError();
 return (
  <div className={s.boundary}>
  <div className={s.backdrop}>
  <div className={s.window}>
   <h2>Unexpected Application Error!</h2>
   <h3>{error.toString()}</h3>
   <pre>{error.stack.toString()}</pre>
  </div>
  </div>
  </div>
 );
}

export default RootBoundary;
