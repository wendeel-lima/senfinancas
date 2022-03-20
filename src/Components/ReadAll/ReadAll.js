import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import ListOperacoes from "../Card/ListOperacoes.js";

function ReadAll() {
  const [operacoes, setOperacoes] = useState([]);

  useEffect(() => {
    const loadOperacoes = async () => {
      const response = await Api.buildApiGetRequest(Api.readAlloperacoesUrl);
      const results = await response.json();
      setOperacoes(results);
    };
    loadOperacoes();
  }, []);

  return (
    <>
      <ListOperacoes />
    </>
  );
}

export default ReadAll;
