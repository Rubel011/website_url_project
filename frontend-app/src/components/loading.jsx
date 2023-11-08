import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 border-opacity-75"></div>
      <p className="text-white text-2xl ml-4">Loading...</p>
    </div>
  );
};

export default Loading;
