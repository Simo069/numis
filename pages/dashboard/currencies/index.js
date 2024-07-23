import DashboardLayout from "@/components/DashboardLayout";
import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { useRouter } from "next/router";
import Modal from "@/components/Modal";
import axios from "axios";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function currencies() {
  const [currencies, setCurrencies] = useState([]);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [state, setstate] = useState("");
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
  return (
    <>
      <DashboardLayout>
        <div className="card border-0 py-4 px-4 shadow-md rounded-lg h-[1000px] w-[700px] sm:w-[900px] md:w-[1400px]  lg:w-[1800px] overflow-scroll">
          {" "}
      
          <div className="mb-4 flex justify-between items-center overflow-scroll">
            <h1 className="text-2xl font-semibold text-gray-800">
              All Categories
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
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.ref}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.description.substr(0, 45)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.imagefront ? (
                            <img
                              src={item.imagefront}
                              alt="Front Image"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          ) : (
                            <img
                              src="/uploads/default.png"
                              alt="Default Image"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.imageback ? (
                            <img
                              src={item.imageback}
                              alt="Back Image"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.imagesignature ? (
                            <img
                              src={item.imagesignature}
                              alt="Signature Image"
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          ) : (
                            ""
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.comments}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.nom_des_signataire}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.issued_by}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                            <MdDelete className="text-2xl" />
                          </button>
                          <button
                            className="bg-yellow-500 text-white px-3 py-1 rounded-lg ml-2"
                            onClick={() => handleButtonClick(item.id , item.isVariation)}
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
                We couldn't find any users matching your search.
              </p>
            </div>
          )}
        </div>
      </DashboardLayout>
    </>
  );
}
