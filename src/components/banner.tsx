import React from "react";
import Man from '../assets/img/banner/man.svg'
const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__container container">
                <div className="banner__content">
                    <h1 className="banner__title">Um slogan chamativo aqui.</h1>
                    <p className="banner__text">
                        Um texto sobre o seu produto ou serviço. Explique <span className="banner__text--yellow">porque ele é valioso</span>
                        e direcione o usuário ao próximo objetivo.
                    </p>
                    <div className="banner__buttons">
                        <button className="banner__btn banner__btn--yellow">Eu quero!</button>
                        <button className="banner__btn banner__btn--default">Conhecer mais</button>
                    </div>
                </div>
                <div className="banner__img-wrapper">
                    <img className="banner__img" src={Man} alt="man" />
                </div>
            </div>
        </section>
    )
}
export default Banner