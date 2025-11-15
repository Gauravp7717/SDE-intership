import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function SendMessage() {
  const fields = [
     { name: "Warehouse Name", label: "Warehouse Name", type: "text" ,required: true},
     { name: "Mobile", label: "Mobile", type: "number", required: true },
     { name: "Email", label: "Email", type: "text",placeholder:"Enter Your Email" ,required: true},
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return (
    <SmartForm
      title="Add Warehouse"
      icon={<UserCircle />}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
