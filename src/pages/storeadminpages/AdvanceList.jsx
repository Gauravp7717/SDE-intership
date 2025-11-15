import React from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";

const advancePayments = [
  {
    id: "ADV0006",
    date: "16-10-2025",
    customerName: "Test User",
    amount: "5,555.000",
    paymentType: "ONLINE",
    createdBy: "johndoe12",
  },
  {
    id: "ADV0004",
    date: "30-09-2025",
    customerName: "Walk-in customer",
    amount: "100,000.000",
    paymentType: "CASH",
    createdBy: "shubhampawar",
  },
  {
    id: "ADV0003",
    date: "27-09-2025",
    customerName: "Walk-in customer",
    amount: "100,000.000",
    paymentType: "CASH",
    createdBy: "shubhampawar",
  },
  {
    id: "ADV0002",
    date: "27-09-2025",
    customerName: "vaibhav pujari",
    amount: "5,000.000",
    paymentType: "CASH",
    createdBy: "shubhampawar",
  },
];

const columns = [
  { header: "ID", key: "id" },
  { header: "Date", key: "date" },
  { header: "Customer Name", key: "customerName" },
  { header: "Amount", key: "amount" },
  { header: "Payment Type", key: "paymentType" },
  { header: "Created by", key: "createdBy" },
  // Don't add "Action" here! DataTable will generate the action column
];

const AdvanceList = () => {
  // Handler stubs
  const handleEdit = (row) => {
    alert(`Edit ${row.id}`);
  };

  const handleDelete = (row) => {
    alert(`Delete ${row.id}`);
  };

  const navigate = useNavigate();
  const handeladdAdvance = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        Advance Payments List
      </h2>
      <DataTable
        columns={columns}
        data={advancePayments}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Advance Payment"
        onAdd={() => {
          handeladdAdvance("/store/addadvance");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdvanceList;
