import React from "react";
import logo from "../images/logo.jpeg";


export const Registro = () => {
  return (
    <div className="lg:py-5 md:py-5 md:mx-auto   lg:mx-auto  md: mt-20 lg:mt-20 rounded-full p-0  ">
      <div className="md:flex md:first-letter:mx-auto rounded-full mr-6 ">
        <div className=" ">
          <img
            className="  rounded-r-none "
            src={logo}
            alt=""
            width={580}
            height={800}
          />
        </div>

        <form
          action=""
          className="    sm:p-6 md:w-80 sm:px-2 py-2 bgForm shadow-2xl"
        >
          <legend className="text-white text-center p-3 uppercase">
            Iniciar Sesion
          </legend>

          <div>
            <label htmlFor="email" className="block mt-4 text-white ">
              Email
            </label>
            <input
              type="email"
              required={true}
              className="w-full bg-transparent 
          border-b-2 p-1
          text-white
          outline-none
          
          "
            />
          </div>
          <div>
            <label htmlFor="email" className="block mt-5 text-white">
              Contraseña
            </label>
            <input
              type="Pasword"
              className="w-full bg-transparent 
          border-b-2 p-1
          text-white
          outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mt-5 text-white">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="w-full bg-transparent 
              text-white
          border-b-2 p-1
          outline-none"
            />
          </div>

          <div className="flex justify-between p-2 text-white">
            <a>Inicia Sesion</a>
            <a href="">Recuperar Contraseña</a>
          </div>
          <input
            type="submit"
            value={"Iniciar"}
            className="mt-5 w-full rounded-lg
             bg-indigo-700 text-center text-white uppercase 
             
             p-2
             cursor-pointer
             "
          />
        </form>
      </div>
    </div>
  );
};
