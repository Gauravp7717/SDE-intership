import React, { useState, useRef } from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [view, setView] = useState("list");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    storeName: "",
    userName: "",
    name: "",
    mobile: "",
    email: "",
    role: "",
    createdOn: "",
    status: "",
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
      role: "Senior Cashier",
      createdOn: "04-11-2025",
      status: "Active",
    },
    {
      id: 2,
      storeName: "Impera Store",
      userName: "sdasd",
      name: "sdas sadsad",
      mobile: "7654333333",
      email: "fdsf@gmail.com",
      role: "Super Admin",
      createdOn: "28-10-2025",
      status: "Active",
    },
    {
      id: 3,
      storeName: "Impera Store",
      userName: "heroamble",
      name: "hero amble",
      mobile: "8777777776",
      email: "heroamble@gmail.com",
      role: "Senior Cashier",
      createdOn: "25-10-2025",
      status: "Active",
    },
    {
      id: 4,
      storeName: "Impera Store",
      userName: "Lokeshpatil123",
      name: "Lokesh Patil",
      mobile: "879546224",
      email: "lokeshpatil123@gmail.com",
      role: "Senior Cashier",
      createdOn: "17-10-2025",
      status: "Active",
    },
    {
      id: 5,
      storeName: "Impera Store",
      userName: "lokeshp",
      name: "lokesh patil",
      mobile: "9876433258",
      email: "lokeshpatil@imp.com",
      role: "Store Admin",
      createdOn: "01-10-2025",
      status: "Active",
    },
  ];

  // 📋 Table Columns
  const columns = [
    { header: "Store Name", key: "storeName" },
    { header: "User Name", key: "userName" },
    { header: "Name", key: "name" },
    { header: "Mobile", key: "mobile" },
    { header: "Email", key: "email" },
    { header: "Role", key: "role" },
    { header: "Created On", key: "createdOn" },

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

  // Helper for status badge
  const getStatusClasses = (status) =>
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  // Table columns

  // 🛠️ Table Actions
  const handleAdd = (path) => {
    navigate(path);
  };
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User List</h2>

        {/* ✅ Reusable DataTable */}
        <DataTable
          columns={columns}
          data={users}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          addButtonText="Add User"
          onAdd={() => {
            handleAdd("/store/adduserlist");
          }}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

    </div>
  );
}
