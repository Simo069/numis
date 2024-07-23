import React from "react";
import Link from "next/link";


export default function BilletCard({ imagefront,title,ref }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={billet.imagefront}
        alt={billet.title}
        className="w-500px h500px object-cover"
      />
      <div className="p-3 flex flex-row justify-between">
        <h3 className="text-lg font-semibold mb-2">{billet.title}</h3>
        <h4 className="text-lg font-semibold mb-2 flex flex-row gap-2  ">
          {" "}
          <div className=" h-8 w-px bg-zinc-500 hidden sm:block " />#
          {billet.ref}
        </h4>
      </div>
    </div>
  );
}
