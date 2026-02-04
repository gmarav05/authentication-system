import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get('token')?.value || '';
        const decodedToken: unknown = jwt.verify(token, process.env.TOKEN_SECRET!);

        return (decodedToken as { id: string }).id;
        
    } catch (error: unknown) {
        throw new Error((error as Error).message)   
        
    }
}