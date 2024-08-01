import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const email = session?.user?.email;
  const [user, setUser] = useState([]);
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false }); // Sign out without redirecting
    setIsOpen(false);
    router.push("/"); // Redirect to another page after signout
  };
  const handleLinkClick = () => {
    setIsOpen(false); // Close the dropdown menu when a link is clicked
  };
  return (
    <nav className="bg-white text-blue-600 flex items-center justify-between px-6 py-3 ">
      <div className="flex items-center">
        <button
          className="lg:hidden mr-4 text-gray-400 hover:text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
        {/* <h1 className="text-xl font-bold">Admin Dashboard</h1> */}
      </div>
      <div className=" lg:block px-5">
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {/* <FaRegUserCircle className='text-2xl' /> */}
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {session?.user?.profile!== null ? (
                <Image
                  src={session?.user?.profile}
                  alt="User Image"
                  width={64}
                  height={64}
                  className="cursor-pointer h-full w-full rounded-full object-cover"
                />
              ) : (
                <Image
                  src={`/uploads/unknown.png`}
                  alt="User Image"
                  width={64}
                  height={64}
                  className="cursor-pointer h-full w-full rounded-full object-cover"
                />
              )}
            </div>
          </button>
          <div
            className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
              isOpen ? "block" : "hidden"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            style={{ zIndex: 1000 }}
          >
            <div className="py-1" role="none">
              {/* <Link
                href=""
                className="block px-4 py-2 text-lg text-blue-700 hover:bg-blue-100 hover:text-blue-900 no-underline"
                onClick={handleLinkClick}
              >
                profile
              </Link> */}
              {/* <Link
                href=""
                onClick={handleSignOut}
                className="block px-4 py-2 text-lg text-red-700 hover:bg-red-100 hover:text-red-900 no-underline"
              >
                Log Out
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
