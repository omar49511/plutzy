import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        <a className="block" href="/">
          <svg
            className="w-8 h-8 mx-auto h-5 w-auto text-slate-900"
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
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          © 2023 Plutzy creado por omar.
        </p>
      </div>
    </footer>
  );
}
