





const ImageTextAside = ({ imageSrc, title, description, isReverse }) => {
  return (
    <div className={`image-text ${isReverse ? "reverse" : ""}`}>
      <div className="image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="text">
        <h2 className="image-title">{title}</h2>
        <p className="image-description">{description}</p>
      </div>
    </div>
  );
};

export default ImageTextAside;
