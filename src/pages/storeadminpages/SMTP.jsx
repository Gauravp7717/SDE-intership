import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function CreateCoupon() {
  const fields = [
    { name: "SMTP Status", label: "SMTP Status", type: "select", options: ["Enable", "Disable"] },
    { name: "SMTP Host", label: "SMTP Host", type: "text" },

    { name: "SMTP Port", label: "SMTP Port", type: "number" },
    { name: "SMTP User", label: "SMTP User", type: "email" },
    { name: "SMTP Password", label: "SMTP Password", type: "password" }, 
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return <SmartForm title="SMTP Setting" icon={<UserCircle />} fields={fields} onSubmit={handleSubmit} />;
}
