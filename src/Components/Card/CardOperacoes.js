import React from "react";
import styled from "styled-components";
import { corCard2, corCard1 } from "../UI/Variaveis";

const Tipo = styled.h2`
  font-size: 1rem;
  color: #ffffff;
  background-color: ${(operacoes) =>
    operacoes.tipo === "Entrada" ? corCard1 : corCard2};
`;
const Card = styled.div`
  border-left: 0.25em solid #099870;
  border-radius: 0.5em;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  cursor: pointer;
  padding: 1em;
  margin: 0.5em;
  width: 280px;
`;

export default function CardOperacoes({ operacoes }) {
  return (
    <Card>
      <Tipo>{operacoes.tipo}</Tipo>
      <div>{operacoes.categoria}</div>
      <div>{operacoes.data}</div>
      <div>R$ {operacoes.valor}</div>
    </Card>
  );
}
