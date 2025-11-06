import React, { useState, useRef, useEffect } from "react";
import DataTable from "../components/DataTable"; // adjust import path as needed

const Subscription = () => {
  const [activePage, setActivePage] = useState("list");
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      tenant: "Imperative",
      plan: "Basic",
      startAt: "13-10-2025",
      endAt: "13-11-2025",
      createdAt: "09-10-2025",
      status: "Active",
    },
    {
      id: 2,
      tenant: "Innovent",
      plan: "Silver",
      startAt: "08-10-2025",
      endAt: "08-11-2025",
      createdAt: "08-10-2025",
      status: "Active",
    },
    {
      id: 3,
      tenant: "NextGen",
      plan: "Gold",
      startAt: "01-10-2025",
      endAt: "01-11-2025",
      createdAt: "01-10-2025",
      status: "Inactive",
    },
  ]);

  const [form, setForm] = useState({
    tenant: "",
    plan: "",
    startAt: "",
    endAt: "",
  });
  const modalRef = useRef(null);

  const tenants = ["Imperative", "Innovent", "NextGen"];
  const plans = ["Basic", "Silver", "Gold", "Platinum"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target))
        handleClose();
    };
    if (activePage === "create")
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePage]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formatDate = (dateString) => {
      if (!dateString) return "";
      const [year, month, day] = dateString.split("-");
      return `${day}-${month}-${year}`;
    };

    const newSub = {
      id: subscriptions.length + 1,
      tenant: form.tenant,
      plan: form.plan,
      startAt: formatDate(form.startAt),
      endAt: formatDate(form.endAt),
      createdAt: new Date().toLocaleDateString("en-GB"),
      status: "Active",
    };
    setSubscriptions([...subscriptions, newSub]);
    handleClose();
  };

  const handleClose = () => {
    setForm({ tenant: "", plan: "", startAt: "", endAt: "" });
    setActivePage("list");
  };

  // ✅ Edit & Delete Handlers
  const handleEdit = (row) => {
    console.log("Edit clicked:", row);
  };

  const handleDelete = (row) => {
    setSubscriptions(subscriptions.filter((s) => s.id !== row.id));
  };

  // ✅ DataTable Columns
  const columns = [
    { key: "id", header: "Sr." },
    { key: "tenant", header: "Tenant" },
    { key: "plan", header: "Plan" },
    { key: "startAt", header: "Start at" },
    { key: "endAt", header: "End at" },
    { key: "createdAt", header: "Created date" },
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
      {/* ✅ Table View */}
      {activePage === "list" && (
        <div
          className={` rounded-lg ${
            activePage === "create" ? "blur-sm pointer-events-none" : ""
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Subscriptions List
          </h2>

          <DataTable
            columns={columns}
            data={subscriptions}
            entriesPerPage={10}
            showSearch={true}
            showPagination={true}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Create Subscription"
            onAdd={() => setActivePage("create")}
          />
        </div>
      )}

      {/* ✅ Create Subscription Modal */}
      {activePage === "create" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gray-100/50">
          <form
            ref={modalRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create Subscription
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Tenant <span className="text-red-500">*</span>
                </label>
                <select
                  name="tenant"
                  value={form.tenant}
                  onChange={handleChange}
                  className="border w-full p-2 rounded"
                >
                  <option value="">Select Tenant</option>
                  {tenants.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Plan <span className="text-red-500">*</span>
                </label>
                <select
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                  className="border w-full p-2 rounded"
                >
                  <option value="">Select Plan</option>
                  {plans.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-1">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="startAt"
                    value={form.startAt}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-1">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="endAt"
                    value={form.endAt}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
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
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Subscription;
