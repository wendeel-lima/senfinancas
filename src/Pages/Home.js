import React from "react";
import Create from "../Components/Create/Create.js";
import ReadAll from "../Components/ReadAll/ReadAll.js";
import styled from "styled-components";
import { Titulo } from "../Components/UI/index.js";


const Container = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`;

const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export default function Home() {
  return (
    <Container>
      <Titulo>Controle Financeiro Pessoal</Titulo>
      <Conteudo>
        
        <Create />
        <ReadAll />
      </Conteudo>
    </Container>
  );
}
