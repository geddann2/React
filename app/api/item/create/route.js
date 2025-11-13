import {NextResponse } from "next/server"
import connectDB from "../../../utils/database"
import { ItemModels } from "../../../utils/schemaModels"

export async function POST(request){

    const reqBody = await request.json()
    console.log(reqBody)

    try{
        //console.log( request.json())
        await connectDB()
        await ItemModels.create(reqBody)
        return NextResponse.json({message: "アイテム作成"}) 
    }catch{}
        return NextResponse.json({message: "アイテム作成失敗"})
}

//mongodb+srv://geddann2_db_user:<db_password>@cluster0.pq6j5qs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0