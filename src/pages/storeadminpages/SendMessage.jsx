import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function SendMessage() {
  const fields = [
    { name: "Mobile", label: "Mobile", type: "number", required: true },
    { name: "Message", label: "Message", type: "text" ,required: true},
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return (
    <SmartForm
      title="Send Message"
      icon={<UserCircle />}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
