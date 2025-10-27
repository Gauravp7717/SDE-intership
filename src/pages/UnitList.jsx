import { useState } from "react";

export default function UnitList() {
  const [unitName, setUnitName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving unit:", { unitName, description });
  };

  const handleClose = () => {
    // Handle close logic here
    console.log("Closing form");
    setUnitName("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Form */}
      <div className="max-w-2xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Unit Name Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Unit Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter unit name"
            />
          </div>

          {/* Description Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter description"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleSave}
              className="px-8 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleClose}
              className="px-8 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
