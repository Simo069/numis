import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaUserAlt,
  FaPhone,
  FaExclamationCircle,
} from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import { RiUser6Line } from "react-icons/ri";
import DashboardLayout from "@/components/DashboardLayout";
import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ConfirmationModal from "@/components/ConfirmationModal";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Modal from "@/components/Modal";


export default function users() {
  const { data: session } = useSession();
  const [collections, setCollections] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [isModalConfirmationOpen, setIsModalConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
  const [error, setError] = useState("");

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
        `/api/user/getAdmins`
      );
      setUsers(resUsers.data);
      console.log("resUsers::", resUsers.data);
    } catch (error) {
      console.error("error when fetching Users in dashboard admin ::", error);
    }
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setIsModalConfirmationOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("item to delete ::", itemToDelete);
    try {
      const resDelete = await axios.delete(
        `/api/user/deleteUser`,
        {
          data: {
            idUser: itemToDelete.id,
          },
        }
      );
      if (resDelete.status === 200) {
        setState("success");
        setMessage("admin deleted successfully ...");
        fetchUsers();
        setIsModalConfirmationOpen(false);
        setItemToDelete(null);
      } else {
        setState("danger");
        setMessage("Error when Deleting admin. Try again later, please ...");
        setIsModalConfirmationOpen(false);
        setItemToDelete(null);
      }
    } catch (error) {
      console.error("Error when Deleting adminn dashboard admin", error);
      setState("danger");
      setMessage("Error when Deleting admin. Try again later, please ...");
    }
    setIsModalConfirmationOpen(false);
    setItemToDelete(null);
  };

  const handleCloseModal = () => {
    setIsModalConfirmationOpen(false);
    setItemToDelete(null);
  };

  if (message || state || error) {
    setTimeout(() => {
      setState("");
      setMessage("");
      setError("");
    }, 5000);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {
      const res = await fetch(
        `/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            email: email,
            password: password,
            firstname: firstname,
            secondname: secondname,
            role : "ADMIN"
          }),
        }
      );
      const response = await res.json();
      console.log("status :", res.status);
      if (res.status === 201) {
        const form = e.target;
        form.reset();
        console.log("User registration success.");
        setState("success");
        setMessage("admin added successfully");
        fetchUsers();
        setName("")
        setEmail("")
        setPassword("")
        setfirstname("")
        setsecondname("")
        setError("");
        setIsModalOpen(false);
        // router.push("login");
      } else if (res.status === 409) {
        setError(response.message);
        // setState("danger");
        // setMessage("Error adding admin try later please");
      } else {
        setState("danger");
        setMessage("Error adding admin try later please");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      setError("An unexpected error occurred. Please try again later.");
      setIsModalOpen(false);
      setState("danger");
      setMessage("Error adding admin try later please");
    }
  };

  return (
    <DashboardLayout>
      <div className="card border-0 py-4 px-4 shadow-md rounded-lg h-[1000px] w-[700px] sm:w-[900px] md:w-[1400px]  lg:w-[1800px] overflow-scroll">
        <div className="w-full mx-auto mt-4"></div>{" "}
        {state === "success" && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-r"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}
        {state === "danger" && (
          <div className="alert alert-danger p-4 mb-4 border border-red-400 bg-red-100 rounded-md text-red-800 flex items-start space-x-2">
            <ExclamationTriangleIcon className="h-4 w-4 mt-1" />
            <div>
              <div className="font-bold">Error</div>
              <div>
                {message}
              </div>
            </div>
          </div>
        )}
        <div className="mb-4 flex justify-between items-center overflow-scroll">
          <h1 className="text-2xl font-semibold text-gray-800">All Users</h1>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={openModal}
            >
              Add Admin
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 shadow-sm">
            <div>
              <label htmlFor="firstname" className="sr-only">
                first name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiUser6Line className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="first name"
                  name="first name"
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="firstname"
                />
              </div>
            </div>
            <div>
              <label htmlFor="firstname" className="sr-only">
                second name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiUser6Line className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="second name"
                  name="second name"
                  type="text"
                  value={secondname}
                  onChange={(e) => setsecondname(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="secondname"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="sr-only">
                userName
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          {error && (
            <div className="flex items-center space-x-2 bg-red-100 text-red-700 p-3 rounded-full text-sm">
              <FaExclamationCircle />
              <span>{error}</span>
            </div>
          )}
          {/* <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div> */}
          <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="mr-2 bg-white hover:bg-gray-200 text-indigo-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Admin
              </button>
            </div>
        </form>
        </Modal>
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
                          {/* <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded-lg"
                            onClick={() =>
                              handleButtonClick(item.id, item.isVariation)
                            }
                          >
                            <GoMoveToEnd className="text-2xl" />
                          </button> */}
                          {item.email !== "boukhatemmohammed15@gmail.com" ? (
                            <button
                              className="bg-red-500 text-white px-3 py-1 rounded-lg"
                              onClick={() => handleDeleteClick(item)}
                            >
                              <MdDelete className="text-2xl" />
                            </button>
                          ) : (
                            ""
                          )}
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
      <ConfirmationModal
        isOpen={isModalConfirmationOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete this admin?`}
      />
    </DashboardLayout>
  );
}
