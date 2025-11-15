import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function AddCustomerPage() {
  const fields = [
    { name: "customerName", label: "Customer Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", validator: "email" },
    { name: "mobile", label: "Mobile", type: "tel" },
    { name: "gstNumber", label: "GST Number", type: "text" },
    { name: "creditLimit", label: "Credit Limit", type: "number", default: "-1.000" },
    { name: "attachment", label: "Attachment", type: "file" },
    { name: "address", label: "Address", type: "textarea", cols: 3 },
    { name: "copyAddress", label: "Copy Address?", type: "checkbox" },
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return <SmartForm title="Add Customer" icon={<UserCircle />} fields={fields} onSubmit={handleSubmit} />;
}
