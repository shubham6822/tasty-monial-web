import React from "react";

export default function AnalyticsPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/3 min-h-96 shadow-lg p-10 rounded-xl bg-white text-center">
        <h1 className="text-4xl font-semibold">
          Something amazing is in the works
        </h1>
        <div className="bg-blue-200 mx-36 p-3 rounded-full mt-10">
          <h2 className="text-blue-500 font-semibold">Coming Soon</h2>
        </div>
      </div>
    </div>
  );
}
