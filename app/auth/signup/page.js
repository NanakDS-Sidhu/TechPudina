"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../../public/assets/auth-bg.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const signUpInitialValues = {
    email: "",
    password: "",
    fullName: "",
    role: "client",
  }
  
  const [data, setData] = useState(signUpInitialValues);
  const router = useRouter();

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(data);
    
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log("Signup success", responseData);
      router.push("/auth/login");
    } catch (error) {
      console.log("Signup failed", error.message);
    }
  }
  

  return (
    <>
      <div className="flex h-auto py-12 justify-around">
        <div className="min-w-[500px]">
          <Image className="w-full" src={Img} alt=""></Image>
        </div>

        <div className="  min-w-[500px] p-4 flex flex-col items-center  gap-10 rounded-2xl">
          <h1 className="text-4xl">Sign Up</h1>
          <form onSubmit={handleSubmit} 
            className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"            
          >
            <input
              className="bg-slate-100 w-full p-3"
              type="text"
              placeholder="Enter FullName"
              name="fullName"
              value={data.fullName}
              onChange={(e) => onValueChange(e)}

            />
            <input
              className="bg-slate-100 w-full p-3"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={data.email}
              onChange={(e) => onValueChange(e)}
            />
            <input
              className="bg-slate-100 w-full p-3"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={data.password}
              onChange={(e) => onValueChange(e)}
            />

            <div className="flex mr-auto items-center">

              <label className="mr-2" htmlFor="role">Choose a role:</label>

              <select className=" bg-slate-100 p-2" name="role" id="role" value={data.role} onChange={(e) => onValueChange(e)}>
                <option value="client">Client</option>
                <option value="service_provider">Service Provider</option>
              </select>
            </div>

            <button className="bg-black text-white p-3 w-full">
              Sign Up
            </button>

          </form>
          <p>
            Create an account?
            <Link href="/auth/login"
              className=""
            >
              Login
            </Link>
          </p>
        </div>

      </div>
    </>
  );
};

export default Page;
