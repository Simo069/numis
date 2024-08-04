import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

export default function addnewbillet() {
  const router = useRouter();
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [ref, setRef] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [currencyId, setCurrencyId] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [nameofSignatures, setNameofSignatures] = useState("");
  const [imageFront, setImageFront] = useState(null);
  const [imageBack, setImageBack] = useState(null);
  const [imageSignature, setImageSignature] = useState(null);
  const [currencyItem, setCurrencyItem] = useState([]);
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

  useEffect(() => {
    async function fetchCurrencyItem() {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getItemcatalog`
      );
      setCurrencyItem(response.data);
    }
    fetchCurrencyItem();
  }, []);

  const handleVariationChange = (index, key, value) => {
    const updatedVariations = [...variations];
    updatedVariations[index][key] = value;
    setVariations(updatedVariations);
  };

  const handleImageChange = (index, key, file) => {
    const updatedVariations = [...variations];
    updatedVariations[index][key] = file;
    setVariations(updatedVariations);
  };

  const handleImageFrontChange = (file) => {
    setImageFront(file);
  };

  const handleImageBackChange = (file) => {
    setImageBack(file);
  };

  const handleImageSignatureChange = (file) => {
    setImageSignature(file);
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
    const updatedVariations = [...variations];
    updatedVariations.splice(index, 1);
    setVariations(updatedVariations);
  };

  const handlecancel = () => {
    router.push({
      pathname: "/dashboard/currencies",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append("ref", ref);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("nom_des_signataire", nameofSignatures);
    formData.append("value", value);
    formData.append("issued_by", issuedBy);
    formData.append("comments", comment);
    formData.append("imagefront", imageFront);
    formData.append("imageback", imageBack);
    formData.append("imagesignature", imageSignature);
    formData.append("idCurrencyitem", currencyId);
    formData.append("date", date);
    formData.append("type", type);

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
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log("Currency added:", res.data);

      // Reset form fields
      setRef("");
      setType("");
      setTitle("");
      setCurrencyId("");
      setDate("");
      setValue("");
      setIssuedBy("");
      setDescription("");
      setComment("");
      setNameofSignatures("");
      setImageFront(null);
      setImageBack(null);
      setImageSignature(null);
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

      // Show success message
      if(res.status === 200){
        setMessage("Billet added successfully!");
      }else{
        setMessage("Error adding new billet try again please ");
      }
      setRef("");
      setType("");
      setTitle("");
      setCurrencyId("");
      setDate("");
      setValue("");
      setIssuedBy("");
      setDescription("");
      setComment("");
      setNameofSignatures("");
      setImageFront(null);
      setImageBack(null);
      setImageSignature(null);
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

      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error adding currency:", error);
      setMessage("Error adding currency. Please try again.");

      // Clear error message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-screen-xl mx-auto mt-14">
        {message && (
          <div
            className="alert alert-success p-4 mb-4 border border-green-400 bg-green-100 rounded-md text-green-800"
            role="alert"
          >
            {message}
          </div>
        )}
        <div className="bg-white p-4 md:p-10 mt-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Add new Billet</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row md:justify-start gap-5 gap-y-5">
              <div className="mb-4 md:w-1/2 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ref
                </label>
                <input
                  type="text"
                  id="ref"
                  name="ref"
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start gap-5">
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start gap-5">
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Value
                </label>
                <input
                  type="text"
                  id="value"
                  name="value"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Issued By
                </label>
                <input
                  type="text"
                  id="IssuedBy"
                  name="IssuedBy"
                  value={issuedBy}
                  onChange={(e) => setIssuedBy(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-start gap-5">
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  comment
                </label>
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of Signatures
                </label>
                <input
                  type="text"
                  id="nameofSignatures"
                  name="nameofSignatures"
                  value={nameofSignatures}
                  onChange={(e) => setNameofSignatures(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div class="md:w-1/2 mb-6 mt-6">
              <div class="sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  {" "}
                  Category{" "}
                </label>
                <div class="mt-2">
                  <select
                    id="country"
                    value={currencyId}
                    onChange={(e) => setCurrencyId(e.target.value)}
                    required
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>select one</option>
                    {currencyItem.map((currency) => (
                      <option key={currency.id} value={currency.id}>
                        {currency.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <label
                for="description"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div class="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={description}
                  placeholder="writea few line to descripe the product"
                  onChange={(e) => setDescription(e.target.value)}
                  class="block w-full rounded-md border  focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50"
                ></textarea>
              </div>
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:justify-start gap-3 mt-4">
              <div className="md:w-1/3">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image Front:
                </label>
                <div className="mt-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                  <div className="text-center">
                    <div className="mt-4  flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="Image_Front"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="Image_Front"
                          name="Image_Front"
                          type="file"
                          className="sr-only"
                          onChange={(e) =>
                            handleImageFrontChange(e.target.files[0])
                          }
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    {imageFront && (
                      <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                        {imageFront.name}
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
                        htmlFor="Image_Back"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="Image_Back"
                          name="Image_Back"
                          type="file"
                          className="sr-only"
                          onChange={(e) =>
                            handleImageBackChange(e.target.files[0])
                          }
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    {imageBack && (
                      <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                        {imageBack.name}
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
                        htmlFor="Image_Signature"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="Image_Signature"
                          name="Image_Signature"
                          type="file"
                          className="sr-only"
                          onChange={(e) =>
                            handleImageSignatureChange(e.target.files[0])
                          }
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    {imageSignature && (
                      <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                        {imageSignature.name}
                      </p>
                    )}
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

            {/* Submit and Cancel buttons */}
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={handlecancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
