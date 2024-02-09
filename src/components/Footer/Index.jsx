import React, { useState, useEffect } from "react";

import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

const Footer = () => {

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); // Actualiza cada día (aproximadamente)
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-20">
     
      <div className="content">
        <div className="left box">
          <div className="upper">
          <div className="flex-footer-icon">
          <IoLocationOutline style={{ position: 'relative', top: '7px', fontSize: '17px' }} color="white" />
            <div className="topic">DIRECCIÓN</div>
          </div>
            
          
            <p className="text-sm text-footer">
              Avda. Honorio Pueyrredón 6020 (Ruta 25), Villa Rosa, Bs.As.
            </p>
          </div>
          <hr className="divisor1"></hr>
          <div className="upper pt-3">
          <div className="flex-footer-icon">
          <IoCallOutline  style={{ position: 'relative', top: '7px', fontSize: '17px' }} color="white" />
            <div className="topic">TELÉFONO</div>
            </div>
            <p className="text-sm text-footer pb-2">+54 11-21615984</p>
          </div>
          <hr className="divisor2"></hr>
          <div className="upper">
          <div className="flex-footer-icon">
          <IoMailOutline   style={{ position: 'relative', top: '7px', fontSize: '17px' }} color="white" />
            <div className="topic">EMAIL</div>
            </div>
            <p className="text-sm text-footer">poralonline@gmail.com</p>
          </div>
          <hr className="divisor3"></hr>
          <div className="upper">
          <div className="flex-footer-icon">
          <IoTimeOutline    style={{ position: 'relative', top: '7px', fontSize: '17px' }} color="white" />
            <div className="topic">HORARIO</div>
            </div>
            <div className="phone"> 
              <p className="text-sm text-footer">
                Lunes a Viernes / 8:00 hs a 17:00 hs
              </p>
            </div>
          </div>
        </div>

        <div className="right box right-box-container">
          <div className="topic">SUSCRIBASE A NUESTRO NEWSLETTER</div>

          <p className="newsletter-text">
            Envíenos su correo electrónico para que reciba nuestras últimas
            novedades en productos y promociones.
          </p>

          <form action="#">
            <labe className="label-newsletter">E-Mail</labe>
            <input className="email-input" type="text" placeholder="Email" />
            <input
              className="boton-enviar"
              type="submit"
              name="SUSCRIBIRSE"
              value="SUSCRIBIRSE"
            />
          </form>
        </div>
      </div>

      <hr className="divisor"></hr>
      <div className="bottom text-center">
        <p className="text-footer pt-5">
          © <span id="year">{year}</span> PORAL S.A.C.I |{" "}
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
