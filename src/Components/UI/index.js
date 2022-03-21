import styled from "styled-components";

export const Titulo = styled.h1`
  text-align: center;
  background-color: #2a7dc1;
  color: #fefefe;
`;

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Botao = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: #5b8c39;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Detalhe = styled.span`
  color: #5b8c39;
  font-size: 24px;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Select = styled.select`
  background: #fefefe;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin: 8px 0;
  padding: 0.5em 1em;
  width: 100%;

  option {
    color: black;
    background: #fefefe;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export const Form = styled.form`
  color: #fefefe;
  padding: 1em;
  font-weight: bold;
`;

export const FormInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
  margin: 8px 0;
  padding: 0.5em 1em;
  width: 100%;
`;
