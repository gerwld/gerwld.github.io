import React from "react";
import s from "./s.module.css";
import logo from "@/assets/extensions/logo_instaplus.svg";
import chrome from "@/assets/extensions/browsers/chrome.svg";
import firefox from "@/assets/extensions/browsers/firefox.svg";
import safari from "@/assets/extensions/browsers/safari.svg";
import edge from "@/assets/extensions/browsers/edge.svg";
import { extensions_list } from "../state";

const Indexspotify = () => {
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

          {/* <nav>
            <a href="#">Get Support</a>
            <a href="#">Request Feature</a>
            <a href="#">Donate</a>
          </nav> */}
        </div>
      </header>
      <div className={s.landing_wrapper}>
        <h1 className={s.landing_title}>InstaPlus Extension</h1>
        <p className={s.landing_subtitle}>
          Hide Instagram shorts tab, videos, comments, suggestions wall, vanity metrics, homepage recommendations,
          trending, and many more.
        </p>
        <img class={s.logo} src={logo} alt="InstaPlus Extension" />

        <nav className={s.download_links}>
          <a
            href="https://chrome.google.com/webstore/detail/instaplus-remove-instagra/dbbopjndlaginbghfoibbndhlbpdpapd"
            title="Google Chrome"
          >
            <img src={chrome} alt="Google Chrome" />
          </a>
          <a class={s.disabled} href="#" title="Soon">
            <img src={safari} alt="Safari" />
          </a>
          <a class={s.disabled} href="#" title="Soon">
            <img src={firefox} alt="Firefox" />
          </a>
          <a class={s.disabled} href="#" title="Soon">
            <img src={edge} alt="Microsoft Edge" />
          </a>
        </nav>
      </div>
      <div className={s.w_body_light}>
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
      </div>
    </div>
  );
};

export default Indexspotify;
