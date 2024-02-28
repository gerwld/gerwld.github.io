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
            {/* <a href="https://twitter.com/p_jaworski63" data-title="Twitter" target="_blank" rel="noopener">
              <AiOutlineTwitter />
              Twitter
            </a> */}
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
        <div className="rfc">
          <div className="rfcg rfcg-1"></div>
          <div className="rfcg rfcg-2"></div>
          <div className="rfcg rfcg-3"></div>
          <div className="rfcg rfcg-4"></div>
          <div className="rfcg rfcg-5"></div>
          <div className="rfcg rfcg-6"></div>
          <div className="rfcg rfcg-7"></div>
          <div className="rfcg rfcg-8"></div>
          <div className="rfcg rfcg-9"></div>
          <div className="rfcg rfcg-10"></div>
          <div className="rfcg rfcg-11"></div>
          <div className="rfcg rfcg-12"></div>
          <div className="rfcg rfcg-13"></div>
          <div className="rfcg rfcg-14"></div>
          <div className="rfcg rfcg-15"></div>
          <div className="rfcg rfcg-16"></div>
          <div className="rfcg rfcg-17"></div>
          <div className="rfcg rfcg-18"></div>
          <div className="rfcg rfcg-19"></div>
          <div className="rfcg rfcg-20"></div>
          <div className="rfcg rfcg-21"></div>
          <div className="rfcg rfcg-22"></div>
          <div className="rfcg rfcg-23"></div>
          <div className="rfcg rfcg-24"></div>
          <div className="rfcg rfcg-25"></div>
          <div className="rfcg rfcg-26"></div>
          <div className="rfcg rfcg-27"></div>
          <div className="rfcg rfcg-28"></div>
          <div className="rfcg rfcg-29"></div>
          <div className="rfcg rfcg-30"></div>
          <div className="rfcg rfcg-31"></div>
          <div className="rfcg rfcg-32"></div>
          <div className="rfcg rfcg-33"></div>
          <div className="rfcg rfcg-34"></div>
          <div className="rfcg rfcg-35"></div>
          <div className="rfcg rfcg-36"></div>
          <div className="rfcg rfcg-37"></div>
          <div className="rfcg rfcg-38"></div>
          <div className="rfcg rfcg-39"></div>
          <div className="rfcg rfcg-40"></div>
          <div className="rfcg rfcg-41"></div>
          <div className="rfcg rfcg-42"></div>
          <div className="rfcg rfcg-43"></div>
          <div className="rfcg rfcg-44"></div>
          <div className="rfcg rfcg-45"></div>
          <div className="rfcg rfcg-46"></div>
          <div className="rfcg rfcg-47"></div>
          <div className="rfcg rfcg-48"></div>
          <div className="rfcg rfcg-49"></div>
          <div className="rfcg rfcg-50"></div>
          <div className="rfcg rfcg-51"></div>
          <div className="rfcg rfcg-52"></div>
          <div className="rfcg rfcg-53"></div>
          <div className="rfcg rfcg-54"></div>
          <div className="rfcg rfcg-55"></div>
          <div className="rfcg rfcg-56"></div>
          <div className="rfcg rfcg-57"></div>
          <div className="rfcg rfcg-58"></div>
          <div className="rfcg rfcg-59"></div>
          <div className="rfcg rfcg-60"></div>
          <div className="rfcg rfcg-61"></div>
          <div className="rfcg rfcg-62"></div>
          <div className="rfcg rfcg-63"></div>
          <div className="rfcg rfcg-64"></div>
          <div className="rfcg rfcg-65"></div>
          <div className="rfcg rfcg-66"></div>
          <div className="rfcg rfcg-67"></div>
          <div className="rfcg rfcg-68"></div>
          <div className="rfcg rfcg-69"></div>
          <div className="rfcg rfcg-70"></div>
          <div className="rfcg rfcg-71"></div>
          <div className="rfcg rfcg-72"></div>
          <div className="rfcg rfcg-73"></div>
          <div className="rfcg rfcg-74"></div>
          <div className="rfcg rfcg-75"></div>
          <div className="rfcg rfcg-76"></div>
          <div className="rfcg rfcg-77"></div>
          <div className="rfcg rfcg-78"></div>
          <div className="rfcg rfcg-79"></div>
          <div className="rfcg rfcg-80"></div>
          <div className="rfcg rfcg-81"></div>
          <div className="rfcg rfcg-82"></div>
          <div className="rfcg rfcg-83"></div>
          <div className="rfcg rfcg-84"></div>
          <div className="rfcg rfcg-85"></div>
          <div className="rfcg rfcg-86"></div>
          <div className="rfcg rfcg-87"></div>
          <div className="rfcg rfcg-88"></div>
          <div className="rfcg rfcg-89"></div>
          <div className="rfcg rfcg-90"></div>
          <div className="rfcg rfcg-91"></div>
          <div className="rfcg rfcg-92"></div>
          <div className="rfcg rfcg-93"></div>
          <div className="rfcg rfcg-94"></div>
          <div className="rfcg rfcg-95"></div>
          <div className="rfcg rfcg-96"></div>
          <div className="rfcg rfcg-97"></div>
          <div className="rfcg rfcg-98"></div>
          <div className="rfcg rfcg-99"></div>
          <div className="rfcg rfcg-100"></div>
          <div className="rfcc hero_pfp">
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
