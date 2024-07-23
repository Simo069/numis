import React, { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";

const Sidebar = forwardRef(({ isSidebarOpen, toggleSidebar }, ref) => {
  const router = useRouter();
  const getLinkClass = (path) => {
    return router.pathname === path
      ? "bg-indigo-500 bg-opacity-50 text-black rounded-md" // Updated styles for active link
      : "text-gray-600 hover:bg-gray-200 hover:text-gray-800 rounded-md";
  };
  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting
    router.push("/"); // Redirect to another page after signout
  };
  return (
    <div
      ref={ref}
      className={`${
        isSidebarOpen ? "block" : "hidden"
      } bg-white text-blue-600 fixed h-full z-10 lg:relative lg:block border-none px-3`}
    >
      <div className="py-4 px-6">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <div className="mt-8">
        <ul className="no-underline list-none">
          <li
            className={`py-3 no-underline px-6 hover:scale-105 ${getLinkClass(
              "/dashboard"
            )}`}
          >
            <Link className="no-underline" href="/dashboard">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </div>
            </Link>
          </li>
          <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/dashboard/category"
            )}`}
          >
            <Link className="no-underline" href="/dashboard/category">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Categories
              </div>
            </Link>
          </li>
          <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/dashboard/currencies"
            )}`}
          >
            <Link className="no-underline" href="/dashboard/currencies">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                currencies
              </div>
            </Link>
          </li>
          {/* <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/admin/deals"
            )}`}
          >
            <Link className="no-underline" href="/admin/deals">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                Deals
              </div>
            </Link>
          </li>
          <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/admin/deliver"
            )}`}
          >
            <Link className="no-underline" href="/admin/deliver">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                Delivered Products
              </div>
            </Link>
          </li> */}
          <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/admin/settings"
            )}`}
          >
            <Link className="no-underline" href="" onClick={handleSignOut}>
              <div className="flex items-center">
                <CiLogout className="text-2xl mr-2" /> log out
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
