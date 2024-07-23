// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { GoArrowRight } from "react-icons/go";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import axios from "axios";
// import db from "@/lib/db";

// export default function billetmonaie() {
//   const router = useRouter();
//   const { title, id, billet } = router.query;
//   console.log("billet:::", billet);
//   const [currency, setCurrency] = useState([]);
//   const [currencies, setCurrencies] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     if (billet) {
//       fetchCurrenciesInfo(id)
//       fetchCurrencyInfo(billet);
//     }
//   }, [id , billet]);
//   const fetchCurrenciesInfo = async (currencyId)=>{
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencies`,
//         { id: currencyId }
//       )
//       setCurrencies(response.data)
//     } catch (error) {
//       console.error("Error fetching currencies data:", error);
//     }
//   }
//   const fetchCurrencyInfo = async (currencyId) => {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getCurrenciesInfo`,
//         { id: currencyId }
//       );
//       setCurrency(response.data);
//     } catch (error) {
//       console.error("Error fetching one of currencies data:", error);
//     }
//   };
//   if (!id || !billet) {
//     // Show a loading state or a message until the query parameters are available
//     return <div>Loading...</div>;
//   }
//   console.log("currency:::", currency);
//   console.log("currencies ::--::",currencies)
//   return (
//     <>
//       <section>
//         <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center md:items-start gap-y-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
//           <div className="flex items-center gap-2 text-center aligin-middle mb-6 ">
//             {/* <div className="flex items-center gap-2 text-center aligin-middle mb-6 bg-green-500 text-white p-2"> */}
//             <GoArrowRight className="text-4xl hidden md:block" />
//             <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl  ">
//               {currency.title}
//             </h1>
//           </div>
//           <div className="m-auto flex flex-col">
//             <h4 className="text-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
//               {" "}
//               <span className="text-green-700 font-bold">Issued by :</span>{" "}
//               {currency.issued_by}
//             </h4>
//             <h4 className="bold text-2xl text-green-700 text-center md:text-left font-bold">
//               description :
//             </h4>
//             <p className="leading-7 [&:not(:first-child)]:mt-1">
//               {currency.description}
//             </p>
//           </div>
//           <div className="mx-auto my-auto">
//             <div className=" flex flex-col sm:flex-row gap-8 items-center text-center">
//               <Image
//                 width={400}
//                 height={300}
//                 src={currency.imagefront}
//                 className="rounded-lg object-cover"
//               />
//               <Image
//                 width={400}
//                 height={300}
//                 src={currency.imageback}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//             <div className="p-9 flex  flex-col sm:flex-row gap-5 items-center">
//               {currency.imagesignature && (
//                 <>
//                   <h3 className="font-bold text-2xl text-green-700">
//                     Signature:
//                   </h3>
//                   <img
//                     src={currency.imagesignature}
//                     className="w-[300px] object-cover"
//                     alt="Signature"
//                   />
//                 </>
//               )}
//             </div>
//             <table className="w-full border-collapse mb-6">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border p-2 text-left">ref</th>
//                   <th className="border p-2 text-left">type</th>
//                   <th className="border p-2 text-left">date</th>
//                   <th className="border p-2 text-left">comments</th>
//                   {currency.imagesignature ? (
//                     <th className="border p-2 text-left">Image</th>
//                   ) : (
//                     ""
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border p-2">{currency.ref}</td>
//                   <td className="border p-2">{currency.type}</td>
//                   <td className="border p-2">{currency.date}</td>
//                   <td className="border p-2">{currency.comments}</td>
//                   {currency.imagesignature ? (
//                     <td className="border p-2">
//                       <Image
//                         src={currency.imagesignature}
//                         alt={currency.imagesignature}
//                         width={50}
//                         height={50}
//                         onClick={() =>
//                           setSelectedImage(currency.imagesignature)
//                         }
//                         className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
//                       />
//                     </td>
//                   ) : (
//                     ""
//                   )}
//                 </tr>
//               </tbody>
//             </table>
//             {selectedImage && (
//               <div
//                 className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 <div className="relative w-3/4 h-3/4">
//                   <Image
//                     src={currency.imagefront}
//                     alt="Image agrandie"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </MaxWidthWrapper>
//       </section>
//     </>
//   );
// }

// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { GoArrowRight } from "react-icons/go";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import axios from "axios";
// import db from "@/lib/db";

