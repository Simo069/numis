// import * as React from "react"
// import BilletCarousel from '@/components/BilletCarousel';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export default function carousel() {
//   return (
//     <>
//     <div>
//       <h1 className="text-4xl font-bold text-center my-8">Billets de Monnaie</h1>
//       <BilletCarousel />
//     </div>
//     </>
//   )
// }

// Carousel.js
// Carousel.js

// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';

// const bills = [
//   {
//     id: 1,
//     image: 'path/to/bill1.jpg',
//     name: 'Bill 1',
//     description: 'Description of Bill 1',
//   },
//   {
//     id: 2,
//     image: 'path/to/bill2.jpg',
//     name: 'Bill 2',
//     description: 'Description of Bill 2',
//   },
//   {
//     id: 3,
//     image: 'path/to/bill3.jpg',
//     name: 'Bill 3',
//     description: 'Description of Bill 3',
//   },
//   // Ajoutez d'autres billets selon vos besoins
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? bills.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === bills.length - 1 ? 0 : prevIndex + 1));
//   };

//   const currentBill = bills[currentIndex];
//   const prevBill = bills[(currentIndex === 0 ? bills.length : currentIndex) - 1];
//   const nextBill = bills[(currentIndex + 1) % bills.length];

//   return (
//     <div className="text-center">
//       <div className="flex items-center justify-center mb-4">
//         {currentIndex !== 0 && (
//           <button className="text-4xl p-2" onClick={handlePrev}>‹</button>
//         )}
//         <div className="flex items-center space-x-4">
//           {currentIndex !== 0 && (
//             <img src={prevBill.image} alt={prevBill.name} className="w-32 opacity-50" />
//           )}
//           <img src={currentBill.image} alt={currentBill.name} className="w-48 transform scale-110" />
//           {currentIndex !== bills.length - 1 && (
//             <img src={nextBill.image} alt={nextBill.name} className="w-32 opacity-50" />
//           )}
//         </div>
//         {currentIndex !== bills.length - 1 && (
//           <button className="text-4xl p-2" onClick={handleNext}>›</button>
//         )}
//       </div>
//       <div className="mt-4">
//         <h2 className="text-2xl font-bold">{currentBill.name}</h2>
//         <p className="mt-2">{currentBill.description}</p>
//       </div>

//       <div>
//         {bills[1].name}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const bills = [
  {
    id: 1,
    image: "/riffImages/1riffanFront.png",
    name: "Bill 1",
    description: "Description of Bill 1",
  },
  {
    id: 2,
    image: "/riffImages/1riffanBack.png",
    name: "Bill 2",
    description: "Description of Bill 2",
  },
  {
    id: 3,
    image: "/riffImages/1riffanFront.png",
    name: "Bill 3",
    description: "Description of Bill 3",
  },
  {
    id: 4,
    image: "/riffImages/1riffanBack.png",
    name: "Bill 4",
    description: "Description of Bill 4",
  },
  // Ajoutez d'autres billets selon vos besoins
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bills.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bills.length - 1 ? 0 : prevIndex + 1
    );
  };
  const currentBill = bills[currentIndex];
  const prevBill =
    bills[(currentIndex === 0 ? bills.length : currentIndex) - 1];
  const nextBill = bills[(currentIndex + 1) % bills.length];
  return (
    <div className="text-center">
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{currentBill.name}</h2>
        <p className="mt-2">{currentBill.description}</p>
      </div>
      <div className="flex items-center justify-center mb-4">
        {currentIndex !== 0 && (
          <button className="text-4xl p-2" onClick={handlePrev}>
            ‹
            {currentIndex !== 0 && (
              <img
                src={prevBill.image}
                alt={prevBill.name}
                className="w-32 h-28 opacity-50"
              />
            )}
          </button>
        )}
        <div className="flex items-center space-x-4">
          <img
            src={currentBill.image}
            alt={currentBill.name}
            className="w-48 transform scale-110"
          />
        </div>
        {currentIndex !== bills.length - 1 && (
          <button className="text-4xl p-2" onClick={handleNext}>
            {currentIndex !== bills.length - 1 && (
              <img
                src={nextBill.image}
                alt={nextBill.name}
                className="w-32 h-28 opacity-50"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
