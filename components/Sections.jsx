import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Sections = ({ title, description, imageUrl, imageAlt, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });
  return (
    <div
      className={`bg-gray-100 py-12 lg:py-24 ${
        inView ? "fade-up active" : "fade-up"
      }`}
      ref={ref}
    >
      {/* <div className="max-w-7xl min-h-[600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ">
                <div className=" relative items-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        {title}
                    </h2>
                </div>
                <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {description}
                        </p>
                    </div>
                    <div className="lg:w-1/2 lg:ml-8">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </div>
            </div> */}
      <div className="max-w-7xl min-h-[700px] mx-auto px-4 sm:px-6 lg:px-8 text-center align-middle">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-20">
            {title}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {description}
            </p>
          </div>
          <div className="lg:w-1/2 lg:ml-8 ">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
        <div className="mt-auto">
          <div className="text-center mt-16 mb-8">
            <Link
              href={link}
              className="inline-block px-6 py-2 text-sm font-medium text-green-800 bg-white border border-gray-300 rounded-full hover:bg-green-500  hover:text-black transition duration-300 ease-in-out"
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sections;
