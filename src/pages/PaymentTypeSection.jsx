import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import DataTable from "../components/DataTable"; // ✅ Import reusable DataTable

export default function PaymentTypeSection() {
  const [showNewUnitForm, setShowNewUnitForm] = useState(false);
  const [unitName, setUnitName] = useState("");
  const [description, setDescription] = useState("");

  const modalRef = useRef(null);

  // Example Data (Payment Types)
  const [paymentTypes, setPaymentTypes] = useState([
    { id: 1, name: "Cash", status: "Active" },
    { id: 2, name: "Card (POS)", status: "Active" },
    { id: 3, name: "Bank Transfer", status: "Inactive" },
    { id: 4, name: "Check", status: "Active" },
  ]);

  const handleNewButton = () => setShowNewUnitForm(true);

  const handleSave = () => {
    console.log("Saving payment type:", { unitName, description });
    setUnitName("");
    setDescription("");
    setShowNewUnitForm(false);
  };

  const handleClose = () => {
    setUnitName("");
    setDescription("");
    setShowNewUnitForm(false);
  };

  // Close modal on click outside
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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNewUnitForm]);

  // Helper for status badge
  const getStatusClasses = (status) =>
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  // Table columns
  const columns = [
    { header: "Payment Type Name", key: "name" },
    {
      header: "Status",
      key: "status",
      render: (value) => (
        <span
          className={`px-3 py-0.5 rounded-full text-xs font-medium ${getStatusClasses(
            value
          )}`}
        >
          {value}
        </span>
      ),
    },
  ];

  // Table actions
  const handleEdit = (row) => console.log("Edit clicked:", row);
  const handleDelete = (row) => console.log("Delete clicked:", row);

  return (
    <div className="p-6 min-h-screen">
      {/* Modal */}
      {showNewUnitForm && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
              Add / Update Payment Type
            </motion.h2>

            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Type Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={unitName}
                  onChange={(e) => setUnitName(e.target.value)}
                  className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
                    focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
                    transition-all duration-200 shadow-sm hover:shadow-md"
                  placeholder="Enter payment type name"
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

      {/* ===== Reusable DataTable ===== */}

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment List</h2>
      <DataTable
        columns={columns}
        data={paymentTypes}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addButtonText="New Payment Type"
        onAdd={handleNewButton}
      />
    </div>
  );
}
