import React, { useState } from "react";
import SmartForm from "../../components/forms/SmartForm";
import { UserPlus, User } from "lucide-react";

export default function AddUserList() {
  const [preview, setPreview] = useState(null);

  const fields = [
    {
      label: "Username",
      name: "username",
      type: "text",
      required: true,
      validator: "email",
    },
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      label: "Mobile",
      name: "mobile",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      validator: "email",
    },
    {
      label: "Role",
      name: "role",
      type: "select",
      required: true,
      options: [
        { label: "Super Admin", value: "superadmin" },
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      validate: (value, all) =>
        value !== all.password ? "Passwords do not match" : null,
    },
  ];

  const handleSubmit = (data) => {
    console.log("Submitting user:", data);
  };

  return (
    <div className="p-4">

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT - FORM */}
        <div className="col-span-2">
          <SmartForm
            title="Create User"
            icon={<UserPlus />}
            fields={fields}
            submitLabel="Save"
            onSubmit={handleSubmit}
          />
        </div>

        {/* RIGHT - SMALL PROFILE UPLOADER */}
        <div className="bg-white p-15 flex flex-col items-center">
          <p className="font-semibold mb-3">Profile Picture</p>

          {/* Small Circle Avatar Box */}
          <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 border flex items-center justify-center">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="text-gray-400 w-14 h-14" />
            )}
          </div>

          {/* Upload Button */}
          <label className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded cursor-pointer">
            Upload
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />
          </label>

          <p className="text-xs text-gray-500 mt-2 text-center">
            JPG / PNG — Max 500KB
          </p>
        </div>

      </div>

    </div>
  );
}
