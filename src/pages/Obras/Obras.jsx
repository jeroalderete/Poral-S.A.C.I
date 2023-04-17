import "./Obras.css";

const Obras = () => {
  return (
    <div className="container">
      <h1 className="title">OBRAS</h1>

      <div className="flex-container">
        <img
          className="img-obras"
          src="../../../public/assets/Edificio-ChEteau-Puerto-Madero.jpg"
        />
        <img
          className="img-obras"
          src="../../../public/assets/Edificio-Château-Libertador-Residence.png"
        />
      </div>
      <div className="flex-container-title">
        <h2 className="title-obras ml-40">Edificio Château Puerto Madero</h2>
        <h2 className="title-obras libertador-residence">
          Edificio Château Libertador Residence
        </h2>
      </div>
      <div className="flex-container">
        <img
          className="img-obras"
          src="../../../public/assets/Hotel-Hilton-Garden-Inn-Neuquen.png"
        />
        <img
          className="img-obras"
          src="../../../public/assets/Torre-Coca-Cola.png"
        />
      </div>
      <div className="flex-container-title">
        <h2 className="title-obras ml-40">Hotel Hilton Garden Inn Neuquén</h2>
        <h2 className="title-obras mr-60">Torre Coca Cola</h2>
      </div>
      <div className="flex-container">
        <img
          className="img-obras"
          src="../../../public/assets/Complejo-Domus-Parque.png"
        />
        <img
          className="img-obras"
          src="../../../public/assets/libertador2.png"
        />
      </div>
      <div className="flex-container-title">
        <h2 className="title-obras ml-40">Complejo Domus Parque</h2>
        <h2 className="title-obras mr-40">Edificio Wave Libertador</h2>
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
