import React from "react";
import "./styles.css";

const ImageText = ({ imageSrc, title, description, isReverse }) => {
  return (
    <div className={`image-text ${isReverse ? "reverse" : ""}`}>
      <div className="image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text">
        <h2 className="image-title">{title}</h2>
        <p className="image-description">{description}</p>
      </div>
    </div>
  );
};

const ImageTextComponent = () => {
  return (
    <div className="container">
      <h1 className="title text-center pt-10">NUESTRA HISTORIA</h1>
      <ImageText
        imageSrc="../../../public/assets/bannerdef.png"
        title="2022"
        description="A mediados de la década del 40, Hugo Porta junto a Ricardo Alvarado
        y con la ayuda de Enrique Alvarado, deciden fundar una empresa
        dedicada a la distribución de artículos sanitarios. Lo que comenzó
        como un pequeño emprendimiento familiar bajo el nombre Casa Pico,
        hoy es PORAL S.A.C.I"
      />
      <ImageText
        imageSrc="../../../public/assets/bannerdef.png"
        title="Poral"
        description="Nuestra misión es optimizar tiempos y aportar calidad para ser los líderes en la distribución de sanitarios, vinculando la producción con el consumo. 
        La cumplimos rodeados de un excelente equipo, comprometido, flexible, con una fluida comunicación entre sus miembros y nuestros clientes. Lo hemos hecho a través de tres
         generaciones y continuaremos con nuestro esfuerzo para mantener el liderazgo en el mercado argentino. "
        isReverse={true}
      />
    </div>
  );
};

export default ImageTextComponent;
