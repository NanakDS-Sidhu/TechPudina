import connectDb from "@/config/dbConfig";
import User from "@/models/user"
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
    try {
        // Fetch users from the database
        const filters = {};
        console.log(request.nextUrl.searchParams);
        if (request.query.type) {
            filters.type = request.query.type;
        }
        if (request.query.rating) {
            filters.rating = { $gte: parseInt(request.query.rating) };
        }
        if (request.query.location) {
            filters.location = request.query.location;
        }
        const users = await User.find(filters);
        return NextResponse.json({ data: users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
    }
}

export async function HEAD(request) { }

export async function POST(request) { }

export async function PUT(request) { }

export async function DELETE(request) { }

export async function PATCH(request) { }

// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) { }