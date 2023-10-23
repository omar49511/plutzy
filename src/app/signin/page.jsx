import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SigninPage() {
  return (
    <section className="py-16 pt-40">
      <div className="flex  justify-center">
        <div className="bg-white shadow rounded lg:w-1/2 md:w-1/2 w-full p-10 ">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Inicia sesión con tu cuenta
          </p>
          <p
            tabIndex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            ¿No tienes una cuenta?{" "}
            <Link
              href="/signup"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer"
            >
              Regístrate aquí
            </Link>
          </p>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <Image
              height={20}
              width={30}
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continuar con Google
            </p>
          </button>
          <button
            aria-label="Continue with github"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <Image
              height={30}
              width={30}
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
              alt="github"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continuar con Github
            </p>
          </button>
          <button
            aria-label="Continue with twitter"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <Image
              width={30}
              height={30}
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt="twitter"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continuar con Twitter
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              O
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Correo
            </label>
            <input
              aria-labelledby="email"
              type="email"
              className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6 w-full">
            <label
              htmlFor="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Contraseña
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <Image
                  width={20}
                  height={20}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="viewport"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 font-medium rounded text-sm leading-none text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl py-4 w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
