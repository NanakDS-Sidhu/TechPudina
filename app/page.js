"use client"
import Image from "next/image";
import HomeImg from "../public/assets/home-bg.jpg";
import ProfessionCard from "../components/ProfessionCard";

import { HiMiniScale } from "react-icons/hi2";
import {HiOutlineDocumentText} from "react-icons/hi";
import {ImHammer2} from "react-icons/im";
import {PiHandshakeBold} from "react-icons/pi"
import {SiHandshake} from "react-icons/si"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex p-10 justify-between text-black">
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
          <Image src={HomeImg} alt="home background image"></Image>
        </div>
      </div>

      <div className="mt-20 px-20 flex flex-col items-center"> 
        
        <h1 className="flex justify-center items-center text-3xl font-extrabold mb-10">
          Select a Service
        </h1>
        <p className="mb-20">Onboarding legal service providers on an eMarketplace to extend legal services to citizens in India.</p>
        <div className="flex justify-around items-center text-5xl gap-14 mb-24">
          <button onClick={() => {router.push("/service/advocates")}}><ProfessionCard icon={<HiMiniScale />}>Advocates</ProfessionCard></button>
          <button onClick={() => {router.push("/service/document_writers")}}><ProfessionCard icon={<HiOutlineDocumentText />}>Document Writers</ProfessionCard></button>
          <button onClick={() => {router.push("/service/notaries")}}><ProfessionCard icon={<ImHammer2 />}>Notaries</ProfessionCard></button>
          <button onClick={() => {router.push("/service/mediators")}}><ProfessionCard icon={<PiHandshakeBold />}>Mediators</ProfessionCard></button>
          <button onClick={() => {router.push("/service/arbitrators")}}><ProfessionCard icon={<SiHandshake />}>Arbitrators</ProfessionCard></button>
        </div>
      </div>
    </>
  );
}
