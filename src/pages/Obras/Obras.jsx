import "./Obras.css";
import "../../components/HeroImage/HeroImage.css";
import logoHero from "../../../public/assets/logo1-2.png";
import HeroImage from "../../components/HeroImage/HeroImage";

const Obras = () => {
  return (
    <div className="container-obras">
      <HeroImage imgSrc={logoHero} />

      <h1 className="title pt-20">OBRAS</h1>

      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Edificio-ChEteau-Puerto-Madero.jpg"
          />
          <h2 className="title-obras">Edificio Château Puerto Madero</h2>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Edificio-Château-Libertador-Residence.png"
          />
          <h2 className="title-obras libertador-residence">
            Edificio Château Libertador Residence
          </h2>
        </div>
      </div>
      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Hotel-Hilton-Garden-Inn-Neuquen.png"
          />
          <h3 className="title-obras text-center">
            Hotel Hilton Garden Inn Neuquén
          </h3>
        </div>
        <div className="img-container text-center">
          <img
            className="img-obras-container"
            src="../../../public/assets/Torre-Coca-Cola.png"
          />
          <h3 className="title-obras text-center">Torre Coca Cola</h3>
        </div>
      </div>

      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Complejo-Domus-Parque.png"
          />
          <h3 className="title-obras text-center">Complejo Domus Parque</h3>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/libertador2.png"
          />
          <h4 className="title-obras text-center">Edificio Wave Libertador</h4>
        </div>
      </div>
      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/grandbourg1.png"
          />
          <h4 className="title-obras text-center">Torre Grand Bourg</h4>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Torres-Renoir.png"
          />
          <h4 className="title-obras text-center">Torres Renoir</h4>
        </div>
      </div>
      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Grace-Cafayate-Hotel.png"
          />
          <h4 className="title-obras text-center">Grace Cafayate Hotel</h4>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Sheratón-Tucumán-Hotel.png"
          />
          <h5 className="title-obras text-center">Sheraton Tucumán Hotel</h5>
        </div>
      </div>
    </div>
  );
};

export default Obras;
