import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/img/header/logo.svg"
import Instagram from "../assets/img/header/instagram.svg"
import Facebook from "../assets/img/header/facebook.svg"


const Header = () => {
    const navigation: string[] = ['o que fazemos', 'como te ajudamos', 'fale conosco']
    const socialNetworks: string[] = [Instagram, Facebook]
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    const handleBurgerClick = () => {
        setIsActiveBurger(!isActiveBurger);
    };
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const headerHeight = headerRef.current?.offsetHeight || 0;
    
          if (scrollPosition > headerHeight) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return (
        <>
        <div className={`${isFixed ? "active-header" : ""}`}></div>
        <header className={`header ${isFixed ? "fixed" : ""}`} ref={headerRef}>
            <div className="header__container">
                <section className="navigation">
                <button onClick={handleBurgerClick} className={`header__burger ${isActiveBurger ? 'active' : ''}`}>
                    <span></span>
                </button>
                <a className="navigation__logo navigation__link" href="#">
                    <img className="navigation__logo-img" src={Logo} alt="logo" />
                </a>
                <div className="navigation__content header__content">
                    <nav className="navnavigation header__nav">
                        <ul className="navigation__list header__nav-navigation-list">
                            <nav className={`header__nav-body ${isActiveBurger ? 'active' : ''}`}>
                                <ul className="navigation__body-items header__nav-body__items">
                                    {navigation.map((i, index) => <li key={index} className="navigation__menu-item"><a href="#" className="navigation__link">{i}</a></li>)}
                                </ul>
                            </nav>
                        </ul>
                    </nav>
                    <div className="navigation__networks header__networks">
                        <nav className="navigation__networks-nav header__networks-nav">
                            <ul className="navigation__networks-items header__networks-items">
                                {socialNetworks.map((img, index) => {
                                    return (
                                        <li className="navigation__networks-item">
                                            <a key={index} href="#" className=" navigation__link"><img src={img} alt="social network" /></a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                </section>
            </div>
        </header>
        </>
    )
}
export default Header