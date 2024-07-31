import DashboardLayout from "@/components/DashboardLayout";
import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { useRouter } from "next/router";
import Modal from "@/components/Modal";
import axios from "axios";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import ConfirmationModal from "@/components/ConfirmationModal";

export default function currencies() {
  const [currencies, setCurrencies] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");

  const filteredCurrencies = currencies.filter((currencie) =>
    `${currencie.ref}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetchAllBillet();
  }, []);
  const fetchAllBillet = async () => {
    try {
      const resBillet = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getAllBillet`
      );

      if (resBillet) {
        setCurrencies(resBillet.data);
      }
    } catch (error) {
      console.log("Error fetching All Billet: ", error);
    }
  };
  const addBillet = async () => {
    router.push("currencies/addnewbillet");
  };

  const handleButtonClick = (idBillet, isVariation) => {
    router.push({
      pathname: `/dashboard/currencies/${idBillet}`,
      query: { isVariation: isVariation },
    });
  };

  useEffect(() => {
    const { message: messageQuery, state: stateQuery } = router.query;
    if (messageQuery) {
      setMessage(messageQuery);
    }
    if (stateQuery) {
      setState(stateQuery);
    }
  }, [router.query]);
  useEffect(() => {
    if (state !== "" || message !== "") {
      const timer = setTimeout(() => {
        setMessage("");
        setState("");
        router.push("/dashboard/currencies", undefined, { shallow: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state, message, router]);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };
  
  const handleConfirmDelete = async () => {
    console.log("item to delete ::", itemToDelete);
    try {
      const resDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/deleteBillet`, 
        {
          data: { idBillet: itemToDelete }
        }
      );
      if (resDelete.status === 200) {
        setState("success");
        setMessage("Billet deleted successfully from table currencies...");
        fetchAllBillet();
        setIsModalOpen(false);
    setItemToDelete(null);
      } else {
        setState("danger");
        setMessage(
          "Error when Deleting billet from table currencies. Try again later, please ..."
        );
        setIsModalOpen(false);
    setItemToDelete(null);
      }
    } catch (error) {
      console.error("Error when deleting a billet from currencies in dashboard admin", error);
      setState("danger");
      setMessage(
        "Error when Deleting billet from table currencies. Try again later, please ..."
      );
    }
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };

  if (message || state) {
    setTimeout(() => {
      setState("");
      setMessage("");
    }, 5000);
  }
  return (
    <>
      <DashboardLayout>
        <div className="card border-0 py-4 px-4 shadow-md rounded-lg h-[1000px] w-[700px] sm:w-[900px] md:w-[1400px]  lg:w-[1800px] overflow-scroll">
          <div className="w-full mx-auto mt-4">
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
                    Updating a category was unsuccessful. Please try again later
                    .
                  </div>
                </div>
              </div>
            )}
          </div>{" "}
          <div className="mb-4 flex justify-between items-center overflow-scroll">
            <h1 className="text-2xl font-semibold text-gray-800">
              All Billets
            </h1>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search by ref..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                onClickCapture={addBillet}
              >
                Add new billet
              </button>
            </div>
          </div>
          {filteredCurrencies.length > 0 ? (
            <div className="overflow-scroll max-h-[900px] sm:max-w-[900px] md:max-w-[1000px]  lg:max-w-[1800px]">
              <div className="overflow-x-auto h-full">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ref
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Desc
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Front Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Back Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Front Signature
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Comments
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name of Signatures
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Issued By
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredCurrencies.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[100px]  max-w-[200px] text-wrap">
                          {item.ref}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[150px]  max-w-[200px] text-wrap">
                          {item.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[200px]  max-w-[300px] text-wrap">
                          {item.description.substr(0, 45)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[100px]  max-w-[200px] text-wrap">
                          {item.imagefront ? (
                            <Image
                              src={item.imagefront}
                              alt="Front Image"
                              width={64}
                              height={64}
                              className="object-cover cursor-pointer"
                              onClick={() => setSelectedImage(item.imagefront)}
                            />
                          ) : (
                            <Image
                              src="/uploads/default.png"
                              alt="Default Image"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[100px]  max-w-[200px] text-wrap">
                          {item.imageback ? (
                            <Image
                              src={item.imageback}
                              alt="Back Image"
                              width={64}
                              height={64}
                              className="object-cover cursor-pointer"
                              onClick={() => setSelectedImage(item.imageback)}
                            />
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[100px]  max-w-[200px] text-wrap">
                          {item.imagesignature ? (
                            <Image
                              src={item.imagesignature}
                              alt="Signature Image"
                              width={64}
                              height={64}
                              className="object-cover cursor-pointer"
                              onClick={() =>
                                setSelectedImage(item.imagesignature)
                              }
                            />
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[100px]  max-w-[200px] text-wrap">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[100px]  max-w-[200px] text-wrap">
                          {item.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[200px]  max-w-[300px] text-wrap">
                          {item.comments}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[200px]  max-w-[300px] text-wrap">
                          {item.nom_des_signataire}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center min-w-[200px]  max-w-[300px] text-wrap">
                          {item.issued_by}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <button
                            className="bg-red-500 text-white px-3 py-1 rounded-lg"
                            onClick={() => handleDeleteClick(item.id)}
                          >
                            <MdDelete className="text-2xl" />
                          </button>
                          <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded-lg ml-2"
                            onClick={() =>
                              handleButtonClick(item.id, item.isVariation)
                            }
                          >
                            <GoMoveToEnd className="text-2xl" />
                          </button>
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
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          message={`Are you sure you want to delete this billet from. the currecnies table?`}
        />
      </DashboardLayout>
    </>
  );
}
