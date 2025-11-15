import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function AddAccount() {
   const fields = [
    {
      name: "parentAccount",
      label: "Parent Account",
      type: "select",
      required: true,
      options: ["Cash", "Bank", "Expenses", "Income"], // example options
      placeholder: "Select Parent Account",
    },
    {
      name: "accountNumber",
      label: "Account Number",
      type: "text",
      required: true,
      placeholder: "Enter account number",
      default: "AC0013",
    },
    {
      name: "accountName",
      label: "Account Name",
      type: "text",
      required: true,
      placeholder: "Enter account name",
    },
    {
      name: "openingBalance",
      label: "Opening Balance",
      type: "number",
      required: true,
      placeholder: "0.00",
      default: 0,
    },
    {
      name: "Note",
      label: "Note",
      type: "text",
      placeholder: "Enter Note",
    }
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return (
    <SmartForm
      title="Add Account"
      icon={<UserCircle />}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
