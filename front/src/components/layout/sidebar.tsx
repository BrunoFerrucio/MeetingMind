import { Blocks, LayoutPanelTop, LogOut, Plus, Settings, User, Video } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"

export default function Sidebar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isUserMenuOpen) {
      function handleClickOutside(event: MouseEvent) {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
          setIsUserMenuOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isUserMenuOpen]);

  return (
    <div className="h-full flex flex-col items-start justify-between shadow-2xl bg-gray-50 w-70">
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="flex px-5 py-5">
          <span className="text-xl font-bold cursor-default">MeetingMind</span>

          {/* <button className="text-gray-600 ml-3 cursor-pointer hover:text-gray-800">
            <PanelLeftClose className="w-6 h-6" />
          </button> */}
        </div>

        {/* Content */}
        <label className="border-blue-500 flex flex-row p-2 rounded-2xl items-center justify-center space-x-2 bg-blue-500 cursor-pointer h-10 mb-3 mx-4">
          <Plus className="h-5 w-5 text-white" />
          <span className="text-md font-semibold text-white">Fazer Upload</span>
          <input type="file" className="hidden" />
        </label>

        <Link to="/dashboard" className="flex items-center space-x-2 text-md mb-3 px-5 py-3 w-full hover:bg-gray-300">
          <LayoutPanelTop className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>

        <Link to="meetings" className="flex items-center space-x-2 text-md mb-3 px-5 py-3 w-full hover:bg-gray-300">
          <Video className="w-5 h-5" />
          <span>Reuniões</span>
        </Link>
      </div>

      {/* Footer */}
      <div
        className="border-t border-gray-300 w-full"
        onClick={(e) => {
          e.stopPropagation();
          setIsUserMenuOpen(true);
        }}
        ref={userMenuRef}
      >
        <div className="flex flex-row items-center m-1 p-2 cursor-pointer hover:bg-gray-200">
          <User className="bg-gray-300 p-2 h-10 w-10 rounded-full" />

          <div className="flex flex-col ml-2">
            <span className="text-sm font-semibold">Bruno Almeida</span>
            <span className="text-xs text-muted-foreground">Premium</span>
          </div>
        </div>

        {isUserMenuOpen && (
          <div className="absolute bottom-12 left-0 bg-white shadow-lg rounded-2xl p-2 w-48">
            <ul className="flex flex-col space-y-2">
              <Link to="/profile" className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-2xl">
                <User className="w-4 h-4" />
                <span>Perfil</span>
              </Link>

              <Link to="/referrals" className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-2xl">
                <Blocks className="w-4 h-4" />
                <span>Indicações</span>
              </Link>

              <Link to="/settings" className="flex items-center space-x-2 cursor-pointer hover:bg-gray-200 p-2 rounded-2xl">
                <Settings className="w-5 h-5" />
                <span>Configurações</span>
              </Link>

              <Link to="/sign-out" className="flex items-center space-x-2 cursor-pointer border-t border-gray-200 rounded-none hover:bg-gray-200 hover:rounded-2xl p-2">
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}