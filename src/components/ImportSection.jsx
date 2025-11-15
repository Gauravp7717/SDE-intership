import React, { useState } from "react";
import { Upload, XCircle, Download } from "lucide-react";

export default function ImportSection({
  title,
  uploadLabel,
  instructions = [],
  downloadExampleLink,
  onImport,
  onClose,
  icon,
}) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-blue-600">{icon}</div>
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>

      {/* Upload Card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 mb-6">
        <p className="text-sm text-gray-600 mb-3">Please upload valid data in CSV format.</p>

        {/* Drag and Drop Zone */}
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition ${
            isDragging ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-gray-50"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto mb-3 text-blue-500" size={36} />
          <p className="font-medium text-gray-700">{uploadLabel}</p>
          <p className="text-sm text-gray-500 mb-2">Drop your file here or click to upload</p>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
          >
            Choose File
          </label>

          {file && (
            <p className="mt-3 text-sm text-gray-600">
              Selected: <span className="font-semibold">{file.name}</span>
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onImport}
            className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Import
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Close
          </button>
        </div>
      </div>

      {/* Instructions Table */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Import Instructions</h3>
          {downloadExampleLink && (
            <a
              href={downloadExampleLink}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <Download size={16} /> Download Example Format
            </a>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 text-left font-semibold border-b">#</th>
                <th className="p-3 text-left font-semibold border-b">Column Name</th>
                <th className="p-3 text-left font-semibold border-b">Value</th>
                <th className="p-3 text-left font-semibold border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              {instructions.length > 0 ? (
                instructions.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3 font-medium text-gray-800">{item.column}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-semibold ${
                          item.value === "Required"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.value}
                      </span>
                    </td>
                    <td className="p-3 text-gray-600">{item.details || "-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-500">
                    No instructions available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
