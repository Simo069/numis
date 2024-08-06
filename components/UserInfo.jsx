import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Modal from "./Modal";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function UserInfo() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState({});
  const [id, setId] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      setId(session.user.id);
      fetchInformationUser(session.user.id);
    }
  }, [session, status]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (file) => {
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("firstname", firstname);
    formData.append("secondname", secondname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("image", image);

    try {
      const res = await axios.put(
        `/api/register/edituser`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        setIsModalOpen(false);
        setState("success");
        setMessage("User Information updated successfully...");
        fetchInformationUser(session.user.id);
      } else {
        setIsModalOpen(false);
        setState("danger");
        setMessage("Error when Updating User Information ...");
      }
    } catch (error) {
      console.error("Error updating Information ...", error);
      setState("danger");
      setMessage("Error when Updating User Information ...");
    }
  };

  const fetchInformationUser = async (userId) => {
    try {
      const resUser = await axios.post(
        `/api/user/getUser`,
        { id: userId }
      );
      const userData = resUser.data;

      setUser(userData);
      setFirstname(userData.firstname);
      setSecondname(userData.secondname);
      setUsername(userData.username);
      setImage(userData.profile);
      setEmail(userData.email);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  if (message || state) {
    setTimeout(() => {
      setState("");
      setMessage("");
    }, 5000);
  }

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
              Updating a category was unsuccessful. Please try again later .
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-white rounded-lg shadow-md mt-4">
        <div className="flex flex-col sm:flex-row gap-6 items-center ">
          <div className="rounded-full overflow-hidden w-32 h-32 sm:w-64 sm:h-64 flex-shrink-0">
            <Image
              src={image || ""}
              alt="Seller Avatar"
              width={250}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-y-3">
            <div>
              <h2 className="text-lg text-indigo-700">
                first name :{" "}
                <span className="text-xl font-semibold text-gray-800">
                  {firstname}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="text-lg text-indigo-700">
                second name :{" "}
                <span className="text-xl font-semibold text-gray-800">
                  {secondname}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="text-lg text-indigo-700">
                username :{" "}
                <span className="text-xl font-semibold text-gray-800">
                  {username}
                </span>
              </h2>
            </div>
            <div>
              <h2 className="text-lg text-indigo-700">
                email :{" "}
                <span className="text-xl font-semibold text-gray-800">
                  {email}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div>
          <button
            className="mx-4 px-5 py-2 font-bold rounded text-indigo-500 hover:text-white bg-white hover:bg-indigo-700 w-fit transition-colors duration-300"
            onClick={openModal}
          >
            Edit
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold  text-center mb-8 mt-5 ">
          Edit Information
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4 flex flex-col gap-y-4 py-4 px-8">
            <div className="py-2 px-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Firs Name
              </label>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder=" first name"
              />
            </div>
            <div className="py-2 px-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="secondName"
              >
                Second Name
              </label>
              <input
                value={secondname}
                onChange={(e) => setSecondname(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="secondName"
                type="text"
                placeholder=" second name"
              />
            </div>
            <div className="py-2 px-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="userName"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="userName"
                type="text"
                placeholder=" userName"
              />
            </div>
            <div className="py-2 px-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="py-2 px-1">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2  flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
                <div className="text-center">
                  <div className="mt-4  flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="Image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="Image"
                        name="Image"
                        type="file"
                        className="sr-only"
                        onChange={(e) => handleImageChange(e.target.files[0])}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
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
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="mr-2 bg-white hover:bg-gray-200 text-indigo-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              save
            </button>
          </div>
        </form>
      </Modal>
    </MaxWidthWrapper>
  );
}
