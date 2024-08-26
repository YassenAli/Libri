import React, { useState } from "react";
import "../components.css";
import { useNavigate } from "react-router-dom";
import Cover from "../../imgs/2.jpg";
import Alert from "react-bootstrap/Alert";
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
    err: [],
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
        const { access, refresh } = resp.data;
        // setAuthUser({ accessToken: access, refreshToken: refresh });
        setAuthUser(resp.data);
        navigate("/");
      })
      .catch((errors) => {
        console.log(errors);
        setRegister({
          ...register,
          loading: false,
          err: errors.response?.data?.errors || [
            "Email already registered. Please try a different email.",
          ],
        });
      });
  };

  return (
    <section class="bg-100  flex box-border justify-center items-center mt-[70px]">
      <div class="bg-[#91c8c1] rounded-2xl flex max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8">
          <h2 class="font-bold text-3xl text-[#2a626e] mb-[30px]">Register</h2>
          {register.err.map((error, index) => (
            <Alert key={index} variant={"danger"}>
              {error.msg}
            </Alert>
          ))}
          <form action="" class="flex flex-col gap-4">
            <input
              class="p-2 mt-8 rounded-xl border w-full"
              type="text"
              name="name"
              placeholder="Username"
              value={register.username}
              onChange={(e) =>
                setRegister({ ...register, username: e.target.value })
              }
            />
            <input
              class="p-2  rounded-xl border w-full"
              type="email"
              name="email"
              placeholder="Email"
              value={register.email}
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <input
              class="p-2 rounded-xl border w-full"
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
              class="bg-[#2a626e] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#6dabb8] font-medium w-full"
              type="submit"
              disabled={register.loading === true}
            >
              Register
            </button>
          </form>

          <div class="mt-4 text-sm flex justify-between items-center container-mr">
            <p class="mr-3 md:mr-0 ">If you already have an account..</p>
            <button
              class="hover:border register text-white bg-[#20b2aa] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
              onClick={handlere}
            >
              Login
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

export default Register;
