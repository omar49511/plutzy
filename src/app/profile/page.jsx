import React from "react";
import Image from "next/image";
import { BiCamera } from "react-icons/bi";
export default function Profilepage() {
  return (
    <div className="max-w-5xl h-[780px] w-full  m-auto  py-16 pt-20">
      <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3  bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')]">
        <div className="md:w-1/3 w-full">
          <Image
            src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"
            height={300}
            width={300}
            alt="Teemo"
            className="rounded-full shadow-lg h-[300px] w-[300px] object-cover"
          />
        </div>
        <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
          <div className="w-full relative">
            <button className="bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.4)] text-white font-semibold h-12 px-6 rounded-lg w-full flex gap-4 items-center justify-center sm:w-auto md:absolute md:pt-0 bottom-0 right-0">
              <BiCamera />
              Editar foto de portada
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words">
        <div className="pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
          <div className="flex flex-wrap mb-6 xl:flex-nowrap">
            <div className="grow">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <a
                      className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                      href="#"
                    >
                      Cinta Verges
                    </a>
                  </div>
                  <div className="flex flex-wrap pr-2 mb-4 font-medium">
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="#"
                    >
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      New York, NY
                    </a>
                    <a
                      className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary"
                      href="#"
                    >
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      </span>
                      contact@example.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <a
                    href="#"
                    className="text-black mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    320 Posts
                  </a>
                  <a
                    href="#"
                    className="text-black mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    2.5k Respuestas
                  </a>
                  <a
                    href="#"
                    className="text-black mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    48 Algo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-px border-neutral-200" />
          <ul className="group flex flex-wrap items-stretch text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments">
            <li className="flex mt-2 -mb-[2px]">
              <a
                className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary"
                href="#"
              >
                Cursos
              </a>
            </li>
            <li className="flex mt-2 -mb-[2px]">
              <a
                className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary"
                href="#"
              >
                Post
              </a>
            </li>
            <li className="flex mt-2 -mb-[2px] group">
              <a
                className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-history]:border-primary group-[.active-history]:text-primary text-muted hover:border-primary"
                href="#"
              >
                Historial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
