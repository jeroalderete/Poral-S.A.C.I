import HeroImage from "../../components/HeroImage/HeroImage";
import "../../components/HeroImage/HeroImage.css";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

const Contact = () => {
  return (
    <div className="container-contacto">
      <HeroImage title="CONTACTO" />
      <GoogleMaps />
      <h1>Nosotros</h1>;
    </div>
  );
};

export default Contact;
