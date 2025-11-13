import React from "react";
import DataTable from "../../components/DataTable"; // adjust import as needed

const warehouses = [
  {
    warehouseName: "XZZCZ",
    mobile: "7645454545",
    email: "GDG@GMAIL.COM",
    details: "Total Items: 1\nAvailable Quantity: 40.00\nWorth: ₹ 24000.000",
    status: "Active",
  },
  {
    warehouseName: "czx",
    mobile: "7544333333",
    email: "xzfas@gmail.com",
    details: "Total Items: 0\nAvailable Quantity: 0.00\nWorth: ₹0",
    status: "Active",
  },
];

const columns = [
  { header: "Warehouse Name", key: "warehouseName" },
  { header: "Mobile", key: "mobile" },
  { header: "Email", key: "email" },
  {
    header: "Details",
    key: "details",
    render: (value) => <div style={{ whiteSpace: "pre-line" }}>{value}</div>,
  },
  {
    header: "Status",
    key: "status",
    render: (value) => (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
          value === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {value}
      </span>
    ),
  },
];

const WarehouseList = () => {
  const handleEdit = (row) => alert(`Edit warehouse: ${row.warehouseName}`);
  const handleDelete = (row) => alert(`Delete warehouse: ${row.warehouseName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Warehouse List</h2>
      <DataTable
        columns={columns}
        data={warehouses}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Warehouse"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default WarehouseList;
