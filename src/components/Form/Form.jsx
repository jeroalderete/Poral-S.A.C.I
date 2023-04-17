import React, { useState } from "react";
import "./Form.css";

const Formulario = () => {
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");

  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobamos validacion del formulario ...
    // Si todo es correcto enviamos el formulario

    console.log("Formulario Enviado!");
  };

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  };

  // Funcion que se encarga de cambiar el estado del inputCorreo
  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  };

  return (
    <div className="flex-form-container">
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
        <h1 className="form-title">Envíanos tu consulta</h1>
        <div>
          <label htmlFor="nombre">Nombre</label>
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
          <label htmlFor="correo">E-Mail</label>
          <input
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
          <input
            type="text"
            name="rubro"
            placeholder="Seleccione Un Rubro"
            id="rubro"
          />
        </div>
        <div>
          <label htmlFor="correo">Asunto</label>
          <input type="text" name="Asunto" placeholder="Asunto" id="asunto" />
        </div>
        <div>
          <label for="message">Escriba su mensaje</label>
          <textarea
            type="text"
            id="message"
            name="message"
            rows="6"
            class="form-control md-textarea"
            placeholder="Mensaje"
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;

{
  /* <const Form = () => {
  return (
    <div>
      <form>
    
      </form>
    </div>
  );
};

export default Form;
>

    asdad */
}
