import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { GoArrowRight } from "react-icons/go";
import React , {useState} from "react";
import Image from "next/image";

export default function billetmonnie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const item = {
    ref: "#1",
    type: "Issued",
    date: "10-10-23",
    comments: "sekkat & lazrrak",
    image: "/riffImages/1riffanFront.png",
    printer: "bank al riff",
  };
  const items =[
    {
      ref: "#1",
      type: "Issued",
      date: "10-10-23",
      comments: "sekkat & lazrrak",
      image: "/riffImages/1riffanFront.png",
      printer: "bank al riff",
    },
    {
      ref: "#2",
      type: "Issued",
      date: "10-10-23",
      comments: "med & lazrrak",
      image: "/riffImages/1riffanFront.png",
      printer: "bank al riff",
    },
    {
      ref: "#3",
      type: "Issued",
      date: "10-10-23",
      comments: "med & lazrrak",
      image: "/riffImages/1riffanFront.png",
      printer: "bank al riff",
    }
  ];
  const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return (
    <section>
      <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center md:items-start gap-y-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
        <div className="flex items-center gap-2 text-center aligin-middle mb-6 ">
          {/* <div className="flex items-center gap-2 text-center aligin-middle mb-6 bg-green-500 text-white p-2"> */}
          <GoArrowRight className="text-4xl hidden md:block" />
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl  ">
            1 Riffan 1923
          </h1>
        </div>
        <div className="m-auto flex flex-col">
          <h4 className="text-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {" "}
            <span className="text-green-700 font-bold">Issued by :</span> State
            Bank of the Riff
          </h4>
          <h4 className="bold text-2xl text-green-700 text-center md:text-left font-bold">
            description :
          </h4>
          <p className="leading-7 [&:not(:first-child)]:mt-1">
            Morocco. State Bank of Rif. Foreign issues. Banknote issued in 1923.
            Dimensions: 165 x 95 mm. Watermark: With or without the mention:
            "VALENT PARCHMENT". Simplex monochrome orange print on white paper.
            Single note. Front: Thick floral frame. All texts are in English
            except "Equal to ten English Pence" translated into French by "Bon
            pour un franc d'or". "STATE BANK OF THE RIFF" is printed in the
            upper part in English and Arabic. On the sides: Crescents of the
            moon and stars. A center frame with value in Arabic and riders on
            the sides. The issue date of 10.10.23 is printed in orange to the
            right of the number in the center in black affixed by composter.
          </p>
        </div>
        {data.map((d , index) =>(
          <div className="mx-auto my-auto" key={index}>
          <div className=" flex flex-col sm:flex-row gap-8 items-center text-center">
            <Image
              width={400}
              height={300}
              src="/riffImages/1riffanFront.png"
              className="rounded-lg object-cover"
            />
            <Image
              width={400}
              height={300}
              src="/riffImages/1riffanBack.png"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="p-9 flex  flex-col sm:flex-row gap-5 items-center" >
            <h3 className="font-bold text-2xl text-green-700 ">signture :</h3>
            <img src="/sign.png" className="w-[300px] object-cover" />
          </div>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">ref</th>
                <th className="border p-2 text-left">type</th>
                <th className="border p-2 text-left">date</th>
                <th className="border p-2 text-left">comments</th>
                <th className="border p-2 text-left">Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">{item.ref}</td>
                <td className="border p-2">{item.type}</td>
                <td className="border p-2">{item.date}</td>
                <td className="border p-2">{item.comments}</td>
                <td className="border p-2">
                  <Image
                    src={item.image}
                    alt={item.type}
                    width={50}
                    height={50}
                    onClick={() => setSelectedImage(item.image)}
                    className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-3/4 h-3/4">
                <Image
                  src={selectedImage}
                  alt="Image agrandie"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          )}
        </div>
        ))}
        
      </MaxWidthWrapper>
    </section>
  );
}

