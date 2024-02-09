import React from "react";
import "./styles.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import logoHero from "../../../public/assets/logo1-2.png";
import ImageTextAside from "../../components/ImageTextAside/ImageTextAside";

const About = () => {
  return (
    <>
      <HeroImage imgSrc={logoHero} />

      <h1 className="title text-center pt-10">NUESTRA HISTORIA</h1>
      <ImageTextAside
        imageSrc="../../../public/assets/bannerdef.png"
        title="2022"
        description="A mediados de la década del 40, Hugo Porta junto a Ricardo Alvarado
        y con la ayuda de Enrique Alvarado, deciden fundar una empresa
        dedicada a la distribución de artículos sanitarios. Lo que comenzó
        como un pequeño emprendimiento familiar bajo el nombre Casa Pico,
        hoy es PORAL S.A.C.I"
      />
      <ImageTextAside
        imageSrc="../../../public/assets/bannerdef.png"
        title="Poral"
        description="Nuestra misión es optimizar tiempos y aportar calidad para ser los líderes en la distribución de sanitarios, vinculando la producción con el consumo. 
        La cumplimos rodeados de un excelente equipo, comprometido, flexible, con una fluida comunicación entre sus miembros y nuestros clientes. Lo hemos hecho a través de tres
         generaciones y continuaremos con nuestro esfuerzo para mantener el liderazgo en el mercado argentino. "
        isReverse={true}
      />
    </>
  );
};

export default About;
