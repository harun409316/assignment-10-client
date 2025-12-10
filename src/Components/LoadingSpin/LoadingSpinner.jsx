import React from 'react';

const LoadingSpinner = () => {
   
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      
      <p className="mt-4 text-gray-700 text-lg font-medium"><span className="loading loading-spinner loading-lg"></span></p>
    </div>
    );
};

export default LoadingSpinner;