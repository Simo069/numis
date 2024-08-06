import DashboardLayout from "@/components/DashboardLayout";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { useRouter } from "next/router";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function users() {
  const [collections, setCollections] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const filteredUsers = users.filter((user) =>
    `${user.username}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    // Fetch data from your backend API
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const resUsers = await axios.get(
        `/api/user/getUsers`
      );
      setUsers(resUsers.data);
      console.log("resUsers::", resUsers.data);
    } catch (error) {
      console.error(
        "error when fetching Users in dashboard admin ::",
        error
      );
    }
  };
  return (
    <DashboardLayout>
      <div className="card border-0 py-4 px-4 shadow-md rounded-lg h-[1000px] w-[700px] sm:w-[900px] md:w-[1400px]  lg:w-[1800px] overflow-scroll">
        <div className="w-full mx-auto mt-4"></div>{" "}
        <div className="mb-4 flex justify-between items-center overflow-scroll">
          <h1 className="text-2xl font-semibold text-gray-800">
            All Users
          </h1>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClickCapture={""}
              >
                Add new billet
              </button> */}
          </div>
        </div>
        {filteredUsers.length > 0 ? (
          <div className="overflow-scroll max-h-[900px]  sm:max-w-[900px] md:max-w-[1000px]  lg:max-w-[1800px]">
            <div className="overflow-x-auto h-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Profile
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      full name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-center align-middle">
                        <div className="flex justify-center items-center h-full">
                          {item.profile ? (
                            <Image
                              src={item.profile}
                              alt="Front Image"
                              width={64}
                              height={64}
                              className="object-cover cursor-pointer rounded-full w-16 h-16"
                              onClick={() => setSelectedImage(item.profile)}
                            />
                          ) : (
                            <Image
                              src="/uploads/unknown.png"
                              alt="Default Image"
                              width={64}
                              height={64}
                              className="object-cover rounded-full w-16 h-16"
                            />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center align-middle">
                        <div className="flex justify-center items-center h-full">
                          {item.username}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center align-middle">
                        <div className="flex justify-center items-center h-full">
                          {item.firstname} {item.secondname}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center align-middle">
                        <div className="flex justify-center items-center h-full">
                          {item.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center align-middle">
                        <div className="flex justify-center items-center h-full">
                          {item.createdAt}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center align-middle">
                        <div className="flex justify-center items-center h-full">
                          <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
                            onClick={() =>
                              handleButtonClick(item.id, item.isVariation)
                            }
                          >
                            <GoMoveToEnd className="text-2xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <img
              src="/noresult.png"
              alt="No results found"
              className="w-72 h-72 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No items found
            </h2>
            <p className="text-gray-500">
              We were unsuccessful in finding any billets that match your
              search.
            </p>
          </div>
        )}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-3/4 h-3/4">
              <Image
                src={selectedImage}
                alt="Image agrandie"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
