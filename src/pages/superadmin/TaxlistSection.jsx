import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DataTable from "../../components/DataTable"; // Import the reusable component

export default function TaxlistSection() {
  const [showNewUnitForm, setShowNewUnitForm] = useState(false);
  const [taxName, setTaxName] = useState("");
  const [taxPercentage, setTaxPercentage] = useState("");

  const [viewMode, setViewMode] = useState("list"); // 'list' or 'group'
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Example Data
  const taxList = [
    { id: 1, name: "GST", percentage: "5", status: "Active" },
    { id: 2, name: "VAT", percentage: "12", status: "Active" },
    { id: 3, name: "Service Tax", percentage: "18", status: "Active" },
    { id: 4, name: "Luxury Tax", percentage: "10", status: "Inactive" },
  ];

  const taxGroups = [
    {
      id: 101,
      name: "GST (5%) Group",
      percentage: "5",
      subTaxes: "CGST (2.5%) + SGST (2.5%)",
      status: "Active",
    },
    {
      id: 102,
      name: "GST (12%) Group",
      percentage: "12",
      subTaxes: "CGST (6%) + SGST (6%)",
      status: "Active",
    },
    {
      id: 103,
      name: "Fixed Tax Group",
      percentage: "20",
      subTaxes: "N/A",
      status: "Inactive",
    },
  ];

  const handleViewToggle = (mode) => {
    setViewMode(mode);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleNewButton = () => setShowNewUnitForm(true);
  const handleSave = () =>
    console.log(`Saving ${viewMode}:`, { taxName, taxPercentage });
  const handleClose = () => {
    setTaxName("");
    setTaxPercentage("");
    setShowNewUnitForm(false);
  };

  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target))
        handleClose();
    }
    if (showNewUnitForm)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNewUnitForm]);

  const getStatusClasses = (status) =>
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  const currentData = viewMode === "list" ? taxList : taxGroups;

  // Define columns for DataTable
  const columns =
    viewMode === "list"
      ? [
          { key: "name", header: "Tax Name" },
          { key: "percentage", header: "Tax (%)" },
          {
            key: "status",
            header: "Status",
            render: (val) => (
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(
                  val
                )}`}
              >
                {val}
              </span>
            ),
          },
        ]
      : [
          { key: "name", header: "Tax Group Name" },
          { key: "percentage", header: "Tax (%)" },
          { key: "subTaxes", header: "Sub Taxes" },
          {
            key: "status",
            header: "Status",
            render: (val) => (
              <span
                className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(
                  val
                )}`}
              >
                {val}
              </span>
            ),
          },
        ];

  return (
    <div className="p-6 min-h-screen">
      {showNewUnitForm && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
            className="p-6 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
              {viewMode === "list"
                ? "Add / Update Tax"
                : "Add / Update Tax Group"}
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {viewMode === "list" ? "Tax Name" : "Tax Group Name"}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={taxName}
                  onChange={(e) => setTaxName(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Tax Percentage <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={taxPercentage}
                  onChange={(e) => setTaxPercentage(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                  placeholder="Enter percentage"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center space-y-3 sm:space-y-0">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                Save
              </button>
              <button
                onClick={handleClose}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Tax List</h2>

      {/* Header & Toggle */}
      <div className="flex justify-between items-center p-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => handleViewToggle("list")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tax List
            </button>
            <button
              onClick={() => handleViewToggle("group")}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                viewMode === "group"
                  ? "bg-blue-500 text-white"
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
            {viewMode === "list" ? "+ New Tax" : "+ New Tax Group"}
          </button>
        </div>
      </div>

      {/* Reusable DataTable */}
      <DataTable
        columns={columns}
        data={currentData}
        entriesPerPage={entriesPerPage}
        showSearch={true}
        showPagination={true}
        onEdit={(row) => console.log("Edit", row)}
        onDelete={(row) => console.log("Delete", row)}
        addButtonText={viewMode === "list" ? " New Tax" : " New Tax Group"}
        onAdd={handleNewButton}
      />
    </div>
  );
}
