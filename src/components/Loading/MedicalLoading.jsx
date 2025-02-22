import React from "react";

const MedicalLoading = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center min-h-screen z-50">
      <svg
        className="w-20 h-20 mt-6 animate-spin"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#32ABF3"
          strokeWidth="8"
          strokeDasharray="125, 200"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="animate-dash"
        />
      </svg>

      <div className="text-lightBlue text-xl font-medium mt-4 animate-fadeIn">
        Loading...
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out infinite alternate;
          }

          @keyframes dash {
            0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
            100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
          }
          .animate-dash {
            animation: dash 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default MedicalLoading;
