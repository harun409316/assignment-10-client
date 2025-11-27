import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="text-center">
        {/* Big 404 Number */}
        <h1 className="text-9xl font-extrabold tracking-widest text-gray-300">
          404
        </h1>

        {/* Creative Line */}
        <p className="mt-4 text-xl text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="mt-6">
          <span className="px-6 py-[2px] bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition font-medium rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
