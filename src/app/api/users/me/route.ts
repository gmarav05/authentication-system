import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";

import {connect} from "@/dbConfig/dbConfig";
import { get } from "http";
import User from "@/models/userModel";

connect();

export const GET = async (request: NextRequest) => {

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).
        select("-password");

        return NextResponse.json({
            message: "User found",
            data: user,
        });   
    } catch (error: unknown) {
        return NextResponse.json({message: (error as Error).message}, {status: 500});
    }
}