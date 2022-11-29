import { useState } from "react";
import logo from "../images/logo.jpeg";
import IsEmail from "isemail";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    var expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      
      setIsValidEmail(!expReg.test(email));
      if (password.length < 0 || isValidEmail) {
        setIsValid(true)
        return;
    }


    

 
      setIsValid(false)
   

  };

  return (
    <div className="lg:py-5 md:py-5 md:mx-auto   lg:mx-auto  md: mt-20 lg:mt-20 rounded-full p-0  ">
      <div className="md:flex md:first-letter:mx-auto rounded-full mr-6 ">
        <div className="space-x-4 shadow-2xl">
          <img
            className="w-96 rounded-r-none "
            src={logo}
            alt=""
            width={250}
            height={300}
          />
        </div>

        <form
          action=""
          className=" w-96 sm:p-6 md:w-80 sm:px-2 py-2 bgForm shadow-2xl"
        >
          <legend className="text-white text-center p-3 uppercase">
            Iniciar Sesion
          </legend>
          <div>
            <label htmlFor="email" className="block mt-4 text-white ">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={
                isValidEmail
                  ? " w-full bg-transparent border-b-2 p-1 outline-none  border-b-red-600  "
                  : "w-full bg-transparent border-b-2 p-1 outline-none"
              }
            />
            {isValidEmail && (
              <p className="text-xs   text-white ">Ingrese un email valido </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mt-5 text-white">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent 
              border-b-2 p-1
              outline-none"
            />
            {isValid && (
              <p className="text-xs   text-white ">LLene el campo contraseña </p>
            )}
          </div>

          <div className="flex justify-between p-2 text-white">
            <a href="">Registrarte</a>
            <a href="">Recuperar Contraseña</a>
          </div>
          <input
            type="submit"
            
            value={"Iniciar"}
            className="mt-5 w-full cursor-pointer rounded-lg bg-indigo-700 text-center text-white uppercase p-2"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};
