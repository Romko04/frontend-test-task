import React from "react";
import Slider1 from '../assets/img/services/slide1.svg'
import Plus from "../assets/img/services/plus-circle.png";
const Services = () => {
    return (
        <section className="services">
            <div className="services__container container">
                <h3 className="title services__title">Um subtítulo para quem rolou até aqui!</h3>
                <p className="text services__text">
                    Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.
                </p>
                <div className="swiper services__swiper">
                <div className="swiper-wrapper services__swiper-wrapper ">
                    <div className="swiper-slide services__swiper-slide">
                        <img className="services__slide-img" src={Slider1} alt="" />
                        <h5 className="services__slide-title">Rápido</h5>
                        <p className="services__slide-text ">
                        Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
                        </p>
                        <div className="swiper__svg">
                            <img src={Plus} alt="" />
                        </div>
                    </div>
                    <div className="swiper-slide services__swiper-slide">
                        <img className="services__slide-img" src={Slider1} alt="" />
                        <h5 className="services__slide-title">Rápido</h5>
                        <p className="services__slide-text ">
                        Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
                        </p>
                        <div className="swiper__svg">
                            <img src={Plus} alt="" />
                        </div>
                    </div>
                    <div className="swiper-slide services__swiper-slide">
                        <img className="services__slide-img" src={Slider1} alt="" />
                        <h5 className="services__slide-title">Rápido</h5>
                        <p className="services__slide-text ">
                        Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
                        </p>
                        <div className="swiper__svg">
                            <img src={Plus} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
    )
}
export default Services