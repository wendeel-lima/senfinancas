import { useState, useEffect } from "react";
import { Api } from "../../Api/Api";
import CardOperacoes from "./CardOperacoes";

import Styled from "styled-components";

const Cards = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ListOperacoes = () => {
  const [operacoes, setOperacoes] = useState([]);

  useEffect(() => {
    const loadOperacoesList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAlloperacoesUrl());

      const results = await response.json();

      setOperacoes(results);
    };

    loadOperacoesList();
  }, []);

  return (
    <Cards>
      {operacoes.map((operacoes, index) => (
        <CardOperacoes
          key={`product_list_${index}`}
          operacoes={operacoes}
        ></CardOperacoes>
      ))}
    </Cards>
  );
};
