import prisma from "@/utils/prisma";
import {hash} from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req:Request){
    try{
        const {username,email,password} = await req.json();
        if(!username || !email || !password){
            return NextResponse.json({message:"all field are required"},{status:400});
        }
        
        const existionUser = await prisma.users.findUnique({
            where:{
                email
            },
        });
        if(existionUser){
            return NextResponse.json({message:"user already exist with this email"},{status:400});
        }
        const hashedPassword = await hash(password,10);
        const newUser = await prisma.users.create({
            data:{
                username,
                email,
                password:hashedPassword
            },
        });
        return NextResponse.json({message:"your account is activated",newUser},{status:201});
    } catch(error:any){
        return NextResponse.json({message:error.message},{status:500})
    }
}