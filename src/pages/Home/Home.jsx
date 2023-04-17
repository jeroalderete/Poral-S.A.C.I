import { useState, useEffect } from "react";
import "./Home.css";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import Card from "../../components/Card/Card";
import bgImage from "../../../public/assets/griferia1.jpg";
import bgImage2 from "../../../public/assets/ceramicos1.jpg";
import bgImage3 from "../../../public/assets/historia.jpg";
import HeroImage from "../../components/HeroImage/HeroImage";

const ItemListContainer = ({ categoryId }) => {
  useEffect(() => {}, [categoryId]);

  return (
    <>
      <div className="grid">
        <img className="img-inicio" src="../../../public/assets/inicio3.png" />
      </div>
      <LogoCarousel />
      <div className="card-container md:flex gap-6 justify-between px-1 mr-4">
        <Card imgSrc={bgImage}>
          <h3 className="text-xl font-bold mb-2 text-center">PRODUCTOS</h3>
          <button className="btn bg-black px-10">TIENDA</button>
        </Card>
        <Card imgSrc={bgImage2}>
          <h3 className="text-xl font-bold mb-2">NEWSLETTER</h3>

          <div className="right box">
            <div className="topic">
              <form className="pb-7" action="#">
                <input
                  className="email-input"
                  type="text"
                  placeholder="Email"
                />
              </form>
            </div>
          </div>
          <button className="btn bg-black px-10">SUSCRIBIRSE</button>
        </Card>
        <Card imgSrc={bgImage3}>
          <h3 className="text-xl text-center font-bold mb-2">COTIZACIONES</h3>
          <button className="btn bg-black px-7">CONTACTO</button>
        </Card>
      </div>
      <div className="grid">
        <div></div>
        <div className="boton-container"></div>
      </div>

      <HeroImage
        title2="Más de 60 años en el mercado de la construcción"
        text1="A mediado de la década del 40, Hugo Porta junto a Ricardo Alvarado"
        text2="y con la ayuda de Enrique Alvarado, deciden fundar una empresa
        dedicada a la distribución de artículos sanitarios."
      />
    </>
  );
};

export default ItemListContainer;
