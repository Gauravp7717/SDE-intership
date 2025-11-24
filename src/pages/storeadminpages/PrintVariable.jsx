import React, { useState } from "react";
import { FaBarcode, FaTrash } from "react-icons/fa";

export default function PrintVariable() {
  const [search, setSearch] = useState("");
  const [labels, setLabels] = useState([]);

  const handleAdd = () => {
    if (!search.trim()) return;
    const newItem = {
      id: Date.now(),
      name: search || "Item Name",
      qty: 1,
    };
    setLabels([...labels, newItem]);
    setSearch("");
  };

  const handleQtyChange = (id, value) => {
    setLabels(
      labels.map((item) =>
        item.id === id ? { ...item, qty: Number(value) } : item
      )
    );
  };

  const handleDelete = (id) => {
    setLabels(labels.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full p-6 bg-white shadow rounded-xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Print Labels</h1>
        <p className="text-sm text-gray-500">Add/Update Sales</p>
      </div>

      {/* Search Bar */}
      <div className="w-full mb-6 flex items-center gap-3">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full shadow-sm border">
          <FaBarcode className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Item name / Barcode / Itemcode"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
        <button
          onClick={handleAdd}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-600 text-white text-sm uppercase">
              <th className="py-3 px-4 w-1/2">Item Name</th>
              <th className="py-3 px-4 w-1/4 text-center">Quantity</th>
              <th className="py-3 px-4 w-1/4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {labels.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500">
                  No items added
                </td>
              </tr>
            ) : (
              labels.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.name}</td>

                  <td className="py-3 px-4 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) => handleQtyChange(item.id, e.target.value)}
                      className="w-20 text-center border rounded-md p-1"
                    />
                  </td>

                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold text-gray-700">
          Total Labels:{" "}
          <span className="text-green-600">
            {labels.reduce((a, b) => a + b.qty, 0)}
          </span>
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Preview
          </button>
          <button className="px-8 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">
            Close
          </button>
        </div>
      </div>

      {/* Print Button */}
      <div className="flex justify-end mt-8">
        <button className="px-10 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition">
          Print
        </button>
      </div>
    </div>
  );
}
