import "./HeroImage.css";

const HeroImage = ({
  heroImageBackground,
  title,
  title2,
  text1,
  text2,
  imgSrc,
  children,
}) => {
  return (
    <div className="hero-container">
      {children}
      <div class="grid-container-hero">
        <div class="main-hero-image">
          {heroImageBackground}
          <section className="hero-content">
            <div class="main-section-hero-flex">
              <img className="logo-hero" src={imgSrc} />
              <h1 className="contact-title">{title}</h1>
              <h2 className="title-2 pb-3 pt-20">{title2}</h2>
              <p className="text-1xl pt-10">{text1}</p>
              <p className="text-1xl ">{text2}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
