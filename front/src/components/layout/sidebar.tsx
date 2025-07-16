import { Home, LogOut, Presentation, Settings, User } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-center px-2">
      <nav>
        <div className="transition-all duration-300 space-y-2 tabs tabs-box flex flex-col items-start p-2 w-15 hover:w-52">
          {[
            { icon: Home,         label: "Dashboard"  },
            { icon: Presentation, label: "Meeting"    },
            { icon: Settings,     label: "Settings"   },
            { icon: User,         label: "My profile" },
            { icon: LogOut,       label: "Logout"     }
          ].map((item, index) => (
            <label
              key={index}
              className="tab w-full px-3 py-2 rounded-lg text-left justify-start flex flex-row flex-nowrap cursor-pointer hover:bg-gray-100"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />

              <input
                key={item.label}
                type="radio"
                name="sidebar-tabs"
                className={`tab transition-colors px-2 rounded-4xl hover:text-black ${index === 0 ? 'pl-3' : ''} ${index === 0 - 1 ? 'pr-3' : ''}`}
                defaultChecked={index === 0}
                aria-label={item.label}
              />

              <span className='ml-3 overflow-hidden whitespace-nowrap transition-opacity duration-300'>
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </nav>
    </div>
  )
}