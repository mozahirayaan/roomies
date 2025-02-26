import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/database";

const handler = async () => {
  try {
    const client = await clientPromise; 
    const db = await client.db(); // Access the default database
    const lists =await db.collection("lists"); // Access the "users" collection
    const data = await lists.find({}).toArray(); // Retrieve documents as an array
    return NextResponse.json(data, { status: 200 }); // Return JSON response with a 200 status
  } catch (err) {
    console.error("Error occurred:", err); // Log the error for debugging
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); // Return a 500 status code
  }
};

export { handler as GET };
