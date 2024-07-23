// import React, { useState, useRef, useEffect } from 'react';
// import Sidebar from '@/components/Sidebar';
// import Header from '@/components/Header';

// const DashboardLayout = ({ children }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const sidebarRef = useRef(null);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const handleClickOutside = (event) => {
//         if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//             setIsSidebarOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('click', handleClickOutside, true);
//         return () => {
//             document.removeEventListener('click', handleClickOutside, true);
//         };
//     }, []);

//     return (
//         <div className="flex h-screen bg-gray-100 w-auto">
//             <Sidebar ref={sidebarRef} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//             <div className="flex-1 flex flex-col">
//                 <Header toggleSidebar={toggleSidebar} />
//                 <div className="flex-1 overflow-y-auto p-4 mb-16 ">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 w-auto">
      <Sidebar
        ref={sidebarRef}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto p-4 mb-16 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
