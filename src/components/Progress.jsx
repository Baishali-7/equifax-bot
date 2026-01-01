import React from "react";

const Progress = ({ label, value, width }) => {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{label}</span>
        <span className="text-emerald-600 font-medium">{value}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-emerald-100">
        <div className={`h-2 rounded-full bg-emerald-600 ${width}`} />
      </div>
    </div>
  );
};

export default Progress;
