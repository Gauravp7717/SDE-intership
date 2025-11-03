import React, { useState } from "react";

const Subscription = () => {
  const [activePage, setActivePage] = useState("list");
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      tenant: "Imperative",
      plan: "Basic",
      startAt: "2025-10-13",
      endAt: "2025-11-13",
      createdAt: "2025-10-09",
      status: "Active",
    },
    {
      id: 2,
      tenant: "Imperative",
      plan: "Silver",
      startAt: "2025-10-08",
      endAt: "2025-11-08",
      createdAt: "2025-10-08",
      status: "Active",
    },
  ]);

  const [form, setForm] = useState({
    tenant: "",
    plan: "",
    startAt: "",
    endAt: "",
  });

  const tenants = ["Imperative", "Innovent", "NextGen"];
  const plans = ["Basic", "Silver", "Gold", "Platinum"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSub = {
      id: subscriptions.length + 1,
      tenant: form.tenant,
      plan: form.plan,
      startAt: form.startAt,
      endAt: form.endAt,
      createdAt: new Date().toISOString().slice(0, 10),
      status: "Active",
    };
    setSubscriptions([...subscriptions, newSub]);
    setForm({ tenant: "", plan: "", startAt: "", endAt: "" });
    setActivePage("list");
  };

  return (
    <div className="p-6 bg-white  ">
      {/* Top Nav */}
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          {activePage === "create"
            ? "Create Subscription"
            : "Subscriptions List"}
        </h2>
        {activePage === "list" ? (
          <button
            onClick={() => setActivePage("create")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            + Create Subscription
          </button>
        ) : (
          <button
            onClick={() => setActivePage("list")}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Back to List
          </button>
        )}
      </div>

      {/* Create Subscription Page */}
      {activePage === "create" && (
        <form
          onSubmit={handleSubmit}
          className="border rounded-lg p-6 max-w-2xl mx-auto space-y-6"
        >
          <div className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Tenant <span className="text-red-500">*</span>
              </label>
              <select
                name="tenant"
                value={form.tenant}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">- Select -</option>
                {tenants.map((tenant, index) => (
                  <option key={index} value={tenant}>
                    {tenant}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Plan <span className="text-red-500">*</span>
              </label>
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">- Select -</option>
                {plans.map((plan, index) => (
                  <option key={index} value={plan}>
                    {plan}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Start At
                </label>
                <input
                  type="date"
                  name="startAt"
                  value={form.startAt}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  End At
                </label>
                <input
                  type="date"
                  name="endAt"
                  value={form.endAt}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setActivePage("list")}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </form>
      )}

      {/* Subscription List Page */}
      {activePage === "list" && (
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Tenant</th>
                <th className="border p-2">Plan</th>
                <th className="border p-2">Start At</th>
                <th className="border p-2">End At</th>
                <th className="border p-2">Created Date</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="text-center">
                  <td className="border p-2">{sub.id}</td>
                  <td className="border p-2">{sub.tenant}</td>
                  <td className="border p-2">{sub.plan}</td>
                  <td className="border p-2">{sub.startAt}</td>
                  <td className="border p-2">{sub.endAt}</td>
                  <td className="border p-2">{sub.createdAt}</td>
                  <td className="border p-2">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                      {sub.status}
                    </span>
                  </td>
                  <td className="border p-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Subscription;
