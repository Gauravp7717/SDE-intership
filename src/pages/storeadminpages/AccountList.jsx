import React from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";

const accounts = [
  {
    accountName: "Cash",
    code: "AC001",
    parentAccount: "Assets",
    accountType: "Asset",
    description: "Cash in hand",
    balance: "10,000.00",
    status: "Active",
  },
  {
    accountName: "Bank of India",
    code: "AC002",
    parentAccount: "Assets",
    accountType: "Asset",
    description: "Bank account",
    balance: "24,000.00",
    status: "Active",
  },
  {
    accountName: "Sales Revenue",
    code: "AC003",
    parentAccount: "Revenue",
    accountType: "Income",
    description: "Income from sales",
    balance: "1,50,000.00",
    status: "Active",
  },
  {
    accountName: "Purchase Expense",
    code: "AC004",
    parentAccount: "Expenses",
    accountType: "Expense",
    description: "Money spent on purchases",
    balance: "-48,000.00",
    status: "Active",
  },
];

const columns = [
  { header: "Account Name", key: "accountName" },
  { header: "Code", key: "code" },
  { header: "Parent Account", key: "parentAccount" },
  { header: "Account Type", key: "accountType" },
  { header: "Description", key: "description" },
  { header: "Balance", key: "balance" },
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

const AccountList = () => {
  const handleEdit = (row) => alert(`Edit ${row.code}`);
  const handleDelete = (row) => alert(`Delete ${row.code}`);
  const navigate = useNavigate();
  const handleadd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Account List</h2>
      <DataTable
        columns={columns}
        data={accounts}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Account"
        onAdd={() => handleadd("/store/addaccount")}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AccountList;
