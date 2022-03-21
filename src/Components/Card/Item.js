import React from "react";
import styled from "styled-components";

const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const operacoes = props.operacoes;
  // const history = useHistory();

  const handleClick = () => {
    console.log(operacoes.id);
  };

  return (
    <Items onClick={handleClick}>
      <Item>
        <span className="text">{operacoes.tipo}</span>
      </Item>
      <Item>
        <span>{operacoes.categoria}</span>
        <span>R$ {operacoes.valor}</span>
      </Item>
      <Item>
        <span>{operacoes.data}</span>
      </Item>
    </Items>
  );
};
