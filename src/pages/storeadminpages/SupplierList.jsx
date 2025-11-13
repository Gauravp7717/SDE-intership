import React from "react";
import DataTable from "../../components/DataTable";

const suppliers = [
  {
    supplierId: "SU0012",
    supplierName: "ghjfgh",
    mobile: "7454741425",
    email: "cvxb@gmail.com",
    previousBalance: "0",
    purchaseDue: "0",
    purchaseReturnDue: "0",
    total: "0",
    status: "Active",
  },
  {
    supplierId: "SU0011",
    supplierName: "Sugar Private Limited",
    mobile: "",
    email: "",
    previousBalance: "0",
    purchaseDue: "0",
    purchaseReturnDue: "0",
    total: "0",
    status: "Active",
  },
  {
    supplierId: "SU0010",
    supplierName: "Impera Supp",
    mobile: "",
    email: "",
    previousBalance: "0",
    purchaseDue: "0",
    purchaseReturnDue: "0",
    total: "0",
    status: "Active",
  },
  {
    supplierId: "SU0009",
    supplierName: "Molchand mill pvt ltd.",
    mobile: "9876245312",
    email: "molchandmill@gmail.com",
    previousBalance: "0",
    purchaseDue: "24,873.500",
    purchaseReturnDue: "0",
    total: "24,873.500",
    status: "Active",
  },
  {
    supplierId: "SU0008",
    supplierName: "banglore bakery",
    mobile: "",
    email: "",
    previousBalance: "100,000.000",
    purchaseDue: "0",
    purchaseReturnDue: "0",
    total: "100,000.000",
    status: "Active",
  },
  {
    supplierId: "SU0007",
    supplierName: "APPLE SHOWROOM",
    mobile: "",
    email: "",
    previousBalance: "0",
    purchaseDue: "2,100,000.000",
    purchaseReturnDue: "0",
    total: "2,100,000.000",
    status: "Active",
  },
  {
    supplierId: "SU0006",
    supplierName: "Boat PVT LTD",
    mobile: "45425633245",
    email: "manager@imperative.co.in",
    previousBalance: "0",
    purchaseDue: "516,000.000",
    purchaseReturnDue: "0",
    total: "516,000.000",
    status: "Active",
  },
  {
    supplierId: "SU0005",
    supplierName: "Puneri sweets company",
    mobile: "",
    email: "",
    previousBalance: "50,000.000",
    purchaseDue: "0",
    purchaseReturnDue: "0",
    total: "50,000.000",
    status: "Active",
  },
  {
    supplierId: "SU0004",
    supplierName: "Chitale and sons",
    mobile: "7894536220",
    email: "",
    previousBalance: "0",
    purchaseDue: "4,571.000",
    purchaseReturnDue: "0",
    total: "4,571.000",
    status: "Active",
  },
  {
    supplierId: "SU0003",
    supplierName: "Balaji And Sons Pvt Ltd",
    mobile: "9864423755",
    email: "balaji11@gmail.com",
    previousBalance: "0",
    purchaseDue: "2,454.177",
    purchaseReturnDue: "743",
    total: "1,711.177",
    status: "Active",
  },
];

const columns = [
  { header: "Supplier ID", key: "supplierId" },
  { header: "Supplier Name", key: "supplierName" },
  { header: "Mobile", key: "mobile" },
  { header: "Email", key: "email" },
  { header: "Previous Balance", key: "previousBalance" },
  { header: "Purchase Due", key: "purchaseDue" },
  { header: "Purchase Return Due", key: "purchaseReturnDue" },
  { header: "Total(+)", key: "total" },
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

const SupplierList = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Suppliers List</h2>
      <DataTable
        columns={columns}
        data={suppliers}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Supplier"
        onAdd={() => {}}
      />
    </div>
  );
};

export default SupplierList;
