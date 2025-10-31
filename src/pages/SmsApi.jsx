import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="w-full max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8"
          >
            {activeTab === "1" && <StoreSection />}
            {activeTab === "2" && <TwillioSMS />}
            {activeTab === "3" && <FiveMojo />}
            {activeTab === "4" && <PrefixesSection />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* --------------------- STORE SECTION ---------------------- */
function StoreSection() {
  const [formData, setFormData] = useState({
    storeCode: "ST0002",
    storeName: "Impera Store",
    mobile: "9784512413",
    email: "imperastore@gmail.com",
    phone: "",
    gstNumber: "",
    taxNumber: "",
    panNumber: "",
    storeWebsite: "",
    showSignature: false,
    country: "India",
    state: "Maharashtra",
    city: "Pune",
    postcode: "",
    address: "Kharadi, Pune",
    bankDetails: "",
  });

  const [storeLogo, setStoreLogo] = useState(null);
  const [signature, setSignature] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "logo") setStoreLogo(reader.result);
        else setSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    console.log("Updated Store Data:", formData);
    console.log("Store Logo:", storeLogo);
    console.log("Signature:", signature);
    alert("✅ Store details updated successfully!");
  };

  const handleClose = () => alert("⚠️ Form closed!");

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
        Store Configuration
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          <InputField
            label="Store Code"
            required
            name="storeCode"
            value={formData.storeCode}
            onChange={handleInputChange}
          />
          <InputField
            label="Store Name"
            required
            name="storeName"
            value={formData.storeName}
            onChange={handleInputChange}
          />
          <InputField
            label="Mobile"
            required
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <InputField
            label="Email"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <InputField
            label="GST Number"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleInputChange}
          />
          <InputField
            label="Tax Number"
            name="taxNumber"
            value={formData.taxNumber}
            onChange={handleInputChange}
          />
          <InputField
            label="PAN Number"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleInputChange}
          />
          <InputField
            label="Store Website"
            name="storeWebsite"
            value={formData.storeWebsite}
            onChange={handleInputChange}
          />
          <CheckboxField
            label="Show Signature on Invoice"
            name="showSignature"
            checked={formData.showSignature}
            onChange={handleInputChange}
          />
          <FileUpload
            label="Signature"
            onChange={(e) => handleFileChange(e, "signature")}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <TextAreaField
            label="Bank Details"
            name="bankDetails"
            value={formData.bankDetails}
            onChange={handleInputChange}
          />
          <SelectField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            options={["India", "USA", "UK"]}
          />
          <SelectField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            options={["Maharashtra", "Karnataka", "Delhi"]}
          />
          <InputField
            label="City"
            required
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <InputField
            label="Postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleInputChange}
          />
          <TextAreaField
            label="Address"
            required
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <FileUpload
            label="Store Logo"
            onChange={(e) => handleFileChange(e, "logo")}
          />

          {storeLogo && (
            <div className="mt-3 p-4 border border-gray-200 rounded-md bg-gray-50">
              <img
                src={storeLogo}
                alt="Store Logo"
                className="max-h-32 object-contain mx-auto"
              />
            </div>
          )}
        </div>
      </div>

      {/* Signature Preview */}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-medium text-gray-700 text-center mb-3">
          Signature Preview
        </h3>
        <div className="flex justify-center">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 w-full max-w-md">
            {signature ? (
              <img
                src={signature}
                alt="Signature"
                className="max-h-48 mx-auto object-contain"
              />
            ) : (
              <p className="text-center text-gray-500 text-sm">
                No Image Available
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleUpdate}
          className="px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
        >
          Update
        </button>
        <button
          onClick={handleClose}
          className="px-8 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* --------------------- SYSTEM SECTION ---------------------- */
function TwillioSMS() {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl   border-gray-100 max-w-2xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title */}

      {/* Form */}
      <div className="space-y-5">
        {/* Old Password */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
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

        {/* New Password */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
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

        {/* Confirm New Password */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Twillio Phone Number <span className="text-red-500">*</span>
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

/* --------------------- SALES SECTION ---------------------- */
function FiveMojo() {
  return (
    <motion.div
      className="p-6 bg-white rounded-2xl  border-gray-100 max-w-2xl mx-auto mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title */}
      {/* <motion.h2
        className="text-xl font-bold mb-6 text-gray-800 text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Add / Update Records
      </motion.h2> */}

      {/* Form Fields */}
      <div className="space-y-5">
        {/* Payment Type Name */}
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
            placeholder="Enter payment type name"
          />
        </motion.div>

        {/* Additional Field */}
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
            placeholder="Enter additional field"
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

/* --------------------- PREFIXES SECTION ---------------------- */
function PrefixesSection() {
  const handleUpdate = () => {
    console.log("Sales configuration updated successfully!");
    // You can later connect this with form data saving logic
  };

  const handleClose = () => {
    console.log("Sales configuration form closed!");
    // You can later connect this to modal/tab closing logic
  };

  return (
    <SectionWrapper title="Prefixes Configuration">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <FormField label="Category">
            <Input placeholder="e.g., INV-" />
          </FormField>
          <FormField label="Supplier">
            <Input placeholder="e.g., POS-" />
          </FormField>
          <FormField label="Phase Return">
            <Input placeholder="e.g., ORD-" />
          </FormField>
          <FormField label="Sales">
            <Input placeholder="e.g., QT-" />
          </FormField>
          <FormField label="Expense">
            <Input placeholder="e.g., INV-" />
          </FormField>
          <FormField label="Quotation">
            <Input placeholder="e.g., POS-" />
          </FormField>
          <FormField label="Sales Payment">
            <Input placeholder="e.g., ORD-" />
          </FormField>
          <FormField label="Purchase Payment">
            <Input placeholder="e.g., QT-" />
          </FormField>
          <FormField label="Expense Payment">
            <Input placeholder="e.g., INV-" />
          </FormField>
        </div>

        <div className="space-y-4">
          <FormField label="Item">
            <Input placeholder="e.g., ORD-" />
          </FormField>
          <FormField label="Purchase">
            <Input placeholder="e.g., QT-" />
          </FormField>
          <FormField label="Customer">
            <Input placeholder="e.g., INV-" />
          </FormField>
          <FormField label="Sales Return">
            <Input placeholder="e.g., POS-" />
          </FormField>
          <FormField label="Account">
            <Input placeholder="e.g., ORD-" />
          </FormField>
          <FormField label="Money Transfer">
            <Input placeholder="e.g., QT-" />
          </FormField>
          <FormField label="Sales Return payment">
            <Input placeholder="e.g., INV-" />
          </FormField>
          <FormField label="Purchase Return payment">
            <Input placeholder="e.g., POS-" />
          </FormField>
          <FormField label="Customer Advanced Payment">
            <Input placeholder="e.g., ORD-" />
          </FormField>
        </div>
      </div>
      {/* ✅ Buttons Section */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handleUpdate}
          className="px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
        >
          Update
        </button>
        <button
          onClick={handleClose}
          className="px-8 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors"
        >
          Close
        </button>
      </div>
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

const Input = (props) => (
  <input
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all"
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all"
  />
);

const Select = ({ options }) => (
  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all">
    {options.map((opt) => (
      <option key={opt}>{opt}</option>
    ))}
  </select>
);

const CheckboxField = ({ label, name, checked, onChange }) => (
  <FormField label={label}>
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => {
          if (onChange.length === 1) onChange(e);
          else onChange(e.target.checked);
        }}
        className="w-4 h-4 accent-sky-500"
      />
      <span className="text-sm text-gray-700">Enable</span>
    </label>
  </FormField>
);

const RadioGroup = ({ label, checked, setChecked }) => (
  <div className="flex items-center space-x-4">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name={`terms-${label}`}
        checked={checked}
        onChange={() => setChecked(true)}
        className="w-4 h-4 accent-sky-500"
      />
      <span className="text-sm text-gray-700">Show on {label}</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name={`terms-${label}`}
        checked={!checked}
        onChange={() => setChecked(false)}
        className="w-4 h-4 accent-sky-500"
      />
      <span className="text-sm text-gray-700">Hide on {label}</span>
    </label>
  </div>
);

const FileUpload = ({ label, onChange }) => (
  <FormField label={label}>
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-sky-100 file:text-sky-600 hover:file:bg-sky-200 cursor-pointer"
    />
  </FormField>
);

const InputField = ({ label, ...props }) => (
  <FormField label={label}>
    <Input {...props} />
  </FormField>
);

const TextAreaField = ({ label, ...props }) => (
  <FormField label={label}>
    <Textarea {...props} />
  </FormField>
);

const SelectField = ({ label, options, ...props }) => (
  <FormField label={label}>
    <Select options={options} {...props} />
  </FormField>
);
