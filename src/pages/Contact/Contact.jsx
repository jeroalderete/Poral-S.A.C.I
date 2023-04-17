import HeroImage from "../../components/HeroImage/HeroImage";
import "../../components/HeroImage/HeroImage.css";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <div className="container-contacto">
      <HeroImage title="CONTACTO" />
      <GoogleMaps />
      <Form />
    </div>
  );
};

export default Contact;
