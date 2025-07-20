import { ArrowLeft, Captions, Ellipsis, FileText, Key, ListTodo } from "lucide-react";
import { Link } from "react-router-dom";

export function DashboardMeetingDetails() {
  return (
    <div className="flex flex-col">
      <div className="mt-4">
        <div className="flex flex-row">
          <Link to="/dashboard/meetings" className="mr-4 flex flex-row items-center text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </Link>

          <h1 className="text-2xl font-semibold">Alinhamento Semanal da Squad Phoenix</h1>
        </div>
        <p className="text-gray-500 mt-2">Segunda-feira, 15 de julho de 2024 às 17:00.</p>
      </div>

      <div className="w-full mt-10 flex flex-row">
        <div className="w-[70%] flex flex-col">
          <iframe
            className="w-full h-95 bg-white border-gray-100 rounded-2xl"
            src="https://www.youtube.com/embed/bIksDsQXcwg?si=JE11aFGsrnEUIptR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <div role="tablist" className="tabs tabs-lift mt-5 flex w-full justify-between mb-5">
            <Link
              to="#summary"
              role="tab"
              className="tab flex-1 text-center tab-active"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("summary");
                if (element) {
                  window.history.pushState(null, "", "#summary");
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <FileText className="h-4 w-4 mr-1" />
              Resumo IA
            </Link>

            <Link
              to="#action-plan"
              role="tab"
              className="tab flex-1 text-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("action-plan");
                if (element) {
                  window.history.pushState(null, "", "#action-plan");
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ListTodo className="h-4 w-4 mr-1" />
              Plano de Ação
            </Link>

            <Link
              to="#transcription"
              role="tab"
              className="tab flex-1 text-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("transcription");
                if (element) {
                  window.history.pushState(null, "", "#transcription");
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Captions className="h-4 w-4 mr-1" />
              Transcrição
            </Link>

            <Link
              to="#key-decisions"
              role="tab"
              className="tab flex-1 text-center"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("key-decisions");
                if (element) {
                  window.history.pushState(null, "", "#key-decisions");
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Key className="h-4 w-4 mr-1" />
              Decisões chave
            </Link>
          </div>

          <div id="summary" className="bg-white rounded-2xl p-4">
            <p className="font-semibold text-md text-gray-800 mb-5">Resumo da reunião</p>
            <p className="">
              Lorem id aliqua amet qui sunt elit ad aliqua velit cillum amet dolore anim anim. Nisi cupidatat excepteur amet nulla pariatur non cillum quis aliquip fugiat quis Lorem. Exercitation laboris culpa adipisicing veniam nostrud ex velit Lorem. Reprehenderit proident officia eu officia ex aute est. Occaecat ex anim eu ipsum occaecat.
              <br />
              <br />
              Excepteur dolore duis sit reprehenderit non elit nulla irure quis officia ad Lorem ea ullamco. Aliqua exercitation esse cillum exercitation est consequat culpa nulla exercitation dolor in exercitation. Duis reprehenderit dolore cupidatat eu sint ea fugiat aliquip mollit do laborum reprehenderit incididunt. Laborum consequat consectetur esse adipisicing cillum elit mollit est ut do tempor. Tempor velit velit deserunt Lorem esse.
              <br />
              <br />
              Occaecat exercitation et incididunt tempor laborum nulla aliqua aute ullamco. Amet excepteur eu amet laborum pariatur aute est. Enim esse ex exercitation non dolore consequat eu. Amet aute reprehenderit anim laboris ea consequat quis labore ad enim et. Sunt labore ad ut elit culpa officia ad sit. Laboris elit tempor mollit labore cillum duis eu deserunt ullamco consequat ad. Ex esse dolor aute non occaecat ea ipsum.
              <br />
              <br />
              Ex eiusmod ea id id. Cillum minim officia ut laborum aliqua laboris non reprehenderit velit. Magna ea ullamco exercitation magna est et.
              <br />
              <br />
              Eu dolor id est sint et. Quis proident dolore nostrud voluptate cupidatat eiusmod aute amet eu in aliqua ullamco enim. Nisi nostrud eu ipsum sunt aliquip mollit cupidatat sunt et eu mollit pariatur dolor.
              <br />
              <br />
              Consequat eiusmod est elit id magna velit nostrud in dolore ea id pariatur qui. Laboris veniam tempor minim anim enim. Esse enim amet sunt fugiat elit excepteur veniam eiusmod laboris commodo pariatur velit. Ad adipisicing adipisicing commodo veniam laborum est commodo elit. Ea anim ipsum eiusmod do esse reprehenderit ullamco exercitation nostrud ullamco voluptate eiusmod nisi. Ullamco aute do id velit nisi sint eiusmod duis deserunt consequat anim et duis.
              <br />
              <br />
              Lorem id do ullamco nisi id pariatur aliquip id eiusmod Lorem tempor reprehenderit. Aliquip ex do laboris incididunt ut. Pariatur velit sunt duis veniam aute enim aliqua nisi aliqua est pariatur mollit. Officia culpa proident commodo voluptate.
            </p>
          </div>

          <div id="action-plan" className="bg-white rounded-2xl p-4 mt-7">
            <p className="font-semibold text-md text-gray-800 mb-5">Plano de ação</p>
            <div className="flex flex-col gap-4">
              {/* Card plano de ação */}
              <div className="flex flex-row bg-gray-100 p-3 rounded-2xl items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                  <input type="checkbox" className="checkbox h-6 w-6" />

                  <div className="flex flex-col">
                    <p>Verificar o novo prazo de implementação de pagamento.</p>

                    <div className="flex flex-row text-gray-500 text-sm">
                      <div className="flex flex-row items-center mr-4">
                        <span className="mr-1 font-light">Responsável:</span>
                        <span className="font-semibold">Bruno</span>
                      </div>

                      <div className="flex flex-row items-center mr-4">
                        <span className="mr-1 font-light">Prazo:</span>
                        <span className="font-semibold">17/07/2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="tooltip cursor-pointer" data-tip="Acessar transcrição desse momento da reunião">
                    <Captions className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Card plano de ação */}
              <div className="flex flex-row bg-gray-100 p-3 rounded-2xl items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                  <input type="checkbox" className="checkbox h-6 w-6" />

                  <div className="flex flex-col">
                    <p>Verificar o novo prazo de implementação de pagamento.</p>

                    <div className="flex flex-row text-gray-500 text-sm">
                      <div className="flex flex-row items-center mr-4">
                        <span className="mr-1 font-light">Responsável:</span>
                        <span className="font-semibold">Bruno</span>
                      </div>

                      <div className="flex flex-row items-center mr-4">
                        <span className="mr-1 font-light">Prazo:</span>
                        <span className="font-semibold">17/07/2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="tooltip cursor-pointer" data-tip="Acessar transcrição desse momento da reunião">
                    <Captions className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Card plano de ação */}
              <div className="flex flex-row bg-gray-100 p-3 rounded-2xl items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                  <input type="checkbox" className="checkbox h-6 w-6" />

                  <div className="flex flex-col">
                    <p>Verificar o novo prazo de implementação de pagamento.</p>

                    <div className="flex flex-row text-gray-500 text-sm">
                      <div className="flex flex-row items-center mr-4">
                        <span className="mr-1 font-light">Responsável:</span>
                        <span className="font-semibold">Bruno</span>
                      </div>

                      <div className="flex flex-row items-center mr-4">
                        <span className="mr-1 font-light">Prazo:</span>
                        <span className="font-semibold">17/07/2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="tooltip cursor-pointer" data-tip="Acessar transcrição desse momento da reunião">
                    <Captions className="h-5 w-5 text-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="transcription" className="bg-white rounded-2xl p-4 mt-7">
            <p className="font-semibold text-md text-gray-800 mb-5">Transcrição Completa</p>
            <div className="flex flex-col gap-4">
              {/* Card transcrição */}
              <div className="flex flex-row">
                <Link to="?video=1020">
                  <img src="https://i.imgur.com/FiOj97B.jpeg" className="h-20 w-35 mr-3 rounded-2xl" alt="" />
                </Link>

                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm">17:00</p>
                  <p className="text-black-400 text-[0.95rem]">Bruno: Olá a todos, vamos começar nossa reunião de alinhamento semanal.</p>
                </div>
              </div>

              {/* Card transcrição */}
              <div className="flex flex-row">
                <Link to="?video=1020">
                  <img src="https://i.imgur.com/FiOj97B.jpeg" className="h-20 w-35 mr-3 rounded-2xl" alt="" />
                </Link>

                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm">17:00</p>
                  <p className="text-black-400 text-[0.95rem]">Bruno: Olá a todos, vamos começar nossa reunião de alinhamento semanal.</p>
                </div>
              </div>

              {/* Card transcrição */}
              <div className="flex flex-row">
                <Link to="?video=1020">
                  <img src="https://i.imgur.com/FiOj97B.jpeg" className="h-20 w-35 mr-3 rounded-2xl" alt="" />
                </Link>

                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm">17:00</p>
                  <p className="text-black-400 text-[0.95rem]">Bruno: Olá a todos, vamos começar nossa reunião de alinhamento semanal.</p>
                </div>
              </div>

              {/* Card transcrição */}
              <div className="flex flex-row">
                <Link to="?video=1020">
                  <img src="https://i.imgur.com/FiOj97B.jpeg" className="h-20 w-35 mr-3 rounded-2xl" alt="" />
                </Link>

                <div className="flex flex-col">
                  <p className="text-gray-500 text-sm">17:00</p>
                  <p className="text-black-400 text-[0.95rem]">Bruno: Olá a todos, vamos começar nossa reunião de alinhamento semanal.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="key-decisions" className="bg-white rounded-2xl p-4 mt-7">
            <p className="font-semibold text-md text-gray-800 mb-5">Decisões Chave</p>
            <div className="flex flex-col gap-4">
              {/* Card plano de ação */}
              <div className="flex flex-row bg-gray-100 p-3 rounded-2xl items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-col">
                    <p>Orçamento aprovado para compra de licenças adicionais.</p>

                    <div className="flex flex-row text-gray-500 text-sm">
                      <div className="flex flex-row items-center mr-4">
                        <p className="mr-1 font-light">
                          R$ 15.000 aprovados para ferramentas de desenvolvimento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <div className="tooltip cursor-pointer" data-tip="Acessar transcrição desse momento da reunião">
                    <Captions className="h-5 w-5 text-gray-700" />
                  </div>

                  <div className="dropdown dropdown-top">
                    <Ellipsis tabIndex={0} role="button" className="h-5 w-5 text-gray-700" />
                    <ul tabIndex={0} className="dropdown-content menu bg-white rounded-2xl z-1 w-52 p-2 shadow-sm gap-2">
                      <li><a>Momento da reunião</a></li>
                      <li><a>Detalhes</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] h-95 ml-5 bg-white border-gray-100 rounded-2xl flex flex-col justify-between p-5">
          <div className="flex flex-col">
            <span className="font-semibold">Detalhes</span>

            <div className="flex flex-row items-center justify-between mt-2">
              <p>Status</p>
              <p>Completed</p>
            </div>

            <div className="flex flex-row items-center justify-between mt-2">
              <p>Duração</p>
              <p>1 hora</p>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <span className="font-semibold">Participantes (4)</span>

            <div className="flex flex-row items-center gap-2 mt-2">
              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center" data-tip="Brucios">B</div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center" data-tip="Bruno">
                <img className="rounded-full" src="https://avatars.githubusercontent.com/u/58435463?v=4" alt="" />
              </div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center" data-tip="Brasil">B</div>

              <div className="tooltip rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center" data-tip="Brunno">
                <img className="rounded-full" src="https://avatars.githubusercontent.com/u/58435463?v=4" alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <span className="font-semibold">Exportar</span>

            <div className="w-full join join-vertical lg:join-horizontal mt-2">
              <button className="btn join-item bg-red-500 text-white">PDF</button>
              <button className="btn join-item bg-white text-black">Notion</button>
              <button className="btn join-item bg-blue-500 text-white">Google Docs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}