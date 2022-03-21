import React from "react";
import { Box, FormInput } from "../UI/index.js";
import { useState } from "react";

function Busca(props) {
  const operacoes = props.operacoes;
  const [busca, setBusca] = useState("");
  const operacoesFiltradas = operacoes.filter(() =>
    operacoes.startsWith(busca),
  );

  return (
    <Box>
      <FormInput
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {operacoesFiltradas.map((operacoes) => (
          <li key={operacoes}>{operacoes}</li>
        ))}
      </ul>
    </Box>
  );
}

export default Busca;
