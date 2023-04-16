import HeroImage from "../../components/HeroImage/HeroImage";
import "./About.css";

const About = () => {
  return (
    <div className="pt-10">
      <HeroImage />
      <h1 className="text-center">Nuestra Historia</h1>
      <div className="info-container">
        <img
          className="info-image pt-10"
          src="../../../public/assets/bannerdef.png"
        />
        <p className="info-text pt-20 ml-10">
          lorem issafjaskfaskldhasjkgfskdgfkjlasdgfjksdgljksdglsjgdhjgdflsdf
        </p>
      </div>
      <p>Nosotros</p>
      <p>Nosotros</p>
      <p>Nosotros</p>
      <p>Nosotros</p>
    </div>
  );
};

export default About;
