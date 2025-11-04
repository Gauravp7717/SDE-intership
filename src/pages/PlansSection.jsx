import React, { useEffect, useRef, useState } from "react";

const PlansSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [plans, setPlans] = useState([
    { id: 1, name: "Gold", price: 2800, maxUsers: 20, duration: "Monthly", createdDate: "01-10-2025", status: "Active" },
    { id: 2, name: "Diamond", price: 1500, maxUsers: 15, duration: "Monthly", createdDate: "11-09-2025", status: "Active" },
    { id: 3, name: "Silver", price: 1000, maxUsers: 10, duration: "Monthly", createdDate: "11-09-2025", status: "Active" },
    { id: 4, name: "Basic", price: 500, maxUsers: 3, duration: "Monthly", createdDate: "11-09-2025", status: "Active" },
    // Adding an inactive plan for visual consistency
    { id: 5, name: "Bronze", price: 200, maxUsers: 2, duration: "Yearly", createdDate: "05-08-2025", status: "Inactive" },
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

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  // Helper component for Icons (Same as previous component)
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
    <div className="p-6  min-h-screen">
      {/* Plans List Section (Updated for UI Look) */}
      <div className={`bg-white p-6 rounded-lg shadow-md ${showModal ? "blur-sm pointer-events-none" : ""}`}>
        
        {/* Header and Add Button (Updated styling for consistency) */}
        <div className="flex justify-between items-center mb-6 pt-2">
          <h2 className="text-2xl font-bold text-gray-800">
            Plans List
          </h2>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-150 flex items-center shadow-md"
          >
            {/* Plus Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create Plan
          </button>
        </div>

        <div className="overflow-x-auto">
          {/* Table Structure (Updated for UI Look) */}
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {/* Headers: lowercase, text-xs, font-medium, padding px-6 py-3 */}
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-1/12">Sr.</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Name</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Price</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-tight text-xs w-2/12">Max users</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-wider text-xs w-2/12">Duration</th>
                <th className="px-6 py-3 text-left font-bold text-gray-700 tracking-tight text-xs w-2/12">Created date</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700 tracking-wider text-xs w-1/12">Status</th>
                <th className="px-6 py-3 text-center font-bold text-gray-700 tracking-wider text-xs w-2/12">Action</th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {plans.map((plan, index) => (
                <tr key={plan.id} className="hover:bg-gray-50 transition duration-150">
                  {/* Data Cells: padding px-6 py-3 */}
                  <td className="px-6 py-3 whitespace-nowrap text-gray-500">{index + 1}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-gray-800">{plan.name}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-gray-800">{plan.price.toFixed(2)}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-gray-800">{plan.maxUsers}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-gray-800">{plan.duration}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-gray-800">{plan.createdDate}</td>
                  <td className="px-6 py-3 whitespace-nowrap text-center">
                    {/* Status Badge Styling */}
                    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${
                        plan.status === "Active" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-red-100 text-red-700"
                      }`}>
                      {plan.status}
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

          {/* Export Buttons: Kept as is */}
          <div className="flex justify-end gap-2 mt-4">
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">Copy</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">Excel</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">PDF</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">Print</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">CSV</button>
            <button className="bg-gray-200 px-3 py-1 rounded text-sm">Columns</button>
          </div>
        </div>
      </div>

      {/* ✅ Conditional Rendering Popup (Kept Original) */}
      {showModal && (
        <>
          {/* Background overlay (Kept original backdrop-blur-sm) */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"></div>

          {/* Popup Modal (Kept original styling) */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
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