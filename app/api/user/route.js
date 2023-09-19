import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/user";

connectDB();

export async function GET(request) {
    console.log("hi")
    try {
        const {
            id
        } = await request.json();
        console.log(id);
        const user = await User.findById(id);
        return NextResponse.json({ data: user }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Error fetching requests'+error }, { status: 500 });
    }
}