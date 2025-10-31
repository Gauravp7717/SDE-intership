import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function UnitsListTable() {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const allUnits = [
    { id: 1, name: "GM", description: "", status: "Active" },
    { id: 2, name: "400g", description: "", status: "Active" },
    { id: 3, name: "KILO", description: "", status: "Active" },
    { id: 4, name: "330ml", description: "", status: "Active" },
    { id: 5, name: "330", description: "", status: "Active" },
    { id: 6, name: "312G", description: "", status: "Active" },
    { id: 7, name: "200ml", description: "", status: "Active" },
    { id: 8, name: "45g", description: "", status: "Active" },
    { id: 9, name: "100ml", description: "", status: "Active" },
    { id: 10, name: "230ml", description: "", status: "Active" },
    ...Array.from({ length: 46 }, (_, i) => ({
      id: 11 + i,
      name: `Unit ${11 + i}`,
      description: "",
      status: "Active",
    })),
  ];

  const filteredUnits = allUnits.filter((unit) =>
    unit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUnits.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentUnits = filteredUnits.slice(startIndex, endIndex);

  const getPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= Math.min(6, totalPages); i++) {
      buttons.push(i);
    }
    return buttons;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">Units List</h1>
          <button
           className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 flex items-center gap-2">
            + New Unit
          </button>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-gray-700"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-gray-600">entries</span>
          </div>

          <div className="flex gap-2">
            <button className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500">
              Copy
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Excel
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              PDF
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Print
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              CSV
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              Columns
            </button>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                Search:
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded pl-20 pr-4 py-2 w-64"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Unit Name
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Description
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Status
                </th>
                <th className="text-left p-4 text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUnits.map((unit) => (
                <tr key={unit.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-800">{unit.name}</td>
                  <td className="p-4 text-gray-600">{unit.description}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">
                      {unit.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 flex items-center gap-1">
                      Action
                      <ChevronDown size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-4 border-t">
          <div className="text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredUnits.length)} of {filteredUnits.length}{" "}
            entries
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
