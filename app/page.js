
import Image from "next/image";
import HomeImg from "../public/assets/home-bg.jpg";
import ProfessionCard from "../components/ProfessionCard";

import { PiScalesThin } from "react-icons/pi";
import {HiOutlineDocumentText} from "react-icons/hi";

export default function Home() {
  return (
    <>
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
                className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-black  focus:outline-none focus:ring "
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
          <button><ProfessionCard icon={<PiScalesThin />}>Advocates</ProfessionCard></button>
          <button><ProfessionCard icon={<HiOutlineDocumentText />}>Document Writers</ProfessionCard></button>
          <button><ProfessionCard icon={<PiScalesThin />}>Notaries</ProfessionCard></button>
          <button><ProfessionCard icon={<PiScalesThin />}>Mediators</ProfessionCard></button>
          <button><ProfessionCard icon={<PiScalesThin />}>Arbitrators</ProfessionCard></button>
        </div>
      </div>
    </>
  );
}
