import React, { useEffect, useState } from "react";
import { Box, Botao } from "../UI/index.js";
import { Api } from "../../Api/Api";

import Items from "../Card/Item";

function ReadAll() {
  const [operacoes, setOperacoes] = useState([]);

  useEffect(() => {
    const loadOperacoes = async () => {
      const response = await Api.buildApiGetRequest(Api.readAlloperacoesUrl());
      const results = await response.json();
      setOperacoes(results);
    };
    loadOperacoes();
  }, []);

  return (
    <Box>
      {operacoes.map((operacoes, index) => (
        <Items key={index} operacoes={operacoes}></Items>
      ))}

      <Botao>Ver Mais</Botao>
    </Box>
  );
}

export default ReadAll;
