"use client";
import Image from "next/image";
import { DragHandleIcon, Search2Icon } from "@chakra-ui/icons";

export default function Nav() {
  return (
    <header className="bg-[#202046] p-8 rounded-b-3xl fixed top-0 w-full">
      <nav className="flex flex-row justify-between">
        <a className="flex items-center" href="/">
          <Image
            src="/logo-no-background.svg"
            alt="Logo"
            width={72}
            height={16}
          />
        </a>
        <ul className="flex flex-row gap-4 text-[#FE633D] content-center">
          <li className="flex items-center">
            <Search2Icon className="mr-2" />
            <input
              className="bg-transparent border-0 border-transparent placeholder:text-slate-400 text-md font-extrabold"
              type="text"
              placeholder="Pesquisar"
            />
          </li>
          <li className="font-extrabold text-[#3886CE] text-xl  ">
            <a className="flex items-center " href="">
              <DragHandleIcon/>
              CATEGORIAS
            </a>
          </li>
          <li className="font-extrabold text-[#3886CE] text-xl">
            <a href="/Login">LOGIN</a>
          </li>
          <li className="font-extrabold text-[#3886CE] text-xl">
            <a href="/Cadastro">CADASTRO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}