import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    
    <div className="flex flex-col h-screen w-screen items-center justify-center ">
      <h1 className="mb-20 font-bold text-5xl text-purple-400">Task Management System</h1>
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 py-2 px-5 text-xl rounded-full placeholder:text-gray"
            type="email"
            placeholder="Enter your email"
            name=""
            id=""
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 py-2 px-5 text-xl mt-3 rounded-full placeholder:text-gray"
            type="password"
            placeholder="Enter your password"
            name=""
            id=""
          />
          <button className="font-semibold outline-none bg-green-500 hover:bg-green-800 py-2 px-8 text-lg w-full rounded-full mt-7 border-none placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
