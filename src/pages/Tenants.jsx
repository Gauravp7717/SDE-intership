import React, { useState, useRef, useEffect } from "react";

const Tenants = () => {
  const [view, setView] = useState("list");
  const [tenants, setTenants] = useState([
    { id: 1, name: "Imperative", orgId: "IMP001", plan: "Silver", createdDate: "01-10-2025", status: "Active" },
    { id: 2, name: "Innovent", orgId: "INV002", plan: "Gold", createdDate: "15-09-2025", status: "Active" }, 
    { id: 3, name: "NextGen", orgId: "NGN003", plan: "Platinum", createdDate: "20-08-2025", status: "Active" },
    { id: 4, name: "AlphaTech", orgId: "ATC004", plan: "Silver", createdDate: "10-07-2025", status: "Inactive" },
    { id: 5, name: "BetaCorp", orgId: "BTC005", plan: "Gold", createdDate: "25-06-2025", status: "Active" },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    orgId: "",
    plan: "",
  });

  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };
    // Reverting modal background logic to original: use `view === "create"` check
    if (view === "create") document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [view]);

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

  // Helper component for Icons
  const ActionIcons = () => (
    <div className="flex justify-center space-x-2">
      {/* Edit Icon Placeholder */}
      <button className="text-gray-500 hover:text-blue-500 p-1" title="Edit">
        {/* Replace with a proper Edit/Pencil icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
      {/* Delete Icon Placeholder */}
      <button className="text-gray-500 hover:text-red-500 p-1" title="Delete">
        {/* Replace with a proper Delete/Trash icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="p-6 min-h-screen relative ">
      {/* List Section (Now with original blur logic) */}
      <div className={`bg-white p-6 rounded-lg shadow-md ${view === "create" ? "blur-sm pointer-events-none" : ""}`}>
        
        {/* Tenant List Header/Title */}
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Tenant list
          </h2>
        </div>
        
        {/* Add Tenant Button Section (Search and Filter removed) */}
        <div className="flex justify-end items-center mb-6 pt-0">
          {/* Add Tenant Button */}
          <button
            onClick={() => setView("create")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-150 flex items-center shadow-md"
          >
            {/* Plus Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Tenant
          </button>
        </div>

        {/* Table Structure (Adjusted Header Styles) */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {/* Changed to lowercase and smaller text */}
                <th className="px-6 py-3 text-left font-bold  text-gray-700 tracking-wider text-xs w-1/12">Sr.</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700  tracking-wider text-xs w-2/12">Name</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700  tracking-tight text-xs w-2/12">Organisation id</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700  tracking-wider text-xs w-2/12">Plan name</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Created date</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700  tracking-wider text-xs w-1/12">Status</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700  tracking-wider text-xs w-2/12">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tenants.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-gray-500">
                    No tenants found
                  </td>
                </tr>
              ) : (
                tenants.map((tenant) => (
                  <tr key={tenant.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{tenant.id}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{tenant.name}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{tenant.orgId}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{tenant.plan}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">{tenant.createdDate}</td>
                    <td className="px-6 py-3 whitespace-nowrap text-center">
                      <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
                        tenant.status === "Active" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-red-100 text-red-700"
                      }`}>
                        {tenant.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-center">
                      <ActionIcons />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* Popup Modal (Reverted to original styling) */}
      {view === "create" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-gray-100/50">
          <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              Create Tenant{" "}
              <span className="text-gray-500 text-sm">Enter Tenant Information</span>
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