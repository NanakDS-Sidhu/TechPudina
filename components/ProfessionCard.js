import React from "react";

export default function ProfessionCard(props) {
  return (
    <div className=" drop-shadow-lg text-center text-black w-[200px] ">
      <div className=" p-10 bg-white rounded-lg  my-2 flex flex-col justify-center items-center hover:scale-110 transition-all ">
        {props.icon}
        <h2 className="mt-5 text-sm">{props.children}</h2>
      </div>
    </div>
  );
}
