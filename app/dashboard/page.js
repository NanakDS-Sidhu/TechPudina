"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const Dashboard = ({
    clientSide = true
}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('http://localhost:3000/api/hire-request/', { method: "GET" })
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const resjson = await res.json();
                setData(resjson.data);
            } catch (e){
                console.log(e);
            }
        }
        fetchData();
    }, []);
    const handleDelete = async(id) =>{
        const res = await fetch(`http://localhost:3000/api/hire-request?rid=${id}`, { method: "DELETE" });
        console.log(res);
    }
    return (
        <div className='h-screen  text-black flex'>
            <div className='w-1/6 h-screen'>
                <h2 className='text-3xl p-4'>Filters</h2>
            </div>
            <div className='grow px-10'>
                <h1 className='text-3xl'>List of Requests</h1>
                {data.map(x => (
                    <div className="w-full bg-slate-100 flex gap-2 p-6">
                        <Image src="/assets\auth-bg.png" width={150} height={150} className="rounded-full" />
                        <div className="flex flex-col justify-between w-full">
                            <div className="flex justify-between relative">
                                <div className="flex flex-col gap-1">
                                    <h1 className="font-semibold text-xl">{x.subject}</h1>
                                    <p>{x.body}</p>
                                </div>
                                <div className="px-8 flex flex-col items-center justify-center">
                                    <h2 className={`${x.state === "Pending" ? "text-blue-500" : x.state === "Complete" ? "text-green-500" : "text-red-500"} text-xl font-semibold`}>{x.state}</h2>
                                    {clientSide && <button className="text-red-500 text-2xl absolute top-0 right-0" onClick={()=>handleDelete(x._id)}><MdDeleteOutline /></button>}
                                </div>
                            </div>
                            <h1 className="text-right w-full">{x.sp_name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;



