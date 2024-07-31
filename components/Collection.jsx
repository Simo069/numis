// import React , {useState , useEffect} from "react";
// import MaxWidthWrapper from "./MaxWidthWrapper";
// import { useSession } from "next-auth/react";
// import axios from "axios";

// export default function Collection() {
//   const { data : session , status } = useSession();
//   const [message , setMessage] = useState("");
//   const [state , setState] = useState("");
//   const [userId , setUserId]=useState("");
//   const [billetCollection , setBilletCollection] = useState([])

//   useEffect(()=>{
//     if(status === "authenticated" && session?.user?.id){
//       setUserId(session.user.id)
//     }
//     fetchBilletColection(userId)
//   },[session,status])

//   useEffect(()=>{
//     fetchBilletColection(userId)
//   },[userId])
//   const fetchBilletColection=async(userId)=>{
//     try {
//       const resCollection = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`)
//       setBilletCollection(resCollection)
//       console.log("resCollection---:::",resCollection)
//     } catch (error) {
//       console.error("Error fetching collection:", error);
//     }
//   }
//   return (
//     <MaxWidthWrapper>
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
//               Updating a category was unsuccessful. Please try again later .
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="min-h-[80vh]">
//           <div className="text-center align-middle max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
//             <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2">
//               <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:m-0 ">
//                 your Collection
//               </h2>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cosl-2 md:grid-cols-3  lg:grid-cols-4  gap-8">

//             </div>
//           </div>
//       </div>
//     </MaxWidthWrapper>
//   );
// }

import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";

export default function Collection() {
  const { data: session, status } = useSession();
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [userId, setUserId] = useState("");
  const [billetCollection, setBilletCollection] = useState([]);

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
      setBilletCollection(res.data);
      console.log("resCollection---:::", res.data);
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  return (
    <MaxWidthWrapper>
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
            <div>
              Updating a category was unsuccessful. Please try again later.
            </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {billetCollection.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                {item.currency ? (
                  <Link
                    key={index}
                    href={`/catalog/${encodeURIComponent(
                      item.currency.currency.title
                    )}/${encodeURIComponent(
                      item.currency.title
                    )}?id=${item.currency.currency.id}&billet=${
                      item.currency.id
                    }`}
                  >
                    <div>
                      <img
                        src={item.currency.imagefront}
                        alt={item.currency.title}
                        className="w-500px h500px object-cover"
                      />
                      <div className="p-3 flex flex-row justify-between">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.currency.title}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2 flex flex-row gap-2  ">
                          {" "}
                          <div className=" h-8 w-px bg-green-500 hidden sm:block " />
                          #{item.currency.ref}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={`/catalog/${encodeURIComponent(
                      item.variation.currencies.currency.title
                    )}/${encodeURIComponent(
                      item.variation.currencies.title
                    )}?id=${item.variation.currencies.currency.id}&billet=${
                      item.variation.currencies.id
                    }`}
                  >
                    <div>
                      <img
                        src={item.variation.imagefront}
                        alt={item.variation.title}
                        className="w-500 h-500 object-cover"
                      />
                      <div className="p-3 flex flex-row justify-between">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.variation.currencies.title}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2 flex flex-row gap-2">
                          <div className="h-8 w-px bg-green-500 hidden sm:block" />
                          {item.variation.ref}
                        </h4>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
