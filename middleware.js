import { NextResponse } from "next/server"

export async function middleware(request){
    const token = request.headers.get("Authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message:"トークンがありません"})
    }
    return NextResponse.next() 
}
export const config
 = {matcher:["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}