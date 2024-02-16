import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-sm text-gray-900">
        <nav className="flex items-center bg-gray-900 px-4 py-3 justify-between">
          <div className="text-white flex items-center space-x-4">
            <a href="#" className="w-6 fill-current hover:text-red-500">
              <svg
                className="w-6"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <div className="relative">
              <input
                type="text"
                className="rounded bg-gray-900 border border-gray-600 placeholder-gray-400 w-72 px-3 py-1"
                placeholder="Search or jump to..."
              />
              <div className="flex items-center absolute top-0 right-0  h-full ">
                <span className="text-gray-400 rounded border text-xs   border-gray-600 px-2 mr-2">
                  /
                </span>
              </div>
            </div>

            <ul className="hidden  space-x-4 lg:flex items-center">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Pull request
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Issues
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Market
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Pull request
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white flex items-center space-x-4">
            <div className="hidden lg:block relative">
              <a href="#" className="fill-current">
                <svg
                  className="w-6"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <div className="w-2 h-2 absolute top-0 right-0 bg-blue-400 rounded"></div>
              </a>
            </div>

            <a
              href="#"
              className="hidden  hover:text-gray-400 lg:flex items-center"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </a>

            <a href="#" className="flex items-center hover:text-gray-400">
              <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
            </a>
          </div>
        </nav>

        <div className="bg-gray-100 flex items-center justify-between px-8 py-4">
          <div className="flex items-center ">
            <div className="flex items-center text-xl ml-2">
              <a href="#" className=" text-blue-600 hover:underline">
                tailwind
              </a>
              <span className="mx-1  ">/</span>
              <a
                href="#"
                className="text-blue-600   hover:underline font-semibold"
              >
                tailwind
              </a>
            </div>

            <div className="ml-2 flex items-center rounded-xl p-2 h-4 bg-gray-100 text-gray-600 border text-xs border-gray-300">
              public
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex h-7 items-center text-xs shadow-sm">
              <button className="space-x-2 flex border border-gray-300 rounded-lg rounded-r-none px-3 py-1 items-center">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <span className="font-semibold">Watch</span>
              </button>
              <a
                href="#"
                className="flex items-center border border-gray-300 rounded-lg rounded-l-none px-3 py-1 border-l-0 font-semibold hover:text-blue-400 bg-white"
              >
                548
              </a>
            </div>
          </div>
        </div>

        <ul
          className="
                    repo-nav
                    bg-gray-100
                    border-b border-gray-300
                    flex
                    items-center
                    px-8
                    pt-4
                "
        >
          <li className="font-semibold">
            <a
              href="#"
              className="
                            flex
                            items-center
                            border-b-2 border-red-500
                            px-4
                            pb-3
                        "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                ></path>
              </svg>
              <span className="ml-2">Code</span>
            </a>
          </li>

          <li className="font-semibold">
            <a
              href="#"
              className="
                            flex
                            items-center
                            border-b
                            px-4
                            pb-3
                            hover:border-gray-300
                        "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                ></path>
              </svg>
              <span className="ml-2">Pull requests</span>
            </a>
          </li>

          <li className="font-semibold">
            <a
              href="#"
              className="
                            flex
                            items-center
                            border-b
                            px-4
                            pb-3
                            hover:border-gray-300
                        "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                ></path>
              </svg>
              <span className="ml-2">Actions</span>
            </a>
          </li>

          <li className="font-semibold">
            <a
              href="#"
              className="
                            hidden
                            lg:flex
                            items-center
                            border-b
                            px-4
                            pb-3
                            hover:border-gray-300
                        "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                ></path>
              </svg>
              <span className="ml-2">Security</span>
            </a>
          </li>

          <li className="font-semibold">
            <a
              href="#"
              className="
                            hidden
                            lg:gflex
                            items-center
                            border-b
                            px-4
                            pb-3
                            hover:border-gray-300
                        "
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                ></path>
              </svg>
              <span className="ml-2">Insights</span>
            </a>
          </li>
        </ul>

        <div className="container mx-auto my-20 ">this</div>
        <div className="container mx-auto my-8 px-4 flex flex-col lg:flex-row">
          <div className="file-explorer-container w-full lg:w-5/6 mr-8">
            <div className="branch flex flex-col lg:flex-row  items-center justify-between">
              <div className="flex flex-col lg:flex-row items-center space-x-1">
                <button className="border border-gray-300 bg-gray-100 rounded-md px-4 py-1 hover:bg-gray-200 flex items-center space-x-2">
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                    ></path>
                  </svg>
                  <span>Master</span>
                </button>

                <a
                  href="#"
                  className="text-red-700 px-4 py-1 hover:text-blue-400 flex space-x-1 items-center"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                    ></path>
                  </svg>
                  <span>45 branches</span>
                </a>
                <a
                  href="#"
                  className="text-red-700 px-4 py-1 hover:text-blue-400 flex space-x-1 items-center"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                    ></path>
                  </svg>
                  <span>45 branches</span>
                </a>
                <a
                  href="#"
                  className="text-red-700 px-4 py-1 hover:text-blue-400 flex space-x-1 items-center"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                    ></path>
                  </svg>
                  <span>45 branches</span>
                </a>
              </div>
              <div className="flex flex-col lg:flex-row ">
                <button className="mt-3 lg:mt-0 px-4 py-1 border rounded border-gray-300 bg-gray-100 hover:bg-gray-200">
                  Go to file
                </button>
                <button className="mt-3 lg:mt-0 px-4 py-1 border rounded border-gray-300 bg-gray-100 hover:bg-gray-200">
                  Go to file
                </button>
                <button className="mt-3 lg:mt-0 px-4 py-1 border rounded border-gray-300 bg-gray-100 hover:bg-gray-200">
                  Go to file
                </button>
              </div>
            </div>

            <div className="table-title mt-3">
              <div className="flex justify-between px-3 py-3 rounded border border-b-0 rounded-bl-none rounded-br-none bg-gray-100 border-gray-200">
                <div className="title-left flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                    ></path>
                  </svg>
                  <span className="font-semibold">administrooood</span>
                  <span>this is nonam</span>
                </div>
                <div className="title-right flex items-center space-x-2">
                  <div className="rounded-full bg-blue-500 w-6 h-6"></div>
                  <a
                    href="#"
                    className="hover:underline hover:text-blue-600 text-gray-600"
                  >
                    a292939329339
                  </a>
                </div>
              </div>

              <div className="file-body rounded-md rounded-t-none border border-gray-300 divide-y divide-gray-300">
                <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                  <div className="w-4/12 flex items-center">
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0  0 16 16"
                      version="1.1"
                      data-view-component="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                      ></path>
                    </svg>
                    <a href="#" className="hover:underline ml-3 truncate mr-4">
                      垃圾水电费丽君啊收到了房间阿里斯顿放假了
                    </a>
                  </div>
                  <div className="w-6/12 truncate">
                    asdfadsfasfasdfadsfasfasdfadsfasdfadsfasfaasdfadsfasfsdfadsfasfasdfadsfasfasfasdfadsfasfasdfadsfasfasdfadsfasf
                  </div>
                  <div className="w-2/12">c</div>
                </div>

                <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                  <div className="w-4/12 flex items-center">
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0  0 16 16"
                      version="1.1"
                      data-view-component="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                      ></path>
                    </svg>
                    <a href="#" className="hover:underline ml-3">
                      adjffdljk
                    </a>
                  </div>
                  <div className="w-6/12">b</div>
                  <div className="w-2/12 text-right">c</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar w-full lg:w-1/6 ">
            <div className="flex text-xs items-center flex-wrap mt-2">
              <div className="bg-blue-100 mr-2 hover:text-white hover:bg-blue-800 px-2 py-1 rounded-full text-blue-600">
                aaa
              </div>
              <div className="mr-2 bg-blue-100 hover:text-white hover:bg-blue-800 px-2 py-1 rounded-full text-blue-600">
                这是大营营
              </div>
              <div className="mr-2 bg-blue-100 hover:text-white hover:bg-blue-800 px-2 py-1 rounded-full text-blue-600">
                这是大营营
              </div>
              <div className="mr-2 bg-blue-100 hover:text-white hover:bg-blue-800 px-2 py-1 rounded-full text-blue-600">
                这是大营营
              </div>
              <div className="mr-2 bg-blue-100 hover:text-white hover:bg-blue-800 px-2 py-1 rounded-full text-blue-600">
                这是大营营
              </div>
              <div className="mr-2 bg-blue-100 hover:text-white hover:bg-blue-800 px-2 py-1 rounded-full text-blue-600">
                这是大营营
              </div>
            </div>

            <a href="#" className="flex items-center mt-10 space-x-2 group">
              <svg
                className="w-4 h-4 fill-current  group-hover:text-blue-600"
                aria-hidden="true"
                viewBox="0  0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                ></path>
              </svg>
              <span className="group-hover:text-blue-600">你好</span>
            </a>
            <a href="#" className="flex  items-center mt-4 space-x-2 group">
              <svg
                className="w-4 h-4 fill-current  group-hover:text-blue-600"
                aria-hidden="true"
                viewBox="0  0 16 16"
                version="1.1"
                data-view-component="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                ></path>
              </svg>
              <span className="group-hover:text-blue-600">你好</span>
            </a>

            <div className="border-t border-gray-300">
              <a href="#" className="inline-flex items-center group -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>

                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
              </a>
            </div>
          </div>
        </div>

        <footer className="container mx-auto text-xs border-t border-gray-300 py-10 flex items-center justify-between">
          <ul className="flex items-center space-x-12">
            <li>github.inc</li>
            <li>github.inc</li>

            <li>github.inc</li>
          </ul>

          <ul className="flex items-center ">
            <li>abc dir asdf </li>
            <li>abc dir asdf </li>

            <li>abc dir asdf </li>
          </ul>
        </footer>
      </div>
    </main>
  );
}
