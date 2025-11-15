import React from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserCircle } from "lucide-react";

export default function AddItems() {
   const fields = [
    { name: "itemCode", label: "Item Code", type: "text", required: true, placeholder: "Enter Item Code" },
    { name: "itemName", label: "Item Name", type: "text", required: true, placeholder: "Enter Item Name" },
    { name: "brand", label: "Brand", type: "text", placeholder: "Enter Brand" },
    { name: "category", label: "Category", type: "select", required: true, options: ["Electronics", "Clothing", "Food", "Other"], placeholder: "Select Category" },
    { name: "itemGroup", label: "Item Group", type: "select", required: true, options: ["Group A", "Group B"], placeholder: "Select Item Group" },
    { name: "unit", label: "Unit", type: "select", required: true, options: ["PCS", "KG", "Liter"], placeholder: "Select Unit" },
    { name: "sku", label: "SKU", type: "text", placeholder: "Enter SKU" },
    { name: "hsn", label: "HSN", type: "text", placeholder: "Enter HSN Code" },
    { name: "alertQuantity", label: "Alert Quantity", type: "number", placeholder: "Enter Alert Quantity" },
    { name: "sellerPoints", label: "Seller Points", type: "number", placeholder: "Enter Seller Points" },
    { name: "barcode", label: "Barcode", type: "text", placeholder: "Enter Barcode" },
    { name: "description", label: "Description", type: "textarea", placeholder: "Enter Description" },
    { name: "image", label: "Select Image", type: "file" },
    { name: "discountType", label: "Discount Type", type: "select", options: ["Percentage", "Flat"], placeholder: "Select Discount Type" },
    { name: "discount", label: "Discount", type: "number", placeholder: "Enter Discount Amount" },
    { name: "price", label: "Price", type: "number", required: true, placeholder: "Enter Price of Item without Tax" },
    { name: "tax", label: "Tax", type: "number", required: true, placeholder: "Enter Tax %" },
    { name: "purchasePrice", label: "Purchase Price", type: "number", required: true, placeholder: "Enter Purchase Price" },
    { name: "totalPriceWithTax", label: "Total Price with Tax Amount", type: "number", placeholder: "Total Price with Tax" },
    { name: "taxType", label: "Tax Type", type: "select", required: true, options: ["GST", "VAT", "Other"], placeholder: "Select Tax Type" },
    { name: "profitMargin", label: "Profit Margin (%)", type: "number", placeholder: "Enter Profit Margin %" },
    { name: "profitInPercent", label: "Profit in %", type: "number", placeholder: "Profit %" },
    { name: "salesPrice", label: "Sales Price", type: "number", placeholder: "Enter Sales Price" },
    { name: "mrp", label: "MRP", type: "number", placeholder: "Maximum Retail Price" },
    { name: "warehouse", label: "Warehouse", type: "select", options: ["Warehouse 1", "Warehouse 2"], placeholder: "Select Warehouse" },
    { name: "systemWarehouse", label: "System Warehouse", type: "select", options: ["System Warehouse 1", "System Warehouse 2"], placeholder: "Select System Warehouse" },
    { name: "openingStock", label: "Opening Stock", type: "number", placeholder: "Enter Opening Stock" },
  
  ];

  const handleSubmit = (data) => {
    // process form: send to API, etc.
    console.log("Customer submit", data);
    // if file present, use FormData for upload
    // const fd = new FormData(); fd.append('attachment', data.attachment)...
  };

  return (
    <SmartForm 
      title="Add Items"
      icon={<UserCircle />}
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
