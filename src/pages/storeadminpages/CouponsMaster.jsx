import React from "react";
import DataTable from "../../components/DataTable";

const columns = [
  { header: "Customer Name", key: "customerName" },
  { header: "Occasion Name", key: "occasionName" },
  { header: "Coupon Code", key: "couponCode" },
  { header: "Expire Date", key: "expireDate" },
  { header: "Value", key: "value" },
  { header: "Coupon Type", key: "couponType" },
  { header: "Description", key: "description" },
  { header: "Status", key: "status" },
  // Do not add "Action" here! DataTable will generate the action column automatically with onEdit/onDelete.
];

const coupons = [
  {
    customerName: "Test Customer",
    occasionName: "Diwali",
    couponCode: "DIWALI50",
    expireDate: "31-12-2025",
    value: "50",
    couponType: "Percentage",
    description: "Festival special coupon for 50% off",
    status: "Active",
  },
];

const CouponsMaster = () => {
  const handleEdit = (row) => alert(`Edit ${row.couponCode}`);
  const handleDelete = (row) => alert(`Delete ${row.couponCode}`);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Coupons Master</h2>
      <DataTable
        columns={columns}
        data={coupons}
        entriesPerPage={10}
        showSearch={true}
        showPagination={true}
        addButtonText="Add Coupon"
        onAdd={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CouponsMaster;
