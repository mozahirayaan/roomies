"use client"

import { useState } from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaUniversity, FaDollarSign, FaSmoking, FaPaw } from "react-icons/fa";
import axios from "axios";
import Navbar from "@/app/component/Navbar";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    nameManual: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    age: "25",
    gender: "Male",
    college: "ABC University",
    program: "Computer Science",
    year: "3rd",
    budget: "$500",
    preferredFlatType: "Apartment",
    preferredRoomType: "Single",
    smokingPreferences: "Non-smoker",
    pets: "No pets",
    cleanliness: "Clean",
    sleepingHabit: "Night owl",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const dropdownOptions = {
    gender: ["Male", "Female"],
    preferredFlatType: ["1RK", "1BHK", "2BHK","3BHK"],
    preferredRoomType: ["Single room", "Double-Sharing","Triple-Sharing"],
    smokingPreferences: ["Non-smoker", "Smoker"],
    budget: ["Under 4000","4000-6000","6000-9000","Above 9000"],
    pets: ["I like them","I don't like them"],
    cleanliness: ["Neat freak", "Average", "Messy"],
    sleepingHabit: ["Early bird", "Night owl", "Flexible"],
  };

  const profileFields = [
    { label: "Name", name: "nameManual", value: profile.nameManual, icon: FaUserCircle },
    { label: "Email", name: "email", value: profile.email, icon: FaEnvelope, disabled: true },
    { label: "Phone", name: "phone", value: profile.phone, icon: FaPhone },
    { label: "Age", name: "age", value: profile.age, icon: null },
    { label: "Gender", name: "gender", value: profile.gender, icon: null, type: "dropdown" },
    { label: "College", name: "college", value: profile.college, icon: FaUniversity },
    { label: "Program", name: "program", value: profile.program, icon: null },
    { label: "Year", name: "year", value: profile.year, icon: null },
    { label: "Budget", name: "budget", value: profile.budget, icon: FaDollarSign, type: "dropdown"  },
    { label: "Preferred Flat Type", name: "preferredFlatType", value: profile.preferredFlatType, icon: null, type: "dropdown" },
    { label: "Preferred Room Type", name: "preferredRoomType", value: profile.preferredRoomType, icon: null, type: "dropdown" },
    { label: "Smoking Preferences", name: "smokingPreferences", value: profile.smokingPreferences, icon: FaSmoking, type: "dropdown" },
    { label: "Pets", name: "pets", value: profile.pets, icon: FaPaw, type: "dropdown" },
    { label: "Cleanliness", name: "cleanliness", value: profile.cleanliness, icon: null , type: "dropdown"},
    { label: "Sleeping Habit", name: "sleepingHabit", value: profile.sleepingHabit, icon: null, type: "dropdown" },
  ];


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("/api/submitRoomie", profile);
      setIsEditing(false);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-400 py-10 px-5">
      <Navbar/>
      <div className="max-w-4xl mt-6 mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Profile Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profileFields.map(({ label, name, value, icon: Icon, type, disabled }) => (
            <div
              key={name}
              className="flex items-center bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg shadow-sm"
            >
              {Icon && <Icon className="text-purple-500 text-2xl mr-4" />}
              <div className="w-full">
                <label className="text-sm font-medium text-gray-600">{label}</label>
                {isEditing ? (
                  type === "dropdown" ? (
                    <select
                      name={name}
                      value={value}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    >
                      {dropdownOptions[name]?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={name}
                      value={value || ""}
                      onChange={handleInputChange}
                      disabled={disabled}
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    />
                  )
                ) : (
                  <p className="text-lg font-semibold text-gray-800">{value || "Not provided"}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          {isEditing ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Save & Submit
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
