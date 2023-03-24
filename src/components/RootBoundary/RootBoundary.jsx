import React from "react";
import { useRouteError } from "react-router-dom";
import s from "./s.module.css";

function RootBoundary() {
 let error = useRouteError();
 return (
  <div className={s.boundary}>
     <h2>Unexpected Application Error!</h2>
     <h3>{error.toString()}</h3>
     <pre>{error.stack.toString()}</pre>
     <p>
      Contact with <a href="https://gerwld.github.io" target="_blank" rel="noopener noreferrer">gerwld.github.io</a> if you
      feel like this is a mistake.
    </p>
  </div>
 );
}

export default RootBoundary;
