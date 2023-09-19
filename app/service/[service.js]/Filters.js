"use client"
import { useState  } from "react";
import {AdvocatesTypes} from "../../../data"

const signUpInitialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "client",
  servicetype : "advocates",
  subtype:"Criminal Defense Lawyers",
  Location:""
};


export default function Filters() {


  const [data, setData] = useState(signUpInitialValues);

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>

<form
            className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"
            onSubmit={handleSubmit}
          >


            <label className="mr-auto" htmlFor="Location">
              Location:
            </label>
            <select
              className=" bg-slate-100 p-2 w-full"
              name="Location"
              id="Location"
              value={data.Location}
              onChange={(e) => onValueChange(e)}
            >
              <option value="Chandigarh">Chandigarh</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>

            </select>

            <label className="mr-auto" htmlFor="Location">
              Experience
            </label>
            <select
              className=" bg-slate-100 p-2 w-full"
              name="Location"
              id="Location"
              value={data.Location}
              onChange={(e) => onValueChange(e)}
            >
              <option value="Chandigarh">Chandigarh</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>

            </select>

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
      
      <div className="flex flex-col p-4 py-2">
      <label className="mr-2 text-emerald-900 text-lg font-medium" htmlFor="role">props.label</label>
        <select className=" bg-teal-700 text-white rounded-md focus:border-white p-2"  name="role" id="role">
          <option value="Client">Client</option>
          <option value="Service Provider">Service Provider</option>
        </select>
    </div>


    </div>
  )
}
