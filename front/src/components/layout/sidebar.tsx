import { LayoutPanelTop, User } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col items-start justify-between bg-gray-200">
      {/* Header */}
      <div className="flex px-5 py-5">
        <span className="text-xl font-bold cursor-default">MeetingMind</span>

        {/* <button className="text-gray-600 ml-3 cursor-pointer hover:text-gray-800">
          <PanelLeftClose className="w-6 h-6" />
        </button> */}
      </div>

      {/* Content */}
      <div className="flex flex-col mt-4 py-5 space-y-2 w-full">
        <a href="/" className="flex items-center space-x-2 text-md mb-5 px-5 py-3 w-full hover:bg-gray-300">
          <LayoutPanelTop className="w-5 h-5" />
          <span>Dashboard</span>
        </a>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 w-full">
        <div className="flex flex-row items-center m-1 p-2 cursor-pointer hover:bg-gray-300">
          <User />

          <div className="flex flex-col ml-2">
            <span className="text-sm font-semibold">Bruno Almeida</span>
            <span className="text-xs text-muted-foreground">Premium</span>
          </div>
        </div>
      </div>
    </div>
  )
}