import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
export default function collection() {
  const router = useRouter();
  const { idUser } = router.query;
  const [username, setUsername] = useState("");



  const [billetCollection, setBilletCollection] = useState([]);
  useEffect(() => {
    if (idUser) {
      fetchBilletCollection(idUser);
    }
  }, [idUser]);

  const fetchBilletCollection = async (idUser) => {
    try {
      const res = await axios.get(
        `/api/collection/${idUser}`
      );
      setBilletCollection(res.data);
      setUsername(res.data[0].user.username)
      // console.log("resCollection---:::", res.data[0].user.username);
    } catch (error) {
      console.error("Error fetching collection:", error);
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-[80vh]">
        <div className="text-center align-middle mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2">
            <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:m-0">
              the Collection of <span className="text-3xl">{username}</span> 
            </h2>
            <h3 className="mt-8 scroll-m-20 border-b pb-2 text-xl text-indigo-500 font-semibold tracking-tight first:m-0">
              {billetCollection.length} {""}{""}{""} Billets
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {billetCollection.map((item, index) => (
              <div
                key={index}
                className="bg-white max-w-[350px] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              >
                {item.currency ? (
                  <Link
                    key={index}
                    href={`/catalog/${encodeURIComponent(
                      item.currency.currency.title
                    )}/${encodeURIComponent(item.currency.title)}?id=${
                      item.currency.currency.id
                    }&billet=${item.currency.id}`}
                  >
                    <div>
                      <img
                        src={item.currency.imagefront}
                        alt={item.currency.title}
                        className="w-500px h500px object-cover"
                      />
                      <div className="p-3 flex flex-row justify-between">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.currency.title}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2 flex flex-row gap-2  ">
                          {" "}
                          <div className=" h-8 w-px bg-green-500 hidden sm:block " />
                          #{item.currency.ref}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={`/catalog/${encodeURIComponent(
                      item.variation.currencies.currency.title
                    )}/${encodeURIComponent(
                      item.variation.currencies.title
                    )}?id=${item.variation.currencies.currency.id}&billet=${
                      item.variation.currencies.id
                    }`}
                  >
                    <div>
                      <img
                        src={item.variation.imagefront}
                        alt={item.variation.title}
                        className="w-500 h-500 object-cover"
                      />
                      <div className="p-3 flex flex-row justify-between">
                        <h3 className="text-lg font-semibold mb-2">
                          {item.variation.currencies.title}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2 flex flex-row gap-2">
                          <div className="h-8 w-px bg-green-500 hidden sm:block" />
                          {item.variation.ref}
                        </h4>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
