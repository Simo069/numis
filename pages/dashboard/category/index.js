// import DashboardLayout from "@/components/DashboardLayout";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import React, { useState, useEffect } from "react";
// import { MdDelete } from "react-icons/md";
// import { GoMoveToEnd } from "react-icons/go";
// import { useRouter } from "next/router";
// import Modal from "@/components/Modal";

// export default function category() {
//   const [categories, setCategories] = useState([]);
//   const router = useRouter();
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredCategories = categories.filter((categorie) =>
//     `${categorie.title}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const [isModalOpen , setIsModalOpen]= useState(false);
//   const openModal= ()=>{
//     setIsModalOpen(true);
//   }
//   const closeModal=()=>{
//     setIsModalOpen(false);
//   }

//   useEffect(() => {
//     const fetchcategories = async () => {
//       try {
//         const resCategories = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getItemcatalog`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "applications/json",
//             },
//           }
//         );

//         const responseCategories = await resCategories.json();
//         console.log("responseCategories---::---", responseCategories);
//         setCategories(responseCategories);
//       } catch (error) {
//         console.log("Error during registration: ", error);
//       }
//     };
//     fetchcategories();
//   }, []);
//   console.log("categores---::---", categories);

//   return (
//     <>
//       <DashboardLayout>
//         <div className="card border-0 py-4 px-4 shadow-md rounded-lg">
//           <div className="mb-4 flex justify-between items-center">
//             <h1 className="text-2xl font-semibold text-gray-800">
//               All categories
//             </h1>
//             <div className="flex gap-3  ">
//               <input
//                 type="text"
//                 placeholder="Search by title..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />

//               <button
//               className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
//               onClick={openModal}
//               >
//                 Add category
//               </button>
//             </div>
//           </div>
//           <Modal className="" isOpen ={isModalOpen} isClose={closeModal}>
//             <h2>add Nwe Category</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="categoryName">
//                   Category Name
//                 </label>
//                 <input
//                 className="shadow appearance-none boreder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="categoryName"
//                 type="text"
//                 placeholder="Enter category Name"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                 className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
//                 type="button"
//                 onClick={closeModal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Add category
//                 </button>
//               </div>
//             </form>
//           </Modal>
//           {filteredCategories.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       image
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       title
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       bank name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       currency
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       date Issue
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       edit
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200  overflow-y-auto">
//                   {filteredCategories.map((item) => (
//                     <tr key={item.item_id}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {item.image !== null ? (
//                           <img
//                             src={`${item.image}`}
//                             alt="Seller Avatar"
//                             width={64}
//                             height={64}
//                             layout="responsive"
//                           />
//                         ) : (
//                           <img
//                             src={`/uploads/default.png`}
//                             alt="Seller Avatar"
//                             width={64}
//                             height={64}
//                             layout="responsive"
//                           />
//                         )}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {item.title}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {item.bank_name}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {item.currency}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         {item.dateIssue}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
//                           <MdDelete className="text-2xl" />
//                         </button>
//                         <button
//                           className="bg-yellow-500 text-white px-3 py-1 rounded-lg ml-2"
//                           onClick={() => handleButtonClick(item.item_id)}
//                         >
//                           <GoMoveToEnd className="text-2xl" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-8">
//               <img
//                 src="/noresult.png"
//                 alt="No results found"
//                 className="w-72 h-72 mb-4"
//               />
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 No items found
//               </h2>
//               <p className="text-gray-500">
//                 We couldn't find any users matching your search.
//               </p>
//             </div>
//           )}
//         </div>
//       </DashboardLayout>
//     </>
//   );
// }

import DashboardLayout from "@/components/DashboardLayout";
import React, { useState, useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import { useRouter } from "next/router";
import Modal from "@/components/Modal";
import axios from "axios";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setmessage] = useState("");
  const [state, setstate] = useState("");
  // variable form
  const [title, setTitle] = useState("");
  const [bankName, setBankName] = useState("");
  const [currency, setCurrency] = useState("");
  const [image, setImage] = useState([]);
  const [dateIssue, setDateIssue] = useState("");
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title", title);
    console.log("bankname", bankName);
    console.log("currency", currency);
    console.log("image", image);
    console.log("dateIssue", dateIssue);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("bankName", bankName);
    formData.append("currency", currency);
    formData.append("dateIssue", dateIssue);
    formData.append("image", image);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/addcategory`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        setIsModalOpen(false);
        setstate("success");
        setmessage("Category added successfully");
      } else {
        setstate("danger");
        setmessage("Error adding try later please");
      }
    } catch (error) {
      alert("Error ::" + error.message);
    }
    setTitle("");
    setBankName("");
    setCurrency("");
    setDateIssue("");
    setImage(null);
  };

  const filteredCategories = categories.filter((categorie) =>
    `${categorie.title}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchCategories = async () => {
    try {
      const resCategories = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getItemcatalog`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseCategories = await resCategories.json();
      setCategories(responseCategories);
    } catch (error) {
      console.log("Error fetching categories: ", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [message]);
  setTimeout(() => {
    setstate("");
    setmessage("");
  }, 5000);
  return (
    <DashboardLayout>
      <div className="card border-0 py-4 px-4 shadow-md rounded-lg">
        {state === "success" && (
          <div
            className="alert alert-success p-4 mb-4 border border-green-400 bg-green-100 rounded-md text-green-800"
            role="alert"
          >
            Category added successfully .
          </div>
        )}
        {state === "danger" && (
          <div className="alert alert-danger p-4 mb-4 border border-red-400 bg-red-100 rounded-md text-red-800 flex items-start space-x-2">
            <ExclamationTriangleIcon className="h-4 w-4 mt-1" />
            <div>
              <div className="font-bold">Error</div>
              <div>
                Adding a category was unsuccessful. Please try again later .
              </div>
            </div>
          </div>
        )}

        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            All Categories
          </h1>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={openModal}
            >
              Add Category
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Add New Category</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-4 flex flex-col gap-y-4 py-4 px-8">
              <div className="py-2 px-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="categoryName"
                >
                  Category Name
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="categoryName"
                  type="text"
                  placeholder=" category name"
                />
              </div>
              <div className="py-2 px-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="categoryName"
                >
                  Bank Name
                </label>
                <input
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="categoryName"
                  type="text"
                  placeholder=" bank name"
                />
              </div>
              <div className="py-2 px-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="categoryName"
                >
                  Currency
                </label>
                <input
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="categoryName"
                  type="text"
                  placeholder=" Currency"
                />
              </div>
              <div className="py-2 px-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="categoryName"
                >
                  Date of Issue
                </label>
                <input
                  value={dateIssue}
                  onChange={(e) => setDateIssue(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="categoryName"
                  type="text"
                  placeholder=" date issue"
                />
              </div>
              <div className="py-2 px-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="categoryName"
                >
                  Image
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="categoryName"
                  type="file"
                  placeholder=" category name"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="mr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Category
              </button>
            </div>
          </form>
        </Modal>
        {filteredCategories.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full min-h-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Image
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
                    Bank Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Issue
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Edit
                  </th>
                </tr>
              </thead>
            </table>
            <div className="max-h-full overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCategories.map((item) => (
                    <tr key={item.item_id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt="Category Image"
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.bank_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.currency}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.dateIssue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-lg">
                          <MdDelete className="text-2xl" />
                        </button>
                        <button
                          className="bg-yellow-500 text-white px-3 py-1 rounded-lg ml-2"
                          onClick={() => handleButtonClick(item.item_id)}
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
  );
}
