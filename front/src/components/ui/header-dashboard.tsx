import { Bell, Brain, Check, Play, Search } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="container mx-auto p-4">
        <div className="flex flex-row items-center justify-between">
          {/* Elemento vazio para balancear o layout */}
          <span className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MeetingMind</span>
          </span>
    
          {/* Ícones e perfil - lado direito */}
          <div className="flex items-center justify-end">
            {/* Search input icon*/}
            <button className="p-2 hover:bg-gray-100 transition-colors mr-3 bg-white rounded-4xl hover:cursor-pointer">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
    
            {/* Notification icon */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 transition-colors mr-3 bg-white rounded-4xl hover:cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Bell className="w-5 h-5 text-gray-600" />
              </button>

              <ul className={`absolute top-full right-0 mt-2 list bg-white rounded-4xl shadow-md z-50 w-max max-w-[480px] p-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-row items-baseline">
                  <li className="p-4 pb-2 text-sm opacity-60">All notifications</li>

                  <button className="p-2 cursor-pointer hover:bg-blue-600 hover:text-white transition-colors rounded-4xl ml-auto">
                    Mark all as read
                  </button>
                </div>

                <li className="list-row">
                  <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
                  <div>
                    <div>Dio Lupa</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Remaining Reason" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <Play className="size-[1.2em]" />
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <Check className="size-[1.2em]" />
                  </button>
                </li>

                <li className="list-row">
                  <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
                  <div>
                    <div>Ellie Beilish</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Bears of a Fever" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim.
                  </p>
                  {/* <button className="btn btn-square btn-ghost">
                    <Play className="size-[1.2em]" />
                  </button> */}
                  <button className="btn btn-square btn-ghost">
                    <Check className="size-[1.2em]" />
                  </button>
                </li>

                <li className="list-row">
                  <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
                  <div>
                    <div>Sabrino Gardener</div>
                    <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Cappuccino" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <Play className="size-[1.2em]" />
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <Check className="size-[1.2em]" />
                  </button>
                </li>
              </ul>
            </div>
    
            {/* User profile */}
            <div className="relative inline-block bg-white rounded-4xl">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center gap-2 p-2 px-4 rounded-lg transition-colors hover:cursor-pointer hover:bg-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
            
                <div className="flex flex-col text-left">
                  <span className="text-sm font-medium">Bruno</span>
                  <span className="text-sm font-light text-gray-500">Developer</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}