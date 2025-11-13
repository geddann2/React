import { NextResponse } from "next/server"
import { jwtVerify} from "jose"
export async function middleware(request){
     const token ="eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdtYWlsIiwiZXhwIjoxNzYzMDgzMjQ3fQ.19A4Wj42-n_1SoYTHHNcyrExKohyJvgjL_7fz5xSYLs"
      //request.headers.get("Authorization")?.split(" ")[1]
    if(!token){
        return NextResponse.json({message:"トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt = await jwtVerify(token,secretKey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message:"トークンが正しくないのでログインしてください"})
    }
}
export const config = {    matcher:["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],}

