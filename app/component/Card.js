"use client";

import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-4xl mx-auto my-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        {/* Image Section */}
        <div className="w-1/3 bg-gray-100">
          <img
            src={props.image || "https://via.placeholder.com/150"}
            alt={props.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="w-2/3 p-6">
          {/* Title and Rent */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl text-gray-800">{props.name}</h1>
            <p className="text-lg font-semibold text-blue-600">₹{props.year}</p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Type:</span> {props.type}
            </div>
            <div>
              <span className="font-semibold">Sharing:</span> {props.sharing}
            </div>
            <div>
              <span className="font-semibold">Wifi/Water:</span>{" "}
              {props.wifiWater ? "Available" : "Not Available"}
            </div>
            <div>
              <span className="font-semibold">Contact:</span> {props.contact}
            </div>
            <div className="col-span-2">
              <span className="font-semibold">Address:</span> {props.address}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
