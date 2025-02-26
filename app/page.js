"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import ListedRoomies from "@/app/component/ListedRoomies"
import Form from "./component/Form"
import { useState } from "react"
import Home from "./component/Home"

export default function Component() {
  const [curr,setCurr]=useState("find");


  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      <Home/>
    </>
  }
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
    <div className="bg-white text-black p-6 rounded-md">
    <button onClick={() => signIn("google")}>Sign in using Google</button> 
    </div>
    </div>
    )
  
}