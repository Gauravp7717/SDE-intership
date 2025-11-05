import React, { useState, useRef } from "react";
import DataTable from "../components/DataTable";

export default function UnitListSection() {
  const [activePage, setActivePage] = useState("list");
  const [formData, setFormData] = useState({
    name: "",
    orgId: "",
    plan: "",
  });
  const modalRef = useRef();

  const handleClose = () => setActivePage("list");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
    handleClose();
  };

  const units = [
    { id: 1, name: "Kg", description: "Kilogram", status: "Active" },
    { id: 2, name: "L", description: "Litre", status: "Active" },
    { id: 3, name: "M", description: "Meter", status: "Inactive" },
  ];

  const columns = [
    { header: "Unit Name", key: "name" },
    { header: "Description", key: "description" },
    {
      header: "Status",
      key: "status",
      render: (value) => (
        <span
          className={`px-3 py-0.5 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const handleEdit = (unit) => {
    console.log("Edit clicked:", unit);
  };

  const handleDelete = (unit) => {
    console.log("Delete clicked:", unit);
  };

  return (
    <div className="p-6 min-h-screen">
      {/* ✅ DataTable section */}
      <DataTable
        columns={columns}
        data={units}
        entriesPerPage={10}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addButtonText="New Unit"
        onAdd={() => setActivePage("create")}
      />

      {/* ✅ Popup Modal (kept original styling) */}
      {activePage === "create" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create Tenant{" "}
              <span className="text-gray-500 text-sm">
                Enter Tenant Information
              </span>
            </h2>

            <div className="space-y-4">
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
                  placeholder="Enter tenant name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Organisation ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="orgId"
                  value={formData.orgId}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter organisation ID"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Select Plan <span className="text-red-500">*</span>
                </label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="">- Select -</option>
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                </select>
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
