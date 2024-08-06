"use client";

import DashboardLayout from "@/components/DashboardLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { MdDelete } from "react-icons/md";
import { GoMoveToEnd } from "react-icons/go";
import axios from "axios";

const DashboardPage = () => {
  const { data: session } = useSession();
  const [products, setproducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [collections, setCollections] = useState([]);
  const [billets, setBillets] = useState([]);
  const [categories, setCategories] = useState([]);
  const email = session?.user?.email;
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const resUsers = await axios.get(`/api/user/getUsers`);
      setUsers(resUsers.data);
      setLoading(false);
    } catch (error) {
      console.error("Error when fetching users data", error);
    }
  };
  const fetchBillets = async () => {
    try {
      const resBillets = await axios.get(`/api/currency/getAllBillet`);
      setBillets(resBillets.data);
      setLoading(false);
    } catch (error) {
      console.error("Error when fetching users data", error);
    }
  };

  const fetchCollections = async () => {
    try {
      const resCollections = await axios.get(`/api/collection/getCollectionsByUser`);
      setCollections(resCollections.data);
      setLoading(false);
    } catch (error) {
      console.error("Error when fetching users data", error);
    }
  };
  const fetchCategories = async () => {
    try {
      const resCategories = await axios.get(`/api/catalog/getItemcatalog`);
      setCategories(resCategories.data);
      setLoading(false);
    } catch (error) {
      console.error("Error when fetching users data", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchBillets();
    fetchCollections();
    fetchCategories();
  }, []);
  return (
    <DashboardLayout>
      <div className="card border-0 py-4 px-4 shadow-md rounded-lg">
        {/* {state == "success" && (
          <div class="alert alert-success" role="alert">
            your confirmation upadted successfuly
          </div>
        )}
        {state == "danger" && (
          <div class="alert alert-danger" role="alert">
            error happend in your confirmation upadted , please try again
          </div>
        )} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Total Billets
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center">{billets.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Total Users
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center">{users.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Collections
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center">{collections.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">
              Categories
            </h2>
            <p className="text-3xl font-bold text-gray-800 text-center">{categories.length}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default DashboardPage;
