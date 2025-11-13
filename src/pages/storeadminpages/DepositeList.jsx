import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import Filter from "../../components/Filter"; // adjust import if needed

const transfers = [
  {
    transferCode: "MT0002",
    transferDate: "19-10-2025",
    referenceNo: "CCCCCCCCCCC",
    debitAccount: "121312",
    creditAccount: "ACSD",
    amount: "110.000",
    createdBy: "lokeshp",
    warehouse: "Main Warehouse",
    warehouse2: "Secondary Warehouse",
    user: "admin",
  },
];

// All other table columns
const columns = [
  { header: "Transfer Code", key: "transferCode" },
  { header: "Transfer Date", key: "transferDate" },
  { header: "Reference No.", key: "referenceNo" },
  { header: "Debit Account", key: "debitAccount" },
  { header: "Credit Account", key: "creditAccount" },
  { header: "Amount", key: "amount" },
  { header: "Created by", key: "createdBy" },
  { header: "Warehouse", key: "warehouse" },
  { header: "Warehouse 2", key: "warehouse2" },
  { header: "User", key: "user" },
];

const DepositeList = () => {
  const [filter, setFilter] = useState({
    fromDate: "",
    warehouse: "",
    warehouse2: "",
    user: "",
  });

  // Filter logic
  const filteredTransfers = transfers.filter(
    (t) =>
      (!filter.fromDate || t.transferDate >= filter.fromDate) &&
      (!filter.warehouse || t.warehouse === filter.warehouse) &&
      (!filter.warehouse2 || t.warehouse2 === filter.warehouse2) &&
      (!filter.user || t.user === filter.user)
  );

  // Handlers for actions
  const handleEdit = (row) => alert(`Edit ${row.transferCode}`);
  const handleDelete = (row) => alert(`Delete ${row.transferCode}`);

  // Handler for filter changes
  const handleFilterChange = (changedFilter) => setFilter(changedFilter);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Money Transfer List
      </h2>
      {/* Reusable Filter dropdowns/inputs */}
      <Filter
        fields={["fromDate", "warehouse", "warehouse2", "user"]}
        onFilterChange={handleFilterChange}
      />

      <DataTable
        columns={columns}
        data={filteredTransfers}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Money Transfer"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DepositeList;
