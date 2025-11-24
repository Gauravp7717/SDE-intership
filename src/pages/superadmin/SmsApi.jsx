import { useState } from "react";
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
    <div className="w-full max-w-6xl mx-auto p-6 min-h-screen">
      <div className="bg-white border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 md:flex-none px-6 py-3 text-sm font-medium 
                ${
                  activeTab === tab.id
                    ? "text-sky-600 border-b-2 border-sky-500 bg-white"
                    : "text-gray-600 hover:text-sky-600 hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === "1" && <KeyValueForm />}
          {activeTab === "2" && <TwillioSMS />}
          {activeTab === "3" && <FiveMojo />}
          {activeTab === "4" && <Action />}
        </div>
      </div>
    </div>
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
      <div className="p-6 bg-white rounded-2xl border-gray-100 max-w-4xl mx-auto w-[95%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Configuration Settings
          </h2>

          <button
            onClick={handleAddEntry}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-3 mb-3 px-2">
          <div className="col-span-3 text-sm font-semibold text-gray-700">
            Key
          </div>
          <div className="col-span-8 text-sm font-semibold text-gray-700">
            Key Value
          </div>
          <div className="col-span-1 text-sm font-semibold text-gray-700 text-center">
            Action
          </div>
        </div>

        {/* Entries */}
        <div className="space-y-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="grid grid-cols-12 gap-3 items-center"
            >
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {entry.label}
                </label>

                <input
                  type="text"
                  value={entry.key}
                  onChange={(e) => handleKeyChange(entry.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Enter key"
                />
              </div>

              <div className="col-span-8">
                <input
                  type="text"
                  value={entry.value}
                  onChange={(e) => handleValueChange(entry.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-6"
                  placeholder="Enter value"
                />
              </div>

              <div className="col-span-1 flex justify-center mt-6">
                <button
                  onClick={() => handleRemoveEntry(entry.id)}
                  className="p-2 bg-red-500 text-white rounded-lg"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <button
            onClick={handleUpdate}
            className="px-8 py-2.5 bg-green-600 text-white rounded-lg font-medium"
          >
            Update
          </button>

          <button
            onClick={handleClose}
            className="px-8 py-2.5 bg-orange-500 text-white rounded-lg font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

/* --------------------- TWILLIO SMS SECTION ---------------------- */
function TwillioSMS() {
  return (
    <div className="p-6 bg-white rounded-2xl border-gray-100 max-w-2xl mx-auto mt-10 w-[90%]">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account SID <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="account sid"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auth Token <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Auth Token"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Twilio Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="phone number"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
          Save
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
}

/* --------------------- FIVE MOJO SECTION ---------------------- */
function FiveMojo() {
  return (
    <div className="p-6 bg-white rounded-2xl max-w-2xl mx-auto mt-10 w-[90%]">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instance Token <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter instance token"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Token
          </label>
          <input
            type="text"
            className="w-full sm:w-3/4 px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter token"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
          Save
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
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
      <div className="p-6 bg-white rounded-2xl max-w-xl mx-auto mt-10 w-[90%]">
        <div className="space-y-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SMS Status
          </label>

          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 mt-8 justify-center">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Update
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* --------------------- REUSABLE COMPONENTS ---------------------- */

function SectionWrapper({ title, children }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800  pb-2">{title}</h2>
      <div className="space-y-4">{children}</div>
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

const Select = ({ options }) => (
  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
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
