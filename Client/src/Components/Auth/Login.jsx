import React, { useState } from "react";
import "../components.css";
import { useNavigate } from "react-router-dom";
import Cover from "../../imgs/2.jpg";
const Login = () => {
  const navigate = useNavigate();
  const handlerec = () => {
    navigate("/signup");
};
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <section class="bg-100  flex box-border justify-center items-center mt-[70px]">
      <div class="bg-[#91c8c1] rounded-2xl flex max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8">
          <h2 class="font-bold text-3xl text-[#2a626e] mb-[30px]">Login</h2>

          <form action="" class="flex flex-col gap-4">
            <input
              class="p-2 mt-8 rounded-xl border w-full"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              class="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button
              class="bg-[#2a626e] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#6dabb8] font-medium w-full"
              type="submit"
            >
              Login
            </button>
          </form>

          <div class="mt-4 text-sm flex justify-between items-center container-mr">
            <p class="mr-3 md:mr-0 ">If you don't have an account..</p>
            <button class="hover:border register text-white bg-[#20b2aa] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300" onClick={handlerec}>
              Register
            </button>
          </div>
        </div>
        <div class="md:block hidden w-1/2">
          <img
            class="rounded-2xl max-h-[1600px]"
            src={Cover}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default Login
;
