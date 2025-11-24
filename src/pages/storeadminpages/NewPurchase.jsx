import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function NewPurchase() {
  const [purchaseData, setPurchaseData] = useState({
    warehouse: "",
    supplierName: "",
    purchaseDate: "",
    referenceNo: "",
    note: "",
    otherCharges: "",
    discountAll: "",
    paymentAmount: "",
    paymentNote: "",
    paymentType: "",
    account: "",
  });

  // items array kept for future dynamic item rows (currently empty)
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // build final payload (items will be added when items logic implemented)
    const payload = {
      ...purchaseData,
      items,
    };
    console.log("Purchase Data:", payload);
  };

  // derived values
  const totalQuantities = items.reduce((acc, it) => acc + (Number(it.quantity) || 0), 0);
  const subtotal = items.reduce((acc, it) => acc + ((Number(it.quantity) || 0) * (Number(it.purchasePrice) || 0) - (Number(it.discount) || 0)), 0);
  const otherCharges = Number(purchaseData.otherCharges) || 0;
  const discountOnAll = Number(purchaseData.discountAll) || 0;
  const grandTotal = subtotal + otherCharges - discountOnAll;

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-8">
      <div className="bg-white  border-gray-200 p-3 space-y-10">
        {/* Header */}
        <div className="border-b pb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Add / Update Purchase</h1>
        </div>

        {/* --- Basic Details Section --- */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Purchase Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Warehouse<span className="text-red-500">*</span></label>
              <select
                name="warehouse"
                value={purchaseData.warehouse}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Warehouse</option>
                <option value="System Warehouse">System Warehouse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Supplier Name</label>
              <input
                type="text"
                name="supplierName"
                value={purchaseData.supplierName}
                onChange={handleChange}
                placeholder="Search Name / Mobile"
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Purchase Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                name="purchaseDate"
                value={purchaseData.purchaseDate}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Reference No.</label>
              <input
                type="text"
                name="referenceNo"
                value={purchaseData.referenceNo}
                onChange={handleChange}
                placeholder="Reference Number"
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* --- Items Section --- */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Add Items</h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Item name / Barcode / Itemcode"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="button"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <FaPlus /> Add
            </button>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Item Name</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Purchase Price</th>
                  <th className="px-4 py-2">Discount</th>
                  <th className="px-4 py-2">Tax</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center text-gray-500 py-4 italic">No items added yet</td>
                  </tr>
                ) : (
                  items.map((it) => (
                    <tr key={it.id} className="border-t">
                      <td className="px-4 py-2">{it.name}</td>
                      <td className="px-4 py-2">{it.quantity}</td>
                      <td className="px-4 py-2">{it.purchasePrice}</td>
                      <td className="px-4 py-2">{it.discount}</td>
                      <td className="px-4 py-2">{it.tax}</td>
                      <td className="px-4 py-2">{((Number(it.quantity)||0)*(Number(it.purchasePrice)||0) - (Number(it.discount)||0)).toFixed(2)}</td>
                      <td className="px-4 py-2 text-center">-</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Notes and Summary Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2 mb-3">Additional Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Quantities</label>
                <input
                  type="text"
                  readOnly
                  value={totalQuantities}
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Other Charges</label>
                <input
                  type="number"
                  name="otherCharges"
                  value={purchaseData.otherCharges}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Discount on All</label>
                <input
                  type="number"
                  name="discountAll"
                  value={purchaseData.discountAll}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Note</label>
                <textarea
                  name="note"
                  value={purchaseData.note}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter any notes"
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Other Charges</span>
              <span>₹ {otherCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount on All</span>
              <span>₹ {discountOnAll.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-gray-800">
              <span>Grand Total</span>
              <span>₹ {grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* --- Previous Payments Section --- */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Previous Payments Information</h2>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">Payment Date</th>
                  <th className="px-4 py-2">Payment Type</th>
                  <th className="px-4 py-2">Account</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center text-gray-500 py-4 italic">No previous payments found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- Make Payment Section --- */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Make Payment</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Amount</label>
              <input
                type="number"
                name="paymentAmount"
                value={purchaseData.paymentAmount}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Type</label>
              <select
                name="paymentType"
                value={purchaseData.paymentType}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Account</label>
              <select
                name="account"
                value={purchaseData.account}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select</option>
                <option value="System Account">System Account</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Note</label>
            <textarea
              name="paymentNote"
              value={purchaseData.paymentNote}
              onChange={handleChange}
              rows={3}
              placeholder="Enter payment note"
              className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* --- Buttons --- */}
        <div className="flex justify-center gap-6 pt-8 border-t mt-4">
          <button onClick={handleSubmit} className="px-8 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">Save</button>
          <button className="px-8 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">Close</button>
        </div>
      </div>
    </div>
  );
}
