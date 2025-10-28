import { useState } from "react";

export default function StoreTab() {
  const [activeTab, setActiveTab] = useState("sales");

  const tabs = [
    { id: "store", label: "Store" },
    { id: "system", label: "System" },
    { id: "sales", label: "Sales" },
    { id: "prefixes", label: "Prefixes" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-400 text-blue-500"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "store" && <StoreSection />}
          {activeTab === "system" && <SystemSection />}
          {activeTab === "sales" && <SalesSection />}
          {activeTab === "prefixes" && <PrefixesSection />}
        </div>
      </div>
    </div>
  );
}

function StoreSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Store Configuration
      </h2>
      <div className="space-y-4">
        <FormField label="Store Name">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter store name"
          />
        </FormField>
        <FormField label="Store Address">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows="3"
            placeholder="Enter store address"
          ></textarea>
        </FormField>
        <FormField label="Contact Number">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="Enter contact number"
          />
        </FormField>
      </div>
    </div>
  );
}

function SystemSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        System Configuration
      </h2>
      <div className="space-y-4">
        <FormField label="System Language">
          <select className="w-full px-3 py-2 border border-gray-300 rounded">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </FormField>
        <FormField label="Time Zone">
          <select className="w-full px-3 py-2 border border-gray-300 rounded">
            <option>UTC</option>
            <option>EST</option>
            <option>PST</option>
          </select>
        </FormField>
        <FormField label="Date Format">
          <select className="w-full px-3 py-2 border border-gray-300 rounded">
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </FormField>
      </div>
    </div>
  );
}

function SalesSection() {
  const [showMRP, setShowMRP] = useState(false);
  const [showPaidAmount, setShowPaidAmount] = useState(true);
  const [showPrevBalance, setShowPrevBalance] = useState(true);
  const [showTermsInvoice, setShowTermsInvoice] = useState(true);
  const [showTermsPOS, setShowTermsPOS] = useState(true);

  return (
    <div className="space-y-6">
      <FormField label="Default Account">
        <select className="w-full px-3 py-2 border border-gray-300 rounded">
          <option>-None-</option>
          <option>Account 1</option>
          <option>Account 2</option>
        </select>
      </FormField>

      <FormField label="Default Sales Discount(%)">
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          defaultValue="0.000"
          step="0.001"
        />
      </FormField>

      <FormField label="Sales Invoice Format*">
        <select className="w-full px-3 py-2 border border-gray-300 rounded">
          <option>GST Format</option>
          <option>Standard Format</option>
          <option>Detailed Format</option>
        </select>
      </FormField>

      <FormField label="POS Invoice Format*">
        <select className="w-full px-3 py-2 border border-gray-300 rounded">
          <option>GST Format</option>
          <option>Standard Format</option>
          <option>Compact Format</option>
        </select>
      </FormField>

      <FormField label="Show MRP Column on POS Invoice">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showMRP}
            onChange={(e) => setShowMRP(e.target.checked)}
            className="w-4 h-4 text-orange-500"
          />
          <span className="text-sm text-gray-700">Enable</span>
        </label>
      </FormField>

      <FormField label="Show Paid Amount and Change Return (in POS)">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showPaidAmount}
            onChange={(e) => setShowPaidAmount(e.target.checked)}
            className="w-4 h-4 text-orange-500"
          />
          <span className="text-sm text-gray-700">Enable</span>
        </label>
      </FormField>

      <FormField label="Show Previous Balance on Invoice">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={showPrevBalance}
            onChange={(e) => setShowPrevBalance(e.target.checked)}
            className="w-4 h-4 text-orange-500"
          />
          <span className="text-sm text-gray-700">Enable</span>
        </label>
      </FormField>

      <FormField label="Number to Words Format*">
        <select className="w-full px-3 py-2 border border-gray-300 rounded">
          <option>Default</option>
          <option>Indian Format</option>
          <option>International Format</option>
        </select>
      </FormField>

      <FormField label="Sales Invoice Footer Text">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded"
          rows="3"
          defaultValue="This is footer text. It is in Store Management."
        ></textarea>
      </FormField>

      <FormField label="Invoice Terms and Conditions">
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="termsInvoice"
                checked={showTermsInvoice}
                onChange={() => setShowTermsInvoice(true)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="text-sm text-gray-700">Show on Invoice</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="termsInvoice"
                checked={!showTermsInvoice}
                onChange={() => setShowTermsInvoice(false)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="text-sm text-gray-700">Hide on Invoice</span>
            </label>
          </div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="termsPOS"
                checked={showTermsPOS}
                onChange={() => setShowTermsPOS(true)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="text-sm text-gray-700">Show on POS Invoice</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="termsPOS"
                checked={!showTermsPOS}
                onChange={() => setShowTermsPOS(false)}
                className="w-4 h-4 text-orange-500"
              />
              <span className="text-sm text-gray-700">Hide on POS Invoice</span>
            </label>
          </div>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded mt-2"
            rows="3"
            placeholder="Place some text here"
          ></textarea>
        </div>
      </FormField>
    </div>
  );
}

function PrefixesSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Prefixes Configuration
      </h2>
      <div className="space-y-4">
        <FormField label="Sales Invoice Prefix">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="e.g., INV-"
          />
        </FormField>
        <FormField label="POS Invoice Prefix">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="e.g., POS-"
          />
        </FormField>
        <FormField label="Order Prefix">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="e.g., ORD-"
          />
        </FormField>
        <FormField label="Quote Prefix">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="e.g., QT-"
          />
        </FormField>
      </div>
    </div>
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
