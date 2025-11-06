import React, { useState, useRef, useEffect } from "react";
import DataTable from "../components/DataTable"; // ✅ Import reusable table

const Tenants = () => {
  const [view, setView] = useState("list");
  const [tenants, setTenants] = useState([
    {
      id: 1,
      name: "Imperative",
      orgId: "IMP001",
      plan: "Silver",
      createdDate: "01-10-2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Innovent",
      orgId: "INV002",
      plan: "Gold",
      createdDate: "15-09-2025",
      status: "Active",
    },
    {
      id: 3,
      name: "NextGen",
      orgId: "NGN003",
      plan: "Platinum",
      createdDate: "20-08-2025",
      status: "Active",
    },
    {
      id: 4,
      name: "AlphaTech",
      orgId: "ATC004",
      plan: "Silver",
      createdDate: "10-07-2025",
      status: "Inactive",
    },
    {
      id: 5,
      name: "BetaCorp",
      orgId: "BTC005",
      plan: "Gold",
      createdDate: "25-06-2025",
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    orgId: "",
    plan: "",
  });

  const modalRef = useRef(null);

  // ✅ Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    if (view === "create")
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [view]);

  // ✅ Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.orgId || !formData.plan) {
      alert("Please fill all required fields");
      return;
    }
    const newTenant = {
      id: tenants.length + 1,
      ...formData,
      createdDate: new Date().toLocaleDateString("en-GB"),
      status: "Active",
    };
    setTenants([...tenants, newTenant]);
    handleClose();
  };

  const handleClose = () => {
    setFormData({ name: "", orgId: "", plan: "" });
    setView("list");
  };

  const handleAdd = () => {
    setView("create");
  };

  // ✅ Edit/Delete actions
  const handleEdit = (tenant) => {
    alert(`Edit clicked for ${tenant.name}`);
  };

  const handleDelete = (tenant) => {
    if (window.confirm(`Are you sure you want to delete ${tenant.name}?`)) {
      setTenants(tenants.filter((t) => t.id !== tenant.id));
    }
  };

  // ✅ Columns configuration for DataTable
  const columns = [
    { key: "id", header: "Sr." },
    { key: "name", header: "Name" },
    { key: "orgId", header: "Organisation ID" },
    { key: "plan", header: "Plan Name" },
    { key: "createdDate", header: "Created Date" },
    {
      key: "status",
      header: "Status",
      render: (value) => (
        <span
          className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
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

  return (
    <div className="p-6 min-h-screen relative">
      {/* ✅ Tenant List (blur when modal open) */}
      <div
        className={`bg-white    ${
          view === "create" ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tenant List</h2>

        {/* ✅ Reusable DataTable */}
        <DataTable
          columns={columns}
          data={tenants}
          entriesPerPage={10}
          showSearch={true}
          showPagination={true}
          addButtonText="Add Tenant"
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
};

export default Tenants;
