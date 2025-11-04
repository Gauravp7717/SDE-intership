import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function UnitListSection() {
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
    { id: 3, name: "M", description: "Meter", status: "Inactive" }, // Added Inactive example
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

  // Helper function to determine status classes (Green for Active, Red for Inactive)
  const getStatusClasses = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

   // Helper component for Icons
  const ActionIcons = () => (
    <div className="flex justify-center space-x-2">
      {/* Edit Icon Placeholder */}
      <button className="text-gray-500 hover:text-blue-500 p-1" title="Edit">
        {/* Replace with a proper Edit/Pencil icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
      {/* Delete Icon Placeholder */}
      <button className="text-gray-500 hover:text-red-500 p-1" title="Delete">
        {/* Replace with a proper Delete/Trash icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );

  // Handlers
  const handleNewButton = () => setShowNewUnitForm(true);

  const handleSave = () => {
    console.log("Saving unit:", { unitName, description });
  };

  const handleClose = () => {
    console.log("Closing form");
    setUnitName("");
    setDescription("");
    setShowNewUnitForm(false);
  };

  // ✅ useRef for detecting outside clicks
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
          className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            ref={modalRef}
            className="p-6 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              className="text-xl font-bold mb-6 text-gray-800 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Add / Update Unit
            </motion.h2>

            <div className="space-y-5">
              {/* Unit Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Fixed Label: Changed 'Payment Type Name' to 'Unit Name' */}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={unitName}
                  onChange={(e) => setUnitName(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter unit name (e.g., Kg)"
                />
              </motion.div>
              
              {/* Description Field */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter full description (e.g., Kilogram)"
                />
              </motion.div>
            </div>

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

      {/* ===== Units List Table Section (Refined Layout & Search) ===== */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200"> {/* Consistent Container Border */}
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200"> {/* Consistent Border */}
          <h1 className="text-xl font-semibold text-gray-800">Units List</h1>
          <button
            onClick={handleNewButton}
            // New Unit Button is Blue
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2 text-sm"
          >
            + New Unit
          </button>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200"> {/* Consistent Border */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-gray-700 text-sm"
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
              {/* Removed redundant Search label and added Placeholder */}
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search Unit..."
                className="border border-gray-300 rounded px-4 py-2 w-64 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Table - Compact Styling */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-50 border-b border-gray-200"> {/* Consistent Border */}
              <tr>
                <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[30%]">
                  Unit Name
                </th>
                <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[40%]">
                  Description
                </th>
                <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[15%]">
                  Status
                </th>
                <th className="text-center px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[15%]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200"> {/* Consistent Border */}
              {currentUnits.map((unit) => (
                <tr key={unit.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{unit.name}</td>
                  <td className="px-4 py-2 text-gray-600">{unit.description}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {/* Status Color Logic Applied */}
                    <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(unit.status)}`}>
                      {unit.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center whitespace-nowrap">
                    <ActionIcons />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200"> {/* Consistent Border */}
          <div className="text-gray-600 text-sm">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredUnits.length)} of {filteredUnits.length}{" "}
            entries
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Previous
            </button>
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded text-sm ${
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
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}