"use client";

import React, { useState } from "react";

const ChatPage = () => {
  const [users] = useState([
    { id: 1, name: "Alice", lastMessage: "See you later!" },
    { id: 2, name: "Bob", lastMessage: "How's it going?" },
    { id: 3, name: "Charlie", lastMessage: "Great talking to you!" },
    
  ]);

  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", text: "Hi there!" },
    { id: 2, sender: "me", text: "Hello! How are you?" },
    { id: 3, sender: "other", text: "I'm doing great, thanks!" },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setSidebarOpen(false); // Close sidebar on mobile
    setMessages([
      { id: 1, sender: "other", text: `Hey, it's ${user.name}` },
      { id: 2, sender: "me", text: "Hi! How's it going?" },
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "me", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen max-h-screen flex flex-col sm:flex-row bg-gray-100">
      {/* Sidebar for User List */}
      <div
        className={`absolute sm:static z-10 w-3/4 sm:w-1/4 bg-white shadow-lg border-r overflow-y-auto transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:translate-x-0`}
      >
        <h2 className="text-lg font-bold text-gray-800 p-4 border-b">
          Chats
          <button
            className="sm:hidden float-right text-red-500"
            onClick={() => setSidebarOpen(false)}
          >
            Close
          </button>
        </h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserSelect(user)}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${
                user.id === selectedUser.id ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <h3 className="text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500 truncate">{user.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
          <button
            className="sm:hidden text-indigo-600 font-bold"
            onClick={() => setSidebarOpen(true)}
          >
            Menu
          </button>
          <h1 className="text-xl font-bold text-gray-800">{selectedUser.name}</h1>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`${
                  message.sender === "me"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-300 text-gray-800"
                } rounded-lg px-4 py-2 max-w-sm shadow-md`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form
          onSubmit={handleSendMessage}
          className="bg-white shadow-md p-4 flex items-center"
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
