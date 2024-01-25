"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [usuarios, setUsuarios] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function cadastrarUsuario() {
    const novoUsuario = {
      name: name,
      email: email,
      password: password,
    };
    if (!name || !email || !password) {
      alert("Preencha todos os campos!!!");
      return;
    }
    axios
      .post(
        "https://db-users.vercel.app/users",
        novoUsuario,
      )
      .then((response) => {
        console.log("Resposta da API:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
    setUsuarios([...usuarios, novoUsuario]);

    setName("");
    setEmail("");
    setPassword("");

    console.log("Usuários cadastrados:", usuarios);
  }

  return (
    <div className="flex place-content-center">
      <div className="flex flex-col items-center p-20 mt-[200px] border-2 border-black flex-wrap rounded-xl">
        <h1 className="text-3xl font-bold mb-10">CADASTRO</h1>
        <input
          className="bg-transparent p-2 rounded-xl mb-10"
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-transparent p-2 rounded-xl mb-10"
          type="text"
          placeholder="Nome de Usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="bg-transparent p-2 rounded-xl"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={cadastrarUsuario}
          className="bg-teal-500 text-white p-2 rounded-xl mt-10"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}