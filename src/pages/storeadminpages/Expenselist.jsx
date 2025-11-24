import React from "react";
import DataTable from "../../components/DataTable"; // adjust import path as needed
import { useNavigate } from "react-router-dom";

const expenses = [
  {
    date: "17-10-2025",
    category: "Marketing",
    referenceNo: "",
    expenseFor: "Accounts Section",
    amount: "1,888,888,888.000",
    account: "",
    note: "",
    createdBy: "johndoe12",
  },
  {
    date: "16-10-2025",
    category: "Hardware",
    referenceNo: "",
    expenseFor: "Jio Router",
    amount: "500.000",
    account: "",
    note: "",
    createdBy: "johndoe12",
  },
  {
    date: "16-10-2025",
    category: "Hardware",
    referenceNo: "",
    expenseFor: "Accounts Section",
    amount: "200.000",
    account: "",
    note: "",
    createdBy: "johndoe12",
  },
  {
    date: "29-09-2025",
    category: "Logistics",
    referenceNo: "",
    expenseFor: "Store",
    amount: "800.000",
    account: "Private Account",
    note: "",
    createdBy: "shubhampawar",
  },
  {
    date: "27-09-2025",
    category: "Marketing",
    referenceNo: "",
    expenseFor: "Store",
    amount: "200.000",
    account: "Private Account",
    note: "",
    createdBy: "shubhampawar",
  },
];

const columns = [
  { header: "Date", key: "date" },
  { header: "Category", key: "category" },
  { header: "Reference No.", key: "referenceNo" },
  { header: "Expense for", key: "expenseFor" },
  { header: "Amount", key: "amount" },
  { header: "Account", key: "account" },
  { header: "Note", key: "note" },
  { header: "Created by", key: "createdBy" },
];

const Expenselist = () => {
  const handleEdit = (row) => alert(`Edit expense for ${row.expenseFor}`);
  const handleDelete = (row) => alert(`Delete expense for ${row.expenseFor}`);
  const navigate = useNavigate();
  const handeladd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Expense List</h2>
      <DataTable
        columns={columns}
        data={expenses}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Expense"
        onAdd={() => {
          handeladd("/store/addexpence");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Expenselist;
