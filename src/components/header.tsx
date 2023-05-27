import React, { useState } from "react";
import Logo from "../assets/img/header/logo.svg"
import Instagram from "../assets/img/header/instagram.svg"
import Facebook from "../assets/img/header/facebook.svg"


const Header = () => {
    const navigation: string[] = ['o que fazemos', 'como te ajudamos', 'fale conosco']
    const socialNetworks: string[] = [Instagram, Facebook]
    const [isActiveBurger, setIsActiveBurger] = useState(false);

    const handleBurgerClick = () => {
        setIsActiveBurger(!isActiveBurger);
    };
    return (
        <header className="header">
            <div className="header__container">
                <button onClick={handleBurgerClick} className={`header__burger ${isActiveBurger ? 'active' : ''}`}>
                    <span></span>
                </button>
                <a className="header__logo header__nav-link" href="#">
                    <img className="header__logo-img" src={Logo} alt="logo" />
                </a>
                <div className="header__content">
                    <nav className="header__nav">
                        <ul className="header__nav-navigation-list">
                            <nav className={`header__nav-body ${isActiveBurger ? 'active' : ''}`}>
                                <ul className="header__nav-body__items">
                                    {navigation.map((i, index) => <li key={index} className="nav__menu-item"><a href="#" className="header__nav-link">{i}</a></li>)}
                                </ul>
                            </nav>
                        </ul>
                    </nav>
                    <div className="header__networks">
                        <nav className="header__networks-nav">
                            <ul className="header__networks-items">
                                {socialNetworks.map((img, index) => {
                                    return (
                                        <li className="nav__networks-item">
                                            <a key={index} href="#" className="nav__link header__nav-link"><img src={img} alt="social network" /></a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header