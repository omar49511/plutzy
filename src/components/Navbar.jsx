import Link from "next/link";
import { FaLightbulb } from "react-icons/fa";

function Navbar({ user }) {
  return (
    <>
      <header className="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 mr-4">
              <a className="block" aria-label="" href="/">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="footer-logo"
                    >
                      <stop stopColor="#4FD1C5" offset="0%"></stop>
                      <stop stopColor="#81E6D9" offset="25.871%"></stop>
                      <stop stopColor="#338CF5" offset="100%"></stop>
                    </radialGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#footer-logo)"
                    fillRule="nonzero"
                  ></rect>
                </svg>
              </a>
            </div>
            {user ? (
              <nav className="hidden md:flex md:grow">
                <ul className="flex grow justify-end flex-wrap items-center">
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Cursos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Foro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                      Logout
                    </button>
                  </li>
                  <li>
                    <FaLightbulb className="ml-4 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                      Logout
                    </FaLightbulb>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className="hidden md:flex md:grow">
                <ul className="flex grow justify-end flex-wrap items-center">
                  <li>
                    <Link
                      href="/signin"
                      className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      Iniciar sesión
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                      href="/signup"
                    >
                      <span>Regístrate</span>
                      <svg
                        className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            <div className="flex md:hidden">
              <button
                className="hamburger false"
                aria-controls="mobile-nav"
                aria-expanded="false"
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6 fill-current text-gray-900"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="4" width="24" height="2"></rect>
                  <rect y="11" width="24" height="2"></rect>
                  <rect y="18" width="24" height="2"></rect>
                </svg>
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
