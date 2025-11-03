import React, { useState } from "react";

const PlansSection = () => {
  const [view, setView] = useState("create");
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
    setView("list");
  };

  return (
    <div className="p-6 bg-white  ">
      {view === "create" ? (
        <>
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
            <div className="flex gap-4 mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              Plans List{" "}
              <span className="text-gray-500 text-sm">Add/Update Plan</span>
            </h2>
            <button
              onClick={() => setView("create")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              + Create Plan
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Max Users</th>
                  <th className="border px-4 py-2">Duration</th>
                  <th className="border px-4 py-2">Created Date</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr key={plan.id} className="text-center">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{plan.name}</td>
                    <td className="border px-4 py-2">
                      {plan.price.toFixed(2)}
                    </td>
                    <td className="border px-4 py-2">{plan.maxUsers}</td>
                    <td className="border px-4 py-2">{plan.duration}</td>
                    <td className="border px-4 py-2">{plan.createdDate}</td>
                    <td className="border px-4 py-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {plan.status}
                      </span>
                    </td>
                    <td className="border px-4 py-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        Action
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end gap-2 mt-4">
              <button className="bg-gray-200 px-3 py-1 rounded">Copy</button>
              <button className="bg-gray-200 px-3 py-1 rounded">Excel</button>
              <button className="bg-gray-200 px-3 py-1 rounded">PDF</button>
              <button className="bg-gray-200 px-3 py-1 rounded">Print</button>
              <button className="bg-gray-200 px-3 py-1 rounded">CSV</button>
              <button className="bg-gray-200 px-3 py-1 rounded">Columns</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlansSection;
