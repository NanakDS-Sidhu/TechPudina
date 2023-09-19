import { connectDB } from "@/config/dbConfig";
import HireRequest from "@/models/hireRequest";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/user";
import { getDataFromToken } from "@/utils/verify";

connectDB();

export async function GET(request) {
    try {
        const userId = new mongoose.Types.ObjectId(getDataFromToken(request));
        if (!userId) {
            return NextResponse.json({ error: "Not auth" }, { status: 400 });
        }

        // Fetch hire requests for the user
        const hireRequests = await HireRequest.find({ $or: [{ sp_id: userId }, { client_id: userId }] });

        // Fetch user names associated with sp_id
        const spIds = hireRequests.map((request) => request.sp_id);
        const users = await User.find({ _id: { $in: spIds } });
        console.log(users);

        // Create a mapping of sp_id to user name
        const spIdToNameMap = {};
        users.forEach((user) => {
            spIdToNameMap[user._id.toString()] = user.fullName; // Assuming there's a 'name' field in the User model
        });
        console.log(spIdToNameMap)

        // Add the user names to the hire request objects
        const hireRequestsWithNames = hireRequests.map((request) => ({
            ...request.toObject(),
            sp_name: spIdToNameMap[request.sp_id.toString()] || 'Unknown', // Default to 'Unknown' if no name is found
        }));

        return NextResponse.json({ data: hireRequestsWithNames }, { status: 200 });
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
        const client_id = new mongoose.Types.ObjectId(getDataFromToken(request));
        const state = "pending";
        const existingUser = await User.findOne({ _id: new mongoose.Types.ObjectId(sp_id) });
        if (!existingUser) {
            return NextResponse.json({ error: 'Service Provider does not exist' }, { status: 404 });
        }
        const newHireRequest = new HireRequest({
            sp_id,
            client_id,
            subject,
            body,
            state,
        });

        const savedHireRequest = await newHireRequest.save();
        return NextResponse.json({ data: savedHireRequest }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const userId = new mongoose.Types.ObjectId(getDataFromToken(request));
        console.log(userId)
        const requestId = request.nextUrl.searchParams.get("rid");
        console.log(requestId)
        const reqDoc = await HireRequest.findById(requestId);
        console.log(reqDoc)
        console.log(reqDoc.client_id.toString(), userId.toString());
        if (reqDoc.client_id.toString() != userId.toString()) {
            return NextResponse.json({ error: "You cannot delete" }, { status: 400 });
        }

        const result = await HireRequest.deleteOne({ _id: requestId });
        if (result.deletedCount === 1) {
            return NextResponse.json("Request deleted successfully.", { status: 200 });
        } else {
            return NextResponse.json("Request not found or could not be deleted.", { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: "Error deleting Request." }, { status: 500 });
    }
}

export async function PATCH(request) {
    try {
        const client_id = new mongoose.Types.ObjectId(getDataFromToken(request));
        const user = User.findOne({ _id: client_id });
        if (user.role === "client") {
            return NextResponse.json({ error: "Operation not allowed" }, { status: 400 });
        }
        const { hireRequestId, newStatus } = await request.json();
        const existingRequest = await HireRequest.findOne({ _id: hireRequestId });
        if (!existingRequest) {
            return NextResponse.json({ error: "Request Does not exist" }, { status: 400 });
        }

        if (newStatus != 'Accepted' && newStatus != 'rejected') {
            return NextResponse.json({ error: "Status not accepted" }, { status: 400 });
        }
        const result = await HireRequest.updateOne({ _id: hireRequestId }, { $set: { state: newStatus } });
        if (result.modifiedCount === 1) {
            return new Response("User updated successfully.", { status: 200 });
        } else {
            return new Response("User not found or could not be updated.", { status: 404 });
        }
    } catch (error) {
        return new Response("Error updating user.", { status: 500 });
    }
}
