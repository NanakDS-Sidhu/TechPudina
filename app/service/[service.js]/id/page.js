import React from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GiChest } from "react-icons/gi";
import ReviewCard from "@/components/ReviewCard";

const page = () => {
  // useEffect(async() => {
  //     try{
  //         const res = await fetch("api/users")
  //     }

  //   }, []);

  return (
    <>
      <div className="px-32 py-4 w-full">
        <div className=" w-full">
          <div className="flex w-full">
            {/* image */}
            <div>
              <div className=" h-56 w-40 border p-2 rounded  border-1 border-black mr-12 mb-2 ">
                <img
                  className="h-full w-full object-cover"
                  src="https://www.unicef.org/sites/default/files/styles/hero_tablet/public/unicef-youth-advocates-3-UN0348822.jpg?itok=z-YojuS5"
                  alt="image"
                  width="50"
                  height="50"
                ></img>
              </div>
              <div className="border border-black text-green-600 w-40 flex justify-center text-lg p-2 rounded-lg ">
                Verified
              </div>
            </div>
            <div className="w-full p-4">
              <div className="flex justify-between w-full pb-6 border-b-2 ">
                <div className="">
                  <h1 className="text-2xl font-bold mb-2">
                    Advocate Sunita Bafna
                  </h1>
                  <div className="flex items-center">
                    <img
                      width="15"
                      height="15"
                      className=""
                      src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png"
                      alt="LawRato"
                    ></img>
                    <img
                      width="15"
                      height="15"
                      className=""
                      src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png"
                      alt="LawRato"
                    ></img>
                    <img
                      width="15"
                      height="15"
                      className=""
                      src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png"
                      alt="LawRato"
                    ></img>
                    <img
                      width="15"
                      height="15"
                      className=""
                      src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png"
                      alt="LawRato"
                    ></img>
                    <img
                      width="15"
                      height="15"
                      className=""
                      src="https://lawrato.com/assets/img/sprite/icon/rating-star-full-icon-new.png"
                      alt="LawRato"
                    ></img>
                    <h3 className="w-4 h-4 ml-2">5.0</h3>
                  </div>
                </div>
                <button className=" bg-blue-500 text-white font-extrabold text-sm px-4">
                  {" "}
                  VIEW CONTACT NUMBER- 8360193664
                </button>
              </div>
              <div className="grid grid-cols-2 border-b-2 gap-16">
                <div className="py-6 ">
                  <div className="flex flex-col gap-3 ">
                    <div className="flex items-center text-2xl gap-2">
                      <FaLocationDot />
                      <h1 className="text-sm">
                        Location : Mumbai Central, Mumbai
                      </h1>
                    </div>
                    <div className="flex items-center text-2xl gap-2">
                      <GiChest />
                      <h1 className="text-sm">Experience : 10 years</h1>
                    </div>
                  </div>
                </div>
                <div className="py-6 ">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-2xl gap-2">
                      <FaLocationDot />
                      <h1 className="text-sm">
                        Languages : English, Gujarati, Hindi, Kannada, Marathi
                      </h1>
                    </div>
                    <div className="flex items-center text-2xl gap-2">
                      <GiChest />
                      <p className="text-sm">
                        Practice areas: Anticipatory Bail, Cheque Bounce, Child
                        Custody, Court Marriage, Divorce, Domestic Violence,
                        Family, High Court, Recovery, Succession Certificate,
                        Wills / Trusts{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="py-10">
          Advocate Sunita Bafna has been practicing and handling cases
          independently with a result oriented approach, both professionally and
          ethically and has now acquired many years of professional experience
          in providing legal consultancy and advisory services. Advocate Sunita
          provides services in various fields of Criminal Matters, Civil
          Matters, Consumer Related Matters, Recovery Matters, Cheque Bounce
          Matters, Family Matters, Motor Accident Matter and drafting and
          vetting of various agreements and documents. Advocate Sunita enrolled
          with the Bar Council of Maharashtra and Goa in 2013. She is a member
          of Advocates Association of Small Causes. Enrollment Number :
          MAH/48/2013
        </p>
        <div className="flex gap-28">
          <div className="font-bold">Courts</div>
          <div className="">
            <p>
              {" "}
              Bombay High Court, City Civil Court, Mumbai, Consumer District
              Forum, Mumbai, Court of Small Causes, Mumbai, Debts Recovery
              Tribunal (DRT) Mumbai, District and Sessions Court, Mumbai,
              District Court, Mumbai, Family Courts, Mumbai, State Consumer
              Disputes Redressal Commission, UP, Trial Courts, Mumbai{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2">
          <h1 className="text-3xl mt-14 mb-4">Reviews</h1>
          <button className=" bg-blue-600 text-white font-bold px-4 py-2">
            Write a Review
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-8 py-8">
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
