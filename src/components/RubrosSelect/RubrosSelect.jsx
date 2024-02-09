import React, { useState } from "react";
import Select from "react-select";

const dbRubros = [
  { id: 1, rubro: "Arquitecto" },
  { id: 2, rubro: "Estudio de Arquitectura" },
  { id: 3, rubro: "Empresa Constructora" },
  { id: 4, rubro: "Distribuidor" },
];

export const RubrosSelect = () => {
  const handleSelectChange = (event) => {
    console.log(event);
  };

  return (
    <div className="Suppliers-container">
      <Select
        placeholder="Seleccione un Rubro"
        options={dbRubros.map((rubro) => ({
          label: rubro.rubro,
          value: rubro.id,
        }))}
        onChange={handleSelectChange}
      />
    </div>
  );
};
