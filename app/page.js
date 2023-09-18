import Navbar from "@/components/Navbar";
import Image from "next/image";
import HomeImg from "../public/assets/home-bg.jpg";
import ProfessionCard from "../components/ProfessionCard";

import { PiScalesThin } from "react-icons/pi";

export default function Home() {
  return (
<<<<<<< HEAD
   <></>
  )
=======
    <>
      <Navbar />
      <div className="flex p-10 justify-between ">
        <div className="flex flex-col justify-between pr-36 pl-20">
          <div>
            <h1 className=" text-6xl font-extrabold py-4">
              {" "}
              Legal Service Providers at one Place
            </h1>
            <p>
              Centralized platform for onboarding Legal Service Providers such
              as Advocates, Arbitrators, Mediators, Notaries, Document Writers,
              etc{" "}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
              <input
                type="text"
                className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
              <button className="px-4 text-white bg-black border-l rounded ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={HomeImg}></Image>
        </div>
      </div>

      <div className="mt-8 px-20">
        <div className="h-1/2"></div>
        <h1 className="flex justify-center text-3xl font-extrabold mb-14">
          Select a Service
        </h1>
        <div className="flex justify-around h-1/2">
          <ProfessionCard icon={<PiScalesThin />}>Advocates</ProfessionCard>
          <ProfessionCard icon={<PiScalesThin />}>Document Writers</ProfessionCard>
          <ProfessionCard icon={<PiScalesThin />}>Notaries</ProfessionCard>
          <ProfessionCard icon={<PiScalesThin />}>Mediators</ProfessionCard>
          <ProfessionCard icon={<PiScalesThin />}>Arbitrators</ProfessionCard>
        </div>
      </div>
    </>
  );
>>>>>>> c581b02baf732a2a0dbfb135a9088ddb3ef24559
}
