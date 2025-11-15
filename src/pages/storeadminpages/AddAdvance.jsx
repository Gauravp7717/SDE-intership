import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function AddAdvance() {
  const fields = [
    { name: "customerName", label: "Customer Name", type: "text", required: true },
    { name: "OccasionName", label: "Occasion Name", type: "select",  required: true},
    { name: "CouponCode", label: "Coupon Code", type: "number" },

    { name: "Expire Date", label: "Expire Date", type: "date" },
    { name: "Coupon Value", label: "Coupon Vaule", type: "number" },
    { name: "Description", label: "Description", type: "textarea", cols: 3 }, 
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return <SmartForm title="New Advance" icon={<UserCircle />} fields={fields} onSubmit={handleSubmit} />;
}
