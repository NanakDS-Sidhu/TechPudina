import { connectDB } from "@/config/dbConfig";
import { NextResponse } from "next/server";
import User from "@/models/user";

connectDB();

export async function GET(request) {
    
    try {
        const query = request.nextUrl.searchParams;
        const id = query.get("userId");       
        // console.log(id);
        const user = await User.findById(id);
        // console.log(user, "AM I USER")
        return NextResponse.json({ data: user , status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Error fetching requests'+error }, { status: 500 });
    }
}