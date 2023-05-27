import React from "react";
import Logo from "../assets/img/header/logo.svg"
import Instagram from "../assets/img/header/instagram.svg"
import Facebook from "../assets/img/header/facebook.svg"
const FooterForm = () => {
    const navigation: string[] = ['o que fazemos', 'como te ajudamos', 'fale conosco']
    return (
        <form className="footer__form">
            <label className="footer__form-label">
                Receba as novidades do nice
            </label>
            <div className="footer__input-wrapper">
                <input className="footer__input" type="email" placeholder="nome@email.com" />
                <button className="footer__form-btn">Inscrever</button>
            </div>
        </form>
    )
}
export default FooterForm