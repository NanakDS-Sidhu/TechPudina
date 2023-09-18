import { connectDB } from "@/config/dbConfig";
import HireRequest from "@/models/hireRequest";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/user";
connectDB();

export async function GET(request) {
    try {
        let userId; 
        const hireRequests = await HireRequest.find({ $or: [{ sp_id: userId }, { client_id: userId }]});
        return NextResponse.json({ data: hireRequests }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching requests' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const {
            sp_id,
            subject,
            body
        } = await request.json();
        // Take client id from token
        const client_id = new mongoose.Types.ObjectId("6508654128ef94a802d12c9c");
        const state = "pending";
        const existingUser = await User.findOne({ _id: new mongoose.Types.ObjectId(sp_id)});
        if (!existingUser) {
            return NextResponse.json({ error: 'Service Provider does not exist' }, { status: 404 });
        }
        
        const newHireRequest = new HireRequest({
            sp_id: spObjectId,
            client_id,
            subject,
            body,
            state,
        });

        const savedHireRequest = await newHireRequest.save();
        return NextResponse.json({ data : savedHireRequest }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {

        const userId = request.nextUrl.searchParams.get("id");
        console.log(userId)
        if (!userId) {
            return NextResponse.json("User ID is required for deletion.", { status: 400 });

        }

        const result = await User.deleteOne({ _id: userId });

        if (result.deletedCount === 1) {
            return NextResponse.json("User deleted successfully.", { status: 200 });
        } else {
            return NextResponse.json("User not found or could not be deleted.", { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Error deleting user." }, { status: 500 });
    }
}


export async function PATCH(request) {
    try {
        // const userId = request.nextUrl.searchParams.get("id");
        const {hireRequestId , newStatus} = await request.json();
        const existingRequest = await HireRequest.findOne({ _id: hireRequestId});
        if (!existingRequest) {
            return new Response("Request Does not exist", { status: 400 });
        }

        if (newStatus != 'Accepted' &&  newStatus != 'rejected'){
            return new Response("Status not accepted", { status: 400 });
        }

        const result = await HireRequest.updateOne({ _id: hireRequestId }, { $set: {state : newStatus} });
        console.log(result)
        if (result.modifiedCount === 1) {
            return new Response("User updated successfully.", { status: 200 });
        } else {
            return new Response("User not found or could not be updated.", { status: 404 });
        }
    } catch (error) {
        return new Response("Error updating user.", { status: 500 });
    }
}
