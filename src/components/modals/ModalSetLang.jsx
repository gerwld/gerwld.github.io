import { Link } from 'preact-router/match';
import { compose } from "redux";
import { withClickOutside, withUrlLangSetter } from "@/hoc";
import s from "./s.module.css";

const ModalSetLang = ({ hocLang, hocIsCurrent, isShow, toggleShow, refElement }) => {
        return (
                <div ref={refElement} className={s.content}>

                        <button onClick={toggleShow}
                                className={`text_btn header__lang-btn select_line grho ${isShow ? "select_line-active" : ""}`} title="Change Language">{hocLang}</button>

                        <div className={`${s.modal_window} ${isShow ? s.modal_visible : ""} modal_l03`} aria-hidden={!isShow}>
                                <ul>
                                        <li><Link href="/?setLn=en" className={hocIsCurrent("en")}>English</Link></li>
                                        <li><Link href="/?setLn=uk" className={hocIsCurrent("uk")}>Українська</Link></li>
                                        <li><Link href="/?setLn=be" className={hocIsCurrent("be")}>Беларуская</Link></li>
                                        <li><Link href="/?setLn=pl" className={hocIsCurrent("pl")}>Polski (Beta)</Link></li>
                                        <li><Link href="/?setLn=ka" className={hocIsCurrent("ka")}>ქართული (Beta)</Link></li>
                                        <li><Link href="/?setLn=de" className={hocIsCurrent("de")}>Deutsch (Beta)</Link></li>
                                </ul>
                        </div>

                </div>
        );
};

export default compose(withClickOutside, withUrlLangSetter)(ModalSetLang);
