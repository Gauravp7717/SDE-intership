import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function AddSales() {
  const [salesData, setSalesData] = useState({
    warehouse: "",
    customerName: "",
    previousDue: 0.0,
    salesCode: "",
    salesDate: "",
    referenceNo: "",
    dueDate: "",
    otherCharges: "",
    couponCode: "",
    couponType: "Flat", // Flat | Percent
    couponValue: "",
    discountOnAll: "",
    discountOnAllType: "Flat", // Flat | Percent
    note: "",
    // payments
    paymentAmount: "",
    paymentType: "",
    account: "",
    paymentNote: "",
    adjustAdvance: false,
    advanceAmount: 0.0,
  });

  // items state
  const [items, setItems] = useState([]);
  // simple id counter for items
  const [nextItemId, setNextItemId] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSalesData((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addItem = () => {
    const newItem = {
      id: nextItemId,
      name: "",
      quantity: 1,
      unitPrice: 0.0,
      discount: 0.0,
      taxAmount: 0.0,
      tax: "", // tax label or percent optionally
    };
    setItems((arr) => [...arr, newItem]);
    setNextItemId((n) => n + 1);
  };

  const removeItem = (id) => {
    setItems((arr) => arr.filter((it) => it.id !== id));
  };

  const updateItem = (id, field, value) => {
    setItems((arr) =>
      arr.map((it) => (it.id === id ? { ...it, [field]: value } : it))
    );
  };

  const handleItemChange = (id) => (e) => {
    const { name, value } = e.target;
    // keep numbers as numbers where appropriate
    const numericFields = ["quantity", "unitPrice", "discount", "taxAmount"];
    const val = numericFields.includes(name) ? (value === "" ? "" : Number(value)) : value;
    updateItem(id, name, val);
  };

  const computeItemTotal = (it) => {
    // Step-by-step arithmetic (to avoid mistakes)
    const q = Number(it.quantity) || 0;
    const up = Number(it.unitPrice) || 0;
    const dis = Number(it.discount) || 0;
    const taxAmt = Number(it.taxAmount) || 0;
    const total = q * up - dis + taxAmt;
    // keep two decimals for display
    return Number(total);
  };

  const totalQuantities = items.reduce((acc, it) => acc + (Number(it.quantity) || 0), 0);

  const subtotal = items.reduce((acc, it) => {
    return acc + computeItemTotal(it);
  }, 0);

  const otherCharges = Number(salesData.otherCharges) || 0;
  const couponValue = Number(salesData.couponValue) || 0;
  const discountOnAll = Number(salesData.discountOnAll) || 0;

  // coupon discount amount depending on type
  const couponDiscountAmount =
    salesData.couponType === "Percent" ? (subtotal * couponValue) / 100 : couponValue;

  // discount on all amount depending on type
  const discountOnAllAmount =
    salesData.discountOnAllType === "Percent" ? (subtotal * discountOnAll) / 100 : discountOnAll;

  const grandTotal = subtotal + otherCharges - couponDiscountAmount - discountOnAllAmount;

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...salesData,
      items,
      derived: {
        totalQuantities,
        subtotal,
        couponDiscountAmount,
        discountOnAllAmount,
        otherCharges,
        grandTotal,
      },
    };

    // Replace with actual API call
    console.log("AddSales payload:", payload);
    alert("Check console for AddSales payload (demo)");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-8">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3">
          <h1 className="text-2xl font-semibold text-gray-800">Add / Update Sales</h1>
          <div className="text-sm text-gray-500">Sales Module</div>
        </div>

        {/* Sales Details */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Sales Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Warehouse <span className="text-red-500">*</span></label>
              <select
                name="warehouse"
                value={salesData.warehouse}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Warehouse</option>
                <option value="System Warehouse">System Warehouse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="customerName"
                  value={salesData.customerName}
                  onChange={handleChange}
                  placeholder="Search Name / Mobile"
                  className="flex-1 mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Sales Code</label>
              <input
                type="text"
                name="salesCode"
                value={salesData.salesCode}
                onChange={handleChange}
                placeholder="SL"
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Sales Date</label>
              <input
                type="date"
                name="salesDate"
                value={salesData.salesDate}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Reference No.</label>
              <input
                type="text"
                name="referenceNo"
                value={salesData.referenceNo}
                onChange={handleChange}
                placeholder="Reference Number"
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={salesData.dueDate}
                onChange={handleChange}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Add Items */}
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
              onClick={addItem}
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
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Discount</th>
                  <th className="px-4 py-2">Tax Amount</th>
                  <th className="px-4 py-2">Tax</th>
                  <th className="px-4 py-2">Total Amount</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-500 py-4 italic">No items added yet</td>
                  </tr>
                ) : (
                  items.map((it) => {
                    const itemTotal = computeItemTotal(it);
                    return (
                      <tr key={it.id} className="border-t">
                        <td className="px-4 py-2">
                          <input
                            name="name"
                            value={it.name}
                            onChange={(e) => updateItem(it.id, "name", e.target.value)}
                            className="w-full rounded border border-gray-200 px-2 py-1 text-sm"
                            placeholder="Item name"
                          />
                        </td>

                        <td className="px-4 py-2 w-28">
                          <input
                            name="quantity"
                            type="number"
                            min="0"
                            value={it.quantity}
                            onChange={handleItemChange(it.id)}
                            className="w-full rounded border border-gray-200 px-2 py-1 text-sm"
                          />
                        </td>

                        <td className="px-4 py-2 w-32">
                          <input
                            name="unitPrice"
                            type="number"
                            min="0"
                            step="0.01"
                            value={it.unitPrice}
                            onChange={handleItemChange(it.id)}
                            className="w-full rounded border border-gray-200 px-2 py-1 text-sm"
                          />
                        </td>

                        <td className="px-4 py-2 w-32">
                          <input
                            name="discount"
                            type="number"
                            min="0"
                            step="0.01"
                            value={it.discount}
                            onChange={handleItemChange(it.id)}
                            className="w-full rounded border border-gray-200 px-2 py-1 text-sm"
                          />
                        </td>

                        <td className="px-4 py-2 w-32">
                          <input
                            name="taxAmount"
                            type="number"
                            min="0"
                            step="0.01"
                            value={it.taxAmount}
                            onChange={handleItemChange(it.id)}
                            className="w-full rounded border border-gray-200 px-2 py-1 text-sm"
                          />
                        </td>

                        <td className="px-4 py-2 w-28">
                          <input
                            name="tax"
                            value={it.tax}
                            onChange={(e) => updateItem(it.id, "tax", e.target.value)}
                            className="w-full rounded border border-gray-200 px-2 py-1 text-sm"
                            placeholder="e.g. 5%"
                          />
                        </td>

                        <td className="px-4 py-2">₹ {itemTotal.toFixed(2)}</td>

                        <td className="px-4 py-2 text-center">
                          <button
                            type="button"
                            onClick={() => removeItem(it.id)}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Details + Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2 mb-3">Additional Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
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
                  value={salesData.otherCharges}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Discount Coupon Code</label>
                <input
                  type="text"
                  name="couponCode"
                  value={salesData.couponCode}
                  onChange={handleChange}
                  placeholder="Coupon Code"
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Coupon Value</label>
                  <input
                    type="number"
                    name="couponValue"
                    value={salesData.couponValue}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="w-36">
                  <label className="block text-sm font-medium text-gray-700">Coupon Type</label>
                  <select
                    name="couponType"
                    value={salesData.couponType}
                    onChange={handleChange}
                    className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Flat">Flat</option>
                    <option value="Percent">Percent</option>
                  </select>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Discount on All</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="discountOnAll"
                    value={salesData.discountOnAll}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="flex-1 mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <select
                    name="discountOnAllType"
                    value={salesData.discountOnAllType}
                    onChange={handleChange}
                    className="w-36 mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Flat">Flat</option>
                    <option value="Percent">Percent</option>
                  </select>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Note</label>
                <textarea
                  name="note"
                  value={salesData.note}
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
              <span>Coupon Discount</span>
              <span>₹ {couponDiscountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount on All</span>
              <span>₹ {discountOnAllAmount.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-gray-800">
              <span>Grand Total</span>
              <span>₹ {grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Previous Payments Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Previous Payments Information</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Payment Type</th>
                  <th className="px-4 py-2">Payment Note</th>
                  <th className="px-4 py-2">Payment</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 py-4 italic">Payments Pending!!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Invoice Terms & Make Payment */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Invoice Terms and Conditions</h2>
            <textarea
              writeable="true"

              rows={2}
              className="w-full mt-2 rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-50"
              placeholder="Enter invoice terms and conditions here..."
            />
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-700 border-b pb-2">Payment</h2>
            <div className="text-sm text-gray-600 mb-2">Advance: ₹ {Number(salesData.advanceAmount).toFixed(3)}</div>

            <div className="flex items-center gap-3 mb-3">
              <input
                type="checkbox"
                name="adjustAdvance"
                checked={salesData.adjustAdvance}
                onChange={handleChange}
                id="adjustAdvance"
              />
              <label htmlFor="adjustAdvance" className="text-sm text-gray-700">Adjust Advance Payment</label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <input
                  type="number"
                  name="paymentAmount"
                  value={salesData.paymentAmount}
                  onChange={handleChange}
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Type</label>
                <select
                  name="paymentType"
                  value={salesData.paymentType}
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
                  value={salesData.account}
                  onChange={handleChange}
                  className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">-None-</option>
                  <option value="System Account">System Account</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Payment Note</label>
              <textarea
                name="paymentNote"
                value={salesData.paymentNote}
                onChange={handleChange}
                rows={3}
                className="w-full mt-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 pt-6 border-t mt-4">
          <button
            type="submit"
            className="px-8 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-8 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
