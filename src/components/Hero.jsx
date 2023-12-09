import { pfp_img, pfp_img__jpg } from "@/assets";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineBehance, AiOutlineInstagram, AiOutlineCodepen } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import "./Hero.scss";
import { useEffect, useState } from "preact/hooks";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero content_wrapper">
      <div className="hero_l1">
        <div className="hero_block hero_block__1">
          <h1 className="hero__title">{t("hero.title")}</h1>
          <p className="hero__desc">
            <span className="typewriter">
              {t("hero.desc")
                .split(" ")
                .map((e) => (
                  <>
                    <span>{e}</span>
                    <> </>
                  </>
                ))}
            </span>
          </p>
        </div>
        <div className="hero_block hero_socials">
          <h2>{t("hero.subtitle")}:</h2>
          <div className="hero_socials__links">
            <a href="https://github.com/gerwld" data-title="Github" target="_blank" rel="noopener">
              <AiOutlineGithub />
              Github
            </a>
            <a href="https://www.linkedin.com/in/p-jaworski" data-title="Linkedin" target="_blank" rel="noopener">
              <AiFillLinkedin />
              Linkedin
            </a>
            <a href="https://twitter.com/p_jaworski63" data-title="Twitter" target="_blank" rel="noopener">
              <AiOutlineTwitter />
              Twitter
            </a>
            <a href="https://www.behance.net/patryk_jaworski" data-title="Behance" target="_blank" rel="noopener">
              <AiOutlineBehance />
              Behance
            </a>
            <a href="https://www.instagram.com/p_jaworski63" data-title="Instagram" target="_blank" rel="noopener">
              <AiOutlineInstagram />
              Instagram
            </a>
            <a href="https://codepen.io/gerwld" data-title="Codepen" target="_blank" rel="noopener">
              <AiOutlineCodepen />
              Codepen
            </a>
            <a href="mailto:pjaworski.dev@gmail.com" data-title={t("hero.email-lable")}>
              <IoMailOutline />
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="hero_l2">
        <div class="reflection-container">
          <div class="reflection-grid-cell reflection-grid-cell-1"></div>
          <div class="reflection-grid-cell reflection-grid-cell-2"></div>
          <div class="reflection-grid-cell reflection-grid-cell-3"></div>
          <div class="reflection-grid-cell reflection-grid-cell-4"></div>
          <div class="reflection-grid-cell reflection-grid-cell-5"></div>
          <div class="reflection-grid-cell reflection-grid-cell-6"></div>
          <div class="reflection-grid-cell reflection-grid-cell-7"></div>
          <div class="reflection-grid-cell reflection-grid-cell-8"></div>
          <div class="reflection-grid-cell reflection-grid-cell-9"></div>
          <div class="reflection-grid-cell reflection-grid-cell-10"></div>
          <div class="reflection-grid-cell reflection-grid-cell-11"></div>
          <div class="reflection-grid-cell reflection-grid-cell-12"></div>
          <div class="reflection-grid-cell reflection-grid-cell-13"></div>
          <div class="reflection-grid-cell reflection-grid-cell-14"></div>
          <div class="reflection-grid-cell reflection-grid-cell-15"></div>
          <div class="reflection-grid-cell reflection-grid-cell-16"></div>
          <div class="reflection-grid-cell reflection-grid-cell-17"></div>
          <div class="reflection-grid-cell reflection-grid-cell-18"></div>
          <div class="reflection-grid-cell reflection-grid-cell-19"></div>
          <div class="reflection-grid-cell reflection-grid-cell-20"></div>
          <div class="reflection-grid-cell reflection-grid-cell-21"></div>
          <div class="reflection-grid-cell reflection-grid-cell-22"></div>
          <div class="reflection-grid-cell reflection-grid-cell-23"></div>
          <div class="reflection-grid-cell reflection-grid-cell-24"></div>
          <div class="reflection-grid-cell reflection-grid-cell-25"></div>
          <div class="reflection-grid-cell reflection-grid-cell-26"></div>
          <div class="reflection-grid-cell reflection-grid-cell-27"></div>
          <div class="reflection-grid-cell reflection-grid-cell-28"></div>
          <div class="reflection-grid-cell reflection-grid-cell-29"></div>
          <div class="reflection-grid-cell reflection-grid-cell-30"></div>
          <div class="reflection-grid-cell reflection-grid-cell-31"></div>
          <div class="reflection-grid-cell reflection-grid-cell-32"></div>
          <div class="reflection-grid-cell reflection-grid-cell-33"></div>
          <div class="reflection-grid-cell reflection-grid-cell-34"></div>
          <div class="reflection-grid-cell reflection-grid-cell-35"></div>
          <div class="reflection-grid-cell reflection-grid-cell-36"></div>
          <div class="reflection-grid-cell reflection-grid-cell-37"></div>
          <div class="reflection-grid-cell reflection-grid-cell-38"></div>
          <div class="reflection-grid-cell reflection-grid-cell-39"></div>
          <div class="reflection-grid-cell reflection-grid-cell-40"></div>
          <div class="reflection-grid-cell reflection-grid-cell-41"></div>
          <div class="reflection-grid-cell reflection-grid-cell-42"></div>
          <div class="reflection-grid-cell reflection-grid-cell-43"></div>
          <div class="reflection-grid-cell reflection-grid-cell-44"></div>
          <div class="reflection-grid-cell reflection-grid-cell-45"></div>
          <div class="reflection-grid-cell reflection-grid-cell-46"></div>
          <div class="reflection-grid-cell reflection-grid-cell-47"></div>
          <div class="reflection-grid-cell reflection-grid-cell-48"></div>
          <div class="reflection-grid-cell reflection-grid-cell-49"></div>
          <div class="reflection-grid-cell reflection-grid-cell-50"></div>
          <div class="reflection-grid-cell reflection-grid-cell-51"></div>
          <div class="reflection-grid-cell reflection-grid-cell-52"></div>
          <div class="reflection-grid-cell reflection-grid-cell-53"></div>
          <div class="reflection-grid-cell reflection-grid-cell-54"></div>
          <div class="reflection-grid-cell reflection-grid-cell-55"></div>
          <div class="reflection-grid-cell reflection-grid-cell-56"></div>
          <div class="reflection-grid-cell reflection-grid-cell-57"></div>
          <div class="reflection-grid-cell reflection-grid-cell-58"></div>
          <div class="reflection-grid-cell reflection-grid-cell-59"></div>
          <div class="reflection-grid-cell reflection-grid-cell-60"></div>
          <div class="reflection-grid-cell reflection-grid-cell-61"></div>
          <div class="reflection-grid-cell reflection-grid-cell-62"></div>
          <div class="reflection-grid-cell reflection-grid-cell-63"></div>
          <div class="reflection-grid-cell reflection-grid-cell-64"></div>
          <div class="reflection-grid-cell reflection-grid-cell-65"></div>
          <div class="reflection-grid-cell reflection-grid-cell-66"></div>
          <div class="reflection-grid-cell reflection-grid-cell-67"></div>
          <div class="reflection-grid-cell reflection-grid-cell-68"></div>
          <div class="reflection-grid-cell reflection-grid-cell-69"></div>
          <div class="reflection-grid-cell reflection-grid-cell-70"></div>
          <div class="reflection-grid-cell reflection-grid-cell-71"></div>
          <div class="reflection-grid-cell reflection-grid-cell-72"></div>
          <div class="reflection-grid-cell reflection-grid-cell-73"></div>
          <div class="reflection-grid-cell reflection-grid-cell-74"></div>
          <div class="reflection-grid-cell reflection-grid-cell-75"></div>
          <div class="reflection-grid-cell reflection-grid-cell-76"></div>
          <div class="reflection-grid-cell reflection-grid-cell-77"></div>
          <div class="reflection-grid-cell reflection-grid-cell-78"></div>
          <div class="reflection-grid-cell reflection-grid-cell-79"></div>
          <div class="reflection-grid-cell reflection-grid-cell-80"></div>
          <div class="reflection-grid-cell reflection-grid-cell-81"></div>
          <div class="reflection-grid-cell reflection-grid-cell-82"></div>
          <div class="reflection-grid-cell reflection-grid-cell-83"></div>
          <div class="reflection-grid-cell reflection-grid-cell-84"></div>
          <div class="reflection-grid-cell reflection-grid-cell-85"></div>
          <div class="reflection-grid-cell reflection-grid-cell-86"></div>
          <div class="reflection-grid-cell reflection-grid-cell-87"></div>
          <div class="reflection-grid-cell reflection-grid-cell-88"></div>
          <div class="reflection-grid-cell reflection-grid-cell-89"></div>
          <div class="reflection-grid-cell reflection-grid-cell-90"></div>
          <div class="reflection-grid-cell reflection-grid-cell-91"></div>
          <div class="reflection-grid-cell reflection-grid-cell-92"></div>
          <div class="reflection-grid-cell reflection-grid-cell-93"></div>
          <div class="reflection-grid-cell reflection-grid-cell-94"></div>
          <div class="reflection-grid-cell reflection-grid-cell-95"></div>
          <div class="reflection-grid-cell reflection-grid-cell-96"></div>
          <div class="reflection-grid-cell reflection-grid-cell-97"></div>
          <div class="reflection-grid-cell reflection-grid-cell-98"></div>
          <div class="reflection-grid-cell reflection-grid-cell-99"></div>
          <div class="reflection-grid-cell reflection-grid-cell-100"></div>
          <div class="reflection-content hero_pfp">
            <picture>
              {/* <source srcset={pfp_img} type="image/webp" /> */}
              <source srcset={pfp_img__jpg} type="image/jpeg" />
              <img class="img-fluid" src={pfp_img__jpg} alt="Profile Picture" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
