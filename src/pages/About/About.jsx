import HeroImage from "../../components/HeroImage/HeroImage";
import "./About.css";

const About = () => {
  return (
    <div className="container-about">
      <HeroImage>
        <img
          className="img-logo-about"
          src="../../../public/assets/logo1-2.png"
        />
      </HeroImage>
      <h1 className="title text-center pt-10">NUESTRA HISTORIA</h1>
      <div className="main-container">
        <h2 className="text-end subtitle1">2022</h2>
        <div class="flex-container-about">
          <img
            className="info-image"
            src="../../../public/assets/bannerdef.png"
          />

          <p className="info-text">
            A mediados de la década del 40, Hugo Porta junto a Ricardo Alvarado
            y con la ayuda de Enrique Alvarado, deciden fundar una empresa
            dedicada a la distribución de artículos sanitarios. Lo que comenzó
            como un pequeño emprendimiento familiar bajo el nombre Casa Pico,
            hoy es PORAL S.A.C.I
          </p>
        </div>

        <div class="flex-container-about2">
          <p className="info-text">
            Nuestra misión es optimizar tiempos y aportar calidad para ser los
            líderes en la distribución de sanitarios, vinculando la producción
            con el consumo. La cumplimos rodeados de un excelente equipo,
            comprometido, flexible, con una fluida comunicación entre sus
            miembros y nuestros clientes. Lo hemos hecho a través de tres
            generaciones y continuaremos con nuestro esfuerzo para mantener el
            liderazgo en el mercado argentino.
          </p>
          <img
            className="info-image"
            src="../../../public/assets/bannerdef.png"
          />
        </div>
        <h2 className="subtitle2">PORAL</h2>

        <hr className="divider"></hr>
      </div>
    </div>
  );
};

export default About;
