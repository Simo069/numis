// import React  , {useState , useEffect}from "react";
// import SidebarContent from "@/components/SidebarContent";
// import ContentWrapper from "@/components/ContentWrapper";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// const menuItems = [
//   { id: 'history', title: 'History' },
//   { id: 'governors', title: 'Governors' },
//   { id: 'currency-design', title: 'Currency Design' },
//   { id: 'economic-impact', title: 'Economic Impact' },
// ];
// const History = () => (
//   <ContentWrapper title="History of Moroccan Currency">
//     <p className="text-gray-600 leading-relaxed">
//       The history of Moroccan currency is rich and diverse, reflecting the
//       country's complex past...
//       {/* Add more detailed content here */}
//     </p>
//   </ContentWrapper>
// );

// const Governors = () => {
//   const governors = [
//     "Mohammed Sagou",
//     "Abdellatif Jouahri",
//     "Abdelkader Benjelloun",
//   ]; // Replace with actual data
//   return (
//     <ContentWrapper title="Bank Al-Maghrib Governors">
//       <ul className="space-y-4">
//         {governors.map((governor, index) => (
//           <li key={index} className="flex items-center">
//             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
//               <span className="text-green-600 font-semibold">{index + 1}</span>
//             </div>
//             <span className="text-gray-800 text-lg">{governor}</span>
//           </li>
//         ))}
//       </ul>
//     </ContentWrapper>
//   );
// };
// const CurrencyDesign = () => (
//   <ContentWrapper title="Currency Design Evolution">
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//       <div>
//         <Image
//           src="/one.png"
//           width={300}
//           height={300}
//           alt="Old currency design"
//           className="rounded-lg shadow-md"
//         />
//         <p className="mt-4 text-gray-600">
//           Early design featuring traditional Moroccan motifs
//         </p>
//       </div>
//       <div>
//         <Image
//           src="/Bank_Al-Maghrib.png"
//           width={300}
//           height={300}
//           alt="Modern currency design"
//           className="rounded-lg shadow-md"
//         />
//         <p className="mt-4 text-gray-600">
//           Modern design showcasing technological advancements
//         </p>
//       </div>
//     </div>
//   </ContentWrapper>
// );

// const EconomicImpact = () => (
//   <ContentWrapper title="Economic Impact of Bank Al-Maghrib">
//     <p className="text-gray-600 leading-relaxed mb-4">
//       Bank Al-Maghrib plays a crucial role in shaping Morocco's economy through
//       various policies and initiatives...
//     </p>
//     <ul className="list-disc list-inside space-y-2 text-gray-600">
//       <li>Monetary policy implementation</li>
//       <li>Financial sector regulation</li>
//       <li>Currency management</li>
//       <li>Economic research and analysis</li>
//     </ul>
//   </ContentWrapper>
// );
// export default function Bank_Al_Maghrib() {
//   const [activeContent, setActiveContent] = useState("history");
//   const handleItemClick = (item) => {
//     setActiveContent(item);
//   };
//   const renderContent = () => {
//     switch (activeContent) {
//       case "history":
//         return <History />;
//       case "governors":
//         return <Governors />;
//       case "currency design":
//         return <CurrencyDesign />;
//       case "economic impact":
//         return <EconomicImpact />;
//       default:
//         return <div>Select an item from the sidebar</div>;
//     }
//   };

//   return(
//     <MaxWidthWrapper>
//       <div className="flex bg-gray-100 max-h-screen">
//       <SidebarContent onItemClick={handleItemClick} activeContent={activeContent} items={menuItems} />
//       <main className="flex-1 p-8">
//             <h1 className="text-4xl font-bold text-gray-800 mb-6">
//               Bank Al maghrib
//             </h1>
//             {renderContent()}
//         </main>
//       </div>
//     </MaxWidthWrapper>
//   )
// }

import { useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SidebarContent from "@/components/SidebarContent";
import ContentWrapper from "@/components/ContentWrapper";
import Governors from "@/components/Governors";
// const Sidebar = ({ onItemClick, activeContent }) => {
//   return (
//     <div className="w-64 bg-white h-screen p-8">
//       <h2 className="text-2xl font-bold mb-8 text-white">Explore</h2>
//       <ul>
//         {["History", "Governors", "Currency Design", "Economic Impact"].map(
//           (item) => (
//             <li key={item} className="mb-4">
//               <button
//                 onClick={() => onItemClick(item.toLowerCase())}
//                 className={`w-full text-left p-3 rounded transition-colors ${
//                   activeContent === item.toLowerCase()
//                     ? "bg-green-600 text-white "
//                     : "text-black hover:bg-green-500"
//                 }`}
//               >
//                 {item}
//               </button>
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   );
// };

// const ContentWrapper = ({ children, title }) => (
//   <div className="bg-white rounded-lg shadow-lg p-8 mt-8 ">
//     <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
//     {children}
//   </div>
// );

const items = [
  "core values",
  "Governors",
  // "Currency Design",
  // "Economic Impact",
];

