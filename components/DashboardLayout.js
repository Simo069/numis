// "use client"
// import React, { useState, useRef, useEffect } from "react";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// const DashboardLayout = ({ children }) => {
//   const { data: session, status } = useSession();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);
//   const router = useRouter()

//   if (!session || session.user.role !== "ADMIN") {
//     router.replace("/");
//     return null;
//   }

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside, true);
//     return () => {
//       document.removeEventListener("click", handleClickOutside, true);
//     };
//   }, []);

//   return (

//     <div className="flex h-screen bg-gray-100 w-auto">
//       <Sidebar
//         ref={sidebarRef}
//         isSidebarOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//       />
//       <div className="flex-1 flex flex-col">
//         <Header toggleSidebar={toggleSidebar} />
//         <div className="flex-1 overflow-y-auto p-4 mb-16 ">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// "use client"

// import React, { useState, useRef, useEffect } from "react";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";  // Change this import

// const DashboardLayout = ({ children }) => {
//   const { data: session, status } = useSession();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const sidebarRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (status === "loading") return;
//     if (!session || session.user.role !== "ADMIN") {
//       router.replace("/");
//     }
//   }, [session, status, router]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (!session || session.user.role !== "ADMIN") {
//     return null;
//   }

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside, true);
//     return () => {
//       document.removeEventListener("click", handleClickOutside, true);
//     };
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100 w-auto">
//       <Sidebar
//         ref={sidebarRef}
//         isSidebarOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//       />
//       <div className="flex-1 flex flex-col">
//         <Header toggleSidebar={toggleSidebar} />
//         <div className="flex-1 overflow-y-auto p-4 mb-16 ">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"; // Correct import
const DashboardLayout = ({ children }) => {
  const { data: session, status } = useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "ADMIN") {
      router.replace("/");
    }
  }, [session, status, router]);

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
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session || session.user.role !== "ADMIN") {
    return null;
  }
  return (
    <div className="flex h-screen bg-gray-100 w-auto">
      <Sidebar
        ref={sidebarRef}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto p-4 mb-16">{children}</div>
      </div>
    </div>
  );
};
export default DashboardLayout;
