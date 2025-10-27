export default function PaymentType() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Add / Update Records</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payment Type Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
          placeholder="Enter payment type name"
        />
      </div>

      <div className="flex space-x-4">
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
