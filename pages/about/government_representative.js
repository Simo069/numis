import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SidebarContent from "@/components/SidebarContent";
import React , {useState , useEffect} from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Governors from "@/components/Governors";


const items = [
  "Government Commissioner ",
  "Anciens Commissioners ",
  // "Currency Design",
  // "Economic Impact",
];
const GovernmentCommissioner = () => {
  return (
    <ContentWrapper title="Government Commissioner at Bank Al-Maghrib">
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          The Government Commissioner, also known as "mandoub al-hokouma" in Arabic, plays a crucial role in representing the Ministry of Finance at Bank Al-Maghrib.
        </p>
        
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Role and Responsibilities</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Acts as a liaison between the government and the central bank</li>
            <li>Ensures the bank's activities align with government economic and financial policies</li>
            <li>Attends Bank Board meetings (without voting rights)</li>
            <li>Can request suspension of Board decisions if they conflict with bank statutes or national laws</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Current Government Commissioner</h3>
          <p className="text-gray-600">
            As of the last official update, the Government Commissioner at Bank Al-Maghrib was Fouzia Zaaboul. 
            (Note: This information may change, please verify with the most recent official sources.)
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">Presentation in Bank Al-Maghrib</h3>
          <p className="text-gray-600">
            The Government Commissioner is presented as a non-voting member of the Bank Board, 
            typically listed separately from governors and other board members in official documents 
            and organizational charts.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

const Governor = [
    {
    name: "Mr. Mohamed Douiri",
    image:"/comissaire/zeghari.png",
    data:"1967-1974" , 
    },
    {
      name: "Mr.Ahmed Reda Guedira",
      image:"/comissaire/ahmedreda.png",
      data:"1974-1978" , 
    },
    {
      name: "Mr .Abdellatif Jouahri",
      image:"/comissaire/hassanbenmehdi.png",
      data:"1978-1989" , 
    },
    {
      name: "Mr. Mohamed Berrada",
      image:"/comissaire/bennani.png",
      data:"1989-1993" , 
    },
    {
      name: "Mr. Driss Benhima",
      image:"/comissaire/segat.png",
      data:"1993-1995" , 
    },
    {
      name: "Mr. Khalid Alioua",
      image:"/comissaire/jouahri.png",
      data:"1995- 1998" , 
    },
    {
      name: "Mr. Ahmed Lahlimi Alami",
      image:"/comissaire/jouahri.png",
      data:"1998- 2001" , 
    },
    {
      name: "Mr. Mohamed Boucetta",
      image:"/comissaire/jouahri.png",
      data:"2001- 2003" , 
    },
    {
      name: "Mr. Noureddine Bensouda",
      image:"/comissaire/jouahri.png",
      data:"2003- 2008" , 
    },
    {
      name: "Mr. Nizar Baraka",
      image:"/comissaire/jouahri.png",
      data:"2008- 2012" , 
    },
    {
      name: "Mr. Driss El Azami El Idrissi",
      image:"/comissaire/jouahri.png",
      data:"2012- 2013" , 
    },
    {
      name: "Mr. Mohamed Boussaid",
      image:"/comissaire/jouahri.png",
      data:"2013- 2018" , 
    },
    {
      name: "Mr. Mohamed Benchaaboun",
      image:"/comissaire/jouahri.png",
      data:"2018- 2021" , 
    },
  ];

export default function government_representative() {
  const [activeContent, setActiveContent] = useState("government commissioner ");

  const handleItemClick = (item) => {
    setActiveContent(item);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "government commissioner ":
        return <GovernmentCommissioner />;
      case "anciens commissioners ":
        return <Governors items={Governor} />;
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
