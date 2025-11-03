import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function TaxlistSection() {
  const [showNewUnitForm, setShowNewUnitForm] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [description, setDescription] = useState("");

  // Example Data (replace with your API or state)
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const units = [
    { id: 1, name: "Kg", description: "Kilogram", status: "Active" },
    { id: 2, name: "L", description: "Litre", status: "Active" },
  ];

  // Filtered + Pagination logic
  const filteredUnits = units.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredUnits.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentUnits = filteredUnits.slice(startIndex, endIndex);

  const getPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  // Handlers
  const handleNewButton = () => setShowNewUnitForm(true);

  const handleSave = () => {
    console.log("Saving unit:", { unitName, description });
  };

  const handleClose = () => {
    console.log("Closing form");
    setUnitName("");
    setDescription("");
    setShowNewUnitForm(false); // 🔹 Hide form and show list again
  };

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    }

    if (showNewUnitForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNewUnitForm]);

  // ✅ Default View (Units List)
  return (
    <div className="p-6 min-h-screen">
      {showNewUnitForm && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm  bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick={handleClose} // closes on outside click
        >
          {/* Popup Box */}
          <motion.div
            ref={modalRef}
            className="p-6 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <motion.h2
              className="text-xl font-bold mb-6 text-gray-800 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Add / Update Tax
            </motion.h2>

            <div className="space-y-5">
              {/* Tax Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={unitName}
                  onChange={(e) => setUnitName(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter tax name"
                />
              </motion.div>

              {/* Tax Percentage Field */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax Percentage
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md resize-none"
                  placeholder="Enter tax percentage"
                />
              </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center space-y-3 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 
          transition-transform transform hover:scale-105 duration-200 shadow-sm"
              >
                Save
              </button>
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 
          transition-transform transform hover:scale-105 duration-200 shadow-sm"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <div className="bg-white ">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Tax List</h1>
          <button
            onClick={handleNewButton}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 flex items-center gap-2"
          >
            + New Unit
          </button>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-gray-700"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-gray-600">entries</span>
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                Search:
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded pl-20 pr-4 py-2 w-64"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Tax Name
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Tax{"(%)"}
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Status
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUnits.map((unit) => (
                <tr key={unit.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-800">{unit.name}</td>
                  <td className="p-4 text-gray-600">{unit.description}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                      {unit.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 flex items-center gap-1">
                      Action
                      <ChevronDown size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t">
          <div className="text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredUnits.length)} of {filteredUnits.length}{" "}
            entries
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* groups */}
      <div className="bg-white ">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Tax Group</h1>
          <button
            onClick={handleNewButton}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 flex items-center gap-2"
          >
            + New Tax Group
          </button>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-gray-700"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-gray-600">entries</span>
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                Search:
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded pl-20 pr-4 py-2 w-64"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto ">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Tax Name
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Tax{"(%)"}
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Sub Taxes
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Status
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUnits.map((unit) => (
                <tr key={unit.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-800">{unit.name}</td>
                  <td className="p-4 text-gray-600">{unit.description}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                      {unit.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 flex items-center gap-1">
                      Action
                      <ChevronDown size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t">
          <div className="text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredUnits.length)} of {filteredUnits.length}{" "}
            entries
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
