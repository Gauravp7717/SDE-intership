import React, { useState, useRef } from "react";
import InvoiceStatsCards from "../../components/InvoiceStatsCards";
import DataTable from "../../components/DataTable";
import { useNavigate } from "react-router-dom";

const SalesList = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("list");
  const [formData, setFormData] = useState({
    name: "",
    orgId: "",
    plan: "",
  });
  const modalRef = useRef();

  const handleClose = () => setActivePage("list");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
    handleClose();
  };

  // 🧾 Sales List Data
  const salesData = [
    {
      id: 1,
      salesDate: "25-10-2025",
      dueDate: "",
      salesCode: "SL71",
      referenceNo: "",
      customerName: "Walk-in customer",
      total: "1,380.000",
      paidPayment: "1,380.000",
      paymentStatus: "Paid",
      createdBy: "lokeshp",
    },
    {
      id: 2,
      salesDate: "24-10-2025",
      dueDate: "",
      salesCode: "SL70",
      referenceNo: "",
      customerName: "Walk-in customer",
      total: "690",
      paidPayment: "690",
      paymentStatus: "Paid",
      createdBy: "lokeshp",
    },
    {
      id: 3,
      salesDate: "17-10-2025",
      dueDate: "",
      salesCode: "SL68",
      referenceNo: "",
      customerName: "NEOS / ZORBAS THE GREEK",
      total: "11,498.850",
      paidPayment: "11,498.850",
      paymentStatus: "Paid",
      createdBy: "johndoe12",
    },
    {
      id: 4,
      salesDate: "15-10-2025",
      dueDate: "",
      salesCode: "SL66 Return Raised",
      referenceNo: "",
      customerName: "NEOS / ZORBAS THE GREEK",
      total: "138,000.000",
      paidPayment: "138,000.000",
      paymentStatus: "Paid",
      createdBy: "johndoe12",
    },
    {
      id: 5,
      salesDate: "30-09-2025",
      dueDate: "",
      salesCode: "SL56",
      referenceNo: "",
      customerName: "Walk-in customer",
      total: "110,000.000",
      paidPayment: "110,000.000",
      paymentStatus: "Paid",
      createdBy: "shubhampawar",
    },
    {
      id: 6,
      salesDate: "30-09-2025",
      dueDate: "",
      salesCode: "SL54",
      referenceNo: "",
      customerName: "FOOD FOR THOUGHT",
      total: "999",
      paidPayment: "999",
      paymentStatus: "Paid",
      createdBy: "shubhampawar",
    },
    {
      id: 7,
      salesDate: "30-09-2025",
      dueDate: "",
      salesCode: "SL51",
      referenceNo: "",
      customerName: "Sumit",
      total: "376.881",
      paidPayment: "376.881",
      paymentStatus: "Paid",
      createdBy: "shubhampawar",
    },
    {
      id: 8,
      salesDate: "30-09-2025",
      dueDate: "",
      salesCode: "SL50",
      referenceNo: "",
      customerName: "Walk-in customer",
      total: "10,000.000",
      paidPayment: "10,000.000",
      paymentStatus: "Paid",
      createdBy: "shubhampawar",
    },
    {
      id: 9,
      salesDate: "30-09-2025",
      dueDate: "",
      salesCode: "SL48",
      referenceNo: "",
      customerName: "amit",
      total: "499",
      paidPayment: "499",
      paymentStatus: "Paid",
      createdBy: "shubhampawar",
    },
    {
      id: 10,
      salesDate: "30-09-2025",
      dueDate: "",
      salesCode: "SL45 Return Raised",
      referenceNo: "",
      customerName: "amit",
      total: "110,000.000",
      paidPayment: "110,000.000",
      paymentStatus: "Paid",
      createdBy: "shubhampawar",
    },
  ];

  // 💡 Column Configuration
  const columns = [
    { header: "Sales Date", key: "salesDate" },
    { header: "Due Date", key: "dueDate" },
    { header: "Sales Code", key: "salesCode" },
    { header: "Reference No.", key: "referenceNo" },
    { header: "Customer Name", key: "customerName" },
    { header: "Total", key: "total" },
    { header: "Paid Payment", key: "paidPayment" },
    {
      header: "Payment Status",
      key: "paymentStatus",
      render: (value) => (
        <span
          className={`px-3 py-0.5 rounded-full text-xs font-medium ${
            value === "Paid"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    { header: "Created by", key: "createdBy" },
  ];

  const handleEdit = (sale) => {
    console.log("Edit clicked:", sale);
  };

  const handleDelete = (sale) => {
    console.log("Delete clicked:", sale);
  };

  const handeladd = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats cards */}
      <InvoiceStatsCards />

      {/* Table */}
      <DataTable
        columns={columns}
        data={salesData}
        entriesPerPage={10}
        onEdit={handleEdit}
        onDelete={handleDelete}
        showFilter={true}
        addButtonText="New Sale"
        onAdd={() => handeladd("/store/addsales")}
      />
    </div>
  );
};

export default SalesList;
