import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SidebarContent from "@/components/SidebarContent";
import React , {useState , useEffect} from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Governors from "@/components/Governors";

const items = [
  "dirham history ",
  "dirham coins  ",
  // "Currency Design",
  // "Economic Impact",
];



const DirhamHistory = () => {
  return (
    <ContentWrapper title="History of the Moroccan Dirham">
      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md space-y-4">
        <p className="text-gray-700 leading-relaxed text-lg">
          The word <em>dirham</em> derives from the Greek currency, the <em>drachma</em>. The Idrissid dirham, a silver coin, was minted in Morocco under the Idrisid dynasty from the 8th to 10th centuries.
        </p>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-500 pb-2">Historical Timeline</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pre-1882: Morocco issued copper coins (falus), silver coins (dirham), and gold coins (benduqi).</li>
            <li>1882: The dirham became a subdivision of the Moroccan rial (500 Mazunas = 10 dirham = 1 rial).</li>
            <li>1912: Most of Morocco became a French protectorate and switched to the Moroccan franc.</li>
            <li>October 16, 1960: The dirham was reintroduced, replacing the franc as the major unit of currency.</li>
            <li>1960-1974: The franc continued to circulate, with 1 dirham = 100 francs.</li>
            <li>1974: The centime replaced the franc as a subdivision of the dirham.</li>
            <li>November 24, 2023: Bank Al-Maghrib unveiled a new series of banknotes and coins, including a 100 dirham banknote.</li>
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};



const DirhamCoins = () => {
  return (
    <ContentWrapper title="Moroccan Dirham Coins">
      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-500 pb-2">Coin Evolution</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>1960: Introduction of silver 1 dirham coins.</li>
            <li>1965: Introduction of nickel 1 dirham and silver 5 dirham coins.</li>
            <li>1974: New coinage introduced with the santim (1, 5, 10, 20, 50 santimat and 1, 5 dirham).</li>
            <li>1980: New cupro-nickel 5 dirham coins added.</li>
            <li>1987: 5 dirham changed to a bi-metal coin. 1 santim minting ceased.</li>
            <li>1995: Introduction of 10 dirham bimetallic coin.</li>
            <li>2002: Introduction of cupro-nickel 2 dirham coins.</li>
            <li>2012: New series issued with security features on 5 and 10 dirham coins.</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-green-800 mb-3 border-b-2 border-green-500 pb-2">Current Coin Denominations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>10 santimat</li>
            <li>20 santimat</li>
            <li>1/2 dirham</li>
            <li>1 dirham</li>
            <li>2 dirham</li>
            <li>5 dirham</li>
            <li>10 dirham</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">Note: 1 santim and 5 santimat coins are rarely used.</p>
        </div>
      </div>
    </ContentWrapper>
  );
};



export default function moroccan_dirham() {
  const [activeContent, setActiveContent] = useState("dirham history ");

  const handleItemClick = (item) => {
    setActiveContent(item);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "dirham history ":
        return <DirhamHistory />;
      case "dirham coins  ":
        return <DirhamCoins />;
      case "currency design":
        // return <CurrencyDesign />;
      case "economic impact":
        // return <EconomicImpact />;
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };
  

  return( 
    <MaxWidthWrapper>
      <div className="flex bg-gray-100 min-h-screen">
        <SidebarContent 
        onItemClick={handleItemClick}
        activeContent={activeContent}
        items={items}
        />
        <main className="p-8 w-full ">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {/* Government Representative at Bank Al-Maghrib */}
          </h1>
          {renderContent()}
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
