'use client'
import { useState } from "react";
const loginInitialValues = {
    sp_id: "",
    subject: "",
    body: ""
}
const Temp = () => {
    const [data, setData] = useState(loginInitialValues);
    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        console.log(data);
        e.preventDefault();
        try {
            const response = await fetch("/api/hire-request", {
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
            console.log("Login success", responseData);
            router.push("/");

        } catch (error) {
            console.log("Login failed", error.message);
        }
    }
    return (
        <>
            <form
                className="flex flex-col px-4 mr-auto gap-6 w-full items-center justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    className="bg-slate-100 w-full p-3"
                    type="text"
                    value={data.sp_id}
                    name="sp_id"
                    placeholder="Enter spid"
                    onChange={(e) => onValueChange(e)}
                /><input
                    className="bg-slate-100 w-full p-3"
                    type="text"
                    value={data.subject}
                    name="subject"
                    placeholder="Enter subject"
                    onChange={(e) => onValueChange(e)}
                /><input
                    className="bg-slate-100 w-full p-3"
                    type="text"
                    value={data.body}
                    name="body"
                    placeholder="Enter body"
                    onChange={(e) => onValueChange(e)}
                />
                <button type="submit" onClick={handleSubmit} className="bg-black text-white p-3 w-full">Log In</button>
            </form>
            <div>
                
            </div>
        </>

    );
}

export default Temp;