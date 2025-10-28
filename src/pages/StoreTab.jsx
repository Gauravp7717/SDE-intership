import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoreTab() {
  const [activeTab, setActiveTab] = useState("sales");

  const tabs = [
    { id: "store", label: "Store" },
    { id: "system", label: "System" },
    { id: "sales", label: "Sales" },
    { id: "prefixes", label: "Prefixes" },
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
            {activeTab === "store" && <StoreSection />}
            {activeTab === "system" && <SystemSection />}
            {activeTab === "sales" && <SalesSection />}
            {activeTab === "prefixes" && <PrefixesSection />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* --------------------- STORE SECTION ---------------------- */
function StoreSection() {
  return (
    <SectionWrapper title="Store Configuration">
      <FormField label="Store Name">
        <Input placeholder="Enter store name" />
      </FormField>
      <FormField label="Store Address">
        <Textarea rows="3" placeholder="Enter store address" />
      </FormField>
      <FormField label="Contact Number">
        <Input placeholder="Enter contact number" />
      </FormField>
    </SectionWrapper>
  );
}

/* --------------------- SYSTEM SECTION ---------------------- */
function SystemSection() {
  return (
    <SectionWrapper title="System Configuration">
      <FormField label="System Language">
        <Select options={["English", "Spanish", "French"]} />
      </FormField>
      <FormField label="Time Zone">
        <Select options={["UTC", "EST", "PST"]} />
      </FormField>
      <FormField label="Date Format">
        <Select options={["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]} />
      </FormField>
    </SectionWrapper>
  );
}

/* --------------------- SALES SECTION ---------------------- */
function SalesSection() {
  const [showMRP, setShowMRP] = useState(false);
  const [showPaidAmount, setShowPaidAmount] = useState(true);
  const [showPrevBalance, setShowPrevBalance] = useState(true);
  const [showTermsInvoice, setShowTermsInvoice] = useState(true);
  const [showTermsPOS, setShowTermsPOS] = useState(true);

  return (
    <SectionWrapper title="Sales Configuration">
      <FormField label="Default Account">
        <Select options={["-None-", "Account 1", "Account 2"]} />
      </FormField>
      <FormField label="Default Sales Discount(%)">
        <Input type="number" defaultValue="0.000" step="0.001" />
      </FormField>
      <FormField label="Sales Invoice Format*">
        <Select
          options={["GST Format", "Standard Format", "Detailed Format"]}
        />
      </FormField>
      <FormField label="POS Invoice Format*">
        <Select options={["GST Format", "Standard Format", "Compact Format"]} />
      </FormField>

      <CheckboxField
        label="Show MRP Column on POS Invoice"
        checked={showMRP}
        onChange={setShowMRP}
      />
      <CheckboxField
        label="Show Paid Amount and Change Return (in POS)"
        checked={showPaidAmount}
        onChange={setShowPaidAmount}
      />
      <CheckboxField
        label="Show Previous Balance on Invoice"
        checked={showPrevBalance}
        onChange={setShowPrevBalance}
      />

      <FormField label="Number to Words Format*">
        <Select
          options={["Default", "Indian Format", "International Format"]}
        />
      </FormField>

      <FormField label="Sales Invoice Footer Text">
        <Textarea
          rows="3"
          defaultValue="This is footer text. It is in Store Management."
        />
      </FormField>

      <FormField label="Invoice Terms and Conditions">
        <div className="space-y-3">
          <RadioGroup
            label="Invoice"
            checked={showTermsInvoice}
            setChecked={setShowTermsInvoice}
          />
          <RadioGroup
            label="POS Invoice"
            checked={showTermsPOS}
            setChecked={setShowTermsPOS}
          />
          <Textarea rows="3" placeholder="Place some text here" />
        </div>
      </FormField>
    </SectionWrapper>
  );
}

/* --------------------- PREFIXES SECTION ---------------------- */
function PrefixesSection() {
  return (
    <SectionWrapper title="Prefixes Configuration">
      <FormField label="Sales Invoice Prefix">
        <Input placeholder="e.g., INV-" />
      </FormField>
      <FormField label="POS Invoice Prefix">
        <Input placeholder="e.g., POS-" />
      </FormField>
      <FormField label="Order Prefix">
        <Input placeholder="e.g., ORD-" />
      </FormField>
      <FormField label="Quote Prefix">
        <Input placeholder="e.g., QT-" />
      </FormField>
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
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-200"
  />
);

const Textarea = (props) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-200"
  />
);

const Select = ({ options }) => (
  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all duration-200">
    {options.map((opt) => (
      <option key={opt}>{opt}</option>
    ))}
  </select>
);

const CheckboxField = ({ label, checked, onChange }) => (
  <FormField label={label}>
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
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
