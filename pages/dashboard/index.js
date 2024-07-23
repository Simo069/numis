"use client";

import DashboardLayout from "@/components/DashboardLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";

const DashboardPage = () => {
  const { data: session } = useSession();
  const [products, setproducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [deals, setdeals] = useState([]);
  const [dealsconfirmed, setdealsconfirmed] = useState([]);
  const email = session?.user?.email;
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setmessage] = useState("");
  const [state, setstate] = useState("");
  
  // const filtereddeals = dealsconfirmed.filter((deal) =>
  //   `${deal.deal_id}`.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // const handleButtonClick = (dealId) => {
  //   router.push(`/admin/${dealId}`);
  // };
  // const handleConfirmation = async (dealid) => {
  //   try {
  //     if (!dealid) return;
  //     const updateRes = await fetch(
  //       `${process.env.NEXT_PUBLIC_URL}/api/admin/delivredproducts`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           iddeal: dealid,
  //         }),
  //       }
  //     );
  //     if (!updateRes.ok) {
  //       throw new Error(
  //         "Failed to update confirmed deal  status in dashboard page"
  //       );
  //     }
  //     const updateResponse = await updateRes.json();
  //     setstate(updateResponse.state);
  //     setmessage(updateResponse.message);
  //   } catch (error) {
  //     console.error(
  //       "Error update confirmed deal  status in dashboard page",
  //       error
  //     );
  //   }
  //   console.log("deal id : ", dealid);
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       //get users
  //       const resUserExists = await fetch(
  //         `${process.env.NEXT_PUBLIC_URL}/api/user/getclient`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const responseUserExists = await resUserExists.json();
  //       setUsers(responseUserExists.users);

  //       //get products
  //       const resproducts = await fetch(
  //         `${process.env.NEXT_PUBLIC_URL}/api/product/getproductuser`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const responseproducts = await resproducts.json();
  //       setproducts(responseproducts.products);

  //       // get deals
  //       const resdeals = await fetch(
  //         `${process.env.NEXT_PUBLIC_URL}/api/admin/getalldeals`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const responsedeals = await resdeals.json();
  //       setdeals(responsedeals.alldeals);
  //       //get delas confirmed
  //       const resdealsconfirmed = await fetch(
  //         `${process.env.NEXT_PUBLIC_URL}/api/admin/confirmed_deals`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const responsedealsconfirmed = await resdealsconfirmed.json();
  //       setdealsconfirmed(responsedealsconfirmed.confirmedDeals);
  //     } catch (error) {
  //       console.log("Error during get data ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   if (message) {
  //     // Refetch confirmed deals if the message state changes
  //     const fetchConfirmedDeals = async () => {
  //       try {
  //         const resdealsconfirmed = await fetch(
  //           `${process.env.NEXT_PUBLIC_URL}/api/admin/confirmed_deals`,
  //           {
  //             method: "GET",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const responsedealsconfirmed = await resdealsconfirmed.json();
  //         setdealsconfirmed(responsedealsconfirmed.confirmedDeals);
  //       } catch (error) {
  //         console.error("Error fetching confirmed deals", error);
  //       }
  //     };
  //     fetchConfirmedDeals();
  //   }
  // }, [message]);
  // console.log("confirmeddesl :", dealsconfirmed);
  // setTimeout(() => {
  //   setstate("");
  //   setmessage("");
  // }, 3000);
  return (
    <DashboardLayout>
      <div className="card border-0 py-4 px-4 shadow-md rounded-lg">
        {state == "success" && (
          <div class="alert alert-success" role="alert">
            your confirmation upadted successfuly
          </div>
        )}
        {state == "danger" && (
          <div class="alert alert-danger" role="alert">
            error happend in your confirmation upadted , please try again
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Total Billets
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Test
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center"></p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Test
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center"></p>
          </div>
        </div>
        {/* dispaly deals  */}
        {/* <div className="mt-40">
          <div className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">All Deals</h1>
            <input
              type="text"
              placeholder="Search by id deal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {filtereddeals.length > 0 ? (
            <div className="">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      deal id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      first product image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      first owner username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      second product image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      second owner username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      well recover
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 overflow-y-auto">
                  {filtereddeals.map((deal) => (
                    <tr key={deal.deal_id} className="align-middle">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {deal.deal_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={`/uploads/${deal.owner_product_image}`}
                          alt="Seller Avatar"
                          width={64}
                          height={64}
                          layout="responsive"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {deal.owner_username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={`/uploads/${deal.requester_product_image}`}
                          alt="Seller Avatar"
                          width={64}
                          height={64}
                          layout="responsive"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {deal.requester_username}
                      </td>
                      <td
                        className={` text-center px-6 py-4 whitespace-nowrap ${
                          deal.status === "confirmed"
                            ? "text-green-500"
                            : deal.status === "rejected"
                            ? "text-red-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {deal.status}
                        {deal.status === "pending" && (
                          <div className="flex gap-1 justify-center mt-3 ">
                            <button
                              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to confirm that those products have been well recovered   ?"
                                  )
                                ) {
                                  handleConfirmation(deal.deal_id);
                                }
                              }}
                            >
                              Confirm
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure you want to confirm that you did not recover those products well   ?"
                                  )
                                ) {
                                  handleRejection(deal.deal_id);
                                }
                              }}
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap ">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                          <MdDelete className="text-2xl" />
                        </button>
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded-lg ml-2"
                          onClick={() => handleButtonClick(deal.deal_id)}
                        >
                          <GoMoveToEnd className="text-2xl" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <img
                src="/uploads/noresult2.png"
                alt="No results found"
                className="w-32 h-32 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                No deals found
              </h2>
              <p className="text-gray-500">We couldn't find any deals .</p>
            </div>
          )}
        </div> */}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
