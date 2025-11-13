import React, { useState, useRef } from "react";
import DataTable from "../../components/DataTable";
import InvoiceStatsCards from "../../components/InvoiceStatsCards";

const SalesReturn = () => {
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
    // ... other sales data
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

  return (
    <div className="p-6 space-y-6">
      <InvoiceStatsCards />
      <DataTable
        columns={columns}
        data={salesData}
        entriesPerPage={10}
        onEdit={handleEdit}
        onDelete={handleDelete}
        filterFields={["warehouse"]}
        showFilter={true}
        addButtonText="New Sale"
        onAdd={() => setActivePage("create")}
        modalRef={modalRef}
      />
    </div>
  );
};

export default SalesReturn;
