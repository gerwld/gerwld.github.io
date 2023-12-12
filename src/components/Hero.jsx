import { pfp_img, pfp_img__jpg } from "@/assets";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineBehance, AiOutlineInstagram, AiOutlineCodepen } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import "./Hero.scss";
import { toast, Toaster } from "./rht.mjs";
import { useRef, useState } from "preact/hooks";

const Hero = () => {
  const { t } = useTranslation();
  const [isError, setError] = useState(false);

  function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  const copyEmail = () => {
    const cp = 'pjaworski.dev@gmail.com'
    if (!isError) {
      if (!navigator.clipboard) {
        copyToClipboard(cp)
        toast.success(t("notifications.email-copied"), { duration: 2000 })
      } else {
        navigator.clipboard.writeText(cp).then(
          () => {
            toast.success(t("notifications.email-copied"), { duration: 2000 })
          })
          .catch(
            () => {
              toast.error(t("notifications.email-ns"), { duration: 2000 })
              setError(true)
            })
      }
    }
  }

  const openEmail = () => {
    toast.loading(t("notifications.email-client"), { duration: 2000 })
  }

  return (
    <section className="hero content_wrapper">
      <Toaster />
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
            <div className="hero_socials__email">
              <button className="hero_socials__embtn" data-title={t("hero.email-lable")}>
                <IoMailOutline />
                Email</button>
              <div className="hero_socials__dropdown">
                <a onClick={openEmail} href="mailto:pjaworski.dev@gmail.com" className="grho grho__sml">
                  {t("hero.email-client")}
                </a>
                <button onClick={copyEmail} className={isError ? "textlnk" : "grho grho__sml"}  >{isError ? "pjaworski.dev@gmail.com" : t("hero.email-copy")
                }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_l2">
        <div className="reflection-container">
          <div className="rf-gridc rf-gridc-1"></div>
          <div className="rf-gridc rf-gridc-2"></div>
          <div className="rf-gridc rf-gridc-3"></div>
          <div className="rf-gridc rf-gridc-4"></div>
          <div className="rf-gridc rf-gridc-5"></div>
          <div className="rf-gridc rf-gridc-6"></div>
          <div className="rf-gridc rf-gridc-7"></div>
          <div className="rf-gridc rf-gridc-8"></div>
          <div className="rf-gridc rf-gridc-9"></div>
          <div className="rf-gridc rf-gridc-10"></div>
          <div className="rf-gridc rf-gridc-11"></div>
          <div className="rf-gridc rf-gridc-12"></div>
          <div className="rf-gridc rf-gridc-13"></div>
          <div className="rf-gridc rf-gridc-14"></div>
          <div className="rf-gridc rf-gridc-15"></div>
          <div className="rf-gridc rf-gridc-16"></div>
          <div className="rf-gridc rf-gridc-17"></div>
          <div className="rf-gridc rf-gridc-18"></div>
          <div className="rf-gridc rf-gridc-19"></div>
          <div className="rf-gridc rf-gridc-20"></div>
          <div className="rf-gridc rf-gridc-21"></div>
          <div className="rf-gridc rf-gridc-22"></div>
          <div className="rf-gridc rf-gridc-23"></div>
          <div className="rf-gridc rf-gridc-24"></div>
          <div className="rf-gridc rf-gridc-25"></div>
          <div className="rf-gridc rf-gridc-26"></div>
          <div className="rf-gridc rf-gridc-27"></div>
          <div className="rf-gridc rf-gridc-28"></div>
          <div className="rf-gridc rf-gridc-29"></div>
          <div className="rf-gridc rf-gridc-30"></div>
          <div className="rf-gridc rf-gridc-31"></div>
          <div className="rf-gridc rf-gridc-32"></div>
          <div className="rf-gridc rf-gridc-33"></div>
          <div className="rf-gridc rf-gridc-34"></div>
          <div className="rf-gridc rf-gridc-35"></div>
          <div className="rf-gridc rf-gridc-36"></div>
          <div className="rf-gridc rf-gridc-37"></div>
          <div className="rf-gridc rf-gridc-38"></div>
          <div className="rf-gridc rf-gridc-39"></div>
          <div className="rf-gridc rf-gridc-40"></div>
          <div className="rf-gridc rf-gridc-41"></div>
          <div className="rf-gridc rf-gridc-42"></div>
          <div className="rf-gridc rf-gridc-43"></div>
          <div className="rf-gridc rf-gridc-44"></div>
          <div className="rf-gridc rf-gridc-45"></div>
          <div className="rf-gridc rf-gridc-46"></div>
          <div className="rf-gridc rf-gridc-47"></div>
          <div className="rf-gridc rf-gridc-48"></div>
          <div className="rf-gridc rf-gridc-49"></div>
          <div className="rf-gridc rf-gridc-50"></div>
          <div className="rf-gridc rf-gridc-51"></div>
          <div className="rf-gridc rf-gridc-52"></div>
          <div className="rf-gridc rf-gridc-53"></div>
          <div className="rf-gridc rf-gridc-54"></div>
          <div className="rf-gridc rf-gridc-55"></div>
          <div className="rf-gridc rf-gridc-56"></div>
          <div className="rf-gridc rf-gridc-57"></div>
          <div className="rf-gridc rf-gridc-58"></div>
          <div className="rf-gridc rf-gridc-59"></div>
          <div className="rf-gridc rf-gridc-60"></div>
          <div className="rf-gridc rf-gridc-61"></div>
          <div className="rf-gridc rf-gridc-62"></div>
          <div className="rf-gridc rf-gridc-63"></div>
          <div className="rf-gridc rf-gridc-64"></div>
          <div className="rf-gridc rf-gridc-65"></div>
          <div className="rf-gridc rf-gridc-66"></div>
          <div className="rf-gridc rf-gridc-67"></div>
          <div className="rf-gridc rf-gridc-68"></div>
          <div className="rf-gridc rf-gridc-69"></div>
          <div className="rf-gridc rf-gridc-70"></div>
          <div className="rf-gridc rf-gridc-71"></div>
          <div className="rf-gridc rf-gridc-72"></div>
          <div className="rf-gridc rf-gridc-73"></div>
          <div className="rf-gridc rf-gridc-74"></div>
          <div className="rf-gridc rf-gridc-75"></div>
          <div className="rf-gridc rf-gridc-76"></div>
          <div className="rf-gridc rf-gridc-77"></div>
          <div className="rf-gridc rf-gridc-78"></div>
          <div className="rf-gridc rf-gridc-79"></div>
          <div className="rf-gridc rf-gridc-80"></div>
          <div className="rf-gridc rf-gridc-81"></div>
          <div className="rf-gridc rf-gridc-82"></div>
          <div className="rf-gridc rf-gridc-83"></div>
          <div className="rf-gridc rf-gridc-84"></div>
          <div className="rf-gridc rf-gridc-85"></div>
          <div className="rf-gridc rf-gridc-86"></div>
          <div className="rf-gridc rf-gridc-87"></div>
          <div className="rf-gridc rf-gridc-88"></div>
          <div className="rf-gridc rf-gridc-89"></div>
          <div className="rf-gridc rf-gridc-90"></div>
          <div className="rf-gridc rf-gridc-91"></div>
          <div className="rf-gridc rf-gridc-92"></div>
          <div className="rf-gridc rf-gridc-93"></div>
          <div className="rf-gridc rf-gridc-94"></div>
          <div className="rf-gridc rf-gridc-95"></div>
          <div className="rf-gridc rf-gridc-96"></div>
          <div className="rf-gridc rf-gridc-97"></div>
          <div className="rf-gridc rf-gridc-98"></div>
          <div className="rf-gridc rf-gridc-99"></div>
          <div className="rf-gridc rf-gridc-100"></div>
          <div className="reflection-content hero_pfp">
            <picture>
              <source srcset={pfp_img} type="image/webp" />
              <source srcset={pfp_img__jpg} type="image/jpeg" />
              <img className="img-fluid" src={pfp_img__jpg} alt="Profile Picture" />
            </picture>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
