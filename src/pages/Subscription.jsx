<<<<<<< HEAD
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
=======
import React, { useState, useRef, useEffect } from "react";

const Subscription = () => {
  const [activePage, setActivePage] = useState("list");
  const [subscriptions, setSubscriptions] = useState([
    // Changed date format in state to match display format (d-m-y for consistency)
    { id: 1, tenant: "Imperative", plan: "Basic", startAt: "13-10-2025", endAt: "13-11-2025", createdAt: "09-10-2025", status: "Active" },
    { id: 2, tenant: "Innovent", plan: "Silver", startAt: "08-10-2025", endAt: "08-11-2025", createdAt: "08-10-2025", status: "Active" },
    // Adding an inactive subscription for visual consistency
    { id: 3, tenant: "NextGen", plan: "Gold", startAt: "01-10-2025", endAt: "01-11-2025", createdAt: "01-10-2025", status: "Inactive" },
  ]);

  const [form, setForm] = useState({ tenant: "", plan: "", startAt: "", endAt: "" });
  const modalRef = useRef(null);

  const tenants = ["Imperative", "Innovent", "NextGen"];
  const plans = ["Basic", "Silver", "Gold", "Platinum"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) handleClose();
    };
    if (activePage === "create") document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activePage]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple date formatting for display consistency (assuming DD-MM-YYYY required)
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    const newSub = {
      id: subscriptions.length + 1,
      tenant: form.tenant,
      plan: form.plan,
      startAt: formatDate(form.startAt),
      endAt: formatDate(form.endAt),
      createdAt: new Date().toLocaleDateString("en-GB"), // Ensures d-m-y format
      status: "Active",
    };
    setSubscriptions([...subscriptions, newSub]);
    handleClose();
  };

  const handleClose = () => {
    setForm({ tenant: "", plan: "", startAt: "", endAt: "" });
    setActivePage("list");
  };

  // Action Icons Component
  const ActionIcons = () => (
    <div className="flex justify-center space-x-2">
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
      {/* Main Content (List View) - Now conditional on activePage */}
      <div className={`bg-white p-6 rounded-lg shadow-md ${activePage === "create" ? "blur-sm pointer-events-none" : ""}`}>
        
        {/* Header and Create Button (Updated styling for consistency) */}
        <div className="flex justify-between items-center mb-6 pt-2">
            <h2 className="text-2xl font-bold text-gray-800">
                Subscriptions List
            </h2>
            {activePage === "list" && (
                <button
                    onClick={() => setActivePage("create")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-150 flex items-center shadow-md"
                >
                    {/* Plus Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Subscription
                </button>
            )}
        </div>

        {/* Table - Now inside the shadow-md container and only shows on "list" page */}
        {activePage === "list" && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  {/* Headers: lowercase, text-xs, font-medium, padding px-6 py-3 */}
                  <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-1/12">Sr.</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Tenant</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Plan</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Start at</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">End at</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-tight text-xs w-2/12">Created date</th>
                  <th className="px-6 py-3 text-center font-bold text-gray-700 tracking-wider text-xs w-1/12">Status</th>
                  <th className="px-6 py-3 text-center font-bold text-gray-700 tracking-wider text-xs w-2/12">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50 transition duration-150">
                    {/* Data Cells: padding px-6 py-3 */}
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{sub.id}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{sub.tenant}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{sub.plan}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{sub.startAt}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{sub.endAt}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{sub.createdAt}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-center">
                      {/* Status Badge Styling */}
                      <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
                        sub.status === "Active" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-red-100 text-red-700"
                      }`}>
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-center">
                      {/* Action Icons */}
                      <ActionIcons />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Popup (Kept Original Styling/Logic) */}
      {activePage === "create" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gray-100/50">
          <form
            ref={modalRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">Create Subscription</h2>
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
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
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
>>>>>>> adding/dashboard
