"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@/app/component/Card";

const ListedRoomies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/roomiesList");
        setData(res.data); 
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      {data.map((roomie) => (
        <Card
          key={roomie.name} // Provide a unique key for each Card component
          name={roomie.name}
          year={roomie.year}
          type={roomie.type}
        />
      ))}
    </>
  );
};

export default ListedRoomies;
