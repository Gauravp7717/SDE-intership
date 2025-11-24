import React from "react";
import DataTable from "../../components/DataTable"; // adjust import path as needed
import { useNavigate } from "react-router-dom";

const transfers = [
  {
    transferDate: "27-10-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "Al Amerat Store",
    details: "Items: 1",
    note: "Quantity: 60.00",
    createdBy: "lokeshp",
  },
  {
    transferDate: "23-10-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "XZZCZ",
    details: "Items: 1",
    note: "Quantity: 40.00 saas",
    createdBy: "lokeshp",
  },
  {
    transferDate: "18-10-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "Al Amerat Store",
    details: "Items: 1",
    note: "Quantity: 20.00 dasd",
    createdBy: "lokeshp",
  },
  {
    transferDate: "16-10-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "Al Amerat Store",
    details: "Items: 1",
    note: "Quantity: 100.00",
    createdBy: "johndoe12",
  },
  {
    transferDate: "16-10-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "Al Amerat Store",
    details: "Items: 1",
    note: "Quantity: 100.00",
    createdBy: "johndoe12",
  },
  {
    transferDate: "16-10-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "Al Amerat Store",
    details: "Items: 1",
    note: "Quantity: 55.00",
    createdBy: "johndoe12",
  },
  {
    transferDate: "26-09-2025",
    fromWarehouse: "System Warehouse",
    toWarehouse: "Al Amerat Store",
    details: "Items: 1",
    note: "Quantity: 5.00",
    createdBy: "shubhampawar",
  },
];

const columns = [
  { header: "Transfer Date", key: "transferDate" },
  { header: "From Warehouse", key: "fromWarehouse" },
  { header: "To Warehouse", key: "toWarehouse" },
  { header: "Details", key: "details" },
  { header: "Note", key: "note" },
  { header: "Created by", key: "createdBy" },
];

const TransferList = () => {
  const handleEdit = (row) => alert(`Edit transfer by ${row.createdBy}`);
  const handleDelete = (row) => alert(`Delete transfer by ${row.createdBy}`);
  const navigate = useNavigate();
  const handeladd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Stock Transfer List
      </h2>
      <DataTable
        columns={columns}
        data={transfers}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Transfer"
        onAdd={() => {
          handeladd("/store/addtransfer");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TransferList;
