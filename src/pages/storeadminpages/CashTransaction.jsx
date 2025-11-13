import React, { useState } from "react";
import DataTable from "../../components/DataTable";
import Filter from "../../components/Filter"; // adjust path if needed

const paymentData = [
  {
    date: "09-08-2024",
    paymentCode: "EX0001",
    paymentType: "CASH",
    paymentNote: "100.000",
    createdBy: "Satyajit Nikam",
    account: "Demo Account",
    user: "Satyajit Nikam",
  },
  {
    date: "23-01-2025",
    paymentCode: "SP0001",
    paymentType: "CASH",
    paymentNote: "446.000",
    createdBy: "Satyajit Nikam",
    account: "121312",
    user: "Satyajit Nikam",
  },
  {
    date: "23-01-2025",
    paymentCode: "SP0002",
    paymentType: "Cash",
    paymentNote: "446.000",
    createdBy: "Satyajit Nikam",
    account: "Demo Account",
    user: "Satyajit Nikam",
  },
  {
    date: "23-01-2025",
    paymentCode: "SP0003",
    paymentType: "Cash",
    paymentNote: "179.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
  {
    date: "23-01-2025",
    paymentCode: "SP0004",
    paymentType: "Cash",
    paymentNote: "134.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
  {
    date: "11-02-2025",
    paymentCode: "SP0005",
    paymentType: "Cash",
    paymentNote: "3,224.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
  {
    date: "11-02-2025",
    paymentCode: "SP0006",
    paymentType: "Cash",
    paymentNote: "1,131.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
  {
    date: "28-05-2025",
    paymentCode: "SP0007",
    paymentType: "CASH",
    paymentNote: "867.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
  {
    date: "28-05-2025",
    paymentCode: "SP0008",
    paymentType: "Cash",
    paymentNote: "377.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
  {
    date: "04-06-2025",
    paymentCode: "SP0009",
    paymentType: "Cash",
    paymentNote: "754.000",
    createdBy: "Satyajit Nikam",
    account: "",
    user: "Satyajit Nikam",
  },
];

const columns = [
  { header: "Date", key: "date" },
  { header: "Payment Code", key: "paymentCode" },
  { header: "Payment Type", key: "paymentType" },
  { header: "Payment Note", key: "paymentNote" },
  { header: "Created by", key: "createdBy" },
  { header: "Account", key: "account" },
];

const CashTransaction = () => {
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    user: "",
  });

  // Filtering logic
  const filteredData = paymentData.filter((item) => {
    const dateValue = item.date.split("-").reverse().join(""); // Format yyyyMMdd for lexicographic comparison
    const from = filters.fromDate
      ? filters.fromDate.split("-").reverse().join("")
      : null;
    const to = filters.toDate
      ? filters.toDate.split("-").reverse().join("")
      : null;
    const userMatch =
      !filters.user ||
      item.user === filters.user ||
      item.createdBy === filters.user;

    const dateMatch = (!from || dateValue >= from) && (!to || dateValue <= to);

    return dateMatch && userMatch;
  });

  const handleEdit = (row) => alert(`Edit ${row.paymentCode}`);
  const handleDelete = (row) => alert(`Delete ${row.paymentCode}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Payment List</h2>
      <Filter
        fields={["fromDate", "toDate", "user"]}
        onFilterChange={setFilters}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Payment"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CashTransaction;
