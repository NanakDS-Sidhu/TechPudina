import { connectDB } from "@/config/dbConfig";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {email, password, fullName, role, servicetype, subtype} = reqBody

        //check if user already exists
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        let newUser;
        if(role == 'client') {
            newUser = new User({
                fullName,
                email,
                password: hashedPassword,
                role,                
            })            
        } else if (role == 'service_provider' && servicetype == 'advocates'){
            newUser = new User({
                fullName,
                email,
                password: hashedPassword,
                role,
                servicetype,
                subtype
            })
        } else {
            newUser = new User({
                fullName,
                email,
                password: hashedPassword,
                role,
                servicetype,               
            })            
        }       

        const savedUser = await newUser.save()             

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })     

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error.message}, {status: 500})
        
    }
}