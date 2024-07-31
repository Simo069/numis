"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaApple,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";

import { FaUser } from "react-icons/fa";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const validateForm = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError("");
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setTimeout(() => {
        router.replace("/");
      }, 1000); // Allows the success message to be seen briefly
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };
  const handleSocialLogin = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: "/dashbord" });
    } catch (error) {
      console.error(`${provider} login error:`, error);
      setError("Failed to log in with " + provider);
    }
  };
  return (
    // <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
    <div className="min-h-screen relative bg-[url('/login.png')] bg-cover bg-center flex items-center justify-center  ">
      <div className="absolute inset-1 backdrop-filter backdrop-blur-sm bg-black bg-opacity-70 w-full m-0 p-0 left-0"></div>
      <div className="max-w-md w-full space-y-8 z-10">
        {/* <div className="max-w-md w-full space-y-8"> */}
        {success && (
          <div className="flex items-center justify-center space-x-2 bg-green-100 text-green-700 p-4 rounded-full mb-6 animate-fade-in">
            <FaCheckCircle size={24} />
            <span>Login successful! Redirecting...</span>
          </div>
        )}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Log in to access your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 shadow-sm">
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
                  placeholder="Email address"
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
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Log In"
              )}
            </button>
          </div>
          <div className="text-sm">
            <Link
              href="#"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                {/* <span className="px-2 bg-white text-gray-500">Or continue with</span> */}
              </div>
            </div>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-white">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-green-400 hover:text-green-600"
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