const CoreValues = () => (
  <ContentWrapper title="Core values of Bank al maghrib">
    <div className="flex flex-col md:space-x-8 justify-center items-center">
    <div className="w-full mb-6 mx-auto text-center ">
    <Image
            src="/corevalues.png"
            width={500}
            height={500}
            alt="Core Values"
            className="rounded-lg shadow-lg"
          />
    </div>
    <div className="w-full">
      <p className="text-gray-600 leading-relaxed ease-linear text-wrap ">
        The values of Bank Al-Maghrib are common principles which reflect its
        beliefs and practices. These guiding principles, which dictate the
        Bank’s actions and decisions in fulfilling its mission and achieving its
        vision, are embodied in each and every specific instance both
        internally, namely in the behavior of its staff, and externally, in its
        relations with the outside world. <br />
        <br />
        Bank Al-Maghrib’s core values represent its image, underlie its
        cohesion, give way to a productive and rewarding work environment, and
        make of the Bank the recognized institution of today. These are:
        <br />
        <br />
        » Governance : Besides its commitment to the principles of sound
        governance in its organization and operation practices, Bank Al-Maghrib
        seeks to anchor the culture of ethics within its community. Owing to its
        independence and financial autonomy, the Bank fulfills its mandate in
        accordance with its statutes, defines the strategic priorities arising
        thereof and ensures their follow-up, monitoring and evaluation. In this
        regard, the Bank has developed an appropriate organization and ensures a
        collegial and collaborative decision making process.
        <br />
        <br />
        » Transparency : As a guarantee of good governance, transparency was
        defined by Bank Al-Maghrib as an obligation toward the public, its
        partners and its employees. It is committed to informing them about its
        decisions, in due time and in a clear manner, by explaining their
        foundations, ensuring their understanding and enabling them to access
        information. Moreover, The Bank’s financial statements are made public,
        thus giving a clear view of its operations and its financial situation.
        <br />
        <br />
        » Compliance : Bank Al-Maghrib is committed to complying with the legal
        and regulatory frameworks in force. Also, owing to its relations with
        other central banks and with international institutions, it aligns with
        the best practices and standards affecting its activity. Whether in its
        actions or decisions, BAM continually seeks compliance in order to
        contain the risks thereto and to build trust.
        <br />
        <br />
        » Efficiency : To achieve its strategic objectives and accomplish its
        missions, Bank Al-Maghrib endeavors to ensure an optimum allocation of
        resources. Owing to its rigorous financial discipline, BAM is in an
        ongoing quest for efficiency and makes of it both a criterion of daily
        management and an axis of evaluating its performance. It acts
        effectively and quickly, while advocating the wish to constantly improve
        the quality of its services. <br />
      </p>
    </div>

    </div>
    
      
    
  </ContentWrapper>
);

// const Governors = () => {
//   const governors = [
//     "Mohammed Sagou",
//     "Abdellatif Jouahri",
//     "Abdelkader Benjelloun",
//   ]; // Replace with actual data
//   return (
//     <ContentWrapper title="Bank Al-Maghrib Governors">
//       <ul className="space-y-4">
//         {governors.map((governor, index) => (
//           <li key={index} className="flex items-center">
//             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
//               <span className="text-green-600 font-semibold">{index + 1}</span>
//             </div>
//             <span className="text-gray-800 text-lg">{governor}</span>
//           </li>
//         ))}
//       </ul>
//     </ContentWrapper>
//   );
// };
const CurrencyDesign = () => (
  <ContentWrapper title="Currency Design Evolution">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Image
          src="/one.png"
          width={300}
          height={300}
          alt="Old currency design"
          className="rounded-lg shadow-md"
        />
        <p className="mt-4 text-gray-600">
          Early design featuring traditional Moroccan motifs
        </p>
      </div>
      <div>
        <Image
          src="/Bank_Al-Maghrib.png"
          width={300}
          height={300}
          alt="Modern currency design"
          className="rounded-lg shadow-md"
        />
        <p className="mt-4 text-gray-600">
          Modern design showcasing technological advancements
        </p>
      </div>
    </div>
  </ContentWrapper>
);

const EconomicImpact = () => (
  <ContentWrapper title="Economic Impact of Bank Al-Maghrib">
    <p className="text-gray-600 leading-relaxed mb-4">
      Bank Al-Maghrib plays a crucial role in shaping Morocco's economy through
      various policies and initiatives...
    </p>
    <ul className="list-disc list-inside space-y-2 text-gray-600">
      <li>Monetary policy implementation</li>
      <li>Financial sector regulation</li>
      <li>Currency management</li>
      <li>Economic research and analysis</li>
    </ul>
  </ContentWrapper>
);
const Governor = [
  {
  name: "Mr. M’Hamed ZEGHARI",
  image:"/Governor/zeghari.png",
  data:"1954-1964 & 1967-1969" , 
  },
  {
    name: "Mr. Driss SLAOUI",
    image:"/Governor/slaoui.png",
    data:"1964-1967" , 
  },
  {
    name: "His Highness Prince Moulay Hassan BEN EL MEHDI",
    image:"/Governor/hassanbenmehdi.png",
    data:"1969-1984" , 
  },
  {
    name: "Mr. Ahmed BENNANI",
    image:"/Governor/bennani.png",
    data:"1985-1989" , 
  },
  {
    name: "Mr. Mohamed SEQAT",
    image:"/Governor/segat.png",
    data:"1989-2003" , 
  },
  {
    name: "Mr. Abdellatif Jouahri",
    image:"/Governor/jouahri.png",
    data:"2003- ...." , 
  },
];
export default function InfoPage() {
  const [activeContent, setActiveContent] = useState("core values");

  const handleItemClick = (item) => {
    setActiveContent(item);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "core values":
        return <CoreValues />;
      case "governors":
        return <Governors items={Governor} />;
      case "currency design":
        return <CurrencyDesign />;
      case "economic impact":
        return <EconomicImpact />;
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };
  return (
    <MaxWidthWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <SidebarContent
          onItemClick={handleItemClick}
          activeContent={activeContent}
          items={items}
        />
        <main className=" p-8 w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Bank Al maghrib
          </h1>
          {renderContent()}
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
