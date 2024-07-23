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

export default function riff() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });
  const items = {
    title: "RIFF",
    Bank_name: "STATE BANK OF THE RIFF",
    date: "1941 & 1942 Issue",
    currency: "1 Riffan = 10 English Pence System = 1 Gold Franc",
  };
  const billets = [
    {
      imagefront: "/riffImages/1riffanFront.png",
      title: "1 riffan type 1923 ",
      ref: "P5",
    },
    {
      imagefront: "/riffImages/5riffanFront.png",
      title: "5 riffan type 1923 ",
      ref: "P5",
    },
  ];
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

  const fetchCurrencyItemInfo = async (currencyId) => {
    console.log("currencyId ::::::" , currencyId)
    try {
      console.log("test ::::::")
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencyItemInfo`,
        { id: currencyId }
      );
      
      setCurrencyItem(response.data);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  };

  const fetchCurrenciesInfo = async (currencyId)=>{
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencies`,
        { id: currencyId }
      )
      setCurrencies(response.data)
    } catch (error) {
      console.error("Error fetching currencies data:", error);
    }
  }

  console.log("currencies ::::::" , currencies)
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
            <div className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 ">
              <div className="text-center mb-16 flex flex-col items-center justify-center gap-y-2 ">
                <h2 className=" scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
                  {currencyItem.title}
                </h2>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {currencyItem.bank_name}
                </h3>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                  {currencyItem.date_issue}
                </h3>
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight ">
                  {currencyItem.currency}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
                { currencies.length > 0 ?  currencies.map((billet, index) => (
                  <Link key={index} href={`/catalog/${encodeURIComponent(
                    currencyItem.title
                  )}/${encodeURIComponent(billet.title)}?id=${currencyItem.id}&billet=${billet.id}`}
                >
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    >
                      <img
                        src={billet.imagefront}
                        alt={billet.title}
                        className="w-500px h500px object-cover"
                      />
                      <div className="p-3 flex flex-row justify-between">
                        <h3 className="text-lg font-semibold mb-2">
                          {billet.title}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2 flex flex-row gap-2  ">
                          {" "}
                          <div className=" h-8 w-px bg-green-500 hidden sm:block " />
                          #{billet.ref}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))
              :
              <div className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 ">
                <img src="/noresult.png" className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 mt-8" />
              </div>
              }
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
