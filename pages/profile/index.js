import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useState, useEffect } from "react";
import { CTabs, CTab, CTabContent, CTabList, CTabPanel } from "@coreui/react";
import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function profile() {
  const [messagequery, setMessagequery] = useState(null);
  const [activeTab, setActiveTab] = useState("personalInfo");
  return (
    <MaxWidthWrapper className="">
      <div className="flex flex-col min-h-screen">
        <div className="second mt-32 flex-grow">
          <div className="container mx-auto ">
            <div>
              {messagequery && (
                <div className="alert alert-success" role="alert">
                  {messagequery}
                </div>
              )}
            </div>
            <div className="flex flex-wrap justify-center mb-8">
              <button
                className={`mx-2 width-[100px] my-1 py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
                  activeTab === "personalInfo"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-700 hover:bg-gray-500  hover:text-white"
                }`}
                onClick={() => setActiveTab("personalInfo")}
              >
                med
              </button>
              <button
                className={`mx-2 width-[100px] my-1 py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
                  activeTab === "publishedProducts"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-700 hover:bg-gray-500 hover:text-white"
                }`}
                onClick={() => setActiveTab("publishedProducts")}
              >
                test 1
              </button>
              <button
                className={`mx-2 width-[100px] my-1 py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
                  activeTab === "likedProducts"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-700 hover:bg-gray-500 hover:text-white"
                }`}
                onClick={() => setActiveTab("likedProducts")}
              >
                test 2
              </button>
              <button
                className={`mx-2 width-[100px] my-1 py-2 px-4 rounded-lg focus:outline-none transition-colors duration-300 ${
                  activeTab === "matchedProducts"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-green-700 hover:bg-gray-500 hover:text-white"
                }`}
                onClick={() => setActiveTab("matchedProducts")}
              >
                test 3
              </button>
            </div>
            <div className="mt-20">
              {activeTab === "personalInfo" &&
                <UserInfo/>
              }
              {activeTab === "publishedProducts" &&
                // <PublishedProducts user={user} />
                "test1"}
              {activeTab === "likedProducts" &&
                // <LikedProducts user={user} />
                "test 2"}
              {activeTab === "matchedProducts" &&
                // <Matchedproduct user={user} />
                "test 3"}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
