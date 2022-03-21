import React, { useEffect, useState } from "react";
import { Api } from "../../Api/Api";

import { Box, Botao, Form, FormInput, Select } from "../UI/index.js";

export default function Create(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const tipo = event.target.tipo.value;
    const categoria = event.target.categoria.value;
    let valor = event.target.valor.value;
    const data = event.target.data.value;

    const payload = {
      tipo,
      categoria,
      data,
      valor,
    };

    const response = await Api.buildApiPostRequest(
      Api.createoperacoesUrl(),
      payload,
    );

    console.log(payload);
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <label>Categoria</label>
        <div>
          <FormInput type="text" id="categoria" name="categoria" />
        </div>
        <label>Tipo</label>
        <Select name="tipo" id="tipo">
          <option value="" hidden>
            Type
          </option>
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
        </Select>
        <label>Valor</label>
        <div>
          <FormInput type="text" id="valor" name="valor" />
        </div>
        <label>Data</label>
        <div>
          <FormInput type="date" id="data" name="data" />
        </div>

        <Botao type="submit">Adicionar</Botao>
      </Form>
    </Box>
  );
}
