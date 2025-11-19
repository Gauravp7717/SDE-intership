import React, { useState } from "react";
import FormField from "./formField";
import { useRef, useEffect } from "react";

export default function SmartForm({
  title,
  icon,
  fields = [],
  initialValues = {},
  onSubmit = (d) => console.log("submit", d),
  submitLabel = "Save",
  resetOnSubmit = false,
  showButtons = true,
}) {
  //scroll to top on mount
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, []);
  // initialize state from fields + initialValues
  const init = fields.reduce((acc, f) => {
    acc[f.name] =
      initialValues[f.name] ??
      f.default ??
      (f.type === "checkbox" ? false : "");
    return acc;
  }, {});
  const [formData, setFormData] = useState(init);
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach((f) => {
      if (f.required) {
        if (f.type === "file") {
          if (!formData[f.name]) newErrors[f.name] = "Required";
        } else {
          if (!formData[f.name] && formData[f.name] !== 0)
            newErrors[f.name] = "Required";
        }
      }
      if (!newErrors[f.name] && f.validate) {
        // custom per-field validator function
        const err = f.validate(formData[f.name], formData);
        if (err) newErrors[f.name] = err;
      }
      // simple built-in validators example: f.validator = "email"
      if (!newErrors[f.name] && f.validator === "email") {
        const err = validators.email(formData[f.name]);
        if (err) newErrors[f.name] = err;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!validate()) return;
    onSubmit(formData);
    if (resetOnSubmit) setFormData(init);
  };

  return (
    <div className="bg-white p-6 ">
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {icon && <div className="text-blue-600">{icon}</div>}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fields.map((field) => (
            <div key={field.name}>
              <FormField
                field={field}
                value={formData[field.name]}
                onChange={handleChange}
              />
              {errors[field.name] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Conditionally render buttons */}
        {showButtons && (
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              {submitLabel}
            </button>
            <button
              type="button"
              onClick={() => setFormData(init)}
              className="px-6 py-2 bg-gray-200 rounded-lg text-gray-700"
            >
              Close
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
