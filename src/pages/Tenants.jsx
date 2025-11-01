import React, { useState } from "react";

const Tenants = () => {
  const [view, setView] = useState("create"); // create | list
  const [tenants, setTenants] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    orgId: "",
    plan: "",
  });

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
      createdDate: new Date().toLocaleDateString(),
      status: "Active",
    };
    setTenants([...tenants, newTenant]);
    setFormData({ name: "", orgId: "", plan: "" });
    setView("list");
  };

  const handleClose = () => {
    setFormData({ name: "", orgId: "", plan: "" });
  };

  return (
    <div className="p-6  min-h-screen">
      {view === "create" && (
        <div className="bg-white p-6 ">
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

            <div className="flex gap-4 pt-4">
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
      )}

      {view === "list" && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Tenants List{" "}
              <span className="text-gray-500 text-sm">Add/Update Tenants</span>
            </h2>
            <button
              onClick={() => setView("create")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Create Tenant
            </button>
          </div>

          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Organisation ID</th>
                <th className="border p-2">Plan Name</th>
                <th className="border p-2">Created Date</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {tenants.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No tenants found
                  </td>
                </tr>
              ) : (
                tenants.map((tenant) => (
                  <tr key={tenant.id} className="text-center">
                    <td className="border p-2">{tenant.id}</td>
                    <td className="border p-2">{tenant.name}</td>
                    <td className="border p-2">{tenant.orgId}</td>
                    <td className="border p-2">{tenant.plan}</td>
                    <td className="border p-2">{tenant.createdDate}</td>
                    <td className="border p-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        {tenant.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tenants;
