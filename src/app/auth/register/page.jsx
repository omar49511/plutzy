"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <section className="py-16 pt-40">
      <div className="flex  justify-center">
        <div className="bg-white shadow rounded lg:w-1/2 md:w-1/2 w-full p-10 ">
          <p
            tabIndex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Regístrate
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Nombre de usuario
              </label>
              <input
                id="username"
                type="text"
                {...register("username", {
                  required: {
                    value: true,
                    message: "El nombre de usuario es requerido",
                  },
                })}
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
            </div>
            <div className="mt-6 w-full">
              <label
                htmlFor="username"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Correo
              </label>
              <input
                aria-labelledby="email"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es requerido",
                  },
                })}
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
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
                  {...register("password", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida",
                    },
                  })}
                  className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="mt-6 w-full">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Confirmar contraseña
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  id="confirmPassword"
                  type="confirmPassword"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "La contraseña es requerida",
                    },
                  })}
                  className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div className="mt-8">
              <button
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 font-medium rounded text-sm leading-none text-white focus:outline-none bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl py-4 w-full"
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
