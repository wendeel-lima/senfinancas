import React from "react";
import { Api } from "../../Api/Api";

export default function Create(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const tipo = event.target.tipo.value;
    const categoria = event.target.categoria.value;
    const valor = event.target.valor.value;
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Tipo</label>
        <div>
          <input type="text" id="tipo" name="tipo_id" />
        </div>
        <label>Categoria</label>
        <div>
          <input type="text" id="categoria" name="categoria" />
        </div>
        <label>Valor</label>
        <div>
          <input type="text" id="valor" name="valor" />
        </div>
        <label>Data</label>
        <div>
          <input type="date" id="data" name="data" />
        </div>

        <div>
          <input className="form__submit" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}
