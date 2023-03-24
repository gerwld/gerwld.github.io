import React from "react";
import { Trans } from "react-i18next";
import { useDispatch } from "react-redux";
import withClickOutside from "../../hoc/withClickOutside";
import { userLogOut } from "../../redux/reducers/auth-reducer";
import s from "./s.module.css";

const ModalAuth = withClickOutside(({ isShow, refElement, toggleShow, toggleDarkmode, hocIsDark }) => {
 const showDarmodeIcon = () => hocIsDark ? "on" : "off";
 const d = useDispatch();
 const onLogout = () => {
  d(userLogOut());
 };

 return (
  <div ref={refElement} className={s.content}>
   <div onClick={toggleShow} className={`auth-sect select_line ${isShow ? "select_line-active" : ""}`}>
    <Trans i18nKey="greeting"/>, <span className="text_btn">authObj</span>!
   </div>
   <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`}>
    <ul>
     <li><span onClick={toggleDarkmode}><Trans i18nKey="auth.darkmode"/> {showDarmodeIcon()}</span></li>
     <li><span><Trans i18nKey="auth.premium"/></span></li>
     <li><span onClick={onLogout}><Trans i18nKey="auth.logout"/></span></li>
    </ul>
   </div>
  </div>
 );
});

export default ModalAuth;
