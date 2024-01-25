"use client"
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    axios
      .get("https://db-users.vercel.app/users")
      .then((response) => {
        console.log("Resposta da API:", response.data);
        const dataDaAPI = response.data;

        const user = dataDaAPI.find((user) => user.email === email);

        if (user && user.password === password) {
          console.log("Login bem-sucedido!");
          
        } else {
          console.log("Credenciais inválidas");
        }
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
  };

  return (
    <div className="flex place-content-center">
      <div className="flex flex-col items-center p-20 mt-[200px] border-2 border-black flex-wrap rounded-xl">
        <h1 className="text-3xl font-bold mb-10">LOGIN</h1>
        <input
          className="bg-transparent p-2 rounded-xl mb-10"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          className="bg-transparent p-2 rounded-xl "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button
          className="flex text-red-500 underline hover:no-underline text-sm justify-end"
          onClick={() => {
          }}
        >
          Esqueci a senha
        </button>
        <button
          className="bg-teal-500 text-white p-2 rounded-xl mt-10"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
