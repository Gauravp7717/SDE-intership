import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";
export default function AddService() {
  const serviceFields = [
    { name: "itemCode", label: "Item Code", type: "text", required: true, placeholder: "Enter Service Code" },
    { name: "itemName", label: "Item Name", type: "text", required: true, placeholder: "Enter Service Name" },
    {
      name: "category",
      label: "Category",
      type: "select",
      required: true,
      options: ["Consulting", "Maintenance", "Training"], // replace with your categories
      placeholder: "Select Category",
    },
    { name: "barcode", label: "Barcode", type: "text", placeholder: "Enter Barcode" },
    { name: "sac", label: "SAC", type: "text", placeholder: "Enter SAC" },
    { name: "hsn", label: "HSN", type: "text", placeholder: "Enter HSN Code" },
    { name: "sellerPoints", label: "Seller Points", type: "number", placeholder: "Enter Seller Points" },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Service Description" },
    { name: "image", label: "Select Image", type: "file" }, // Blue button handled in FormField
    {
      name: "discountType",
      label: "Discount Type",
      type: "select",
      options: ["Percentage", "Flat"],
      placeholder: "Select Discount Type",
    },
    { name: "discount", label: "Discount", type: "number", placeholder: "Enter Discount Amount" },
    { name: "price", label: "Price (Expenses)", type: "number", required: true, placeholder: "Enter Price" },
    { name: "tax", label: "Tax (%)", type: "number", placeholder: "Enter Tax %" },
    {
      name: "salesTaxType",
      label: "Sales Tax Type",
      type: "select",
      required: true,
      options: ["GST", "VAT", "Other"],
      placeholder: "Select Sales Tax Type",
    },
    { name: "salesPrice", label: "Sales Price", type: "number", required: true, placeholder: "Enter Sales Price" },
  ];

  const handleAddService = (data) => {
    console.log("New Service Data:", data);
    // Call API or update state here
  };

  return (
    <div>
      <SmartForm
        title="Add Service"
        icon={<UserCircle />}
        fields={serviceFields}
        onSubmit={handleAddService}
        submitLabel="Add Service"
        resetOnSubmit={true}
      />
    </div>
  );
}
