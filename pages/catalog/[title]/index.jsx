// import db from "@/lib/db";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function currency() {
//   const router = useRouter();
//   const { title, id } = router.query;
//   const [curenccies, setCurrencies] = useState(null);
//   useEffect(() => {
//     if (id) {
//       fetchCurrenciesData();
//     }
//   }, [id]);
//   const fetchCurrenciesData = async (currencyId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000//api/catalog/getCurrencies`,
//         { id: currencyId }
//       );
//       setCurrencies(response.data);
//     } catch (error) {
//       console.error("Error fetching currency data:", error);
//     }
//   };
//   return (
//     <div>
//       <h1>{decodeURIComponent(title)}</h1>
//       <p>Bank Name: {currency.bankName}</p>
//       <p>Currency: {currency.currency}</p>
//       <p>Date of Issue: {currency.dateIssue}</p>
//       <img src={currency.image} alt={currency.title} />

//       <h1>id :{id}</h1>
//       <h1>"title" :{title}</h1>
//     </div>
//   );
// }

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { RiFileFill } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import db from "@/lib/db";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function riff() {
  const { data: session, status } = useSession();
  const [userCollection, setUserCollection] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });
  const router = useRouter();
  const { title, id } = router.query;
  const [currencyItem, setCurrencyItem] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    if (id) {
      fetchCurrencyItemInfo(id);
      fetchCurrenciesInfo(id);
    }
  }, [id]);
  useEffect(() => {
    if (session?.user?.id && status === "authenticated") {
      fetchuserCollection(session.user.id);
    }
  }, [status, session]);

  const fetchuserCollection = async (userId) => {
    try {
      const rescollection = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`
      );
      setUserCollection(rescollection.data);
      console.log("rescollection::__",rescollection.data)
    } catch (error) {
      console.error(error);
    }
  };

  
  const fetchCurrencyItemInfo = async (currencyId) => {
    console.log("currencyId ::::::", currencyId);
    try {
      console.log("test ::::::");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencyItemInfo`,
        { id: currencyId }
      );
      setCurrencyItem(response.data);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };
  const fetchCurrenciesInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencies`,
        { id: currencyId }
      );
      setCurrencies(response.data);
    } catch (error) {
      console.error("Error fetching currencies data:", error);
    }
  };
  console.log("currencies ::::::", currencies);
  return (
    <>
      <div className="bg-slate-50 min-h-[90vh]">
        <section>
          <div
            className={`py-12 lg:py-24 ${
              inView ? "fade-up active" : "fade-up"
            }`}
            ref={ref}
          >
            <div className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8  text-wrap">
              <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2 ">
                <h2 className=" scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-wrap ">
                  {currencyItem.title} 
                </h2>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-wrap">
                  {currencyItem.bank_name}
                </h3>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                  {currencyItem.date_issue}
                </h3>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                  {currencyItem.currency}
                </h3>
              </div>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  "> */}
              <div className="flex flex-col gap-8 justify-center items-center  ">
                {currencies.length > 0 ? (
                  currencies.map((billet, index) => {
                    let totalvariation = 0;
                    let userCollectionsCount = 0;
                    let count=0;
                    let totalCount= 0;

                    if(session  && status === "authenticated"){
                      totalvariation = billet.variations.length + 1
                      userCollectionsCount = userCollection.filter((item)=> item.currencyId== billet.id || item.variationId== billet.id).length;
                      if(billet.variations.length >0){
                        const variations = billet.variations;
                        variations.map((variation)=>{
                          count += userCollection.filter((item)=>item.variationId== variation.id).length
                        })
                        
                      }
                      totalCount = count + userCollectionsCount
                    }
                    
                    return(
                    <Link
                      key={index}
                      href={`/catalog/${encodeURIComponent(
                        currencyItem.title
                      )}/${encodeURIComponent(billet.title)}?id=${
                        currencyItem.id
                      }&billet=${billet.id}`}
                    >
                      <div
                        key={index}
                        className="bg-white flex flex-col sm:flex-row  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer text-wrap"
                      >
                        <div className="flex-shrink-0 flex-col gap-y-3">
                          <div className="overflow-hidden w-56 h-24 flex-shrink-0 my-2 mx-1">
                            <Image
                              src={billet.imagefront}
                              alt={billet.title}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="rounded overflow-hidden w-56 h-24  flex-shrink-0 my-2 mx-1">
                            <Image
                              src={billet.imageback}
                              alt={billet.title}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="p-3 flex  flex-col  flex-1 sm:min-w-[500px] mx-8 mt-5">
                          <div className="flex flex-col items-start">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 w-[500px] text-wrap">
                              {billet.title} 
                            </h3>
                            <h4 className="text-sm text-gray-700 mb-2">
                              {billet.date}
                            </h4>
                            <h4 className="text-lg text-gray-700 mb-2 flex flex-row gap-2  ">
                              {" "}
                              
                              #{billet.ref}
                            </h4>
                          </div>
                          <div className=" justify-center text-center mt-4">
                          {session && (
                            <div className=" h-8  w-full  sm-w-[300px] rounded-lg bg-green-300  text-center align-middle font-bold">
                              {" "}
                                <>
                                {totalCount} / {totalvariation}
                                </>
                              
                            </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>)}
                  )
                ) : (
                  <div className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 ">
                    <img
                      src="/noresult.png"
                      className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 mt-8"
                    />
                  </div>
                )}
              </div>
            
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
