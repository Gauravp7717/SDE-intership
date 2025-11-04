import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2 } from "lucide-react";

export default function SmsApi() {
  const [activeTab, setActiveTab] = useState("1");

  const tabs = [
    { id: "1", label: "HTTP/URL SMS API" },
    { id: "2", label: "Twillio SMS API" },
    { id: "3", label: "FiveMojo Whatsapp API" },
    { id: "4", label: "Action" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-6xl mx-auto p-6 min-h-screen"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white  border-gray-200 overflow-hidden"
      >
        {/* ✅ Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 bg-gray-50/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 md:flex-none px-6 py-3 text-sm font-medium transition-all duration-300 
                ${
                  activeTab === tab.id
                    ? "text-sky-600 border-b-2 border-sky-500 bg-white shadow-sm"
                    : "text-gray-600 hover:text-sky-600 hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ✅ Animated Tab Content */}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8"
          >
            {activeTab === "1" && <KeyValueForm />}
            {activeTab === "2" && <TwillioSMS />}
            {activeTab === "3" && <FiveMojo />}
            {activeTab === "4" && <Action />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* --------------------- HTTPS SECTION ---------------------- */
function KeyValueForm() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      key: "weblink",
      value: "http://example.com/sendmessage",
      label: "URL*",
    },
    { id: 2, key: "mobiles", value: "", label: "Mobile Key*" },
    { id: 3, key: "message", value: "", label: "Message Key*" },
  ]);

  const handleAddEntry = () => {
    const newEntry = {
      id: Date.now(),
      key: "",
      value: "",
      label: "New Key",
    };
    setEntries([...entries, newEntry]);
  };

  const handleRemoveEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleKeyChange = (id, newKey) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, key: newKey } : entry
      )
    );
  };

  const handleValueChange = (id, newValue) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, value: newValue } : entry
      )
    );
  };

  const handleUpdate = () => {
    console.log("Updating entries:", entries);
  };

  const handleClose = () => {
    console.log("Closing form");
  };

  return (
    <div className="min-h-screen py-10">
      <motion.div
        className="p-6 bg-white rounded-2xl border-gray-100 max-w-4xl mx-auto w-[95%] sm:w-[90%] md:w-[85%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header with Add Button */}
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Configuration Settings
          </motion.h2>
          <motion.button
            onClick={handleAddEntry}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-200 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add</span>
          </motion.button>
        </div>

        {/* Table Header */}
        <motion.div
          className="grid grid-cols-12 gap-3 mb-3 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="col-span-3 text-sm font-semibold text-gray-700">
            Key
          </div>
          <div className="col-span-8 text-sm font-semibold text-gray-700">
            Key Value
          </div>
          <div className="col-span-1 text-sm font-semibold text-gray-700 text-center">
            Action
          </div>
        </motion.div>

        {/* Entries */}
        <div className="space-y-3">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              className="grid grid-cols-12 gap-3 items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {/* Label and Key Input */}
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {entry.label}
                </label>
                <input
                  type="text"
                  value={entry.key}
                  onChange={(e) => handleKeyChange(entry.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
              transition-all duration-200 shadow-sm hover:shadow-md text-sm bg-gray-50"
                  placeholder="Enter key"
                />
              </div>

              {/* Value Input */}
              <div className="col-span-8">
                <input
                  type="text"
                  value={entry.value}
                  onChange={(e) => handleValueChange(entry.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
              transition-all duration-200 shadow-sm hover:shadow-md text-sm mt-6"
                  placeholder="Enter value"
                />
              </div>

              {/* Delete Button */}
              <div className="col-span-1 flex justify-center mt-6">
                <motion.button
                  onClick={() => handleRemoveEntry(entry.id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-transform transform hover:scale-110 duration-200 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trash2 size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleUpdate}
            className="px-8 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-200 shadow-sm font-medium"
          >
            Update
          </button>
          <button
            onClick={handleClose}
            className="px-8 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200 shadow-sm font-medium"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
/* --------------------- TWILLOW SMS SECTION ---------------------- */
function TwillioSMS() {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl border-gray-100 max-w-2xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title */}

      {/* Form */}
      <div className="space-y-5">
        {/* Account SID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account SID <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
        focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
        transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="account sid"
          />
        </motion.div>

        {/* Auth Token */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auth Token <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
        focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
        transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="Auth Token"
          />
        </motion.div>

        {/* Twilio Phone Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Twilio Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
        focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
        transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="phone number"
          />
        </motion.div>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center space-y-3 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-200 shadow-sm">
          Save
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200 shadow-sm">
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

/* --------------------- FIVE MOJO SECTION ---------------------- */
function FiveMojo() {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl  max-w-2xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Form Container */}
      <div className="space-y-5">
        {/* Instance Token */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instance Token <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="Enter instance token"
          />
        </motion.div>

        {/* Token */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Token
          </label>
          <input
            type="text"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none 
            transition-all duration-200 shadow-sm hover:shadow-md"
            placeholder="Enter token"
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
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-200 shadow-sm">
          Save
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200 shadow-sm">
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}

/* --------------------- ACTION SECTION ---------------------- */
function Action() {
  const [formData, setFormData] = useState({
    country: "India",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, country: e.target.value });
  };

  const handleUpdate = () => {
    console.log("Updated country:", formData.country);
  };

  const handleClose = () => {
    console.log("Form closed!");
  };

  return (
    <SectionWrapper title="">
      <motion.div
        className="p-6 bg-white rounded-2xl  max-w-xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Dropdown Field */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <SelectField
            label="SMS Status"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            options={["India", "USA", "UK"]}
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center space-y-3 sm:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105 duration-200 shadow-sm"
          >
            Update
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-200 shadow-sm"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

/* --------------------- REUSABLE COMPONENTS ---------------------- */
function SectionWrapper({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </motion.div>
  );
}

function FormField({ label, children }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-2">
      <label className="text-sm font-medium text-gray-700 md:w-1/3 md:text-right md:pt-2">
        {label}
      </label>
      <div className="md:w-2/3">{children}</div>
    </div>
  );
}

const Select = ({ options }) => (
  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all">
    {options.map((opt) => (
      <option key={opt}>{opt}</option>
    ))}
  </select>
);

const SelectField = ({ label, options, ...props }) => (
  <FormField label={label}>
    <Select options={options} {...props} />
  </FormField>
);
