import React from "react";

/**
 * Renders a single field based on field.type
 * Supported types: text, email, number, tel, select, textarea, checkbox, file, password
 */
export default function FormField({ field, value, onChange }) {
  const {
    label,
    name,
    type = "text",
    required,
    placeholder,
    options = [],
    cols = 1, // optional layout hint
    attrs = {}, // any extra attributes to pass to input
  } = field;

  const baseStyle =
    "w-full px-4 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500";

  const handleChange = (e) => {
    const val = type === "checkbox" ? e.target.checked : e.target.value;
    onChange(name, val);
  };

  switch (type) {
    case "select":
      return (
        <div className={cols > 1 ? `md:col-span-${cols}` : ""}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <select
            name={name}
            value={value || ""}
            onChange={handleChange}
            className={baseStyle}
            {...attrs}
          >
            <option value="">Select</option>
            {options.map((opt, i) => (
              <option key={i} value={opt.value ?? opt}>
                {opt.label ?? opt}
              </option>
            ))}
          </select>
        </div>
      );

    case "textarea":
      return (
        <div className={cols > 1 ? `md:col-span-${cols}` : ""}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <textarea
            name={name}
            value={value || ""}
            onChange={handleChange}
            placeholder={placeholder}
            rows={attrs.rows || 3}
            className={`${baseStyle} resize-none`}
          />
        </div>
      );

    case "checkbox":
      return (
        <div className="flex items-center">
          <input
            type="checkbox"
            name={name}
            checked={!!value}
            onChange={handleChange}
            className="w-4 h-4 accent-blue-600"
          />
          <label className="ml-2 text-sm text-gray-700">{label}</label>
        </div>
      );

    case "file":
      return (
        <div className={cols > 1 ? `md:col-span-${cols}` : ""}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <div className="flex items-center gap-2">
            {/* Hidden file input */}
            <input
              type="file"
              id={name}
              onChange={(e) => onChange(name, e.target.files[0] || null)}
              className="hidden"
              {...attrs}
            />
            {/* Blue button */}
            <label
              htmlFor={name}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
            >
              Choose File
            </label>
            {/* Display selected file name */}
            <span className="text-sm text-gray-600">
              {value?.name || "No file chosen"}
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div className={cols > 1 ? `md:col-span-${cols}` : ""}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={value ?? ""}
            onChange={handleChange}
            placeholder={placeholder}
            className={baseStyle}
            {...attrs}
          />
        </div>
      );
  }
}
