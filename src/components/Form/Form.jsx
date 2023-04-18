import React, { useState } from "react";
import "./Form.css";
import { RubrosSelect } from "../RubrosSelect/RubrosSelect";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  return (
    <div className="flex-form-container gap-10">
      <div className="info-container">
        <p>poralonline@gmail.com</p>
        <p>0230-449-4143 </p>
        <p>Lunes a Viernes - 9:00 am to 17:00 pm </p>
        <div className="subtitle-info">
          <h4>Envíanos tu solicitud de cotización.</h4>
        </div>
        <div className="tel-info">
          <h3>Tel +54 1121615984</h3>
        </div>
      </div>

      <form action="" onSubmit={handleSubmit} className="formulario">
        <h1 className="form-title pb-10">Envíanos tu consulta</h1>
        <div>
          <label className="required" htmlFor="nombre">
            Nombre
          </label>
          <input
            required
            type="text"
            name="nombre"
            placeholder="Nombre"
            id="nombre"
            value={inputNombre}
            onChange={handleInputNombre}
          />
        </div>

        <div>
          <label className="required" htmlFor="correo">
            E-Mail
          </label>
          <input
            className="control-label"
            type="text"
            name="correo"
            placeholder="Correo"
            id="correo"
            value={inputCorreo}
            onChange={handleInputCorreo}
          />
        </div>

        <div>
          <label htmlFor="correo">Seleccione Un Rubro</label>
          <RubrosSelect />
        </div>
        <div>
          <label htmlFor="correo">Asunto</label>
          <input type="text" name="Asunto" placeholder="Asunto" id="asunto" />
        </div>
        <div>
          <label className="required" for="message">
            Escriba su mensaje
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            rows="6"
            class="form-control md-textarea"
            placeholder="Mensaje"
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
