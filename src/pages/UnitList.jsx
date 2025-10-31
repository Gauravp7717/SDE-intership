import { useState } from "react";
import { motion } from "framer-motion";

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
      <motion.div
        className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          className="text-xl font-bold mb-6 text-gray-800 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Add / Update Unit
        </motion.h2>

        {/* Form */}
        <div className="space-y-5">
          {/* Unit Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
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
              placeholder="Enter unit name"
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
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none 
              transition-all duration-200 shadow-sm hover:shadow-md resize-none"
              placeholder="Enter description"
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
            className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105 duration-200 shadow-sm"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200 shadow-sm"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
