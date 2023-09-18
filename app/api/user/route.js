import connectDb from "@/config/dbConfig";
import User from "@/models/user"
import { NextResponse } from "next/server";

connectDb();

export async function GET(request, context) {
    try {
        // Fetch users from the database
        const filters = {};
        const query = request.nextUrl.searchParams;
        console.log(query);

        // Filter by type
        if (query.get('type')) {
            filters.type = query.get('type');
        }

        // Filter by rating
        if (query.get('rating')) {
            filters.rating = { $gte: parseInt(query.get('rating')) };
        }

        // Filter by location
        if (query.get('location')) {
            filters.location = query.get('location');
        }

        // Filter by servicetype
        if (query.get('servicetype')) {
            filters.servicetype = query.get('servicetype');
        }

        // Filter by servicesubtype
        if (query.get('servicesubtype')) {
            filters.servicesubtype = query.get('servicesubtype');
        }

        // Filter by practisecourts
        if (query.get('practisecourts')) {
            filters.practisecourts = { $in: query.get('practisecourts').split(',') };
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