import "./HeroImage.css";

const HeroImage = ({ title, text1, text2 }) => {
  return (
    <div class="grid-container-horarios">
      <main class="main-hero-horarios">
        <section>
          <div class="main-section-horarios-flex">
            <img
              className="logo-hero"
              src="../../../public/assets/logo1-2.png"
            />
            <h2 className="text-3xl pt-10">{title}</h2>
            <p className="text-1xl pt-10">{text1}</p>
            <p className="text-1xl">{text2}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroImage;
