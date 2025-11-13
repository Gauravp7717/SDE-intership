import React, { useState, useRef } from "react";
import DataTable from "../../components/DataTable";
import InvoiceStatsCards from "../../components/InvoiceStatsCards";

export default function SalesPayments() {
  const [activePage, setActivePage] = useState("list");
  const [formData, setFormData] = useState({
    paymentCode: "",
    paymentDate: "",
    salesCode: "",
    customerName: "",
    payment: "",
    paymentType: "",
    paymentNote: "",
    createdBy: "",
  });

  const [payments, setPayments] = useState([
    {
      paymentCode: "SP0013",
      paymentDate: "16-09-2025",
      salesCode: "SL19",
      customerName: "Walk-in customer",
      payment: "3,624.000",
      paymentType: "Cash",
      paymentNote: "Paid By Cash",
      createdBy: "shubhampawar",
    },
  ]);
  const modalRef = useRef();

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add/Save handler (example -- no validation)
  const handleSave = () => {
    setPayments((prev) => [...prev, formData]);
    setActivePage("list");
    setFormData({
      paymentCode: "",
      paymentDate: "",
      salesCode: "",
      customerName: "",
      payment: "",
      paymentType: "",
      paymentNote: "",
      createdBy: "",
    });
  };

  // Edit handler
  const handleEdit = (row) => {
    setFormData(row);
    setActivePage("edit");
  };

  // Delete handler
  const handleDelete = (row) => {
    setPayments((prev) =>
      prev.filter((payment) => payment.paymentCode !== row.paymentCode)
    );
  };

  // Table columns, with action render
  const columns = [
    { header: "Payment Code", key: "paymentCode" },
    { header: "Payment Date", key: "paymentDate" },
    { header: "Sales Code", key: "salesCode" },
    { header: "Customer Name", key: "customerName" },
    { header: "Payment", key: "payment" },
    { header: "Payment Type", key: "paymentType" },
    { header: "Payment Note", key: "paymentNote" },
    { header: "Created by", key: "createdBy" },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* <InvoiceStatsCards /> */}
      <DataTable
        modalRef={modalRef}
        showFilter={true}
        filterFields={["warehouse", "customer"]}
        columns={columns}
        data={payments}
        entriesPerPage={10}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addButtonText="New Payment"
        onAdd={() => setActivePage("create")}
      />

      {/* Example modal for add/edit payments */}
      {activePage === "create" || activePage === "edit" ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
          >
            <h2 className="text-xl font-semibold border-b pb-2 mb-4">
              {activePage === "create" ? "Add Payment" : "Edit Payment"}
            </h2>
            <div className="space-y-4">
              {/* You'd add inputs for each field as in UnitListSection */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Payment Code
                </label>
                <input
                  type="text"
                  name="paymentCode"
                  value={formData.paymentCode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Repeat for other fields ... */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Payment Date
                </label>
                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* ... repeat for all needed fields */}
              <div className="flex justify-end gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setActivePage("list")}
                  className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
