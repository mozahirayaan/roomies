"use client"
import React from "react";
import Navbar from "@/app/component/Navbar";
import { useState, useEffect } from "react";

const Home = () => {

  
  

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-200 p-6">
        <Navbar />
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8 drop-shadow-lg mt-4">
        Find Your Perfect Roommate
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center mx-auto max-w-5xl">
        {roommates.map((roommate, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition duration-300"
          >
            <img
              src={roommate.photo}
              alt={roommate.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-indigo-900">{roommate.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                Age: <span className="font-semibold">{roommate.age}</span>
              </p>
              <p className="text-sm text-gray-600">
                College: <span className="font-semibold">{roommate.college}</span>
              </p>
              <p className="text-sm text-gray-600">
                Year: <span className="font-semibold">{roommate.year}</span>
              </p>
              <p className="text-sm text-gray-600">
                Program: <span className="font-semibold">{roommate.program}</span>
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">Match Score:</p>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-600 h-4 rounded-full"
                    style={{ width: `${roommate.matchScore}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2 text-right">
                  {roommate.matchScore}%
                </p>
              </div>
              <button
                className="mt-6 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-4 rounded-md shadow-lg hover:opacity-90 transition duration-300"
                onClick={() => alert(`Viewing full profile of ${roommate.name}`)}
              >
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
