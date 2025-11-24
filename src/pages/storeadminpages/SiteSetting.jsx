import React, { useState } from "react";

export default function SiteSetting() {
  const [siteName, setSiteName] = useState("Prepurchase");
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full p-6 min-h-screen">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Site Settings</h1>
        <p className="text-gray-500 text-sm">Add/Update Site Settings</p>
      </div>

      <div className="bg-white  p-6 ">
        {/* Tab Header */}
        <div className="pb-3 mb-5">
          <h2 className="text-lg font-semibold text-gray-700">Site</h2>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Site Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Site Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 outline-none"
              placeholder="Enter Site Name"
            />
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Site Logo
            </label>

            <div className="flex items-center gap-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="block w-full text-gray-700"
              />
            </div>

            <p className="text-xs mt-2 text-gray-500">
              Max Width/Height: 300px × 300px & Max Size: 300KB
            </p>

            {/* Preview */}
            {preview && (
              <div className="mt-3">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-52 h-40 object-contain border rounded-md shadow-sm bg-white"
                />
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="bg-green-600 text-white px-10 py-2 rounded-md font-semibold hover:bg-green-700 shadow">
            Update
          </button>

          <button className="bg-yellow-500 text-white px-10 py-2 rounded-md font-semibold hover:bg-yellow-600 shadow">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
