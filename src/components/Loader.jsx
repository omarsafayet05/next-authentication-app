import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <div className="animate-spin rounded-full h-56 w-56 border-solid border-t-4 border-gray-700 flex justify-center items-center"></div> */}
      <div className="animate-spin rounded-full h-5 w-5 bg-gradient-to-r from-transparent to-red-400 "></div>
      <div className="animate-pulse rounded-full h-5 w-5  bg-gradient-to-r from-transparent to-green-500 m-2"></div>
      <div className="animate-spin  rounded-full h-5 w-5 bg-gradient-to-r from-transparent to-yellow-600"></div>
      <div className="animate-spin  rounded-full h-5 w-5  bg-gradient-to-r from-transparent to-blue-700 m-2"></div>
      <div className="animate-spin  rounded-full h-5 w-5 bg-gradient-to-r from-transparent to-purple-800"></div>
    </div>
  );
}
