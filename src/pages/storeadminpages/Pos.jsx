import { Icon, TvMinimal } from "lucide-react";
import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Pos() {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // ENTER fullscreen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // EXIT fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  const navigate = useNavigate();
  const handelnav = (path) => {
    navigate(path);
  };
  return (
    <div className="w-full h-screen p-6  overflow-y-auto p-20">
      <div className="w-full fixed top-0 left-0 z-50 bg-white shadow flex items-center justify-between px-6 h-16 ">
        <div className="flex items-center gap-2 text-xl font-bold text-gray-700">
          <span className="text-blue-600">POS</span> Dashboard
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition hover:bg-blue-600 hover:text-white"
            onClick={() => handelnav("/store/dashboard")}
          >
            Dashboard
          </button>
          <button
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition hover:bg-blue-600 hover:text-white"
            onClick={() => handelnav("/store/saleslist")}
          >
            Sales List
          </button>
          <button
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition hover:bg-blue-600 hover:text-white"
            onClick={() => handelnav("/store/customerlist")}
          >
            Customer List
          </button>
          <button
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full transition hover:bg-blue-600 hover:text-white"
            onClick={() => {
              handelnav("/store/itemlist");
            }}
          >
            Item List
          </button>
          <button>Hold list</button>
          <TvMinimal className="cursor-pointer " onClick={toggleFullScreen} />
        </div>
        {/* User Profile Section */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
            {/* Profile Initial, replace with image if needed */}U
          </div>
          <div className="text-gray-700 text-sm">John Doe</div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT SIDE */}
        <div className="col-span-7 bg-white rounded-xl shadow p-4">
          {/* TOP ROW */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            <select className="border p-2 rounded w-full">
              <option>System Warehouse</option>
            </select>
            <input
              type="text"
              placeholder="SL"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              placeholder="73"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* CUSTOMER SECTION */}
          <div className="mb-3">
            <div className="flex items-center justify-between border p-2 rounded">
              <div className="text-gray-700 font-medium">Walk-in customer</div>
            </div>
            <div className="mt-1 text-red-500 text-sm font-semibold">
              Previous Due : 183656.000
            </div>
          </div>

          {/* ITEM SEARCH */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Item name/Barcode/Itemcode"
              className="border p-2 rounded flex-1"
            />
            <button className="bg-blue-600 text-white px-4 rounded">+</button>
          </div>

          {/* TABLE */}
          <div className="overflow-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-2 text-left">Item Name</th>
                  <th className="p-2 text-center">Stock</th>
                  <th className="p-2 text-center">Quantity</th>
                  <th className="p-2 text-center">Price</th>
                  <th className="p-2 text-center">Discount</th>
                  <th className="p-2 text-center">Tax</th>
                  <th className="p-2 text-center">Subtotal</th>
                  <th className="p-2 text-center">X</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((x, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">Sample Item {i + 1}</td>
                    <td className="p-2 text-center">7.00</td>
                    <td className="p-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <FaMinus className="cursor-pointer" />
                        1.00
                        <FaPlus className="cursor-pointer" />
                      </div>
                    </td>
                    <td className="p-2 text-center">1552.500</td>
                    <td className="p-2 text-center">0.000</td>
                    <td className="p-2 text-center">202.500</td>
                    <td className="p-2 text-center">1552.500</td>
                    <td className="p-2 text-center">
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MESSAGE CHECKBOX */}
          <div className="mt-4 flex items-center gap-2 text-sm">
            <input type="checkbox" /> Send Message to Customer
          </div>

          {/* FOOTER TOTALS */}
          <div className="mt-6 grid grid-cols-4 gap-4 text-center text-sm font-semibold">
            <div>Quantity: 3.00</div>
            <div>Total Amount: ₹ 2332.014</div>
            <div>Total Discount: ₹ 0.000</div>
            <div>Grand Total: ₹ 2332.014</div>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-3">
            <button className="flex-1 bg-pink-500 text-white py-3 rounded-lg">
              Hold
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg">
              Multiple
            </button>
            <button className="flex-1 bg-green-600 text-white py-3 rounded-lg">
              Cash
            </button>
            <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg">
              Pay All
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-5 bg-white rounded-xl shadow p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <select className="border p-2 rounded w-full">
              <option> All Categories </option>
              <option>Electronic</option>
              <option>BEEF</option>
              <option>CHIKEN</option>
              <option>PORK</option>
            </select>
            <select className="border p-2 rounded w-full">
              <option>All Brands</option>
              <option>Samsung</option>
              <option>LG</option>
              <option>Apple</option>
              <option>OnePlus</option>
            </select>
            <input
              type="text"
              placeholder="Search Item"
              className="border p-2 rounded w-full"
            />
          </div>

          {/* ITEMS GRID */}
          <div className="grid grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-1">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="border rounded-xl p-2 shadow text-center text-sm"
              >
                <div className="bg-gray-200 h-24 rounded mb-2"></div>
                <div className="font-medium">Sample Item {i + 1}</div>
                <div className="text-gray-600">₹ 701.314</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-500 text-sm">
        Copyright © 2025 All rights reserved.
      </div>
    </div>
  );
}
