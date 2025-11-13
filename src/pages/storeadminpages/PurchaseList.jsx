import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import InvoiceStatsCards from "../../components/InvoiceStatsCards";

const purchases = [
  {
    purchaseDate: "27-10-2025",
    purchaseCode: "PU0026",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "EZ tech",
    total: "50,000.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "lokeshp",
    warehouse: "Main Warehouse",
  },
  {
    purchaseDate: "16-10-2025",
    purchaseCode: "PU0025",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "demo",
    total: "575.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "lokeshp",
    warehouse: "Main Warehouse",
  },
  {
    purchaseDate: "16-10-2025",
    purchaseCode: "PU0024",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Molchand mill pvt ltd.",
    total: "6,877.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "johndoe12",
    warehouse: "Secondary Warehouse",
  },
  {
    purchaseDate: "16-10-2025",
    purchaseCode: "PU0023",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Molchand mill pvt ltd.",
    total: "17,192.500",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "johndoe12",
    warehouse: "Secondary Warehouse",
  },
  {
    purchaseDate: "16-10-2025",
    purchaseCode: "PU0022",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Molchand mill pvt ltd.",
    total: "344.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "johndoe12",
    warehouse: "Secondary Warehouse",
  },
  {
    purchaseDate: "01-10-2025",
    purchaseCode: "PU0019",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Chitale and sons",
    total: "71.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "shubhampawar",
    warehouse: "Main Warehouse",
  },
  {
    purchaseDate: "01-10-2025",
    purchaseCode: "PU0018",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Molchand mill pvt ltd.",
    total: "460.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "shubhampawar",
    warehouse: "Secondary Warehouse",
  },
  {
    purchaseDate: "30-09-2025",
    purchaseCode: "PU0017",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Boat PVT LTD",
    total: "508,000.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "shubhampawar",
    warehouse: "Main Warehouse",
  },
  {
    purchaseDate: "30-09-2025",
    purchaseCode: "PU0016",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Chitale and sons",
    total: "1,500.000",
    paidPayment: "0.000",
    paymentStatus: "Unpaid",
    createdBy: "shubhampawar",
    warehouse: "Main Warehouse",
  },
  {
    purchaseDate: "30-09-2025",
    purchaseCode: "PU0015",
    purchaseStatus: "Received",
    referenceNo: "",
    supplierName: "Balaji And Sons Pvt Ltd",
    total: "500.000",
    paidPayment: "500.000",
    paymentStatus: "Paid",
    createdBy: "shubhampawar",
    warehouse: "Secondary Warehouse",
  },
];

const columns = [
  { header: "Purchase Date", key: "purchaseDate" },
  { header: "Purchase Code", key: "purchaseCode" },
  { header: "Purchase Status", key: "purchaseStatus" },
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

// Unique warehouses for filter dropdown
const warehouseOptions = [...new Set(purchases.map((p) => p.warehouse))];

const PurchaseList = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState("");

  // Filter data if warehouse is selected
  const displayedPurchases = selectedWarehouse
    ? purchases.filter((p) => p.warehouse === selectedWarehouse)
    : purchases;

  const handleEdit = (row) => alert(`Edit ${row.purchaseCode}`);
  const handleDelete = (row) => alert(`Delete ${row.purchaseCode}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Purchase List</h2>

      <InvoiceStatsCards />
      {/* Warehouse Dropdown */}
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
        data={displayedPurchases}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Purchase"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PurchaseList;
