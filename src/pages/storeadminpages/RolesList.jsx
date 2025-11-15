import React, { useState, useRef } from "react";
import DataTable from "../../components/DataTable";

export default function RolesList() {
  const [view, setView] = useState("list");
  const [formData, setFormData] = useState({
    storeName: "",
    userName: "",
    name: "",
    mobile: "",
    email: "",
    role: "",
    createdOn: "",
  });

  const modalRef = useRef();

  // 🔹 Close Modal
  const handleClose = () => setView("list");

  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Save new user
  const handleSave = () => {
    console.log("Form data saved:", formData);
    handleClose();
  };

  // 🧾 Users Data
  const users = [
    {
      id: 1,
      storeName: "Impera Store",
      userName: "asdf",
      name: "asdf as",
      mobile: "",
      email: "asdf@gmail.com",
      status: "Inactive",
      createdOn: "04-11-2025",
    },
    {
      id: 2,
      storeName: "Impera Store",
      userName: "sdasd",
      name: "sdas sadsad",
      mobile: "7654333333",
      email: "fdsf@gmail.com",
      status: "Active",
      createdOn: "28-10-2025",
    },
  ];
  const getStatusClasses = (status) =>
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  // 📋 Table Columns
  const columns = [
    { header: "Role Name", key: "userName" },
    { header: "Desctiption", key: "name" },
    {
      header: "Status",
      key: "status",
      render: (value) => (
        <span
          className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(
            value
          )}`}
        >
          {value}
        </span>
      ),
    },
  ];

  // 🛠️ Table Actions
  const handleAdd = () => setView("create");
  const handleEdit = (user) => console.log("Edit clicked:", user);
  const handleDelete = (user) => console.log("Delete clicked:", user);

  return (
    <div className="p-6 min-h-screen relative">
      {/* ✅ Users List (blur when modal open) */}
      <div
        className={`bg-white ${
          view === "create" ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Role List</h2>

        {/* ✅ Reusable DataTable */}
        <DataTable
          columns={columns}
          data={users}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          addButtonText="Add User"
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* ✅ Popup Modal */}
      {view === "create" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gray-100/50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create User{" "}
              <span className="text-gray-500 text-sm">
                Enter User Information
              </span>
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Store Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter store name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  User Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter user name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter mobile number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter user role"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={handleClose}
                  className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
