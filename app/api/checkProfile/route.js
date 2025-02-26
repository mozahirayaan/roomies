import clientPromise from "@/app/lib/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";

export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("users");

    const data=await collection.findOne({ email: session.user.email });
    if(data.personalData){
        return NextResponse.json({isUpdated: true});
    }

    return NextResponse.json({isUpdated: false});
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
};
