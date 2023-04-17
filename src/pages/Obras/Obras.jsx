import "./Obras.css";
import "../../components/HeroImage/HeroImage.css";
import HeroImage from "../../components/HeroImage/HeroImage";

const Obras = () => {
  return (
    <div className="container">
      <HeroImage />
      <h1 className="title">OBRAS</h1>

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
          <h2 className="title-obras">Hotel Hilton Garden Inn Neuquén</h2>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Torre-Coca-Cola.png"
          />
          <h2 className="title-obras">Torre Coca Cola</h2>
        </div>
      </div>

      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Complejo-Domus-Parque.png"
          />
          <h2 className="title-obras">Complejo Domus Parque</h2>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/libertador2.png"
          />
          <h2 className="title-obras">Edificio Wave Libertador</h2>
        </div>
      </div>
      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/grandbourg1.png"
          />
          <h2 className="title-obras ">Torre Grand Bourg</h2>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Torres-Renoir.png"
          />
          <h2 className="title-obras">Torres Renoir</h2>
        </div>
      </div>
      <div className="flex-container">
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Grace-Cafayate-Hotel.png"
          />
          <h2 className="title-obras">Grace Cafayate Hotel</h2>
        </div>
        <div className="img-container">
          <img
            className="img-obras-container"
            src="../../../public/assets/Sheratón-Tucumán-Hotel.png"
          />
          <h2 className="title-obras">Sheraton Tucumán Hotel</h2>
        </div>
      </div>
    </div>
  );
};

export default Obras;
