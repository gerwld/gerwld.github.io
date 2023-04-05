import {pfp_img, pfp_img__jpg} from "@/assets";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineBehance, AiOutlineInstagram, AiOutlineCodepen} from 'react-icons/ai';
import {IoMailOutline} from 'react-icons/io5';

const Hero = () => {
 return (
  <section className="hero content_wrapper">
   <div className="hero_l1">
    <div className="hero_block hero_block__1">
     <h1 className="hero__title">Hi, I'm Patryk, Frontend Developer</h1>
     <p className="hero__desc">I enjoy learning new things, constantly improving myself, producing web projects and contributing to them.
      I am also interested in running and playing chess.</p>
    </div>
    <div className="hero_block hero_socials">
     <h2>Follow me:</h2>
     <div className="hero_socials__links">
      <a href="https://github.com/gerwld" data-title="Github" target="_blank" rel="noopener"><AiOutlineGithub/>Github</a>
      <a href="https://www.linkedin.com/in/p-jaworski" data-title="Linkedin" target="_blank" rel="noopener"><AiFillLinkedin/>Linkedin</a>
      <a href="https://twitter.com/p_jaworski63" data-title="Twitter" target="_blank" rel="noopener"><AiOutlineTwitter/>Twitter</a>
      <a href="https://www.behance.net/patryk_jaworski" data-title="Behance" target="_blank" rel="noopener"><AiOutlineBehance/>Behance</a>
      <a href="https://www.instagram.com/p_jaworski63" data-title="Instagram" target="_blank" rel="noopener"><AiOutlineInstagram/>Instagram</a>
      <a href="https://codepen.io/gerwld" data-title="Codepen" target="_blank" rel="noopener"><AiOutlineCodepen/>Codepen</a>
      <a href="mailto:pjaworski.dev@gmail.com" data-title="Contact Email"><IoMailOutline/>Email</a>
     </div>
    </div>
   </div>
   <div className="hero_l2">
    <div className="hero_pfp">
     <picture>
      <source srcset={pfp_img} type="image/webp"/>
      <source srcset={pfp_img__jpg} type="image/jpeg"/>
      <img class="img-fluid" src={pfp_img__jpg} alt="Profile Picture"/>
    </picture>
    </div>
   </div>
  </section>
 );
};

export default Hero;
