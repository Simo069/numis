import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import BtnAuth from "@/components/BtnAuth";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { Star, Check } from "lucide-react";
import Link from "next/link";
import Sections from "@/components/Sections";
import AnimatedSection from "@/components/Animatedsection";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* <Navbar/> */}
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
          {/* <BtnAuth/> */}
          <div className="col-span-2  px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className=" relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl ">
                Welcome to the World of Ancient
                <span className="bg-green-600 px-2 text-white">
                  {" "}
                  Currency
                </span>{" "}
                Bills
              </h1>
              <p className="mt-8 text-gray-900 text-lg lg:pr-10 max-w-porse text-center lg:text-left text-balance md:text-wrap">
                Discover the rich history and intricate designs of ancient
                currency bills from around morrocco. Our collection showcases
                the artistry and cultural significance embedded in each bill,
                offering a glimpse into the past economies and societies.
              </p>
            </div>
          </div>
          <div className="col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="md:max-w-xl">
              <img
                src="/one.png"
                className=" md:min-w-96 md:min-h-96 object-cover lg:w-52 left-56 -top-20 select-none"
                alt="yours image"
              />
            </div>
          </div>
        </MaxWidthWrapper>
        <Sections
          title="Role of Bank Al-Maghrib"
          description="Bank Al-Maghrib, Morocco's central bank, plays a crucial role in the country's economy through several key functions. Firstly, it formulates and implements monetary policies, including setting interest rates and managing liquidity, to stabilize both domestic and external economic conditions. Secondly, the bank oversees the banking and financial sectors, ensuring their stability, transparency, and safeguarding consumer rights. Thirdly, Bank Al-Maghrib is responsible for maintaining financial stability by supporting sustainable economic growth and development. It manages the issuance and stability of the Moroccan currency, the dirham, in domestic and international markets. Lastly, the bank contributes significantly to economic and social development by promoting policies that encourage investment and strengthen the national economy. Overall, Bank Al-Maghrib's role is integral to fostering economic stability and growth in Morocco through effective monetary policy, financial oversight, and currency management."
          imageUrl="/Bank_Al-Maghrib.png"
          imageAlt="Role of Bank Al-Maghrib"
          link="#Role of Bank Al-Maghrib"
        />
      </section>
      <section>
        <MaxWidthWrapper>
          <AnimatedSection
          title="Government Representative at Bank Al-Maghrib"
          description="The Government Representative at Bank Al-Maghrib plays a pivotal role as a liaison between the Moroccan government and the central bank. Their functions include representing the government's interests and policies within Bank Al-Maghrib, participating in decision-making processes related to monetary policy and financial stability, ensuring coordination and collaboration between the central bank and government ministries, providing insights and advice to the government on monetary and financial matters, and monitoring the implementation of government directives within the central bank."
          imageUrl="/mandoub.png"
          imageAlt="Role of Bank Al-Maghrib"
          link="#Government Representative at Bank Al-Maghrib"
          />
        </MaxWidthWrapper>
      </section>
      <section>
        <Sections
          title="History of Moroccan Money"
          description='The history of Moroccan money reflects the rich and varied heritage of the country. Over the centuries, Morocco has used a variety of currencies, each representing different eras of its history, In the early Islamic period, gold dinars and silver dirhams were commonly used. During the 14th century, the Merinid dynasty issued coins known as "falus". The Alaouite dynasty, which began in the 17th century, introduced the "bendooqi" and "mouzouna" as official currencies, The modern era saw the introduction of the Moroccan dirham in 1960, following the country’s independence. Today, the dirham, issued and managed by Bank Al-Maghrib, remains the official currency of Morocco.'
          imageUrl="/historical.png"
          imageAlt="Role of Bank Al-Maghrib"
          link="#History of Moroccan Money"
        />
      </section>
      <section>
        <MaxWidthWrapper>
          <AnimatedSection
          title="Dar As-Sikkah: The Issuer of Moroccan Banknotes"
          description="Dar As-Sikkah, also known as the Hôtel des monnaies, is the organization responsible for producing the Moroccan currency, the Moroccan dirham (MAD). It was created in March 1987 by King Hassan II to meet the needs of Morocco in fiduciary currency. Dar As-Sikkah is a department of Bank Al-Maghrib (BAM), the central bank of Morocco \n,Dar As-Sikkah, the minting authority of Morocco, is responsible for producing the country's banknotes and coins. It ensures the security and integrity of the currency, playing a vital role in the Moroccan economy."
          imageUrl="/daralsika.png"
          imageAlt="Dar As-Sikkah"
          link="#Dar As-Sikkah: The Issuer of Moroccan Banknotes"
          />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
