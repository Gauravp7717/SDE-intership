import React, { useState } from "react";
import DataTable from "../../components/DataTable"; // adjust path as needed
import { useNavigate } from "react-router-dom";

const adjustments = [
  {
    adjustmentDate: "27-10-2025",
    referenceNo: "",
    createdBy: "lokeshp",
    warehouse: "System Warehouse",
  },
  {
    adjustmentDate: "16-10-2025",
    referenceNo: "",
    createdBy: "johndoe12",
    warehouse: "Al Amerat Store",
  },
  {
    adjustmentDate: "16-10-2025",
    referenceNo: "",
    createdBy: "johndoe12",
    warehouse: "XZZCZczx",
  },
];

const columns = [
  { header: "Adjustment Date", key: "adjustmentDate" },
  { header: "Reference No.", key: "referenceNo" },
  { header: "Created by", key: "createdBy" },
];

const warehouseOptions = [
  "-All Warehouses-",
  "System Warehouse",
  "Al Amerat Store",
  "XZZCZczx",
];

const AdjustmentList = () => {
  const [warehouse, setWarehouse] = useState("-All Warehouses-");

  // Filter rows by selected warehouse
  const filtered =
    warehouse === "-All Warehouses-"
      ? adjustments
      : adjustments.filter((a) => a.warehouse === warehouse);

  const handleEdit = (row) => alert(`Edit adjustment by ${row.createdBy}`);
  const handleDelete = (row) => alert(`Delete adjustment by ${row.createdBy}`);
  const navigate = useNavigate();
  const handeladd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Print Variable (Adjustments)
      </h2>
      {/* Warehouse dropdown filter */}
      <div className="mb-4 flex items-center gap-4">
        <label className="text-sm font-semibold text-gray-600">
          Warehouse:
        </label>
        <select
          value={warehouse}
          onChange={(e) => setWarehouse(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          {warehouseOptions.map((w) => (
            <option key={w} value={w}>
              {w}
            </option>
          ))}
        </select>
      </div>
      <DataTable
        columns={columns}
        data={filtered}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Adjustment"
        onAdd={() => {
          handeladd("/store/addadjustment");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdjustmentList;
