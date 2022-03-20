import React from "react";
import Create from "../Components/Create/Create";
import { ListOperacoes } from "../Components/Card/ListOperacoes";

export default function Home() {
  return (
    <>
      <Create />
      <ListOperacoes />
    </>
  );
}
