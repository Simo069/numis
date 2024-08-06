import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";
import axios from "axios";

export default function editCategory() {
  const router = useRouter();
  const { idCategory } = router.query;
  // variable form
  const [currencyInfo, setCurrencyInfo] = useState("");
  const [title, setTitle] = useState("");
  const [bankName, setBankName] = useState("");
  const [currency, setCurrency] = useState("");
  const [image, setImage] = useState(null);
  const [dateIssue, setDateIssue] = useState("");
  
  useEffect(()=>{
    getCategoryInfo(idCategory)
  },[idCategory])
  const getCategoryInfo = async (id)=>{
    try {
      const response = await axios.post(`/api/catalog/getCurrencyItemInfo`,
      {id:idCategory}
      )
      setCurrencyInfo(response.data)
      const currencyItem= response.data
      setTitle(currencyItem.title)
      setBankName(currencyItem.bank_name)
      setCurrency(currencyItem.currency)
      setDateIssue(currencyItem.date_issue)
      setImage(currencyItem.image)
    } catch (error) {
      console.error("Error fetching one  currency item (updating category): ", error);
    }
  }
  const handleImageChange = (file) => {
    setImage(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(); 
    formData.append("id",idCategory)
    formData.append("title",title)
    formData.append("bank_name",bankName)
    formData.append("currency",currency)
    formData.append("date_issue",dateIssue)
    formData.append("image",image)
    try{
      const res = await axios.put(
        `/api/catalog/updateCategory`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(res.status === 200){
        setTitle("")
        setBankName("")
        setCurrency("")
        setDateIssue("")
        setImage(null)
        router.push({
          pathname:'/dashboard/category',
          query: {message : "category updated succesfully" , state : "success"}
        })
      }
    }catch(error){
      console.log(error)
    }
  };
  const handlecancel= ()=>{
    router.push("/dashboard/category")
  }
  
  return (
    <>
      <DashboardLayout>
        <div className="max-w-screen-xl mx-auto mt-14">
          <div className="bg-white p-4 md:p-10 mt-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold mb-16">Update Category</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:justify-start gap-5 gap-y-5">
                <div className="mb-4 md:w-1/2 ">
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
                  <div className="mb-4 md:w-1/2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-start gap-5 gap-y-5">
                <div className="mb-4 md:w-1/2 ">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Currency
                  </label>
                  <input
                    type="text"
                    id="currency"
                    name="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
                <div className="mb-4 md:w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date Issue
                  </label>
                  <input
                    type="text"
                    id="dateIssue"
                    name="dateIssue"
                    value={dateIssue}
                    onChange={(e) => setDateIssue(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
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
                              handleImageChange(e.target.files[0])
                            }
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      {image && (
                        // <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                        //   {imageFront.name}
                        // </p>
                        <Image
                          width={96}
                          height={96}
                          src={image}
                          alt=""
                          className="rounded-lg object-cover"
                        />
                      )}
                      {image?.name && (
                      <p className="mt-2 text-lg leading-5 text-gray-900 font-bold ">
                        {image.name}
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
