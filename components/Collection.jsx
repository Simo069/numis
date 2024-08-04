// // import React , {useState , useEffect} from "react";
// // import MaxWidthWrapper from "./MaxWidthWrapper";
// // import { useSession } from "next-auth/react";
// // import axios from "axios";

// // export default function Collection() {
// //   const { data : session , status } = useSession();
// //   const [message , setMessage] = useState("");
// //   const [state , setState] = useState("");
// //   const [userId , setUserId]=useState("");
// //   const [billetCollection , setBilletCollection] = useState([])

// //   useEffect(()=>{
// //     if(status === "authenticated" && session?.user?.id){
// //       setUserId(session.user.id)
// //     }
// //     fetchBilletColection(userId)
// //   },[session,status])

// //   useEffect(()=>{
// //     fetchBilletColection(userId)
// //   },[userId])
// //   const fetchBilletColection=async(userId)=>{
// //     try {
// //       const resCollection = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`)
// //       setBilletCollection(resCollection)
// //       console.log("resCollection---:::",resCollection)
// //     } catch (error) {
// //       console.error("Error fetching collection:", error);
// //     }
// //   }
// //   return (
// //     <MaxWidthWrapper>
// //       {state === "success" && (
// //         <div
// //           className="alert alert-success p-4 mb-4 border border-green-400 bg-green-100 rounded-md text-green-800"
// //           role="alert"
// //         >
// //           {message}
// //         </div>
// //       )}
// //       {state === "danger" && (
// //         <div className="alert alert-danger p-4 mb-4 border border-red-400 bg-red-100 rounded-md text-red-800 flex items-start space-x-2">
// //           <ExclamationTriangleIcon className="h-4 w-4 mt-1" />
// //           <div>
// //             <div className="font-bold">Error</div>
// //             <div>
// //               Updating a category was unsuccessful. Please try again later .
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       <div className="min-h-[80vh]">
// //           <div className="text-center align-middle max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
// //             <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2">
// //               <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:m-0 ">
// //                 your Collection
// //               </h2>
// //             </div>
// //             <div className="grid grid-cols-1 sm:grid-cosl-2 md:grid-cols-3  lg:grid-cols-4  gap-8">

// //             </div>
// //           </div>
// //       </div>
// //     </MaxWidthWrapper>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import MaxWidthWrapper from "./MaxWidthWrapper";
// import { useSession } from "next-auth/react";
// import axios from "axios";
// import Link from "next/link";
// import Image from "next/image";

// export default function Collection() {
//   const { data: session, status } = useSession();
//   const [message, setMessage] = useState("");
//   const [state, setState] = useState("");
//   const [userId, setUserId] = useState("");
//   const [billetCollection, setBilletCollection] = useState([]);

//   useEffect(() => {
//     if (status === "authenticated" && session?.user?.id) {
//       setUserId(session.user.id);
//     }
//   }, [status, session]);

//   useEffect(() => {
//     if (userId) {
//       fetchBilletCollection(userId);
//     }
//   }, [userId]);

//   const fetchBilletCollection = async (userId) => {
//     try {
//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`
//       );
//       setBilletCollection(res.data);
//       console.log("resCollection---:::", res.data);
//     } catch (error) {
//       console.error("Error fetching collection:", error);
//     }
//   };

//   return (
//     <MaxWidthWrapper className="mb-32">
//       {state === "success" && (
//         <div
//           className="alert alert-success p-4 mb-4 border border-green-400 bg-green-100 rounded-md text-green-800"
//           role="alert"
//         >
//           {message}
//         </div>
//       )}
//       {state === "danger" && (
//         <div className="alert alert-danger p-4 mb-4 border border-red-400 bg-red-100 rounded-md text-red-800 flex items-start space-x-2">
//           <ExclamationTriangleIcon className="h-4 w-4 mt-1" />
//           <div>
//             <div className="font-bold">Error</div>
//             <div>
//               Updating a category was unsuccessful. Please try again later.
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="min-h-[80vh]">
//         <div className="text-center align-middle mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2">
//             <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:m-0">
//               Your Collection
//             </h2>
//           </div>
//           <div className="flex flex-col gap-8 justify-center items-center  ">
//             {billetCollection.map((item, index) => 
//             {
//               let mainBilletCount = 0;
//               let variationBilletCount = 0;
//               let totalCount = 0;

