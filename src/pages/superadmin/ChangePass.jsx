import React from "react";

export default function ChangePass() {
  return (
    <div className="p-6 bg-white  max-w-2xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
      {/* Title */}
      <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
        Change Password
      </h2>

      {/* Form */}
      <div className="space-y-5">
        {/* Old Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Old Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="Enter old password"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="Enter new password"
          />
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="Re-enter new password"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center space-y-3 sm:space-y-0">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-200 shadow-sm">
          Save
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200 shadow-sm">
          Close
        </button>
      </div>
    </div>
  );
}
