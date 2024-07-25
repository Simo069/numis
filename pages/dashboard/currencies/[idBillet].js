import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/DashboardLayout";
import axios from "axios";
import Image from "next/image";

export default function updateBillet() {
  const router = useRouter();
  const { idBillet, isVariation } = router.query;
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
  const [currency, setCurrency] = useState([]);
  const [variations, setVariations] = useState([]);
  const fetchCurrencyItem = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getItemcatalog`
      );
      setCurrencyItem(response.data);
    } catch (error) {
      console.error("Error fetching currency item:", error);
    }
  };

  useEffect(() => {
    fetchCurrencyItem();
    if (isVariation === "false") {
      fetchBilletInfo(idBillet);
    } else if (isVariation === "true") {
      fetchBilletVariationInfo(idBillet);
    }
  }, [idBillet, isVariation]);

  const fetchBilletInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getCurrenciesInfo`,
        { id: currencyId }
      );
      const currency = response.data;
      setCurrency(currency);
      setRef(currency.ref);
      setType(currency.type);
      setTitle(currency.title);
      setDate(currency.date);
      setValue(currency.value);
      setIssuedBy(currency.issued_by);
      setDescription(currency.description);
      setComment(currency.comments);
      setNameofSignatures(currency.nom_des_signataire);
      setImageFront(currency.imagefront);
      setImageBack(currency.imageback);
      setImageSignature(currency.imagesignature);
      setCurrencyId(currency.currencyId);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  const fetchBilletVariationInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/oneVariationInfo`,
        { id: currencyId }
      );
      console.log("Variation API response:", response.data);
      const variation = response.data;
      setVariations(variation);
      setRef(variation.ref);
      setType(variation.type);
      setDate(variation.date);
      setIssuedBy(variation.issued_by);
      setDescription(variation.description);
      setComment(variation.comments);
      setNameofSignatures(variation.nom_des_signataire);
      setImageFront(variation.imagefront);
      setImageBack(variation.imageback);
      setImageSignature(variation.imagesignature);
    } catch (error) {
      console.error("Error fetching variation data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", idBillet);
    formData.append("ref", ref);
    formData.append("description", description);
    formData.append("nom_des_signataire", nameofSignatures);
    formData.append("issued_by", issuedBy);
    formData.append("comments", comment);
    formData.append("imagefront", imageFront);
    formData.append("imageback", imageBack);
    formData.append("imagesignature", imageSignature);
    formData.append("currencyId", currencyId);
    formData.append("date", date);
    formData.append("type", type);
    if (isVariation === "false") {
      formData.append("title", title);
      formData.append("value", value);
      formData.append("isvariation", false);
    } else if (isVariation === "true") {
      formData.append("isvariation", true);
    }
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/updateBillet`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Currency added:", res.data);
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
      
      router.push({
        pathname: "/dashboard/currencies",
        query : {message : "billet updated successfuly" , state : "success"}
      })

      setMessage("Currency updated successfully!");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {

      console.error("Error updating currency:", error);
      setMessage("Error updating currency. Please try again.");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
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
  const handlecancel = () => {
    router.push("/dashboard/currencies");
  };

  return (
    <>
      <DashboardLayout>
        <div className="max-w-screen-xl mx-auto mt-14">
          <div className="bg-white p-4 md:p-10 mt-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-16">Update Billet</h1>
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
                {isVariation === "false" && (
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
                )}
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
                {isVariation === "false" && (
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
                )}
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
              {isVariation === "false" ?
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
              :
              ""
              }
              
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
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      {imageFront && (
                        // <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                        //   {imageFront.name}
                        // </p>
                        <Image
                          width={96}
                          height={96}
                          src={imageFront}
                          alt=""
                          className="rounded-lg object-cover"
                        />
                      )}
                      {imageFront?.name && (
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
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      {imageBack && (
                        <Image
                        width={96}
                        height={96}
                        src={imageBack}
                        alt=""
                        className="rounded-lg object-cover"
                      />
                      )}
                      {imageBack?.name && (
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
                        <Image
                        width={96}
                        height={96}
                        src={imageSignature}
                        className="rounded-lg object-cover"
                        alt=""
                      />
                      )}
                      {imageSignature?.name && (
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
    </>
  );
}
