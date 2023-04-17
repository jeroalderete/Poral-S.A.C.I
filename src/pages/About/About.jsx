import HeroImage from "../../components/HeroImage/HeroImage";
import "./About.css";

const About = () => {
  return (
    <div className="pt-10">
      <HeroImage />
      <h1 className="title text-center pt-10">NUESTRA HISTORIA</h1>

      <div>
        <div className="image-container-left">
          <img
            className="info-image pt-10"
            src="../../../public/assets/bannerdef.png"
          />
          <h2 className=" text-start subtitle pt-20 pb-10">2022</h2>
          <p className="info-text">
            A mediados de la década del 40, Hugo Porta junto a Ricardo Alvarado
            y con la ayuda de Enrique Alvarado, deciden fundar una empresa
            dedicada a la distribución de artículos sanitarios. Lo que comenzó
            como un pequeño emprendimiento familiar bajo el nombre Casa Pico,
            hoy es PORAL S.A.C.I
          </p>
        </div>

        <div className="section2">
          <div className="image-container-right">
            <img
              className="info-image"
              src="../../../public/assets/bannerdef.png"
            />

            <h2 className="text-start subtitle ml-20 pt-20">PORAL</h2>
          </div>

          <p className="info-text pt-5 p-10">
            Nuestra misión es optimizar tiempos y aportar calidad para ser los
            líderes en la distribución de sanitarios, vinculando la producción
            con el consumo. La cumplimos rodeados de un excelente equipo,
            comprometido, flexible, con una fluida comunicación entre sus
            miembros y nuestros clientes. Lo hemos hecho a través de tres
            generaciones y continuaremos con nuestro esfuerzo para mantener el
            liderazgo en el mercado argentino.
          </p>
        </div>
        <hr className="divider"></hr>
      </div>
    </div>
  );
};

export default About;
