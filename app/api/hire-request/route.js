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
        const hireRequests = await HireRequest.find({ $or: [{ sp_id: userId }, { client_id: userId }] });
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
        const requestId = request.nextUrl.searchParams.get("rid");
        const reqDoc = HireRequest.findById(requestId);
        if (reqDoc.client_id != userId) {
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
