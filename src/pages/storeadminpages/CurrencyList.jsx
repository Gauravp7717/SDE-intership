import React from "react";
import DataTable from "../../components/DataTable"; // adjust import as needed

const currencies = [
  {
    currencyName: "USD",
    currencyCode: "1101",
    currencySymbol: "$",
    status: "Active",
  },
  {
    currencyName: "DEMO",
    currencyCode: "17e981",
    currencySymbol: "☀️",
    status: "Active",
  },
  {
    currencyName: "MUR",
    currencyCode: "121",
    currencySymbol: "₹",
    status: "Active",
  },
  {
    currencyName: "Indian Rupee",
    currencyCode: "INR",
    currencySymbol: "₹",
    status: "Active",
  },
];

const columns = [
  { header: "Currency Name", key: "currencyName" },
  { header: "Currency Code", key: "currencyCode" },
  { header: "Currency Symbol", key: "currencySymbol" },
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

const CurrencyList = () => {
  const handleEdit = (row) => alert(`Edit currency: ${row.currencyName}`);
  const handleDelete = (row) => alert(`Delete currency: ${row.currencyName}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Currencies List</h2>
      <DataTable
        columns={columns}
        data={currencies}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Currency"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CurrencyList;
