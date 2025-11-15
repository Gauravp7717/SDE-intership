import React from "react";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";

const quotationData = [
  {
    quotationDate: "18-10-2025",
    expireDate: "18-10-2025",
    quotationCode: "QT0005",
    referenceNo: "8797",
    customerName: "satyam",
    total: "690.000",
    createdBy: "lokeshp",
    warehouse: "Main Warehouse",
    formData: "Online",
    endDate: "19-10-2025",
    user: "admin",
  },
  {
    quotationDate: "27-09-2025",
    expireDate: "28-09-2025",
    quotationCode: "QT0004",
    referenceNo: "",
    customerName: "vaibhav pujari",
    total: "110,000.000",
    createdBy: "shubhampawar",
    warehouse: "Secondary Warehouse",
    formData: "Offline",
    endDate: "29-09-2025",
    user: "salesperson1",
  },
  {
    quotationDate: "16-09-2025",
    expireDate: "30-09-2025",
    quotationCode: "QT0003",
    referenceNo: "dsd33",
    customerName: "satyam",
    total: "730.000",
    createdBy: "shubhampawar",
    warehouse: "Main Warehouse",
    formData: "Online",
    endDate: "01-10-2025",
    user: "admin",
  },
];

const columns = [
  { header: "Quotation Date", key: "quotationDate" },
  { header: "Expire Date", key: "expireDate" },
  { header: "Quotation Code", key: "quotationCode" },
  { header: "Reference No.", key: "referenceNo" },
  { header: "Customer Name", key: "customerName" },
  { header: "Total", key: "total" },
  { header: "Created by", key: "createdBy" },
  { header: "Warehouse", key: "warehouse" },
  { header: "Form Data", key: "formData" },
  { header: "End Date", key: "endDate" },
  { header: "User", key: "user" },
  // Do not add "Action" here! DataTable will generate the action column
];

const QuotationList = () => {
  const handleEdit = (row) => alert(`Edit ${row.quotationCode}`);
  const handleDelete = (row) => alert(`Delete ${row.quotationCode}`);
  const navigate = useNavigate();

  const handelQuatation = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Quotation List</h2>
      <DataTable
        columns={columns}
        data={quotationData}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Quotation"
        onAdd={() => {
          handelQuatation("/store/newquotation");
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default QuotationList;
