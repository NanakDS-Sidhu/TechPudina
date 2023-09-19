"use client"
import { useEffect, useState  } from "react";
import {AdvocatesTypes} from "../../../data"
import { useRouter } from "next/router";

const signUpInitialValues = {
  Rating:"",
  Experience:"",
  servicetype : "advocates",
  subtype:"Criminal Defense Lawyers",
  Location:""
};


export default function Filters(props) {
  const [data, setData] = useState(signUpInitialValues);

  useEffect(()=>{
    setData({ ...data, servicetype:props.service })
  },[])

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

            <label className="mr-auto" htmlFor="Experience">
              Experience
            </label>
            <select
              className=" bg-slate-100 p-2 w-full"
              name="Experience"
              id="Experience"
              value={data.Experience}
              onChange={(e) => onValueChange(e)}
            >
              <option value="10 + years">10 + years</option>
              <option value="10-5 years">10-5 years</option>
              <option value="5-1 years">5-1 years</option>
              <option value="less than a year">less than a year</option>

            </select>


            <label className="mr-auto" htmlFor="Rating">
              Rating
            </label>
            <select
              className=" bg-slate-100 p-2 w-full"
              name="Rating"
              id="Rating"
              value={data.Rating}
              onChange={(e) => onValueChange(e)}
            >
              <option value="4+ stars">4+ stars</option>
              <option value="3+ years">3+ years</option>
              <option value="2+ stars">2+ stars</option>
              <option value="less than 2 stars">less than 2 stars</option>

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
            <button className=" bg-blue-500 text-white rounded-lg p-3 w-full">Submit</button>
          </form>

    </div>
  )
}
