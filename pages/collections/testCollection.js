// // // Example React component to display a user's collection
// // import { useSession } from "next-auth/react";
// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // export default function UserCollection() {
// //   const { data: session } = useSession();
// //   const [collection, setCollection] = useState([]);

// //   useEffect(() => {
// //     if (session?.user?.id) {
// //       fetchCollection(session.user.id);
// //     }
// //   }, [session]);
// //   const fetchCollection = async (userId) => {
// //     try {
// //       const res = await axios.get(`/api/collection/${userId}`);
// //       setCollection(res.data);
// //     } catch (error) {
// //       console.error("Error fetching collection:", error);
// //     }
// //   };
// //   return (
// //     <div>
// //       <h1>User Collection</h1>
// //       <div>
// //         {collection.map((item) => (
// //           <div key={item.id}>
// //             {item.currency ? (
// //               <div>
// //                 <h2>{item.currency.title}</h2>
// //                 <p>{item.currency.description}</p>
// //               </div>
// //             ) : (
// //               <div>
// //                 <h2>{item.variation.ref}</h2>
// //                 <p>{item.variation.description}</p>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";
// import axios from "axios";
// import Image from "next/image";
// import { GoArrowRight } from "react-icons/go";
// import MaxWidthWrapper from "./MaxWidthWrapper";

// const checkIfCurrencyInCollection = (userCollection, currencyId) => {
//   return userCollection.some(
//     (item) => item.currencyId === currencyId || item.variationId === currencyId
//   );
// };

// const AddToCollectionButton = ({
//   userCollection,
//   userId,
//   currency,
//   id,
//   AddToCollection,
// }) => {
//   const isCurrencyInCollection = checkIfCurrencyInCollection(
//     userCollection,
//     currency.id
//   );

//   return (
//     <button
//       className="button font-semibold border px-3 py-2 text-white bg-green-500 rounded transform transition-all hover:scale-110"
//       onClick={() => AddToCollection(userId, currency.id, false, id)}
//       disabled={isCurrencyInCollection}
//     >
//       {isCurrencyInCollection ? "Already in Collection" : "Add To Collection"}
//     </button>
//   );
// };

// export default function CurrencyDetail({ currency, id }) {
//   const { data: session, status } = useSession();
//   const [userId, setUserId] = useState("");
//   const [userCollection, setUserCollection] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     if (status === "authenticated" && session?.user?.id) {
//       setUserId(session.user.id);
//       fetchUserCollection(session.user.id);
//     }
//   }, [status, session]);

//   const fetchUserCollection = async (userId) => {
//     try {
//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`
//       );
//       setUserCollection(res.data);
//     } catch (error) {
//       console.error("Error fetching user collection:", error);
//     }
//   };

//   const AddToCollection = async (userId, currencyId, isVariation, id) => {
//     // Your add to collection logic here
//   };

//   return (
//     <MaxWidthWrapper>
//       <div className="flex items-center gap-2 text-center align-middle mb-6">
//         <GoArrowRight className="text-4xl hidden md:block" />
//         <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
//           {currency.title}
//         </h1>
//       </div>
//       <div className="m-auto flex flex-col items-start ">
//         <h4 className="text-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
//           <span className="text-green-700 font-bold">Issued by :</span>{" "}
//           {currency.issued_by}
//         </h4>
//         <div className="flex flex-col sm:flex-row gap-3">
//           <h4 className="bold text-2xl text-green-700 text-center md:text-left font-bold">
//             Description:
//           </h4>
//           <p className="leading-7 [&:not(:first-child)]:mt-1">
//             {currency.description}
//           </p>
//         </div>
//       </div>
//       <div className="mx-auto my-auto">
//         <div className="mb-5 flex justify-end">
//           <AddToCollectionButton
//             userCollection={userCollection}
//             userId={userId}
//             currency={currency}
//             id={id}
//             AddToCollection={AddToCollection}
//           />
//         </div>
//         <div className="flex flex-col sm:flex-row gap-8 items-center text-center">
//           <Image
//             width={400}
//             height={300}
//             src={currency.imagefront}
//             className="rounded-lg object-cover"
//             alt="Front"
//           />
//           <Image
//             width={400}
//             height={300}
//             src={currency.imageback}
//             className="rounded-lg object-cover"
//             alt="Back"
//           />
//         </div>
//         <div className="p-9 flex flex-col sm:flex-row gap-5 items-center">
//           {currency.imagesignature && (
//             <>
//               <h3 className="font-bold text-2xl text-green-700">Signature:</h3>
//               <img
//                 src={currency.imagesignature}
//                 className="w-[300px] object-cover"
//                 alt="Signature"
//                 onClick={() => setSelectedImage(currency.imagesignature)}
//               />
//             </>
//           )}
//         </div>
//         <table className="w-full border-collapse mb-6">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2 text-left">ref</th>
//               <th className="border p-2 text-left">type</th>
//               <th className="border p-2 text-left">date</th>
//               <th className="border p-2 text-left">comments</th>
//               {currency.imagesignature && (
//                 <th className="border p-2 text-left">Image</th>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border p-2">{currency.ref}</td>
//               <td className="border p-2">{currency.type}</td>
//               <td className="border p-2">{currency.date}</td>
//               <td className="border p-2">{currency.comments}</td>
//               {currency.imagesignature && (
//                 <td className="border p-2">
//                   <Image
//                     src={currency.imagesignature}
//                     alt={currency.imagesignature}
//                     width={50}
//                     height={50}
//                     onClick={() => setSelectedImage(currency.imagesignature)}
//                     className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
//                   />
//                 </td>
//               )}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </MaxWidthWrapper>
//   );
// }


// pages/items.js or components/ItemList.js




import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
const ItemList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };
  const handleConfirmDelete = () => {
    // Perform delete operation here
    console.log(`Deleting item: ${itemToDelete.id}`);
    // After deletion, close the modal and reset the itemToDelete
    setIsModalOpen(false);
    setItemToDelete(null);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleDeleteClick(item)}>Delete</button>
          </li>
        ))}
      </ul>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete ${itemToDelete?.name}?`}
      />
    </div>
  );
};
export default ItemList;