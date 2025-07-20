import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardMeeting() {
  return (
    <div className="flex flex-col m-8">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Gravações</span>
        </div>

        <label className="border-blue-500 flex flex-row p-2 rounded-2xl items-center justify-center space-x-2 bg-blue-500 cursor-pointer h-10">
          <Plus className="h-5 w-5 text-white" />
          <span className="text-md font-semibold text-white">Fazer Upload</span>
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="my-8 w-full flex flex-row flex-wrap justify-start gap-5">
        {/* Card */}
        <Link to="details/video-1" className="flex flex-col p-6 rounded-2xl shadow-2xl bg-white border-gray-100 w-80 h-40">
          {/* Header */}
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-semibold">Alinhamento Semanal do Squad Phoenix</span>
            <div className="badge badge-success text-white font-semibold">Success</div>
          </div>

          {/* Body */}
          <div className="w-full flex flex-col mt-3">
            <span className="text-sm text-gray-500">15 de julho de 2024</span>

            <div className="flex flex-row items-center mt-2">
              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-0 border-2 border-white" data-tip="Brucios">B</div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-10 -ml-2 border-2 border-white" data-tip="Bruno">
                <img className="rounded-full w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/58435463?v=4" alt="" />
              </div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-20 -ml-2 border-2 border-white" data-tip="Brasil">B</div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-30 -ml-2 border-2 border-white" data-tip="Brunno">
                <img className="rounded-full w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/58435463?v=4" alt="" />
              </div>

              <div className="tooltip rounded-full bg-gray-400 text-white w-8 h-8 flex items-center justify-center relative z-40 -ml-2 border-2 border-white text-xs font-semibold" data-tip="Mais outras 2 pessoas">
                +2
              </div>
            </div>
          </div>
        </Link>

        {/* Card */}
        <Link to="details/video-2" className="flex flex-col p-6 rounded-2xl shadow-2xl bg-white border-gray-100 w-80 h-40">
          {/* Header */}
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-semibold">Alinhamento Semanal do Squad Phoenix</span>
            <div className="badge badge-success text-white font-semibold">Success</div>
          </div>

          {/* Body */}
          <div className="w-full flex flex-col mt-3">
            <span className="text-sm text-gray-500">15 de julho de 2024</span>

            <div className="flex flex-row items-center mt-2">
              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-0 border-2 border-white" data-tip="Brucios">B</div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-10 -ml-2 border-2 border-white" data-tip="Bruno">
                <img className="rounded-full w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/58435463?v=4" alt="" />
              </div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-20 -ml-2 border-2 border-white" data-tip="Brasil">B</div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center relative z-30 -ml-2 border-2 border-white" data-tip="Brunno">
                <img className="rounded-full w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/58435463?v=4" alt="" />
              </div>

              <div className="tooltip rounded-full bg-gray-400 text-white w-8 h-8 flex items-center justify-center relative z-40 -ml-2 border-2 border-white text-xs font-semibold" data-tip="Mais outras 2 pessoas">
                +2
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}