// export default function billetmonaie() {
//   const router = useRouter();
//   const { title, id, billet } = router.query;
//   console.log("billet:::", billet);
//   const [currency, setCurrency] = useState([]);
//   const [currencies, setCurrencies] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (billet) {
//       fetchCurrenciesInfo(id);
//       fetchCurrencyInfo(billet);
//     }
//   }, [id, billet]);
//   const fetchCurrenciesInfo = async (currencyId) => {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencies`,
//         { id: currencyId }
//       );
//       setCurrencies(response.data);
//     } catch (error) {
//       console.error("Error fetching currencies data:", error);
//     }
//   };
//   const fetchCurrencyInfo = async (currencyId) => {
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getCurrenciesInfo`,
//         { id: currencyId }
//       );
//       setCurrency(response.data);
//     } catch (error) {
//       console.error("Error fetching one of currencies data:", error);
//     }
//   };
//   if (!id || !billet) {
//     // Show a loading state or a message until the query parameters are available
//     return <div>Loading...</div>;
//   }
//   console.log("currency:::", currency);
//   console.log("currencies ::--::", currencies);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? currencies.length - 1 : prevIndex - 1
//     );
//   };
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === currencies.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   const currentBill = currencies[currentIndex];
//   const prevBill =
//     currencies[(currentIndex === 0 ? currencies.length : currentIndex) - 1];
//   const nextBill = currencies[(currentIndex + 1) % currencies.length];
//   console.log("currentBill--", currentBill);
//   console.log("prevBill--", prevBill);
//   console.log("nextBill--", prevBill);
//   return (
//     <>
//       <section>
//         <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center md:items-start gap-y-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
//           <div className="flex items-center gap-2 text-center aligin-middle mb-6 ">
//             {/* <div className="flex items-center gap-2 text-center aligin-middle mb-6 bg-green-500 text-white p-2"> */}
//             <GoArrowRight className="text-4xl hidden md:block" />
//             <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl  ">
//               {currency.title}
//             </h1>
//           </div>
//           <div className="m-auto flex flex-col">
//             <h4 className="text-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
//               {" "}
//               <span className="text-green-700 font-bold">Issued by :</span>{" "}
//               {currency.issued_by}
//             </h4>
//             <h4 className="bold text-2xl text-green-700 text-center md:text-left font-bold">
//               description :
//             </h4>
//             <p className="leading-7 [&:not(:first-child)]:mt-1">
//               {currency.description}
//             </p>
//           </div>
//           <div className="mx-auto my-auto">
//             <div className=" flex flex-col sm:flex-row gap-8 items-center text-center">
//               <Image
//                 width={400}
//                 height={300}
//                 src={currency.imagefront}
//                 className="rounded-lg object-cover"
//               />
//               <Image
//                 width={400}
//                 height={300}
//                 src={currency.imageback}
//                 className="rounded-lg object-cover"
//               />
//             </div>
//             <div className="p-9 flex  flex-col sm:flex-row gap-5 items-center">
//               {currency.imagesignature && (
//                 <>
//                   <h3 className="font-bold text-2xl text-green-700">
//                     Signature:
//                   </h3>
//                   <img
//                     src={currency.imagesignature}
//                     className="w-[300px] object-cover"
//                     alt="Signature"
//                   />
//                 </>
//               )}
//             </div>
//             <table className="w-full border-collapse mb-6">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border p-2 text-left">ref</th>
//                   <th className="border p-2 text-left">type</th>
//                   <th className="border p-2 text-left">date</th>
//                   <th className="border p-2 text-left">comments</th>
//                   {currency.imagesignature ? (
//                     <th className="border p-2 text-left">Image</th>
//                   ) : (
//                     ""
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border p-2">{currency.ref}</td>
//                   <td className="border p-2">{currency.type}</td>
//                   <td className="border p-2">{currency.date}</td>
//                   <td className="border p-2">{currency.comments}</td>
//                   {currency.imagesignature ? (
//                     <td className="border p-2">
//                       <Image
//                         src={currency.imagesignature}
//                         alt={currency.imagesignature}
//                         width={50}
//                         height={50}
//                         onClick={() =>
//                           setSelectedImage(currency.imagesignature)
//                         }
//                         className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
//                       />
//                     </td>
//                   ) : (
//                     ""
//                   )}
//                 </tr>
//               </tbody>
//             </table>
//             <div className="flex items-center justify-center mb-4">
//               {currentIndex !== 0 && (
//                 <button className="text-4xl p-2" onClick={handlePrev}>
//                   ‹
//                   {currentIndex !== 0 && (
//                     { prevBill.imagefront &&(
//                       <img
//                       src={prevBill.imagefront}
//                       alt={prevBill.name}
//                       className="w-32 h-28 opacity-50"
//                     />
//                     )}

//                   )}
//                 </button>
//               )}
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={currentBill.imagefront}
//                   alt={currentBill.name}
//                   className="w-48 transform scale-110"
//                 />
//               </div>
//               {currentIndex !== bills.length - 1 && (
//                 <button className="text-4xl p-2" onClick={handleNext}>
//                   {currentIndex !== bills.length - 1 && (
//                     <img
//                       src={nextBill.imagefront}
//                       alt={nextBill.name}
//                       className="w-32 h-28 opacity-50"
//                     />
//                   )}
//                 </button>
//               )}
//             </div>
//             {selectedImage && (
//               <div
//                 className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 <div className="relative w-3/4 h-3/4">
//                   <Image
//                     src={currency.imagefront}
//                     alt="Image agrandie"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </MaxWidthWrapper>
//       </section>
//     </>
//   );
// }

// billetmonaie.js
// billetmonaie.js
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { GoArrowRight } from "react-icons/go";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export default function BilletMonnaie() {
  const router = useRouter();
  const { title, title_currency, id, billet } = router.query;

  const [currency, setCurrency] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [variations, setVariations] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (id && billet) {
      fetchCurrenciesInfo(id);
      fetchCurrencyInfo(billet);
      fetchVariationsInfo(billet)
    }
  }, [id, billet]);

  const fetchCurrenciesInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencies`,
        { id: currencyId }
      );
      setCurrencies(response.data);
      if (response.data.length > 0) {
        const billetIndex = response.data.findIndex(
          (item) => item.id === Number(billet)
        );
        setCurrentIndex(billetIndex !== -1 ? billetIndex : 0);
      }
    } catch (error) {
      console.error("Error fetching currencies data:", error);
    }
  };

  const fetchCurrencyInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getCurrenciesInfo`,
        { id: currencyId }
      );
      setCurrency(response.data);
    } catch (error) {
      console.error("Error fetching one of currencies data:", error);
    }
  };
  // fetchVariationsInfo

  const fetchVariationsInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getVariationsInfo`,
        {id: currencyId }
      );
      setVariations(response.data);
    } catch (error) {
      console.error("Error fetching variations data:", error);
    }
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? currencies.length - 1 : currentIndex - 1;
    const prevBill = currencies[prevIndex];
    setCurrentIndex(prevIndex);
    router.push({
      pathname: router.pathname,
      query: { id, billet: prevBill.id, title, title_currency },
    });
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === currencies.length - 1 ? 0 : currentIndex + 1;
    const nextBill = currencies[nextIndex];
    setCurrentIndex(nextIndex);
    router.push({
      pathname: router.pathname,
      query: { id, billet: nextBill.id, title, title_currency },
    });
  };

  const currentBill = currencies[currentIndex];
  const prevBill =
    currencies[(currentIndex === 0 ? currencies.length : currentIndex) - 1];
  const nextBill = currencies[(currentIndex + 1) % currencies.length];

  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center md:items-start gap-y-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
        <div className="flex items-center gap-2 text-center align-middle mb-6">
          <GoArrowRight className="text-4xl hidden md:block" />
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
            {currency.title}
          </h1>
        </div>
        <div className="m-auto flex flex-col items-start ">
          <h4 className="text-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <span className="text-green-700 font-bold">Issued by :</span>{" "}
            {currency.issued_by}
          </h4>
          <div className="flex flex-col sm:flex-row gap-3">
          <h4 className="bold text-2xl text-green-700 text-center md:text-left font-bold">
            description :
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-1">
            {currency.description}
          </p>
          </div>
        </div>
        <div className="mx-auto my-auto">
          <div className="flex flex-col sm:flex-row gap-8 items-center text-center">
            <Image
              width={400}
              height={300}
              src={currency.imagefront}
              className="rounded-lg object-cover"
              alt="Front"
            />
            <Image
              width={400}
              height={300}
              src={currency.imageback}
              className="rounded-lg object-cover"
              alt="Back"
            />
          </div>
          <div className="p-9 flex flex-col sm:flex-row gap-5 items-center">
            {currency.imagesignature && (
              <>
                <h3 className="font-bold text-2xl text-green-700">
                  Signature:
                </h3>
                <img
                  src={currency.imagesignature}
                  className="w-[300px] object-cover"
                  alt="Signature"
                  onClick={() => setSelectedImage(currency.imagesignature)}
                />
              </>
            )}
          </div>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">ref</th>
                <th className="border p-2 text-left">type</th>
                <th className="border p-2 text-left">date</th>
                <th className="border p-2 text-left">comments</th>
                {currency.imagesignature && (
                  <th className="border p-2 text-left">Image</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">{currency.ref}</td>
                <td className="border p-2">{currency.type}</td>
                <td className="border p-2">{currency.date}</td>
                <td className="border p-2">{currency.comments}</td>
                {currency.imagesignature && (
                  <td className="border p-2">
                    <Image
                      src={currency.imagesignature}
                      alt={currency.imagesignature}
                      width={50}
                      height={50}
                      onClick={() => setSelectedImage(currency.imagesignature)}
                      className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
          {/* fetch varitions  */}
        {variations.length > 0 ? 
        
        variations.map((variation,index)=>(
          <>
          <div className="flex flex-col sm:flex-row gap-8 items-center text-center">
            <Image
              width={400}
              height={300}
              src={variation.imagefront}
              className="rounded-lg object-cover"
              alt="Front"
            />
            <Image
              width={400}
              height={300}
              src={variation.imageback}
              className="rounded-lg object-cover"
              alt="Back"
            />
          </div>
          <div className="p-9 flex flex-col sm:flex-row gap-5 items-center">
            {variation.imagesignature && (
              <>
                <h3 className="font-bold text-2xl text-green-700">
                  Signature:
                </h3>
                <img
                  src={variation.imagesignature}
                  className="w-[300px] object-cover"
                  alt="Signature"
                  onClick={() => setSelectedImage(variation.imagesignature)}
                />
              </>
            )}
          </div>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">ref</th>
                <th className="border p-2 text-left">type</th>
                <th className="border p-2 text-left">date</th>
                <th className="border p-2 text-left">comments</th>
                {variation.imagesignature && (
                  <th className="border p-2 text-left">Image</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">{variation.ref}</td>
                <td className="border p-2">{variation.type}</td>
                <td className="border p-2">{variation.date}</td>
                <td className="border p-2">{variation.comments}</td>
                {variation.imagesignature && (
                  <td className="border p-2">
                    <Image
                      src={variation.imagesignature}
                      alt={variation.imagesignature}
                      width={50}
                      height={50}
                      onClick={() => setSelectedImage(variation.imagesignature)}
                      className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
          </>
        ))
        : ""}
          <div className="flex items-center justify-center mb-4 mt-[170px]">
            {currencies.length > 1 && currentIndex !== 0 && (
              <button className="text-4xl p-2" onClick={handlePrev}>
                
                {currentIndex !== 0 && (
                  <img
                    src={prevBill.imagefront}
                    alt={prevBill.name}
                    className="w-32 h-28 opacity-50"
                  />
                )}
              </button>
            )}
            <div className="flex items-center space-x-4">
              {currencies.length > 0 && (
                <>
                  {/* {currentIndex > 0 && (
                    <img
                      src={prevBill.imagefront}
                      alt={prevBill.name}
                      className="w-32 h-28 opacity-50"
                    />
                  )} */}
                  <img
                    src={currentBill.imagefront}
                    alt={currentBill.name}
                    className="w-48 transform scale-110"
                  />
                  {/* {currentIndex < currencies.length - 1 && (
                    <img
                      src={nextBill.imagefront}
                      alt={nextBill.name}
                      className="w-32 h-28 opacity-50"
                    />
                  )} */}
                </>
              )}
            </div>
            {currencies.length > 1 &&
              currentIndex !== currencies.length - 1 && (
                <button className="text-4xl p-2" onClick={handleNext}>
                  {currentIndex !== currencies.length - 1 && (
                    <img
                      src={nextBill.imagefront}
                      alt={nextBill.name}
                      className="w-32 h-28 opacity-50"
                    />
                  )}

                </button>
              )}
          </div>
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={selectedImage}
                  alt="Image agrandie"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          )}
        </div>
        
      </MaxWidthWrapper>
    </section>
  );
}
