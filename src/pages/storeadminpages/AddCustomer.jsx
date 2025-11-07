import React, { useState } from "react";
import {
  UserCircle,
  MapPin,
  Truck,
  Settings2,
  DollarSign,
} from "lucide-react";

export default function AddCustomer() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    gstNumber: "",
    taxNumber: "",
    creditLimit: "-1.000",
    previousDue: "0.000",
    mobile: "",
    phone: "",
    attachment: null,
    copyAddress: false,
    country: "",
    state: "",
    city: "",
    postcode: "",
    address: "",
    locationLink: "",
    shippingCountry: "",
    shippingState: "",
    shippingCity: "",
    shippingPostcode: "",
    shippingAddress: "",
    shippingLocationLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCopyAddress = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      copyAddress: checked,
      ...(checked && {
        shippingCountry: prev.country,
        shippingState: prev.state,
        shippingCity: prev.city,
        shippingPostcode: prev.postcode,
        shippingAddress: prev.address,
        shippingLocationLink: prev.locationLink,
      }),
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, attachment: file }));
    } else {
      alert("File size must be less than 2MB");
    }
  };

  const handleSave = () => {
    console.log("Form Data:", formData);
    alert("Customer saved successfully!");
  };

  const handleClose = () => {
    console.log("Form closed");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Add Customer</h1>
            <p className="text-gray-500 text-sm mt-1">
              Enter User Information
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowAdvanced(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition duration-200 transform hover:scale-[1.02] ${
                !showAdvanced
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              Add/Edit
            </button>
            <button
              onClick={() => setShowAdvanced(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition duration-200 transform hover:scale-[1.02] ${
                showAdvanced
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              Advanced
            </button>
          </div>
        </div>

        {/* CONDITIONAL SECTION */}
        {!showAdvanced ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-10 border border-gray-100">
            <SectionTitle icon={<UserCircle />} title="Customer Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Input label="Customer Name*" name="customerName" value={formData.customerName} onChange={handleInputChange} required />
              <Input label="Email" name="email" value={formData.email} onChange={handleInputChange} />
              <Input label="Mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+1234567890" />
              <Input label="Phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              <Input label="GST Number" name="gstNumber" value={formData.gstNumber} onChange={handleInputChange} />
              <Input label="TAX Number" name="taxNumber" value={formData.taxNumber} onChange={handleInputChange} />
              <Input label="Credit Limit" name="creditLimit" value={formData.creditLimit} onChange={handleInputChange} />
              <Input label="Previous Due" name="previousDue" value={formData.previousDue} onChange={handleInputChange} />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attachment
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 rounded-lg text-sm p-2 cursor-pointer focus:ring-2 focus:ring-blue-400 file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 transition"
                />
                <p className="text-xs text-gray-500 mt-1">Max size: 2MB</p>
                {formData.attachment && (
                  <button className="text-sm text-blue-600 mt-1 hover:underline">
                    Click to view
                  </button>
                )}
              </div>
            </div>

            {/* Address Details */}
            <SectionTitle icon={<MapPin />} title="Address Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Select label="Country" name="country" value={formData.country} onChange={handleInputChange} />
              <Select label="State" name="state" value={formData.state} onChange={handleInputChange} />
              <Input label="City" name="city" value={formData.city} onChange={handleInputChange} />
              <Input label="Postcode" name="postcode" value={formData.postcode} onChange={handleInputChange} />
              <Textarea label="Address" name="address" value={formData.address} onChange={handleInputChange} />
              <Input label="Location Link" name="locationLink" value={formData.locationLink} onChange={handleInputChange} placeholder="Google Maps link" />
            </div>

            {/* Shipping Address */}
            <SectionTitle icon={<Truck />} title="Shipping Address" />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="copyAddress"
                checked={formData.copyAddress}
                onChange={handleCopyAddress}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-blue-600"
              />
              <label htmlFor="copyAddress" className="ml-2 text-sm text-gray-700">
                Copy Address?
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Select label="Country" name="shippingCountry" value={formData.shippingCountry} onChange={handleInputChange} />
              <Select label="State" name="shippingState" value={formData.shippingState} onChange={handleInputChange} />
              <Input label="City" name="shippingCity" value={formData.shippingCity} onChange={handleInputChange} />
              <Input label="Postcode" name="shippingPostcode" value={formData.shippingPostcode} onChange={handleInputChange} />
              <Textarea label="Address" name="shippingAddress" value={formData.shippingAddress} onChange={handleInputChange} />
              <Input label="Location Link" name="shippingLocationLink" value={formData.shippingLocationLink} onChange={handleInputChange} />
            </div>

            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
              <button onClick={handleSave} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-[1.02]">
                Save
              </button>
              <button onClick={handleClose} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:scale-[1.02]">
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <SectionTitle icon={<Settings2 />} title="Advanced Settings" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Level Type
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="increase">Increase</option>
                  <option value="decrease">Decrease</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Level
                </label>
                <div className="flex">
                  <input type="number" className="flex-1 border border-gray-300 rounded-l-lg p-2" defaultValue="0" />
                  <span className="inline-flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r-lg px-3 text-blue-600 font-semibold">%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8 border-t border-gray-100 pt-6">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition">
                Save
              </button>
              <button
                onClick={() => setShowAdvanced(false)}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <SectionTitle  title="Opening Balance Payments" />
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 border border-gray-200">SR.</th>
                  <th className="px-4 py-3 border border-gray-200">Payment Date</th>
                  <th className="px-4 py-3 border border-gray-200">Payment</th>
                  <th className="px-4 py-3 border border-gray-200">Payment Type</th>
                  <th className="px-4 py-3 border border-gray-200">Payment Note</th>
                  <th className="px-4 py-3 border border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-8 border-t border-gray-200">
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

/* 🔹 Section Title */
const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-4">
    <span className="text-blue-500 text-xl">{icon}</span>
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
  </div>
);

/* 🔹 Inputs */
const Input = ({ label, name, value, onChange, placeholder, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition duration-150"
    />
  </div>
);

const Select = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition duration-150"
    >
      <option value="">Select</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="au">Australia</option>
    </select>
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder }) => (
  <div className="md:col-span-2 lg:col-span-3">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="3"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-none transition duration-150"
    />
  </div>
);