//               const mainBilletData = item.currency ? item.currency : item.variation.currencies;
//               console.log("mainBilletData...",mainBilletData)
//               const totaleBillet = mainBilletData.variations.length + 1;
//               mainBilletCount = billetCollection.filter((billet)=> billet.currencyId == mainBilletData.id).length
//               if(mainBilletData.variations.length>0){
//                 const variations = mainBilletData.variations;
//                 variations.map((variation)=>{
//                   variationBilletCount+= billetCollection.filter((item)=>item.variationId == variation.id).length
//                 })
                
//               }
//               totalCount= variationBilletCount+ mainBilletCount

//               return(<div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
//               >
//                 {item.currency ? (
//                   <Link
//                     key={index}
//                     href={`/catalog/${encodeURIComponent(
//                       item.currency.currency.title
//                     )}/${encodeURIComponent(item.currency.title)}?id=${
//                       item.currency.currency.id
//                     }&billet=${item.currency.id}`}
//                   >
//                     <div
//                       key={index}
//                       className="bg-white flex flex-col sm:flex-row  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
//                     >
//                       <div className="flex-shrink-0">
//                         <div className="overflow-hidden w-56 h-24 flex-shrink-0 px-2 py-1">
//                           <Image
//                             src={item.currency.imagefront}
//                             alt={item.currency.title}
//                             width={80}
//                             height={80}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="rounded overflow-hidden w-56 h-24  flex-shrink-0 px-2 py-1">
//                           <Image
//                             src={item.currency.imageback}
//                             alt={item.currency.title}
//                             width={80}
//                             height={80}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                       <div className="p-3 flex  flex-col  flex-1 sm:min-w-[500px] mx-8 mt-5">
//                         <div className="flex flex-col items-start">
//                           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                             {item.currency.title}
//                           </h3>
//                           <h4 className="text-sm text-gray-700 mb-2">
//                             {item.currency.date}
//                           </h4>
//                           <h4 className="text-lg text-gray-700 mb-2 flex flex-row gap-2  ">
//                             {" "}
//                             {/* <div className=" h-8 w-px bg-green-500 hidden sm:block " /> */}
//                             #{item.currency.ref}
//                           </h4>
//                         </div>
//                         <div className=" justify-center text-center mt-4">
//                           <div className=" h-8  w-full  sm-w-[300px] rounded-lg bg-green-300  text-center align-middle font-bold">
//                             {" "}
//                             {totalCount} / {totaleBillet}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ) : (
//                   <Link
//                     key={index}
//                     href={`/catalog/${encodeURIComponent(
//                       item.variation.currencies.currency.title
//                     )}/${encodeURIComponent(
//                       item.variation.currencies.title
//                     )}?id=${item.variation.currencies.currency.id}&billet=${
//                       item.variation.currencies.id
//                     }`}
//                   >
//                     <div
//                       key={index}
//                       className="bg-white flex flex-col sm:flex-row  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
//                     >
//                       <div className="flex-shrink-0">
//                         <div className="overflow-hidden w-56 h-24 flex-shrink-0 px-2 py-1">
//                           <Image
//                             src={item.variation.imagefront}
//                             alt={item.variation.currencies.title}
//                             width={80}
//                             height={80}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="rounded overflow-hidden w-56 h-24  flex-shrink-0 px-2 py-1">
//                           <Image
//                             src={item.variation.imageback}
//                             alt={item.variation.currencies.title}
//                             width={80}
//                             height={80}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                       <div className="p-3 flex  flex-col  flex-1 sm:min-w-[500px] mx-8 mt-5">
//                         <div className="flex flex-col items-start">
//                           <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                           {item.variation.currencies.title}
//                           </h3>
//                           <h4 className="text-sm text-gray-700 mb-2">
//                             {item.variation.date}
//                           </h4>
//                           <h4 className="text-lg text-gray-700 mb-2 flex flex-row gap-2  ">
//                             {" "}
//                             {/* <div className=" h-8 w-px bg-green-500 hidden sm:block " /> */}
//                             #{item.variation.ref}
//                           </h4>
//                         </div>
//                         <div className=" justify-center text-center mt-4">
//                           <div className=" h-8  w-full  sm-w-[300px] rounded-lg bg-green-300  text-center align-middle font-bold">
//                             {" "}
//                             {totalCount} / {totaleBillet}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 )}
//               </div>)
// })}
//           </div>
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   );
// }

