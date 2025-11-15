import React from "react";
import { Users } from "lucide-react";
import ImportSection from "../../components/ImportSection";

export default function ImportItem() {
  const instructions = [
    { id: 1, column: "Item Name", value: "Required", details: "" },
    { id: 2, column: "Mobile", value: "Optional", details: "" },
    { id: 3, column: "Email", value: "Optional", details: "" },
    { id: 4, column: "Phone", value: "Optional", details: "" },
    { id: 5, column: "GST Number", value: "Optional", details: "" },
    { id: 6, column: "TAX Number", value: "Optional", details: "" },
    { id: 7, column: "Previous Due", value: "Optional", details: "" },
    { id: 8, column: "Credit Limit", value: "Optional", details: "[-1 for No Limit]" },
    { id: 9, column: "Country Name", value: "Optional", details: "" },
    { id: 10, column: "State Name", value: "Optional", details: "" },
    { id: 11, column: "Postcode", value: "Optional", details: "" },
    { id: 12, column: "Address", value: "Optional", details: "" },
    { id: 13, column: "Location Link", value: "Optional", details: "Map link or URL" },
    { id: 14, column: "Shipping Country Name", value: "Optional", details: "" },
    { id: 15, column: "Shipping State Name", value: "Optional", details: "" },
    { id: 16, column: "Shipping Postcode", value: "Optional", details: "" },
    { id: 17, column: "Shipping Address", value: "Optional", details: "" },
    { id: 18, column: "Shipping Location Link", value: "Optional", details: "Map link or URL" },
  ];

  return (
    <ImportSection
      title="Import Items"
      uploadLabel="Import Items*"
      icon={<Users size={28} />}
      instructions={instructions}
      downloadExampleLink="/samples/items_import.csv"
      onImport={() => alert("Importing item...")}
      onClose={() => alert("Closing...")}
    />
  );
}
