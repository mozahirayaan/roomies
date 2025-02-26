import clientPromise from "@/app/lib/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";

export const POST = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }


    const formData = await req.json();
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("users");

    await collection.updateOne(
      { email: session.user.email },
      { 
        $set: {
          personalData: formData,
        }
      }
    );

    return NextResponse.json({ success: true, message: "Data updated successfully!" });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
};
