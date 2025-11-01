import React, { useState } from "react";

const UsersSection = () => {
  const [activeTab, setActiveTab] = useState("create");
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

  const users = [
    {
      id: 1,
      store: "Impera Store",
      username: "heroamble",
      name: "hero amble",
      email: "heroamble@gmail.com",
      tenant: "imperative",
      role: "Senior Cashier",
      createdOn: "25-10-2025",
      status: "Active",
    },
    {
      id: 2,
      store: "Impera Store",
      username: "Lokeshpatil123",
      name: "Lokesh Patil",
      email: "lokeshpatil23@gmail.com",
      tenant: "imperative",
      role: "Senior Cashier",
      createdOn: "17-10-2025",
      status: "Active",
    },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveTab("list");
  };

  return (
    <div className="p-4 bg-white   w-full max-w-6xl mx-auto mt-2  ">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          {activeTab === "create" ? "Create User-Tenant" : "Users List"}{" "}
          <span className="text-sm font-normal text-gray-500">
            {activeTab === "create"
              ? "Enter User Information"
              : "Add/Update Users"}
          </span>
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 rounded text-sm font-medium ${
              activeTab === "create"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            + Create User
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded text-sm font-medium ${
              activeTab === "list"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            User List
          </button>
        </div>
      </div>

      {/* Create User Form */}
      {activeTab === "create" && (
        <form onSubmit={handleSubmit}>
          <hr className="border-t-2 border-blue-500 mb-4" />

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            {/* Left Side */}
            <div className="flex-1 space-y-3">
              {[
                { label: "Username", name: "username" },
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Mobile", name: "mobile" },
                { label: "Email", name: "email" },
                { label: "Password", name: "password", type: "password" },
                {
                  label: "Confirm Password",
                  name: "confirmPassword",
                  type: "password",
                },
              ].map((field, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center"
                >
                  <label className="w-40 text-gray-700 font-semibold">
                    {field.label}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                    required
                  />
                </div>
              ))}
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex flex-col items-center w-64 border-l border-gray-200 pl-4">
              <label className="text-gray-800 font-semibold mb-2 ">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                name="profilePic"
                onChange={handleChange}
                className="mb-2 border shadow-lg rounded w-full cursor-pointer"
              />
              <p className="text-xs text-red-500 text-center mb-2">
                Max Width/Height: 500px × 500px & Size: 500Kb
              </p>
              <div className="w-32 h-32 bg-blue-100 flex items-center justify-center border border-gray-300 rounded">
                {formData.profilePic ? (
                  <img
                    src={URL.createObjectURL(formData.profilePic)}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded font-semibold"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded font-semibold"
            >
              Close
            </button>
          </div>
        </form>
      )}

      {/* User List */}
      {activeTab === "list" && (
        <div className="mt-4">
          <hr className="border-t-2 border-blue-500 mb-4" />
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="border p-2">#</th>
                <th className="border p-2">Store Name</th>
                <th className="border p-2">User Name</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Tenant</th>
                <th className="border p-2">Role</th>
                <th className="border p-2">Created On</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t hover:bg-gray-50">
                  <td className="border p-2">{u.id}</td>
                  <td className="border p-2">{u.store}</td>
                  <td className="border p-2">{u.username}</td>
                  <td className="border p-2">{u.name}</td>
                  <td className="border p-2">{u.email}</td>
                  <td className="border p-2">{u.tenant}</td>
                  <td className="border p-2">{u.role}</td>
                  <td className="border p-2">{u.createdOn}</td>
                  <td className="border p-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {u.status}
                    </span>
                  </td>
                  <td className="border p-2">
                    <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded">
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersSection;
