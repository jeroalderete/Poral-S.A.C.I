import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-20">
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">DIRECCIÓN</div>
            <p className="text-sm text-footer">
              Avda. Honorio Pueyrredón 6020 (Ruta 25), Villa Rosa, Bs.As.
            </p>
          </div>
          <div className="upper pt-3">
            <div className="topic">TELÉFONO</div>
            <p className="text-sm text-footer pb-2">+54 11-21615984</p>
          </div>
          <div className="upper">
            <div className="topic">EMAIL</div>
            <p className="text-sm text-footer">poralonline@gmail.com</p>
          </div>
          <div className="lower">
            <div className="topic">HORARIO</div>
            <div className="phone">
              <p className="text-sm text-footer">
                Lunes a Viernes / 8:00 hs a 17:00 hs
              </p>
              c
            </div>
          </div>
        </div>

        <div className="right box">
          <div className="topic">SUSCRIBASE A NUESTRO NEWSLETTER</div>

          <form action="#">
            <input className="email-input" type="text" placeholder="Email" />
            <input
              className="boton-enviar"
              type="submit"
              name=""
              value="Enviar"
            />
          </form>
        </div>
      </div>

      <hr></hr>
      <div className="bottom text-center">
        <p className="text-footer pt-5">
          © 2023 PORAL S.A.C.I |{" "}
          <a className="text-footer" href="#">
            Todos los derechos reservados -
          </a>{" "}
          Diseño Web Desarrollo Liebre
        </p>
      </div>
    </footer>
  );
};

export default Footer;
