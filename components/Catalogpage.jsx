import React from "react";
import Link from "next/link";
import { useState , useEffect } from "react";
import axios from "axios";

const Catalogpage = () => {

  const items = [
    {
      title: "RIFF",
      imageUrl: "/bank_note/riff.png",
      link: "catalog/riff",
    },
    {
      title: "TANGIER",
      imageUrl: "/bank_note/tangier.png",
      link: "#TANGIER",
    },
    {
      title: "PROTECTORAT DE LA FRANCE AU MAROC",
      imageUrl: "/bank_note/protectora.png",
      link: "#PROTECTORAT DE LA FRANCE AU MAROC",
    },
    {
      title: "EMPIRE CHERIFIEN",
      imageUrl: "/bank_note/empire_cherifien.png",
      link: "#EMPIRE CHERIFIEN",
    },
    {
      title: "BANQUE D'ÉTAT DU MAROC",
      imageUrl: "/bank_note/bank_etat_maroc.png",
      link: "#BANQUE D'ÉTAT DU MAROC",
    },
    {
      title: "BANQUE DU MAROC",
      imageUrl: "/bank_note/bank_maghrib.png",
      link: "#BANQUE DU MAROC",
    },
    {
      title: "BANK AL- MAGHRIB",
      imageUrl: "/bank_note/bank_maghrib.png",
      link: "#BANK AL- MAGHRIB",
    },
  ];

  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`/api/catalog/getItemcatalog`);
        setCurrencies(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    // <div className="bg-gray-100 py-12 lg:py-24">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="text-center mb-8">
    //       <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-20">
    //         Catalog of all Bank note of morocco
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //       {currencies.map((item, index) => (
    //         <Link href="#" key={index}>
    //           <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer min-h-[500px] ">
    //             <img
    //               src={item.image}
    //               alt={item.title}
    //               className="w-full min-h-[400px] object-cover max-h-[300px]"
    //             />
    //             <div className="p-6">
    //               <h3 className="text-lg font-bold mb-2">{item.title}</h3>
    //             </div>
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-100 py-12 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-20">
        Catalog of all Bank note of Morocco
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {currencies.map((item, index) => (
        <Link href={`/catalog/${encodeURIComponent(item.title)}?id=${item.id}`}  key={index}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer min-h-[400px] flex flex-col">
            <div className="h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>
  );
};
export default Catalogpage;
