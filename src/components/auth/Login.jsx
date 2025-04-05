import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const LogInHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" flex h-screen w-screen items-center justify-center ">
      <div className="rounded-xl border-2 border-emerald-600 p-20">
        <form className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full mt-3 placeholder:text-gray-500"
            type="password"
            placeholder="Enter password"
          />
          <button
            onClick={(e) => {
              LogInHandler(e);
            }}
            className="text-black  border-none outline-none hover:bg-emerald-700 bg-emerald-500 font-semibold py-2 px-8 text-xl rounded-full mt-5 cursor-pointer placeholder:text-black"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
