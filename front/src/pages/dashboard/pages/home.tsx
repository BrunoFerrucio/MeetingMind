import { Calendar, Clock10, Download, Ellipsis, ListChecks, Plus, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardHome() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col m-8">

      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-3xl font-semibold">Olá, Bruno Almeida!</span>
          <span className="mt-2 text-md text-gray-700">Veja o seu compilado de reuniões</span>
        </div>

        <label className="border-blue-500 flex flex-row p-2 rounded-2xl items-center justify-center space-x-2 bg-blue-500 cursor-pointer h-10">
          <Plus className="h-5 w-5 text-white" />
          <span className="text-md font-semibold text-white">Fazer Upload</span>
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="my-8 w-full flex flex-row align-center justify-between">
        {/* Card */}
        <div className="flex flex-col p-6 rounded-2xl shadow-2xl bg-white border-gray-100 w-66 h-40">
          {/* Header */}
          <div className="flex flex-row items-center justify-between">
            <span>Reuniões esta semana</span>
            <Calendar className="ml-auto h-5 w-5 text-gray-500" />
          </div>

          {/* Body */}
          <div className="flex flex-col mt-8">
            <span className="text-3xl font-semibold">5</span>
            <span className="text-sm text-gray-500">+12% em relação a semana passada</span>
          </div>
        </div>

        {/* Card */}
        <div className="flex flex-col p-6 rounded-2xl shadow-2xl bg-white border-gray-100 w-66 h-40">
          {/* Header */}
          <div className="flex flex-row items-center justify-between">
            <span>Horas economizadas</span>
            <Clock10 className="ml-auto h-5 w-5 text-gray-500" />
          </div>

          {/* Body */}
          <div className="flex flex-col mt-8">
            <span className="text-3xl font-semibold">40h</span>
            <span className="text-sm text-gray-500">Com resumos e anotações automáticas</span>
          </div>
        </div>

        {/* Card */}
        <div className="flex flex-col p-6 rounded-2xl shadow-2xl bg-white border-gray-100 w-66 h-40">
          {/* Header */}
          <div className="flex flex-row items-center justify-between">
            <span>Tarefas extraídas</span>
            <ListChecks className="ml-auto h-5 w-5 text-gray-500" />
          </div>

          {/* Body */}
          <div className="flex flex-col mt-8">
            <span className="text-3xl font-semibold">30</span>
            <span className="text-sm text-gray-500">+10% em relação a semana passada</span>
          </div>
        </div>
      </div>

      <div
        className="my-8 w-full flex flex-row border-dashed border-2 border-purple-500 rounded-2xl bg-purple-100 p-4 items-center justify-between cursor-pointer relative"
        onDragOver={(e) => e.preventDefault()} // Previne o comportamento padrão
        onDrop={(e) => {
          e.preventDefault();
          const files = e.dataTransfer.files;
          if (files.length > 0) {
            setIsLoading(true); // Ativa o loading
            console.log("Arquivos arrastados:", files); // Substitua por lógica de upload

            // Simula o término do upload (substitua pelo seu código de upload)
            setTimeout(() => {
              setIsLoading(false); // Desativa o loading
            }, 3000);
          }
        }}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center z-10">
            <div className="loading loading-spinner text-info"></div>
          </div>
        )}

        <div className="flex flex-col">
          <span className="text-2xl font-light">Pronto para levar sua próxima reunião ao próximo nível?</span>
          <span className="text-md font-light text-gray-700">Faça o upload e deixe a sua IA trabalhar para você.</span>
        </div>

        <label className="border-blue-500 flex flex-row p-2 rounded-2xl items-center justify-center space-x-2 bg-blue-500 cursor-pointer">
          <Plus className="h-5 w-5 text-white" />
          <span className="text-md font-semibold text-white">Fazer Upload</span>
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="flex flex-col">
        <div className="w-full mt-4 mb-2 flex flex-row items-center justify-between">
          <span className="font-light text-black text-xl">Reuniões Recentes</span>

          <label className="input rounded-2xl">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>

        <div className="flex flex-col">
          {Array.from({ length: 10 }).map((_, index) => (
            <Link to={`/dashboard/meetings/details/${index}`} className="w-full flex flex-row rounded-2xl border-gray-600 p-3 bg-white shadow-md mt-4 items-center justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row mb-3">
                  <span>Reunião de planejamento 4ºQ</span>
                  <span className="ml-4 badge badge-success text-white font-semibold">Concluída</span>
                </div>

                <div className="flex flex-row">
                  <div className="flex flex-row items-center">
                    <Clock10 className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">Duração: 1h</span>
                  </div>

                  <span className="mx-2 text-gray-500">•</span>

                  <div className="flex flex-row items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">Data: 01/10/2023</span>
                  </div>

                  <span className="mx-2 text-gray-500">•</span>

                  <div className="flex flex-row items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-500">Participantes: 5</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <button>
                  <Download className="h-5 w-5 text-gray-500 ml-auto mr-2" />
                </button>

                <button>
                  <Ellipsis className="h-5 w-5 text-gray-500 ml-2" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}