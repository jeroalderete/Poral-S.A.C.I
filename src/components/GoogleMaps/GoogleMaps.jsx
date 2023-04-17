import "./index.css";
export default function GoogleMaps() {
  return (
    <iframe
      style={{ width: "100%", height: "600px" }}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=Av. Dr. Honorio Pueyrredón 6020, B1631GCR Villa Rosa, Provincia de Buenos Aires&t=&z=12&ie=UTF8&iwloc=&output=embed"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  );
}

