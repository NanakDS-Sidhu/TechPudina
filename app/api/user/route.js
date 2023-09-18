
import { connectDB } from "@/config/dbConfig";
import User from "@/models/user"
import { NextResponse } from "next/server";

connectDB();

export async function GET(request, context) {
    try {
        // Fetch users from the database
        const filters = {};
        const query = request.nextUrl.searchParams;

        // Filter by servicetype (Service Provider type)
        if (query.get('servicetype')) {
            filters.servicetype = query.get('servicetype');
        }

        // Filter by subtype (Service Provider subtype - applicable only to advocates)
        if (query.get('subtype')) {
            filters.subtype = query.get('subtype');
        }

        // Filter by rating (Service Providers with a minimum rating)
        if (query.get('rating')) {
            filters.rating = { $gte: parseInt(query.get('rating')) };
        }

        // Filter by location (Location of the user or Service Provider)
        if (query.get('location')) {
            filters.location = query.get('location');
        }

        // Filter by experienceInYears (Service Providers with a minimum number of years of experience)
        if (query.get('experienceInYears')) {
            filters.experienceInYears = { $gte: parseInt(query.get('experienceInYears')) };
        }

        // Filter by priceInRupees (Service Providers with a maximum price in rupees)
        if (query.get('priceInRupees')) {
            filters.priceInRupees = { $lte: parseInt(query.get('priceInRupees')) };
        }

        // Filter by practisecourts (Service Providers who practice in specific courts)
        if (query.get('practisecourts')) {
            filters.practisecourts = { $in: query.get('practisecourts').split(',') };
        }

        const users = await User.find(filters);
        return NextResponse.json({ data: users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
    }
}

export async function POST(request) {

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
        const userId = request.nextUrl.searchParams.get("id");

        if (!userId) {
            return new Response("User ID is required for partial update.", { status: 400 });
        }

        const updatedFields = await request.json();

        const result = await User.updateOne({ _id: userId }, { $set: updatedFields });

        if (result.nModified === 1) {
            return new Response("User updated successfully.", { status: 200 });
        } else {
            return new Response("User not found or could not be updated.", { status: 404 });
        }

    } catch (error) {
        return new Response("Error updating user.", { status: 500 });
    }
}
