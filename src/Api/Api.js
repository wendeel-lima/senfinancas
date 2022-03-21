export const Api = {
  baseUrl: "https://my-json-server.typicode.com/wendeel-lima/json-server",
  // baseUrl: "http://localhost:3000",

  readAlloperacoesUrl: () => Api.baseUrl + "/operacoes",

  readByIdoOperacoesUrl: (id) => Api.baseUrl + "/operacoes/" + id,

  createoperacoesUrl: () => Api.baseUrl + "/operacoes",

  updateoperacoesUrl: (id) => Api.baseUrl + "/operacoes/" + id,

  deleteoperacoesUrl: (id) => Api.baseUrl + "/operacoes/" + id,

  // GET
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),

  // POST
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url) =>
    fetch(url, {
      method: "DELETE",
    }),
};