import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
// import { ExclamationTriangleIcon } from "@heroicons/react";

export default function Collection() {
  const { data: session, status } = useSession();
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [userId, setUserId] = useState("");
  const [groupedCollection, setGroupedCollection] = useState({});

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [status, session]);

  useEffect(() => {
    if (userId) {
      fetchBilletCollection(userId);
    }
  }, [userId]);

  const fetchBilletCollection = async (userId) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`
      );
      groupCollectionByCategory(res.data);
    } catch (error) {
      console.error("Error fetching collection:", error);
      setState("danger");
      setMessage("Failed to fetch collection. Please try again later.");
    }
  };

  const groupCollectionByCategory = (collection) => {
    const grouped = collection.reduce((acc, item) => {
      const currency = item.currency || item.variation.currencies;
      const categoryId = currency.currency.id;
      const categoryTitle = currency.currency.title;
      const categoryDate = currency.currency.date_issue;
      
      if (!acc[categoryId]) {
        acc[categoryId] = {
          title: categoryTitle,
          date_issue : categoryDate,
          items: []
        };
      }
      
      acc[categoryId].items.push(item);
      return acc;
    }, {});

    setGroupedCollection(grouped);
  };

  return (
    <MaxWidthWrapper className="mb-32">
      {state === "success" && (
        <div
          className="alert alert-success p-4 mb-4 border border-green-400 bg-green-100 rounded-md text-green-800"
          role="alert"
        >
          {message}
        </div>
      )}
      {state === "danger" && (
        <div className="alert alert-danger p-4 mb-4 border border-red-400 bg-red-100 rounded-md text-red-800 flex items-start space-x-2">
          <ExclamationTriangleIcon className="h-4 w-4 mt-1" />
          <div>
            <div className="font-bold">Error</div>
            <div>{message}</div>
          </div>
        </div>
      )}
      
      <div className="min-h-[80vh]">
        <div className="text-center align-middle mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:m-0">
              Your Collection
            </h2>
          </div>
          
          {Object.entries(groupedCollection).map(([categoryId, category]) => (
            <div key={categoryId} className="mb-12">
              <h3 className=" flex items-center gap-5 text-2xl font-bold mb-4"> {category.title}--- <span className="font-semibold text-sm">{category.date_issue}</span></h3>
              <div className="flex flex-col gap-8 justify-center items-center">
                {category.items.map((item, index) => {
                  const mainBilletData = item.currency || item.variation.currencies;
                  const totalBillets = mainBilletData.variations.length + 1;
                  const collectedBillets = category.items.filter(
                    i => i.currencyId === mainBilletData.id || i.variationId === item.variationId
                  ).length;

                  return (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-full">
                      <Link href={`/catalog/${encodeURIComponent(mainBilletData.currency.title)}/${encodeURIComponent(mainBilletData.title)}?id=${mainBilletData.currency.id}&billet=${mainBilletData.id}`}>
                        <div className="bg-white flex flex-col sm:flex-row rounded-lg shadow-lg overflow-hidden">
                          <div className="flex-shrink-0 flex sm:flex-col">
                            <div className="overflow-hidden w-28 h-20 sm:w-56 sm:h-24 flex-shrink-0 p-1">
                              <Image
                                src={mainBilletData.imagefront}
                                alt={mainBilletData.title}
                                width={224}
                                height={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="overflow-hidden w-28 h-20 sm:w-56 sm:h-24 flex-shrink-0 p-1">
                              <Image
                                src={mainBilletData.imageback}
                                alt={mainBilletData.title}
                                width={224}
                                height={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="p-3 flex flex-col flex-1 sm:min-w-[300px] lg:min-w-[500px]">
                            <div className="flex flex-col items-start">
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {mainBilletData.title}
                              </h3>
                              <h4 className="text-sm text-gray-700 mb-2">
                                {mainBilletData.date}
                              </h4>
                              <h4 className="text-lg text-gray-700 mb-2 flex flex-row gap-2">
                                #{mainBilletData.ref}
                              </h4>
                            </div>
                            <div className="justify-center text-center mt-4">
                              <div className="h-8 w-full sm:w-[300px] rounded-lg bg-green-300 text-center align-middle font-bold flex items-center justify-center">
                                {collectedBillets} / {totalBillets}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}