import React, { useState } from "react";
import { FaFileInvoice, FaPlus, FaSearch } from "react-icons/fa";
import SmartForm from "../../components/forms/SmartForm";

export default function NewQuotation() {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState("");

  const [summary, setSummary] = useState({
    quantity: 0,
    subtotal: 0,
    otherCharges: 0,
    discountOnAll: 0,
    grandTotal: 0,
  });

  // --- Top Form Fields ---
  const fields = [
    {
      name: "warehouse",
      label: "Warehouse",
      type: "select",
      required: true,
      options: [
        { label: "System Warehouse", value: "system" },
        { label: "Main Warehouse", value: "main" },
      ],
    },
    {
      name: "customerName",
      label: "Customer Name / Mobile",
      type: "text",
      required: true,
      placeholder: "Search Name / Mobile",
      iconRight: <FaSearch />,
    },
    {
      name: "quotationDate",
      label: "Quotation Date",
      type: "date",
      required: true,
      default: new Date().toISOString().split("T")[0],
    },
    {
      name: "expireDate",
      label: "Expire Date",
      type: "date",
    },
    {
      name: "referenceNo",
      label: "Reference No.",
      type: "text",
    },
  ];

  // --- Handlers ---
  const handleAddItem = () => {
    if (!itemInput.trim()) return;
    const newItem = {
      id: Date.now(),
      name: itemInput,
      quantity: 1,
      unitPrice: 0,
      discount: 0,
      taxAmount: 0,
    };
    const updated = [...items, newItem];
    setItems(updated);
    setItemInput("");
    recalculateTotals(updated);
  };

  const handleItemChange = (id, field, value) => {
    const updated = items.map((it) =>
      it.id === id ? { ...it, [field]: value } : it
    );
    setItems(updated);
    recalculateTotals(updated);
  };

  const handleDelete = (id) => {
    const updated = items.filter((it) => it.id !== id);
    setItems(updated);
    recalculateTotals(updated);
  };

  const recalculateTotals = (updatedItems) => {
    const subtotal = updatedItems.reduce(
      (acc, it) => acc + it.quantity * it.unitPrice - it.discount,
      0
    );
    const quantity = updatedItems.reduce((acc, it) => acc + Number(it.quantity), 0);
    const grandTotal =
      subtotal - Number(summary.discountOnAll || 0) + Number(summary.otherCharges || 0);

    setSummary((s) => ({
      ...s,
      subtotal,
      quantity,
      grandTotal,
    }));
  };

  const handleSubmit = (data) => {
    const finalData = { ...data, items, summary };
    console.log("Quotation submitted:", finalData);
  };

  return (
    <div className="bg-white  border-gray-200 p-10 space-y-8">
      {/* --- Title --- */}
      <div className="flex items-center gap-3 mb-4 border-b pb-3">
        <FaFileInvoice className="text-blue-600 text-xl" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Add / Update Quotation
        </h2>
      </div>

      {/* --- Top Smart Form (inline integrated look) --- */}
      <SmartForm
        fields={fields}
        onSubmit={handleSubmit}
        resetOnSubmit={false}
        submitLabel="" // hide SmartForm buttons
        showButtons={false}
      />

      {/* --- Add Item + Table --- */}
      <div className="space-y-6">
        {/* Item Search/Add Bar */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
            placeholder="Item name / Barcode / Itemcode"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAddItem}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaPlus /> Add
          </button>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Item Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Unit Price</th>
                <th className="px-4 py-2">Discount (₹)</th>
                <th className="px-4 py-2">Tax Amount</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        className="w-20 border rounded-md px-2 py-1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(item.id, "quantity", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        className="w-24 border rounded-md px-2 py-1"
                        value={item.unitPrice}
                        onChange={(e) =>
                          handleItemChange(item.id, "unitPrice", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        className="w-20 border rounded-md px-2 py-1"
                        value={item.discount}
                        onChange={(e) =>
                          handleItemChange(item.id, "discount", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        className="w-24 border rounded-md px-2 py-1"
                        value={item.taxAmount}
                        onChange={(e) =>
                          handleItemChange(item.id, "taxAmount", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className="px-4 py-2 text-right">
                      {(item.quantity * item.unitPrice - item.discount).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center text-gray-500 py-4 italic"
                  >
                    No items added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Summary Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="font-medium">Other Charges</label>
            <input
              type="number"
              value={summary.otherCharges}
              onChange={(e) =>
                setSummary((s) => ({
                  ...s,
                  otherCharges: Number(e.target.value),
                }))
              }
              className="border rounded-md px-3 py-1 w-32"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="font-medium">Discount on All</label>
            <input
              type="number"
              value={summary.discountOnAll}
              onChange={(e) =>
                setSummary((s) => ({
                  ...s,
                  discountOnAll: Number(e.target.value),
                }))
              }
              className="border rounded-md px-3 py-1 w-32"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Note</label>
            <textarea
              rows={3}
              placeholder="Enter any note"
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          <label className="flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" defaultChecked />
            Send Message to Customer
          </label>
        </div>

        <div className="space-y-2 text-right font-medium">
          <p>Quantity: {summary.quantity}</p>
          <p>Subtotal: {summary.subtotal.toFixed(2)}</p>
          <p>Other Charges: {summary.otherCharges.toFixed(2)}</p>
          <p>Discount on All: {summary.discountOnAll.toFixed(2)}</p>
          <hr className="my-1" />
          <p className="text-lg font-semibold text-gray-800">
            Grand Total: {summary.grandTotal.toFixed(2)}
          </p>
        </div>
      </div>

      {/* --- Unified Save / Close Buttons --- */}
      <div className="flex justify-center gap-6 pt-8 border-t mt-8">
        <button
          onClick={() => handleSubmit({})}
          className="px-10 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
        >
          Save
        </button>
        <button
          className="px-10 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
