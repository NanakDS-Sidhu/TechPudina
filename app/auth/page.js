"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Img from "../../public/assets/auth-bg.png";
import Link from "next/link";

const page = () => {
  const [login, toggleLogin] = useState(true);

  return (
    <>
      <Navbar />
      <div className="flex h-auto py-12 justify-around">
        <div className="min-w-[500px]">
          <Image className="w-full" src={Img}></Image>
        </div>
        {login ? (
          <div className="  min-w-[500px] p-4 flex flex-col items-center  gap-10 rounded-2xl">
            <h1 className="text-4xl">Log In</h1>
            <form
              className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"
              action=""
            >
              <input
                className="bg-slate-100 w-full p-3"
                type="text"
                placeholder="Enter Email"
              />
              <input
                className="bg-slate-100 w-full p-3"
                type="password"
                placeholder="Enter Password"
              />
              <button className="bg-black text-white p-3 w-full">Log In</button>
              <p>
                Create an account?
                <button
                  className=""
                  onClick={() => {
                    toggleLogin(false);
                  }}
                >
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        ) : (
          <div className="  min-w-[500px] p-4 flex flex-col items-center  gap-10 rounded-2xl">
            <h1 className="text-4xl">Sign Up</h1>
            <form
              className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"
              action=""
            >
              <input
                className="bg-slate-100 w-full p-3"
                type="text"
                placeholder="Enter FullName"
              />
              <input
                className="bg-slate-100 w-full p-3"
                type="text"
                placeholder="Enter Email"
              />
              <input
                className="bg-slate-100 w-full p-3"
                type="password"
                placeholder="Enter Password"
              />

              <div className="flex mr-auto"> 

              <label className="mr-2" for="role">Choose a role:</label>

              <select className=" border-2 border-black"  name="role" id="role">
                <option className="" value="Client">Client</option>
                <option value="Service Provider">Service Provider</option>
              </select>
              </div>

              <button className="bg-black text-white p-3 w-full">
                Sign Up
              </button>
              <p>
                Create an account?
                <button
                  className=""
                  onClick={() => {
                    toggleLogin(true);
                  }}
                >
                  Login
                </button>
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
