import React, { useEffect, useRef, useState } from "react";
// Imported icons for Edit and Delete
import { Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function TaxlistSection() {
  const [showNewUnitForm, setShowNewUnitForm] = useState(false);
  const [taxName, setTaxName] = useState("");
  const [taxPercentage, setTaxPercentage] = useState("");
  
  // 🆕 State for toggling between Tax List and Tax Group List
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'group'

  // Example Data
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Data for Individual Taxes
  const taxList = [
    { id: 1, name: "GST", percentage: "5", status: "Active" },
    { id: 2, name: "VAT", percentage: "12", status: "Active" },
    { id: 3, name: "Service Tax", percentage: "18", status: "Active" },
    { id: 4, name: "Luxury Tax", percentage: "10", status: "Inactive" },
  ];

  // Data for Tax Groups (New structure, simplified from old component)
  const taxGroups = [
    { id: 101, name: "GST (5%) Group", percentage: "5", subTaxes: "CGST (2.5%) + SGST (2.5%)", status: "Active" },
    { id: 102, name: "GST (12%) Group", percentage: "12", subTaxes: "CGST (6%) + SGST (6%)", status: "Active" },
    { id: 103, name: "Fixed Tax Group", percentage: "20", subTaxes: "N/A", status: "Inactive" },
  ];

  // Determine current data based on viewMode
  const currentData = viewMode === "list" ? taxList : taxGroups;
  const listName = viewMode === "list" ? "Tax List" : "Tax Group List";
  const newButtonLabel = viewMode === "list" ? "+ New Tax" : "+ New Tax Group";
  const searchPlaceholder = viewMode === "list" ? "Search Tax..." : "Search Tax Group...";
  const tableTitle = viewMode === "list" ? "Tax List" : "Tax Group";
  const formTitle = viewMode === "list" ? "Add / Update Tax" : "Add / Update Tax Group";


  // Filtered + Pagination logic
  const filteredData = currentData.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentViewData = filteredData.slice(startIndex, endIndex);

  const getPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
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
  const handleEdit = (id) => console.log(`Editing item with ID: ${id}`);
  const handleDelete = (id) => console.log(`Deleting item with ID: ${id}`);
  
  const handleSave = () => {
    console.log(`Saving ${viewMode}:`, { taxName, taxPercentage });
  };

  const handleClose = () => {
    setTaxName("");
    setTaxPercentage("");
    setShowNewUnitForm(false);
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNewUnitForm]);

  // Helper function to determine status classes
  const getStatusClasses = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };
  
  const handleViewToggle = (mode) => {
    setViewMode(mode);
    setSearchTerm("");
    setCurrentPage(1);
  }

  // Determine table headers based on view mode
  const getTableHeaders = () => {
    if (viewMode === "group") {
      return (
        <>
          <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[25%]">Tax Group Name</th>
          <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[15%]">Tax (%)</th>
          <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[35%]">Sub Taxes</th>
          <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[10%]">Status</th>
          <th className="text-center px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[15%]">Action</th>
        </>
      );
    }
    return (
      <>
        <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[35%]">Tax Name</th>
        <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[20%]">Tax (%)</th>
        <th className="text-left px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[20%]">Status</th>
        <th className="text-center px-4 py-2 text-gray-700 font-bold text-xs tracking-wider w-[25%]">Action</th>
      </>
    );
  };
  
  // Determine table body content based on view mode
  const getTableBody = () => {
    return currentViewData.map((item) => (
      <tr key={item.id} className="hover:bg-gray-50">
        <td className="px-4 py-2 text-gray-800 font-medium whitespace-nowrap">{item.name}</td>
        <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{item.percentage}%</td>
        
        {/* Only show Sub Taxes column in Tax Group view */}
        {viewMode === "group" && (
          <td className="px-4 py-2 text-gray-600 font-mono text-xs">{item.subTaxes}</td>
        )}
        
        <td className="px-4 py-2 whitespace-nowrap">
          <span className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(item.status)}`}>
            {item.status}
          </span>
        </td>
        <td className="px-4 py-2 text-center whitespace-nowrap">
          {/* 🆕 Action buttons: Edit and Delete icons */}
          <div className="flex justify-center space-x-2">
            <ActionIcons />
          </div>
        </td>
      </tr>
    ));
  };


  return (
    <div className="p-6 min-h-screen">
      {showNewUnitForm && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup Box */}
          <motion.div
            ref={modalRef}
            className="p-6 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} 
          >
            <motion.h2
              className="text-xl font-bold mb-6 text-gray-800 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {formTitle}
            </motion.h2>

            <div className="space-y-5">
              {/* Tax Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {viewMode === 'list' ? 'Tax Name' : 'Tax Group Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={taxName}
                  onChange={(e) => setTaxName(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter name (e.g., GST 18%)"
                />
              </motion.div>

              {/* Tax Percentage Field */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Tax Percentage <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={taxPercentage}
                  onChange={(e) => setTaxPercentage(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter percentage (e.g., 18)"
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

      {/* --- Main Tax Table Section (Conditionally Renders List or Group) --- */}
      <div className="bg-white rounded-lg shadow-md mb-6 border border-gray-200">
        
        {/* Header and Toggle */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">{tableTitle}</h1>
          
          {/* 🆕 Toggle Button/Switch */}
          <div className="flex items-center gap-4">
              <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
                  <button
                      onClick={() => handleViewToggle("list")}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          viewMode === "list"
                              ? "bg-blue-500 text-white shadow-md"
                              : "text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                      Tax List
                  </button>
                  <button
                      onClick={() => handleViewToggle("group")}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          viewMode === "group"
                              ? "bg-blue-500 text-white shadow-md"
                              : "text-gray-600 hover:bg-gray-200"
                      }`}
                  >
                      Tax Group
                  </button>
              </div>

              <button
                  onClick={handleNewButton}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center gap-2 text-sm"
              >
                  {newButtonLabel}
              </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
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
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={searchPlaceholder}
                className="border border-gray-300 rounded px-4 py-2 w-64 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-hidden">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {getTableHeaders()} {/* Conditionally rendered headers */}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getTableBody()} {/* Conditionally rendered body */}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
          <div className="text-gray-600 text-sm">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredData.length)} of {filteredData.length}{" "}
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