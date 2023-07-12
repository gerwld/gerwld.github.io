import React from "react";
import s from "./s.module.css";
import logo from "@/assets/extensions/logo_instaplus.svg";
import chrome from "@/assets/extensions/browsers/chrome.svg";
import firefox from "@/assets/extensions/browsers/firefox.svg";
import safari from "@/assets/extensions/browsers/safari.svg";
import edge from "@/assets/extensions/browsers/edge.svg";

const IndexInsta = () => {
  return (
    <div className={s.landing_content}>
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

      <span className={s.version}>v1.0.3</span>
    </div>
  );
};

export default IndexInsta;
