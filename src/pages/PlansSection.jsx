import React, { useEffect, useRef, useState } from "react";
import DataTable from "../components/DataTable"; // ✅ Import your reusable DataTable

const PlansSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Gold",
      price: 2800,
      maxUsers: 20,
      duration: "Monthly",
      createdDate: "01-10-2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Diamond",
      price: 1500,
      maxUsers: 15,
      duration: "Monthly",
      createdDate: "11-09-2025",
      status: "Active",
    },
    {
      id: 3,
      name: "Silver",
      price: 1000,
      maxUsers: 10,
      duration: "Monthly",
      createdDate: "11-09-2025",
      status: "Active",
    },
    {
      id: 4,
      name: "Basic",
      price: 500,
      maxUsers: 3,
      duration: "Monthly",
      createdDate: "11-09-2025",
      status: "Active",
    },
    {
      id: 5,
      name: "Bronze",
      price: 200,
      maxUsers: 2,
      duration: "Yearly",
      createdDate: "05-08-2025",
      status: "Inactive",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    maxUsers: "",
    duration: "Monthly",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.maxUsers) {
      alert("Please fill all required fields");
      return;
    }

    const newPlan = {
      id: plans.length + 1,
      name: formData.name,
      price: parseFloat(formData.price),
      maxUsers: parseInt(formData.maxUsers),
      duration: formData.duration,
      createdDate: new Date().toLocaleDateString("en-GB"),
      status: "Active",
    };

    setPlans([...plans, newPlan]);
    setFormData({ name: "", price: "", maxUsers: "", duration: "Monthly" });
    setShowModal(false);
  };

  const handleClose = () => {
    setFormData({ name: "", price: "", maxUsers: "", duration: "Monthly" });
    setShowModal(false);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  // ✅ Table Columns for DataTable
  const columns = [
    { header: "Sr.", key: "id", render: (_, row, i) => i + 1, width: "w-1/12" },
    { header: "Name", key: "name", width: "w-2/12" },
    {
      header: "Price",
      key: "price",
      width: "w-2/12",
      render: (val) => `₹${val.toFixed(2)}`,
    },
    { header: "Max Users", key: "maxUsers", width: "w-2/12" },
    { header: "Duration", key: "duration", width: "w-2/12" },
    { header: "Created Date", key: "createdDate", width: "w-2/12" },
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
  ];

  // ✅ Handle Edit/Delete
  const handleEdit = (plan) => {
    alert(`Editing plan: ${plan.name}`);
  };

  const handleDelete = (plan) => {
    if (window.confirm(`Are you sure you want to delete "${plan.name}"?`)) {
      setPlans(plans.filter((p) => p.id !== plan.id));
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <div className={`${showModal ? "blur-sm pointer-events-none" : ""}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Plans List</h2>
        {/* ✅ Reusable DataTable Used Here */}
        <DataTable
          columns={columns}
          data={plans}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
          addButtonText="Create Plan"
          onAdd={() => setShowModal(true)} // 🔹 opens modal
        />
      </div>

      {/* ✅ Popup Modal (same layout as before) */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"></div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              ref={modalRef}
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
            >
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
                Create Plan{" "}
                <span className="text-gray-500 text-sm">
                  Enter Plan Information
                </span>
              </h2>

              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block font-medium">
                    Plan Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium">
                    Price<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium">
                    Max Users<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="maxUsers"
                    value={formData.maxUsers}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  />
                </div>

                <div>
                  <label className="block font-medium">
                    Duration<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="border rounded w-full p-2"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
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
                    className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlansSection;
