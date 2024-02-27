import "./Card.css";

export default function ImageCard({ children, imgSrc, props }) {
  return (
    <div
      {...props}
      className="card-container relative max-w-xm overflow-hidden shadow-lg group "
    >
      <img
        src={imgSrc}
        className="card-container transition-transform group-hover:scale-110 duration-200 "
      />
       <div className="overlay"></div> {/* Capa de fondo oscuro */}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent mobile-gradient">
        <div className="cardTitle pt-60 text-white text-center w-full">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
}
