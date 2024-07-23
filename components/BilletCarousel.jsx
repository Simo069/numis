import { useState, useEffect } from 'react';
import Image from 'next/image';

const billets = [
  { id: 1, nom: "Euro", valeur: "10€", image: "/euro10.jpg", description: "Billet de 10 euros" },
  { id: 2, nom: "Dollar", valeur: "$20", image: "/dollar20.jpg", description: "Billet de 20 dollars" },
  { id: 3, nom: "Livre", valeur: "£5", image: "/livre5.jpg", description: "Billet de 5 livres sterling" },
];

export default function BilletCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? billets.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === billets.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getItemIndex = (shift) => {
    return (currentIndex + shift + billets.length) % billets.length;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{billets[currentIndex].nom}</h1>
        <p className="text-xl mb-2">Valeur: {billets[currentIndex].valeur}</p>
        <p className="text-gray-600">{billets[currentIndex].description}</p>
      </div>

      <div className="relative h-64 mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={billets[getItemIndex(-1)].image}
            alt={billets[getItemIndex(-1)].nom}
            width={150}
            height={100}
            className="absolute left-0 opacity-50 transform -translate-x-1/2"
          />
          <Image
            src={billets[currentIndex].image}
            alt={billets[currentIndex].nom}
            width={200}
            height={150}
            className="z-10"
          />
          <Image
            src={billets[getItemIndex(1)].image}
            alt={billets[getItemIndex(1)].nom}
            width={150}
            height={100}
            className="absolute right-0 opacity-50 transform translate-x-1/2"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={goToPrevious}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Précédent
        </button>
        <button
          onClick={goToNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}