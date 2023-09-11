import React from "react";
import s from "./s.module.css";
import logo from "@/assets/extensions/logo_instaplus.svg";
import slide_1 from "@/assets/extensions/shots/instaplus/prev_1.png";
import { extensions_list } from "../state";

const WelcomeInsta = () => {
  return (
    <div className={s.landing_content + " " + s.landing_content__welcome}>
      <header className={s.header}>
        <div className={s.header_content}>
          <a href="/" className={s.logo_header + " " + s.logo_header__dark}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
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

      <div className={s.w_header}>
        <div className={s.w_header__content}>
          <div className={s.header_group}>
            <h1 className={s.landing_title}>InstaPlus for Chrome Is Now Active!</h1>
            <img class={s.logo} src={logo} alt="InstaPlus Extension" />
          </div>

          <p className={s.landing_subtitle}>
            Hide Instagram shorts tab, videos, comments, suggestions wall, vanity metrics, homepage recommendations,
            trending, and many more.
          </p>
          <div className={s.presentation}>
            <div className={s.pres_slides}>
              <img src={slide_1} alt="Slide 1" />
            </div>
            <div className={s.pres_content}>
              <h3>The InstaPlus logo means InstaPlus is checking your writing.</h3>
              <p>
                When InstaPlus has a suggestion, you’ll see a number in the circle. When it’s the InstaPlus logo, it
                means InstaPlus has no suggestions.
              </p>
              <div className={s.pres_content__nav}>
                <button>Next</button>
                <span>1 of 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.w_body}>
        <h2>Extensions you may also like</h2>
        <p>Get suggestions from InstaPlus when you write on all your favorite platforms and devices.</p>

        <div className={s.ls_extensions}>
          {extensions_list
            .filter((e) => e.id !== "bqerne34dfbnddfbfdbfdfb6")
            .map((e) => (
              <div className={s.ls_extensions__item}>
                <a href={e.url} target="_blank" className={s.ls_extensions__hovergroup}>
                  <h3>{e.title}</h3>
                  <div className={s.content}>
                    <p>{e.desc}</p>
                    <a href={e.url} className={s.open_btn} target="_blank">
                      Open
                    </a>
                  </div>
                </a>
                <img src={e.img} alt="Preview" />
              </div>
            ))}
        </div>
      </div>

      <div className={s.w_extinfo}>
        To begin working with InstaPlus, click
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.8 21H5q-.825 0-1.413-.588T3 19v-3.8q1.2 0 2.1-.762T6 12.5q0-1.175-.9-1.937T3 9.8V6q0-.825.588-1.413T5 4h4q0-1.05.725-1.775T11.5 1.5q1.05 0 1.775.725T14 4h4q.825 0 1.413.588T20 6v4q1.05 0 1.775.725T22.5 12.5q0 1.05-.725 1.775T20 15v4q0 .825-.588 1.413T18 21h-3.8q0-1.25-.787-2.125T11.5 18q-1.125 0-1.913.875T8.8 21Z"
          />
        </svg>
        in the top left corner, then find
        <img src={logo} alt="" />. If you want to pin it, click on{" "}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1l1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"
          />
        </svg>{" "}
        next to it. Enjoy!
      </div>
    </div>
  );
};

export default WelcomeInsta;
