import React from "react";
import s from "./s.module.css";
import logo from "@/assets/extensions/logo_MindfulTube.svg";

const Deletemt = () => {
  return (
    <div className={s.landing_content}>
      <header className={s.header}>
        <div className={s.header_content}>
          <a href="/" className={s.logo_header}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
              <title>React Logo</title>
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
            <span>Pjaworskidev</span>
          </a>
        </div>
      </header>
      <div className={s.un_content}>
        <h1>Help us improve</h1>
        <p>Sorry to see you go! We're working to make MindfulTube the best it can be.</p>
        <form>
          <label>
            <span>Why did you uninstall MindfulTube?</span>
            <textarea placeholder="Your answer" required />
          </label>
          <label>
            <span>If you want us to follow up, enter your email:</span>
            <input type="email" placeholder="youremail@example.com" />
          </label>

          <button type="submit" className={s.btn_submit}>
            Submit
          </button>
          <p>
            Did you know that recommendations drive over 70% of time spent on Instagram? Take back your time and{" "}
            <a href="https://chrome.google.com/webstore/detail/MindfulTube-remove-instagra/dbbopjndlaginbghfoibbndhlbpdpapd">
              reinstall MindfulTube
            </a>
            .
          </p>
          <p>
            P.S. MindfulTube is customizable! Just tap <img src={logo} className={s.mini_ic} /> in the toolbar to choose
            the options you want.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Deletemt;
