import { useState } from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Sidebar = ({ onItemClick, activeContent }) => {
  return (
    <div className="w-64 bg-white h-screen p-8">
      <h2 className="text-2xl font-bold mb-8 text-white">Explore</h2>
      <ul>
        {["History", "Governors", "Currency Design", "Economic Impact"].map(
          (item) => (
            <li key={item} className="mb-4">
              <button
                onClick={() => onItemClick(item.toLowerCase())}
                className={`w-full text-left p-3 rounded transition-colors ${
                  activeContent === item.toLowerCase()
                    ? "bg-green-600 text-white "
                    : "text-black hover:bg-green-500"
                }`}
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const ContentWrapper = ({ children, title }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8 ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
);

const History = () => (
  <ContentWrapper title="History of Moroccan Currency">
    <p className="text-gray-600 leading-relaxed">
      The history of Moroccan currency is rich and diverse, reflecting the
      country's complex past...
      {/* Add more detailed content here */}
    </p>
  </ContentWrapper>
);

const Governors = () => {
  const governors = [
    "Mohammed Sagou",
    "Abdellatif Jouahri",
    "Abdelkader Benjelloun",
  ]; // Replace with actual data
  return (
    <ContentWrapper title="Bank Al-Maghrib Governors">
      <ul className="space-y-4">
        {governors.map((governor, index) => (
          <li key={index} className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-green-600 font-semibold">{index + 1}</span>
            </div>
            <span className="text-gray-800 text-lg">{governor}</span>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
};
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

export default function InfoPage() {
  const [activeContent, setActiveContent] = useState("history");

  const handleItemClick = (item) => {
    setActiveContent(item);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "history":
        return <History />;
      case "governors":
        return <Governors />;
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
        <Sidebar onItemClick={handleItemClick} activeContent={activeContent} />
        <main className="flex-1 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Bank Al maghrib
            </h1>
            {renderContent()}
        </main>
      </div>
    </MaxWidthWrapper>
  );
}
