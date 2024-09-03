import React, { useState } from "react";
import "../components.css";
import { useNavigate } from "react-router-dom";
import Cover from "../../imgs/2.jpg";
import { setAuthUser } from "../../helper/Storage";

import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const handlere = () => {
    navigate("/login");
  };

  const [register, setRegister] = useState({
    email: "",
    password: "",
    username: "",
    loading: "false",
    err: "",
  });

  const RegisterFun = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true, err: [] });
    axios
      .post("http://localhost:5000/api/auth/register", {
        email: register.email,
        username: register.username,
        password: register.password,
      })
      .then((resp) => {
        setRegister({ ...register, loading: false, err: [] });
        console.log("Register.js:", resp.data);
        setAuthUser(resp.data);
        navigate("/");
      })
      .catch((errors) => {
        console.log(errors);
        setRegister({
          ...register,
          loading: false,
          err: "Email already registered. Please try a different email.",
        });
      });
  };

  return (
    <section className="bg-100  flex box-border justify-center items-center mt-[70px]">
      <div className="bg-[#91c8c1] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#2a626e] mb-[30px]">Register</h2>
          {/* Error Alert */}
          {register.err && (
            <div
              className="flex inline-flex justify-between bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-2 rounded  "
              role="alert"
            >
              <span className="block sm:inline pl-2">{register.err}</span>
              <span
                className="inline"
                onClick={(e) => e.currentTarget.parentNode.remove()}
              >
                <svg
                  className="fill-current h-6 w-6"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <form onSubmit={RegisterFun} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border w-full"
              type="text"
              name="name"
              placeholder="Username"
              value={register.username}
              onChange={(e) =>
                setRegister({ ...register, username: e.target.value })
              }
            />
            <input
              className="p-2  rounded-xl border w-full"
              type="email"
              name="email"
              placeholder="Email"
              value={register.email}
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={register.password}
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <button
              className="bg-[#2a626e] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#6dabb8] font-medium w-full"
              type="submit"
              disabled={register.loading === true}
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-sm flex justify-between items-center container-mr">
            <p className="mr-3 md:mr-0 ">If you already have an account..</p>
            <button
              className="hover:border register text-white bg-[#20b2aa] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
              onClick={handlere}
            >
              Login
            </button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src={Cover}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
