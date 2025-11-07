import React, { useState } from "react";

export default function AddSupplier() {
  const [formData, setFormData] = useState({
    supplierName: "",
    mobile: "",
    email: "",
    phone: "",
    gstNumber: "",
    taxNumber: "",
    openingBalance: "0.000",
    country: "",
    state: "",
    city: "",
    postcode: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Supplier Data:", formData);
    alert("Supplier saved successfully!");
  };

  const handleClose = () => {
    console.log("Form closed");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Suppliers</h1>
            <p className="text-gray-500 text-sm mt-1">
              Add / Update Suppliers
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="space-y-5">
              <Input
                label="Supplier Name*"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="+1234567890"
              />
              <Input
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <Input
                label="GST Number"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
              />
              <Input
                label="TAX Number"
                name="taxNumber"
                value={formData.taxNumber}
                onChange={handleInputChange}
              />
            </div>

            {/* Right Side */}
            <div className="space-y-5">
              <Input
                label="Opening Balance"
                name="openingBalance"
                value={formData.openingBalance}
                onChange={handleInputChange}
              />
              <Select
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
              <Select
                label="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              />
              <Input
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
              <Input
                label="Postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
              />
              <Textarea
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-6 border-t border-gray-100">
            <button
              onClick={handleSave}
              className="px-8 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              Save
            </button>
            <button
              onClick={handleClose}
              className="px-8 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              Close
            </button>
          </div>
        </div>

        {/* Opening Balance Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-3 border-b border-gray-200 pb-2">
            Opening Balance Payments
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 border border-gray-200">#</th>
                  <th className="px-4 py-3 border border-gray-200">
                    Payment Date
                  </th>
                  <th className="px-4 py-3 border border-gray-200">Payment</th>
                  <th className="px-4 py-3 border border-gray-200">
                    Payment Type
                  </th>
                  <th className="px-4 py-3 border border-gray-200">
                    Payment Note
                  </th>
                  <th className="px-4 py-3 border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-8 border-t border-gray-200"
                  >
                    No Previous Stock Entry Found!!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Subcomponents */

const Input = ({ label, name, value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition duration-150"
    />
  </div>
);

const Select = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition duration-150"
    >
      <option value="">-Select-</option>
      <option value="us">United States</option>
      <option value="in">India</option>
      <option value="uk">United Kingdom</option>
      <option value="ca">Canada</option>
    </select>
  </div>
);

const Textarea = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none resize-none transition duration-150"
    />
  </div>
);
