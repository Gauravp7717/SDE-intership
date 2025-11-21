import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import InvoiceStatsCards from "../../components/InvoiceStatsCards";
import { useNavigate } from "react-router-dom";

const purchaseReturns = [
  {
    date: "15-10-2025",
    purchaseCode: "PU0020",
    returnCode: "PR0001",
    returnStatus: "Return",
    referenceNo: "",
    supplierName: "demo",
    total: "12,000.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "johndoe12",
    warehouse: "Main Warehouse",
  },
  {
    date: "15-10-2025",
    purchaseCode: "PU0021",
    returnCode: "PR0002",
    returnStatus: "Return",
    referenceNo: "",
    supplierName: "Balaji And Sons Pvt Ltd",
    total: "743.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "johndoe12",
    warehouse: "Secondary Warehouse",
  },
];

const columns = [
  { header: "Date", key: "date" },
  { header: "Purchase Code", key: "purchaseCode" },
  { header: "Return Code", key: "returnCode" },
  { header: "Return Status", key: "returnStatus" },
  { header: "Reference No.", key: "referenceNo" },
  { header: "Supplier Name", key: "supplierName" },
  { header: "Total", key: "total" },
  { header: "Paid Payment", key: "paidPayment" },
  {
    header: "Payment Status",
    key: "paymentStatus",
    render: (value) => (
      <span
        className={`px-3 py-0.5 rounded-full text-xs font-medium ${
          value === "Paid"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {value}
      </span>
    ),
  },
  { header: "Created by", key: "createdBy" },
  { header: "Warehouse", key: "warehouse" },
];

// Unique warehouses for dropdown
const warehouseOptions = [...new Set(purchaseReturns.map((p) => p.warehouse))];

const PurchaseReturnList = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState("");

  // Filter data based on warehouse
  const displayedData = selectedWarehouse
    ? purchaseReturns.filter((p) => p.warehouse === selectedWarehouse)
    : purchaseReturns;

  const handleEdit = (row) => alert(`Edit ${row.returnCode}`);
  const handleDelete = (row) => alert(`Delete ${row.returnCode}`);
  const navigate = useNavigate();

  const handelnav = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Purchase Return List
      </h2>
      <InvoiceStatsCards />
      <div className="mb-4 flex items-center gap-4">
        <label className="text-sm font-semibold text-gray-600">
          Warehouse:
        </label>
        <select
          value={selectedWarehouse}
          onChange={(e) => setSelectedWarehouse(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="">All Warehouses</option>
          {warehouseOptions.map((wh) => (
            <option key={wh} value={wh}>
              {wh}
            </option>
          ))}
        </select>
      </div>
      <DataTable
        columns={columns}
        data={displayedData}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Purchase Return"
        onAdd={() => {
          handelnav("/store/purchasereturnform");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PurchaseReturnList;
