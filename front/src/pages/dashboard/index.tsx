import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/sidebar";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export default function DashboardIndex() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="h-screen w-screen flex flex-row">
      <Sidebar />

      <div className="p-4 w-full overflow-y-auto">
        <Outlet />
      </div>

      {/* Chat Container */}
      {isChatOpen && (
        <div className="fixed bottom-21 right-6 w-80 h-96 bg-white border border-gray-300 rounded-2xl shadow-xl z-50 flex flex-col">
          {/* Área de mensagens */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 rounded-2xl">
            <div className="chat chat-start">
              <div className="chat-bubble">
                Oi, como posso ajudar?
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">Você subestima meu poder!</div>
            </div>
          </div>

          {/* Input de mensagem */}
          <div className="w-full p-4 border-t border-gray-200 flex flex-row items-center justify-between">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="w-[85%] px-3 py-2 mr-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button className="mt-2 bg-blue-500 flex items-stretch justify-center rounded-2xl p-2 cursor-pointer">
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-2xl shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}