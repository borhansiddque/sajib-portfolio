import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-5 text-center">
      {/* 404 Title */}
      <h1 className="text-7xl font-bold text-green-600 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Back Button */}
      <Link to="/">
        <button className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300 cursor-pointer">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
