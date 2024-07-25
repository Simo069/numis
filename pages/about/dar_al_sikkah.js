import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ContentWrapper from "@/components/ContentWrapper";
import React , {useState , useEffect} from "react";
import SidebarContent from "@/components/SidebarContent";


const items = [
  "Dar Al sikhah ",
  "History ",
  "Technology And Collaborations",
  // "Economic Impact",
];

const DarAsSikkahAdditionalInfo = () => {
  const sections = [
    {
      title: "Technological Capabilities",
      items: [
        "State-of-the-art printing facilities for banknotes and secure documents",
        "Advanced minting equipment for coin production",
        "Research and development department for security feature innovations",
        "Digital security systems for data protection and counterfeit prevention"
      ]
    },
    {
      title: "Security Features",
      items: [
        "Holographic strips on high-denomination banknotes",
        "Microprinting and latent images on all banknotes",
        "Color-shifting ink on select denominations",
        "Watermarks and security threads integrated into banknote paper",
        "Tactile features for visually impaired individuals"
      ]
    },
    {
      title: "International Collaborations",
      items: [
        "Member of the Banknote Ethics Initiative (BnEI)",
        "Collaborations with international mints for knowledge exchange",
        "Participation in global conferences on currency security",
        "Partnerships with European and American security printing firms"
      ]
    },
    {
      title: "Environmental Initiatives",
      items: [
        "Implementation of eco-friendly ink and paper production processes",
        "Recycling program for worn-out banknotes and coins",
        "Energy-efficient manufacturing facilities",
        "Research into sustainable materials for future currency production"
      ]
    }
  ];

  return (
    <ContentWrapper title="Dar As-Sikkah - Technology and Collaborations">
      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md">
        {sections.map((section, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-xl font-semibold text-green-700 mb-3 border-b-2 border-green-500 pb-2">
              {section.title}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

const DarAsSikkahKeyInfo = () => {
  return (
    <ContentWrapper title="Dar As-Sikkah - Key Information">
      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Founded", value: "March 5, 1987" },
            { label: "Founder", value: "Hassan II" },
            { label: "Key Figures", value: "Abdellatif Jouahri (Wali of BAM), Mohammed IRAQI (Founder and General Manager)" },
            { label: "Headquarters", value: "Km 8.5 Autoroute A2, Salé, Morocco" },
            { label: "Director", value: "Hassan Regraga" },
            { label: "Owner", value: "Bank Al-Maghrib" },
            { label: "Products", value: "Banknotes, passports, national ID cards, coins, fiscal stamps" },
            { label: "Parent Company", value: "Bank Al-Maghrib (BAM)" },
            { label: "Employees", value: "500 (as of 2010)" },
            { label: "Website", value: "www.bkam.ma", isLink: true },
          ].map((item, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex flex-col">
              <span className="text-sm font-semibold text-green-700">{item.label}</span>
              {item.isLink ? (
                <a href={`http://${item.value}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {item.value}
                </a>
              ) : (
                <span className="text-gray-700">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </ContentWrapper>
  );
};

const DarAsSikkahHistory = () => {
  const historyEvents = [
    { year: "1956-1987", event: "After independence, Morocco manufactured its currency abroad, particularly in France, for 31 years." },
    { year: "1987", event: "Dar As-Sikkah was inaugurated by King Hassan II on March 5, 1987." },
    { year: "1987-1990s", event: "Initially, it started with a first production line of 140 million dirhams, followed by a second in the early 1990s." },
    { year: "1997", event: "A new park of monetary presses was acquired." },
    { year: "2001", event: "An automatic passport manufacturing chain was added." }
  ];

  return (
    <ContentWrapper title="Dar As-Sikkah - History">
      <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md">
        <ul className="space-y-4">
          {historyEvents.map((item, index) => (
            <li key={index} className="flex items-center">
              <div className="flex-shrink-0 w-24 text-center">
                <span className="inline-block px-2 py-1 bg-green-600 text-white text-sm w-[100px] font-semibold rounded">
                  {item.year}
                </span>
              </div>
              <div className="ml-4 flex-grow">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ContentWrapper>
  );
};


export default function Dar_Al_Sikah() {
  const [activeContent, setActiveContent] = useState("dar al sikhah ");

  const handleItemClick = (item) => {
    setActiveContent(item);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "dar al sikhah ":
        return <DarAsSikkahKeyInfo />;
      case "history ":
        return <DarAsSikkahHistory/>;
      case "technology and collaborations":
        return <DarAsSikkahAdditionalInfo />;
      case "economic impact":
        // return <EconomicImpact />;
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
        <main className="p-8 w-full ">
          <h1 className="text-4xl font-bold text-gray-800 mb-6" >
            {/* Dar Al Sikah  */}
          </h1>
          {renderContent()}
        </main>
    </div>      
  </MaxWidthWrapper>
  );
}
