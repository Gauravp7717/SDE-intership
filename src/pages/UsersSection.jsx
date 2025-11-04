import React, { useState, useRef, useEffect } from "react";

const UsersSection = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: null,
  });

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveTab("list");
      }
    };
    if (activeTab === "create") document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeTab]);

  const users = [
    { id: 1, store: "Impera Store", username: "heroamble", name: "Hero Amble", email: "heroamble@gmail.com", tenant: "imperative", role: "Senior Cashier", createdOn: "25-10-2025", status: "Active" },
    { id: 2, store: "Impera Store", username: "Lokeshpatil123", name: "Lokesh Patil", email: "lokeshpatil23@gmail.com", tenant: "imperative", role: "Senior Cashier", createdOn: "17-10-2025", status: "Active" },
    { id: 3, store: "NextGen Tech", username: "sarahc", name: "Sarah Connor", email: "sarah@nextgen.com", tenant: "nextgen", role: "Manager", createdOn: "10-09-2025", status: "Inactive" },
    { id: 4, store: "Innove Hub", username: "johnwick", name: "John Wick", email: "john@innovehub.com", tenant: "innove", role: "User", createdOn: "01-11-2025", status: "Active" },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for creating a new user (omitted for template clarity)
    
    // Clear form and close modal
    setFormData({
        username: "",
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: null,
    });
    setActiveTab("list");
  };

  // Helper component for Icons (using smaller space-x-1 for better compaction)
  const ActionIcons = () => (
    <div className="flex justify-center space-x-1">
      {/* Edit Icon Placeholder */}
      <button className="text-gray-500 hover:text-blue-500 p-1" title="Edit">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
      {/* Delete Icon Placeholder */}
      <button className="text-gray-500 hover:text-red-500 p-1" title="Delete">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="p-6 min-h-screen relative">
      {/* List Section with Blur Effect */}
      <div className={`bg-white p-6 rounded-lg shadow-md ${activeTab === "create" ? "blur-sm pointer-events-none" : ""}`}>
        
        {/* Header and Create Button */}
        <div className="flex justify-between items-center mb-6 pt-2">
            <h2 className="text-2xl font-bold text-gray-800">
                Users List
            </h2>
            <button
                onClick={() => setActiveTab("create")}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-150 flex items-center shadow-md"
            >
                {/* Plus Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create User
            </button>
        </div>

        {/* --- Table: Optimized for Compaction --- */}
        <div className="overflow-x-hidden"> {/* Ensures no horizontal scroll */}
            <table className="w-full text-sm table-auto">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        {/* Headers: Reduced padding (px-4 py-2) and uses table-auto for widths */}
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs w-[3%]">Sr.</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Store</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Username</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Name</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Email</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Tenant</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Role</th>
                        <th className="px-4 py-2 text-left font-bold text-gray-800 tracking-wider text-xs">Created on</th>
                        <th className="px-4 py-2 text-center font-bold text-gray-800 tracking-wider text-xs w-[8%]">Status</th>
                        <th className="px-4 py-2 text-center font-bold text-gray-800 tracking-wider text-xs w-[7%]">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((u) => (
                        <tr key={u.id} className="hover:bg-gray-50 transition duration-150">
                            {/* Data Cells: Reduced padding (px-4 py-2) */}
                            <td className="px-4 py-2 whitespace-nowrap  text-gray-700">{u.id}</td>
                            <td className="px-4 py-2 whitespace-nowrap  text-gray-700">{u.store}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{u.username}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{u.name}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{u.email}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{u.tenant}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{u.role}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-gray-700">{u.createdOn}</td>
                            <td className="px-4 py-2 whitespace-nowrap text-center">
                                {/* Status Badge Styling */}
                                <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
                                    u.status === "Active" 
                                        ? "bg-green-100 text-green-700" 
                                        : "bg-red-100 text-red-700"
                                }`}>
                                    {u.status}
                                </span>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap text-center">
                                {/* Action Icons (using less space) */}
                                <ActionIcons />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      {/* --- Popup Modal (Unchanged) --- */}
      {activeTab === "create" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gray-100/50">
          <form
            ref={modalRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create User <span className="text-gray-500 text-sm">Enter User Details</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {["username", "firstName", "lastName", "mobile", "email", "password", "confirmPassword"].map((name) => (
                <div key={name} className="flex flex-col">
                  <label className="text-gray-700 font-semibold capitalize">
                    {name.replace(/([A-Z])/g, ' $1').trim()}<span className="text-red-500">*</span>
                  </label>
                  <input
                    type={name.includes("password") ? "password" : (name === "email" ? "email" : (name === "mobile" ? "tel" : "text"))}
                    name={name}
                    value={formData[name] || ''}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                    // Reset form data on close for a clean slate
                    setFormData({
                        username: "",
                        firstName: "",
                        lastName: "",
                        mobile: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        profilePic: null,
                    });
                    setActiveTab("list");
                }}
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UsersSection;