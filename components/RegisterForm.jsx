"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaUserAlt,
  FaPhone,
  FaExclamationCircle,
} from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import { RiUser6Line } from "react-icons/ri";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {
      const res = await fetch(
        `/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            email: email,
            password: password,
            firstname: firstname,
            secondname: secondname,
          }),
        }
      );
      const response = await res.json();
      console.log("status :", res.status);
      if (res.status === 201) {
        const form = e.target;
        form.reset();
        console.log("User registration success.");
        router.push("login");
      } else if (res.status === 409) {
        setError(response.message);
      } else {
        setError("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen relative bg-[url('/login.png')] bg-cover bg-center flex items-center justify-center  overflow-x-hidden">
      <div className="absolute inset-1 backdrop-filter backdrop-blur-sm bg-black bg-opacity-70 w-full m-0 p-0 left-0"></div>
      <div className="max-w-md w-full space-y-8 z-10 ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Register
          </h2>
          <p className="mt-2 text-center text-sm text-gray-100">
            Create a new account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 shadow-sm">
            <div>
              <label htmlFor="firstname" className="sr-only">
                first name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiUser6Line className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="first name"
                  name="first name"
                  type="text"
                  value={firstname}
                  onChange={(e) => setfirstname(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="firstname"
                />
              </div>
            </div>
            <div>
              <label htmlFor="firstname" className="sr-only">
                second name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiUser6Line className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="second name"
                  name="second name"
                  type="text"
                  value={secondname}
                  onChange={(e) => setsecondname(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="secondname"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="sr-only">
                userName
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="username"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>
          {error && (
            <div className="flex items-center space-x-2 bg-red-100 text-red-700 p-3 rounded-full text-sm">
              <FaExclamationCircle />
              <span>{error}</span>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-white">
          Already have an account?{" "}
          <Link
            className="text-sm mt-3 text-right no-underline"
            href={"/login"}
          >
            <span className="underline text-green-600">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
