export default function ChangePass() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Change Password
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Old Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
            placeholder="Enter old password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
            placeholder="Enter new password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm New Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
            placeholder="Re-enter new password"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Save
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
}
