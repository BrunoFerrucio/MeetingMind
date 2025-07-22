import { ArrowLeft, Captions, Ellipsis, FileText, Key, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";

export function ProfilesIndex() {
  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <div className="flex flex-row">
          <Link to="/dashboard/meetings" className="mr-4 flex flex-row items-center text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <h1 className="text-2xl font-semibold">Perfil</h1>
        </div>
      </div>

      <div className="w-full mt-10 flex flex-row">
        
      </div>
    </div>
  );
}