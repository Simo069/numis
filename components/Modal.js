// import React from "react";
// import DashboardLayout from "./DashboardLayout";
// import MaxWidthWrapper from "./MaxWidthWrapper";

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;
//   return (
  
//       <div className="fixed insert-0 bg-black bg-opacity-50 flex justify-center items-center">
//         <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
//           <button
//             onClick={onClose}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             &times;
//           </button>
//           {children}
//         </div>{" "}
//       </div>
    
//   );
// };

// export default Modal;

// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
