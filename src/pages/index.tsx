import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import React, { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useCliente from "../hooks/useCliente";

export default function Home() {

  const {
    cliente, 
    clientes, 
    novoCliente, 
    salvarCliente, 
    selecionarCliente, 
    excluirCliente,
    tabelaVisivel,
    exibirTabela  
  } = useCliente ();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 via-yellow-400 to-blue-600
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
           <>
           <div className="flex justify-end">
             <Botao className="mb-4" cor="green"
              onClick={novoCliente}
             >
               Novo Cliente
              </Botao>
           </div>
           
           <Tabela clientes={clientes} 
             clienteSelecionado={selecionarCliente}
             clienteExcluido={excluirCliente}
         />
         </>
        ) : (
          <Formulario 
          cliente = {cliente}
          cancelado={exibirTabela}
          clienteMudou = {salvarCliente}
           />
        )}
      </Layout>
    </div>
  )
}
