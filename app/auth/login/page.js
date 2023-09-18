"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../../public/assets/auth-bg.png";
import Link from "next/link";

const loginInitialValues = {
  name : "",
  password : ""
}

const login = () => {

  const [data,setData] = useState(loginInitialValues);

  const onValueChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }

  return (
    <>
    <div className="flex h-auto py-12 justify-around">
        <div className="min-w-[500px]">
          <Image className="w-full" src={Img} alt=""></Image>
        </div>
        
          <div className="  min-w-[500px] p-4 flex flex-col items-center  gap-10 rounded-2xl">
            <h1 className="text-4xl">Log In</h1>
            <form
              className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-slate-100 w-full p-3"
                type="email"
                value = {data.email}
                name = "email"
                placeholder="Enter Email"
                onChange = {(e) => onValueChange(e)}
              />
              <input
                className="bg-slate-100 w-full p-3"
                type="password"
                name = "password"
                value = {data.password}
                placeholder="Enter Password"
                onChange = {(e) => onValueChange(e)}
              />
              <button className="bg-black text-white p-3 w-full">Log In</button>
              
            </form>
            <p>
                Create an account?
                <Link href = "/auth/signup"
                  className=""
                >
                  Sign Up
                </Link>
              </p>
          </div>
      </div>
    </>
  )
}

export default login
