import React from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../../components/DataTable"; // Adjust the import path if needed

const accounts = [
  {
    accountNumber: "AC0012",
    accountName: "aa",
    parentAccountName: "121312",
    balance: "1,500.000",
    createdBy: "johndoe12",
  },
  {
    accountNumber: "AC0011",
    accountName: "sdsad",
    parentAccountName: "121312",
    balance: "13,234.000",
    createdBy: "lokeshp",
  },
  {
    accountNumber: "AC0004",
    accountName: "Demo Account",
    parentAccountName: "121312",
    balance: "171,662.000",
    createdBy: "shubhampawar",
  },
  {
    accountNumber: "AC0003",
    accountName: "Private Account",
    parentAccountName: "",
    balance: "179,855.000",
    createdBy: "shubhampawar",
  },
];

const columns = [
  { header: "Account Number", key: "accountNumber" },
  { header: "Account Name", key: "accountName" },
  { header: "Parent Account Name", key: "parentAccountName" },
  { header: "Balance", key: "balance" },
  { header: "Created by", key: "createdBy" },
];

const AccountList = () => {
  const handleEdit = (row) => alert(`Edit ${row.accountNumber}`);
  const handleDelete = (row) => alert(`Delete ${row.accountNumber}`);
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
