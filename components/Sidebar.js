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
                    d="M3 7h6l7 7H3zm9 7v4h4"
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
                  <rect
                    x="2"
                    y="6"
                    width="20"
                    height="12"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    d="M6 12h.01M18 12h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                currencies
              </div>
            </Link>
          </li>
          <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/dashboard/collections"
            )}`}
          >
            <Link className="no-underline" href="/dashboard/collections">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="12"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <rect
                    x="1"
                    y="7"
                    width="18"
                    height="12"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <rect
                    x="5"
                    y="3"
                    width="18"
                    height="12"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <circle
                    cx="12"
                    cy="11"
                    r="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                  <path
                    d="M6 11h.01M18 11h.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                Collections
              </div>
            </Link>
          </li>
          <li
            className={`px-6 py-3 hover:scale-105 ${getLinkClass(
              "/dashboard/users"
            )}`}
          >
            <Link className="no-underline" href="/dashboard/users">
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
                Users
              </div>
            </Link>
          </li>
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
