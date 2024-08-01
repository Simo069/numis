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
  const [isModalConfirmationOpen, setIsModalConfirmationOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToAddVariation, setItemToAddVariation] = useState(null);
  // handle logic of add a varition
  const [variations, setVariations] = useState([
    {
      ref: "",
      description: "",
      nomDesSignataire: "",
      issuedBy: "",
      comments: "",
      date: "",
      imageFront: null,
      imageBack: null,
      imageSignature: null,
    },
  ]);
  const handleVariationChange = (index, key, value) => {
    const updateVariations = [...variations];
    updateVariations[index][key] = value;
    setVariations(updateVariations);
  };
  const handleImageChange = (index, key, file) => {
    const updateVariations = [...variations];
    updateVariations[index][key] = file;
    setVariations(updateVariations);
  };
  const handleAddVariation = () => {
    setVariations([
      ...variations,
      {
        ref: "",
        description: "",
        nomDesSignataire: "",
        issuedBy: "",
        comments: "",
        imageFront: null,
        imageBack: null,
        imageSignature: null,
      },
    ]);
  };
  const handleRemoveVariation = (index) => {
    const updateVariations = [...variations];
    updateVariations.splice(index, 1);
    setVariations(updateVariations);
  };
  const handleAddVariationClick = (item) => {
    setItemToAddVariation(item);
    setIsModalOpen(true);
    console.log(item.id);
  };
  const handleVariationCloseModal = () => {
    setIsModalOpen(false);
    setItemToAddVariation(null);
  };
  const handleSubmitAddvariation = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_currencies", itemToAddVariation.id);
    variations.forEach((variation, index) => {
      formData.append(`variations[${index}][ref]`, variation.ref);
      formData.append(
        `variations[${index}][description]`,
        variation.description
      );
      formData.append(
        `variations[${index}][nomDesSignataire]`,
        variation.nomDesSignataire
      );
      formData.append(`variations[${index}][issuedBy]`, variation.issuedBy);
      formData.append(`variations[${index}][comments]`, variation.comments);
      formData.append(`variations[${index}][imageFront]`, variation.imageFront);
      formData.append(`variations[${index}][imageBack]`, variation.imageBack);
      formData.append(
        `variations[${index}][imageSignature]`,
        variation.imageSignature
      );
      formData.append(`variations[${index}][date]`, variation.date);
      formData.append(`variations[${index}][type]`, variation.type);
    });
    try {
      const resAddVariation = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/addVariation`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (resAddVariation.status === 200) {
        console.log("Variation adde", resAddVariation.data);
        setVariations([
          {
            ref: "",
            description: "",
            nomDesSignataire: "",
            issuedBy: "",
            comments: "",
            date: "",
            type: "",
            imageFront: null,
            imageBack: null,
            imageSignature: null,
          },
        ]);
        setState("success");
        setMessage("Variation added successfully...");
        fetchAllBillet()
      }else{
        setState("danger");
        setMessage("Error adding variation ,try again later please...");
      }
      setVariations([
        {
          ref: "",
          description: "",
          nomDesSignataire: "",
          issuedBy: "",
          comments: "",
          date: "",
          type: "",
          imageFront: null,
          imageBack: null,
          imageSignature: null,
        },
      ]);
      handleVariationCloseModal()
    } catch (error) {
      setVariations([
        {
          ref: "",
          description: "",
          nomDesSignataire: "",
          issuedBy: "",
          comments: "",
          date: "",
          type: "",
          imageFront: null,
          imageBack: null,
          imageSignature: null,
        },
      ]);
      handleVariationCloseModal()
      console.error("Error when adding Variation ::",error)
      setState("danger");
      setMessage("Error adding variation ,try again later please...");
    }
  };
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
    setIsModalConfirmationOpen(true);
  };
  const handleConfirmDelete = async () => {
    console.log("item to delete ::", itemToDelete);
    try {
      const resDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/deleteBillet`,
        {
          data: {
            idBillet: itemToDelete.id,
            isVariation: itemToDelete.isVariation,
          },
        }
      );
      if (resDelete.status === 200) {
        setState("success");
        setMessage("Billet deleted successfully from table currencies...");
        fetchAllBillet();
        setIsModalConfirmationOpen(false);
        setItemToDelete(null);
      } else {
        setState("danger");
        setMessage(
          "Error when Deleting billet from table currencies. Try again later, please ..."
        );
        setIsModalConfirmationOpen(false);
        setItemToDelete(null);
      }
    } catch (error) {
      console.error(
        "Error when deleting a billet from currencies in dashboard admin",
        error
      );
      setState("danger");
      setMessage(
        "Error when Deleting billet from table currencies. Try again later, please ..."
      );
    }
    setIsModalConfirmationOpen(false);
    setItemToDelete(null);
  };

  const handleCloseModal = () => {
    setIsModalConfirmationOpen(false);
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
                    {message}
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
                        <td className="px-6 py-4 whitespace-nowrap text-center flex items-center align-middle">
                          <button
                            className="bg-red-500 text-white px-3 py-1 rounded-lg"
                            onClick={() => handleDeleteClick(item)}
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
                          {!item.isVariation && (
                            <button
                              className="bg-green-500 text-white px-3 py-1 rounded-lg ml-2"
                              onClick={() => handleAddVariationClick(item)}
                            >
                              {/* <GoMoveToEnd className="text-2xl" /> */}
                              add variation
                            </button>
                          )}
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
          message={`Are you sure you want to delete this billet from. the currecnies table?`}
        />

        <Modal isOpen={isModalOpen} onClose={isModalOpen}>
          <h2 className="text-xl font-bold mb-4">Add New Category</h2>
          <form
            onSubmit={handleSubmitAddvariation}
            encType="multipart/form-data"
          >
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-8 mt-8">Variations</h1>
              {variations.map((variation, index) => (
                <div key={index} className="flex flex-col gap-y-3">
                  <div className="flex flex-col md:flex-row md:justify-start gap-5 gap-y-6">
                    <div className="mb-4 md:w-1/2">
                      <label
                        htmlFor={variation.ref}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ref
                      </label>
                      <input
                        type="text"
                        id={variation.ref}
                        name={variation.ref}
                        value={variation.ref}
                        onChange={(e) =>
                          handleVariationChange(index, "ref", e.target.value)
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4 md:w-1/2">
                      <label
                        htmlFor={variation.type}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Type
                      </label>
                      <input
                        type="text"
                        id={variation.type}
                        name={variation.type}
                        value={variation.type}
                        onChange={(e) =>
                          handleVariationChange(index, "type", e.target.value)
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-start gap-5 gap-y-6">
                    <div className="mb-4 md:w-1/2">
                      <label
                        htmlFor={variation.nomDesSignataire}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name of Signatures
                      </label>
                      <input
                        type="text"
                        id={variation.nomDesSignataire}
                        name={variation.nomDesSignataire}
                        value={variation.nomDesSignataire}
                        onChange={(e) =>
                          handleVariationChange(
                            index,
                            "nomDesSignataire",
                            e.target.value
                          )
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4 md:w-1/2">
                      <label
                        htmlFor={variation.date}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="text"
                        id={variation.date}
                        name={variation.date}
                        value={variation.date}
                        onChange={(e) =>
                          handleVariationChange(index, "date", e.target.value)
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-start gap-5 gap-y-6">
                    <div className="mb-4 md:w-1/2">
                      <label
                        htmlFor={variation.issuedBy}
                        className="block text-sm font-medium text-gray-700"
                      >
                        Issued by
                      </label>
                      <input
                        type="text"
                        id={variation.issuedBy}
                        name={variation.issuedBy}
                        value={variation.issuedBy}
                        onChange={(e) =>
                          handleVariationChange(
                            index,
                            "issuedBy",
                            e.target.value
                          )
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4 md:w-1/2">
                      <label
                        htmlFor={variation.comments}
                        className="block text-sm font-medium text-gray-700"
                      >
                        comment
                      </label>
                      <input
                        type="text"
                        id={variation.comments}
                        name={variation.comments}
                        value={variation.comments}
                        onChange={(e) =>
                          handleVariationChange(
                            index,
                            "comments",
                            e.target.value
                          )
                        }
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div class="md:w-1/2">
                    <label
                      for={variation.description}
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div class="mt-2">
                      <textarea
                        id={variation.description}
                        name={variation.description}
                        rows="3"
                        placeholder="writea few line to descripe the product"
                        onChange={(e) =>
                          handleVariationChange(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        class="block w-full rounded-md border  focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-4 flex flex-col md:flex-row md:justify-start gap-3 mt-4">
                    <div className="md:w-1/3">
                      <label
                        htmlFor={index}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Image Front:
                      </label>
                      <div className="mt-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                        <div className="text-center">
                          <div className="mt-4  flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor={index}
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id={index}
                                name={index}
                                type="file"
                                className="sr-only"
                                onChange={(e) =>
                                  handleImageChange(
                                    index,
                                    "imageFront",
                                    e.target.files[0]
                                  )
                                }
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          {variation.imageFront && (
                            <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                              {variation.imageFront.name}
                            </p>
                          )}
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Image Back:
                      </label>
                      <div className="mt-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                        <div className="text-center">
                          <div className="mt-4  flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor={variation.imageBack}
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id={variation.imageBack}
                                name={variation.imageBack}
                                type="file"
                                className="sr-only"
                                onChange={(e) =>
                                  handleImageChange(
                                    index,
                                    "imageBack",
                                    e.target.files[0]
                                  )
                                }
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          {variation.imageBack && (
                            <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                              {variation.imageBack.name}
                            </p>
                          )}
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Image Signature:
                      </label>
                      <div className="mt-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                        <div className="text-center">
                          <div className="mt-4  flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor={variation.imageSignature}
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id={variation.imageSignature}
                                name={variation.imageSignature}
                                type="file"
                                className="sr-only"
                                onChange={(e) =>
                                  handleImageChange(
                                    index,
                                    "imageSignature",
                                    e.target.files[0]
                                  )
                                }
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          {variation.imageSignature && (
                            <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                              {variation.imageSignature.name}
                            </p>
                          )}
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="block font-bold text-sm text-white bg-gray-700 px-2 py-2 rounded mt-3 transform hover:scale-100 w-[170px] mb-8"
                    onClick={() => handleRemoveVariation(index)}
                  >
                    Remove Variation
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="block text-sm font-medium text-white bg-indigo-500 px-2 py-2 rounded mt-3 transform hover:scale-100"
                onClick={handleAddVariation}
              >
                Add Variation
              </button>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                // onClick={()=>setIsModalOpen(false)}
                onClick={handleVariationCloseModal}
                className="mr-2 bg-white hover:bg-gray-200 text-indigo-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
            </div>
          </form>
        </Modal>
      </DashboardLayout>
    </>
  );
}
