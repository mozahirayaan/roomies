
import {ExampleModel} from "@/app/lib/database.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    


  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
