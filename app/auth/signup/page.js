"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "../../../public/assets/auth-bg.png";
import Link from "next/link";
import {AdvocatesTypes} from "../../../data"
import { useRouter } from "next/navigation";

const signUpInitialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "client",
  servicetype : "document_writers ",
  subtype:"Criminal Defense Lawyers"
};

const page = () => {
  const [data, setData] = useState(signUpInitialValues);
  const router = useRouter();

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  return (
    <>
      <div className="flex h-auto py-10 justify-around">
        <div className="min-w-[500px]">
          <Image className="w-full" src={Img} alt=""></Image>
        </div>

        <div className="  min-w-[500px] flex flex-col items-center  gap-10 rounded-2xl">
          <h1 className="text-4xl">Sign Up</h1>
          <form
            className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"
            onSubmit={handleSubmit}
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

            <label className="mr-auto" htmlFor="role">
              Choose a role:
            </label>
            <select
              className=" bg-slate-100 p-2 w-full"
              name="role"
              id="role"
              value={data.role}
              onChange={(e) => onValueChange(e)}
            >
              <option value="Client">Client</option>
              <option value="Service Provider">Service Provider</option>
            </select>
            {data.role === "Service Provider" && (
              <>
                <label className="mr-auto" htmlFor="role">
                  Choose a Profession:
                </label>
                <select
                  className=" bg-slate-100 p-2 w-full"
                  name="servicetype"
                  id="servicetype"
                  value={data.servicetype}
                  onChange={(e) => onValueChange(e)}
                >
                  <option value="document_writers ">Document Writers</option>
                  <option value="advocates">Advocates</option>
                  <option value="arbitrators">Arbitrators</option>
                  <option value="mediators">Mediators</option>
                  <option value="notaries">Notaries</option>
                </select>
              </>
            )}
            {data.servicetype === "advocates" && (
              <>
                <label className="mr-auto" htmlFor="role">
                  Choose Specialization:
                </label>
                <select
                  className=" bg-slate-100 p-2 w-full"
                  name="subtype"
                  id="subtype"
                  value={data.subtype}
                  onChange={(e) => onValueChange(e)}
                >
                  {
                    AdvocatesTypes.map((e,i) => (
                      <option key={i} value={e.type}>{e.type}</option>
                    ))
                  }
                </select>
              </>
            )}
            <button className="bg-black text-white p-3 w-full">Sign Up</button>
          </form>
          <p>
            Create an account?
            <Link href="/auth/login" className="">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
