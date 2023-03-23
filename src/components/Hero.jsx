import React from "react";
import pfp from "@/assets/pfp.jpeg";

import {AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineBehance, AiOutlineInstagram, AiOutlineCodepen} from 'react-icons/ai';
import {IoMailOutline} from 'react-icons/io5';

const Hero = () => {
 return (
  <section className="hero content_wrapper">
   <div className="hero_l1">
    <div className="hero_block hero_block__1">
     <h1>Hi, I'm Patryk, Frontend Developer</h1>
     <p>I enjoy learning new things, constantly improving myself, producing web projects and contributing to them. I'm also interested in running and playing chess.</p>
    </div>
    <div className="hero_block hero_socials">
     <h2>Follow me:</h2>
     <div className="hero_socials__links">
      <a href="#" data-title="Github"><AiOutlineGithub/>Github</a>
      <a href="#" data-title="Linkedin"><AiFillLinkedin/>Linkedin</a>
      <a href="#" data-title="Twitter"><AiOutlineTwitter/>Twitter</a>
      <a href="#" data-title="Behance"><AiOutlineBehance/>Behance</a>
      <a href="#" data-title="Instagram"><AiOutlineInstagram/>Instagram</a>
      <a href="https://codepen.io/gerwld" data-title="Codepen"><AiOutlineCodepen/>Codepen</a>
      <a href="#" data-title="Contact Email"><IoMailOutline/>Email</a>
     </div>
    </div>
   </div>
   <div className="hero_l2">
    <div className="hero_pfp">
     <img src={pfp} alt="Profile Picture" />
    </div>
   </div>
  </section>
 );
};

export default Hero;
