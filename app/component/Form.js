"use client";

import React, { useState } from "react";
import axios from "axios"; // Import axios

const Form = () => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    college: "",
    program: "",
    year: "",
    budget: "",
    preferredFlatType:"",
    preferredRoomType:"",
    smokingPreference:"",
    pets:"",
    cleanliness:"",
    sleepingHabits:"",
    
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const [responseMessage, setResponseMessage] = useState(""); // State to handle response or error messages

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("/api/submitRoomie", formData);
      setResponseMessage("Form submitted successfully!");
      console.log(response.data); // Optional: Log the response from the server
      setFormData({ name: "", year: "", age: "", phone: "" }); // Clear the form
    } catch (err) {
      console.error("Error submitting form:", err);
      setResponseMessage("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Step {step} of 5
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">



          
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

            </div>
          )}







          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Academic Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">College</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your college name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Program/Major</label>
                <input
                  type="text"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your program or major"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="mt-1 my-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your year"
                />
              </div>
            </div>
          )}






          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Room Preferences</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-1 my-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="Under 4000">Under 4000</option>
                  <option value="4000-6000">4000-6000</option>
                  <option value="6000-9000">6000-9000</option>
                  <option value="Above 9000">Above 9000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred flat type</label>
                <select
                  name="preferredFlatType"
                  value={formData.preferredFlatType}
                  onChange={handleChange}
                  className="mt-1 my-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="1RK">1RK</option>
                  <option value="1BHK">1BHK</option>
                  <option value="2BHK">2BHK</option>
                  <option value="3BHK">3BHK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred room type</label>
                <select
                  name="preferredRoomType"
                  value={formData.preferredRoomType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="Single room">Single room</option>
                  <option value="Double-Sharing">Double-Sharing</option>
                  <option value="Triple-Sharing">Triple-Sharing</option>
                  
                </select>
              </div>
              
            </div>
          )}



{step === 4 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Lifestyle Preferences</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Smoking Preference</label>
                <select
                  name="smokingPreference"
                  value={formData.smokingPreference}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="Smoker">Smoker</option>
                  <option value="Non-smoker">Non-smoker</option>
                </select>
              </div>



              <div>
                <label className="block text-sm font-medium text-gray-700">Pets</label>
                <select
                  name="pets"
                  value={formData.pets}
                  onChange={handleChange}
                  className="mt-1 my-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="I Like Them">I like them</option>
                  <option value="I dont't like them">I dont't like them</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cleanliness</label>
                <select
                  name="cleanliness"
                  value={formData.cleanliness}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="Neat freak">Neat freak</option>
                  <option value="Average">Average</option>
                  <option value="Messy">Messy</option>
                  
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Sleeping Habits</label>
                <select
                  name="sleepingHabits"
                  value={formData.sleepingHabits}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="Early Bird">Early Bird</option>
                  <option value="Night Owl">Night Owl</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}








          {step === 5 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Review & Submit</h3>
              <pre className="bg-gray-100 p-4 rounded-md">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md shadow hover:bg-gray-400"
              >
                Back
              </button>
            )}
            {step < 5 && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700"
              >
                Next
              </button>
            )}
            {step === 5 && (
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
