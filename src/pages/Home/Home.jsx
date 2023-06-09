import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import Card from "../../components/Card/Card";
import bgImage from "../../../public/assets/griferia1.jpg";
import bgImage2 from "../../../public/assets/ceramicos1.jpg";
import bgImage3 from "../../../public/assets/historia.jpg";
import logoHero from "../../../public/assets/logo1-2.png";
import HeroImage from "../../components/HeroImage/HeroImage";

const ItemListContainer = ({ categoryId }) => {
  useEffect(() => {}, [categoryId]);

  return (
    <div className="wrapper">
      <header className="hero">
        <img className="img-inicio" src="../../../public/assets/inicio3.png" />
      </header>

      <div className="logo-carousel-container pt-30">
        <LogoCarousel className="logo-carousel" />
      </div>

      <div className="card-container">
        <div className="card">
          <Card imgSrc={bgImage}>
            <h3 className="text-xl font-bold mb-2 text-center">PRODUCTOS</h3>
            <Link to="/store">
              <button className="btn bg-black px-10 text-white">TIENDA</button>
            </Link>
          </Card>
        </div>

        <div className="card">
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
        </div>

        <div className="card">
          <Card imgSrc={bgImage3}>
            <h3 className="text-xl text-center font-bold mb-2">COTIZACIONES</h3>
            <Link to="/contact">
              <button className="btn bg-black px-7 text-white">CONTACTO</button>
            </Link>
          </Card>
        </div>
      </div>
      <div className="pt-20">
        <HeroImage
          title2="Más de 60 años en el mercado de la construcción"
          imgSrc={logoHero}
          text1="A mediado de la década del 40, Hugo Porta junto a Ricardo Alvarado"
          text2="y con la ayuda de Enrique Alvarado, deciden fundar una empresa
        dedicada a la distribución de artículos sanitarios."
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
