import React, { useState, useRef, useEffect } from "react";
import DataTable from "../components/DataTable"; // ✅ Reusable component

const UsersSection = () => {
  const [showModal, setShowModal] = useState(false); // ✅ for onAdd trigger
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

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    if (showModal) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  const users = [
    {
      id: 1,
      store: "Impera Store",
      username: "heroamble",
      name: "Hero Amble",
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
    {
      id: 3,
      store: "NextGen Tech",
      username: "sarahc",
      name: "Sarah Connor",
      email: "sarah@nextgen.com",
      tenant: "nextgen",
      role: "Manager",
      createdOn: "10-09-2025",
      status: "Inactive",
    },
    {
      id: 4,
      store: "Innove Hub",
      username: "johnwick",
      name: "John Wick",
      email: "john@innovehub.com",
      tenant: "innove",
      role: "User",
      createdOn: "01-11-2025",
      status: "Active",
    },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New user created successfully!");
    handleClose();
  };

  const handleClose = () => {
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
    setShowModal(false);
  };

  // ✅ Columns for reusable DataTable
  const columns = [
    { header: "Sr.", key: "id", render: (_, row, i) => i + 1, width: "w-1/12" },
    { header: "Store", key: "store", width: "w-2/12" },
    { header: "Username", key: "username", width: "w-2/12" },
    { header: "Name", key: "name", width: "w-2/12" },
    { header: "Email", key: "email", width: "w-3/12" },
    { header: "Tenant", key: "tenant", width: "w-2/12" },
    { header: "Role", key: "role", width: "w-2/12" },
    { header: "Created on", key: "createdOn", width: "w-2/12" },
    {
      header: "Status",
      key: "status",
      width: "w-1/12",
      render: (val) => (
        <span
          className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
            val === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {val}
        </span>
      ),
    },
    {
      header: "Action",
      key: "actions",
      width: "w-1/12",
      render: () => (
        <div className="flex justify-center space-x-1">
          <button
            className="text-gray-500 hover:text-blue-500 p-1"
            title="Edit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            className="text-gray-500 hover:text-red-500 p-1"
            title="Delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 min-h-screen relative">
      <div className={`${showModal ? "blur-sm pointer-events-none" : ""}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User List</h2>
        {/* ✅ Using Reusable DataTable */}
        <DataTable
          columns={columns}
          data={users}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          addButtonText="Create User"
          onAdd={() => setShowModal(true)} // ✅ onAdd opens modal
        />
      </div>

      {/* ✅ Modal for Create User */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gray-100/50">
          <form
            ref={modalRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create User{" "}
              <span className="text-gray-500 text-sm">Enter User Details</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                "username",
                "firstName",
                "lastName",
                "mobile",
                "email",
                "password",
                "confirmPassword",
              ].map((name) => (
                <div key={name} className="flex flex-col">
                  <label className="text-gray-700 font-semibold capitalize">
                    {name.replace(/([A-Z])/g, " $1").trim()}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={
                      name.includes("password")
                        ? "password"
                        : name === "email"
                        ? "email"
                        : name === "mobile"
                        ? "tel"
                        : "text"
                    }
                    name={name}
                    value={formData[name] || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleClose}
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
