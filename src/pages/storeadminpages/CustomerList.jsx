import React from "react";
import DataTable from "../../components/DataTable";

const customers = [
  {
    customerId: "CU0582",
    customerName: "hjkghj",
    mobile: "7452541425",
    email: "jkghj@gmail.com",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0581",
    customerName: "IBVL Customer",
    mobile: "",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0580",
    customerName: "akash pawar",
    mobile: "9878987898",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0577",
    customerName: "Ankit jadhav",
    mobile: "",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0574",
    customerName: "amit",
    mobile: "",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0573",
    customerName: "Sumit",
    mobile: "",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "199.5",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0572",
    customerName: "John",
    mobile: "",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "70,000.000",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0571",
    customerName: "vaibhav pujari",
    mobile: "1234567891",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "220,000.000",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0570",
    customerName: "prajawal",
    mobile: "1234567890",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
  {
    customerId: "CU0568",
    customerName: "virat kohali",
    mobile: "7894561235",
    email: "",
    location: "",
    creditLimit: "No Limit",
    previousDue: "0",
    salesReturnDue: "0",
    advance: "0",
    status: "Active",
  },
];

const columns = [
  { header: "Customer ID", key: "customerId" },
  { header: "Customer Name", key: "customerName" },
  { header: "Mobile", key: "mobile" },
  { header: "Email", key: "email" },
  { header: "Location", key: "location" },
  { header: "Credit Limit", key: "creditLimit" },
  { header: "Previous Due", key: "previousDue" },
  { header: "Sales Return Due(+)", key: "salesReturnDue" },
  { header: "Advance", key: "advance" },
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

const CustomerList = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Customers List</h2>
      <DataTable
        columns={columns}
        data={customers}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Customer"
        onAdd={() => {}}
      />
    </div>
  );
};

export default CustomerList;
