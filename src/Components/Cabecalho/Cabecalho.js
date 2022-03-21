import React from "react";
import styled from "styled-components";
import Logo_Sense from "../../Assets/Logo_Sense.png";

const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  text-decoration: none;
`;

const StyledCabecalho = styled.nav`
  background-color: ;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 150px;
`;

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <Logo src={Logo_Sense} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </div>
    </StyledCabecalho>
  );
};

export default Cabecalho;
