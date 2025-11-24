import React, { useState, useRef, useEffect } from "react";
import DataTable from "../components/DataTable";

const UsersSection = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const [imageError, setImageError] = useState("");

  const modalRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };
    if (showModal) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  // Field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Image Upload with validation
  const handleImageUpload = (file) => {
    if (!file) return;

    setImageError("");

    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const maxSizeMB = 2;

    if (!validTypes.includes(file.type)) {
      setImageError("Only JPG, PNG or WEBP allowed.");
      return;
    }

    if (file.size / 1024 / 1024 > maxSizeMB) {
      setImageError("Image must be less than 2MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("User created successfully!");
    handleClose();
  };

  // Reset form + close modal
  const handleClose = () => {
    setFormData({
      username: "",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
      profileImage: "",
    });
    setImageError("");
    setShowModal(false);
  };

  // Dummy user list
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

  // DataTable Columns
  const columns = [
    { header: "Sr.", key: "id", render: (_, __, i) => i + 1 },
    { header: "Store", key: "store" },
    { header: "Username", key: "username" },
    { header: "Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Tenant", key: "tenant" },
    { header: "Role", key: "role" },
    { header: "Created on", key: "createdOn" },
    {
      header: "Status",
      key: "status",
      render: (val) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
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
      render: () => (
        <div className="flex justify-center gap-2">
          <button className="text-blue-500 hover:scale-110 transition">
            ✏️
          </button>
          <button className="text-red-500 hover:scale-110 transition">
            🗑️
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 min-h-screen relative">
      {/* Blur background when modal open */}
      <div className={`${showModal ? "blur-sm pointer-events-none" : ""}`}>
        <h2 className="text-2xl font-bold mb-4">User List</h2>

        <DataTable
          columns={columns}
          data={users}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          addButtonText="Create User"
          onAdd={() => setShowModal(true)}
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <form
            ref={modalRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 w-full max-w-2xl rounded-xl shadow-xl animate-fadeIn"
          >
            {/* Header */}
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create User
              <span className="text-gray-500 text-sm ml-2">
                Enter User Details
              </span>
            </h2>

            {/* Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "username", label: "Username" },
                { name: "firstName", label: "First Name" },
                { name: "lastName", label: "Last Name" },
                { name: "mobile", label: "Mobile", type: "tel" },
                { name: "email", label: "Email", type: "email" },
                { name: "password", label: "Password", type: "password" },
                {
                  name: "confirmPassword",
                  label: "Confirm Password",
                  type: "password",
                },
              ].map(({ name, label, type }) => (
                <div key={name} className="flex flex-col gap-1">
                  <label className="font-medium">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={type || "text"}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              ))}
            </div>

            {/* Profile Picture Uploader */}
            <div className="mt-4 flex flex-col items-edge gap-2">
              <label className="font-medium mb-2">Profile Image</label>

              <div className="relative w-28 h-28">
                {/* Circle Preview */}
                <div
                  className="w-28 h-28 rounded-full overflow-hidden border shadow bg-gray-200 cursor-pointer flex items-center justify-center"
                  onClick={() => fileInputRef.current.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleImageUpload(e.dataTransfer.files[0]);
                  }}
                >
                  {formData.profileImage ? (
                    <img
                      src={formData.profileImage}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm">No Image</span>
                  )}
                </div>

                {/* Camera Icon */}
                <div
                  className="absolute bottom-1 right-1 bg-black/60 p-2 rounded-full cursor-pointer hover:bg-black/80"
                  onClick={() => fileInputRef.current.click()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h2l2-3h10l2 3h2v12H3V7zm9 3a4 4 0 100 8 4 4 0 000-8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Hidden input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => handleImageUpload(e.target.files[0])}
              />

              {/* Remove */}
              {formData.profileImage && (
                <button
                  type="button"
                  className="text-red-600 underline text-sm mt-2"
                  onClick={() => setFormData({ ...formData, profileImage: "" })}
                >
                  Remove Photo
                </button>
              )}

              {imageError && (
                <p className="text-red-500 text-sm mt-2">{imageError}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>

              <button
                type="button"
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
                onClick={handleClose}
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
