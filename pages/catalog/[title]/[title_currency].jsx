import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { GoArrowRight } from "react-icons/go";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useSession } from "next-auth/react";
import ConfirmationModal from "@/components/ConfirmationModal";
import { ReceiptPoundSterling } from "lucide-react";

const checkIfCurrencyInCollection = (userCollecttion, currencyId) => {
  return userCollecttion.some(
    (item) => item.currencyId === currencyId || item.variationId === currencyId
  );
};

export default function BilletMonnaie() {
  const { data: session, status } = useSession();
  const router = useRouter();
  // id ==> the id of the category
  const { title, title_currency, id, billet } = router.query;
  const [userId, setUserId] = useState("");
  const [currency, setCurrency] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [variations, setVariations] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [userCollections, setUserCollections] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };
  const handleConfirmDelete = async () => {
    // Perform delete operation here
    console.log(`Deleting item: ${itemToDelete.id}`);
    try {
      const resDelete = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/deleteFromCollection`,
        {
          data: {
            userId: userId,
            billetId: itemToDelete.id,
          },
        }
      );
      if (resDelete.status === 200) {
        setState("success");
        setMessage("Billet deleted successfully from your collection ...");
        fetchUserCollection(userId);
      } else {
        setState("danger");
        setMessage(
          "Error when Deleting billet from your collection Try Again later please  ..."
        );
      }
    } catch (error) {
      console.error("Error when deleting a billet ",error);
    }
    // After deletion, close the modal and reset the itemToDelete
    setIsModalOpen(false);
    setItemToDelete(null);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setItemToDelete(null);
  };


  
  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      setUserId(session.user.id);
      fetchUserCollection(session.user.id);
    }
  }, [session, status]);
  useEffect(() => {
    if (id && billet) {
      fetchCurrenciesInfo(id);
      fetchCurrencyInfo(billet);
      fetchVariationsInfo(billet);
    }
  }, [id, billet, state]);
  const fetchCurrenciesInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getCurrencies`,
        { id: currencyId }
      );
      setCurrencies(response.data);
      if (response.data.length > 0) {
        const billetIndex = response.data.findIndex(
          (item) => item.id === Number(billet)
        );
        setCurrentIndex(billetIndex !== -1 ? billetIndex : 0);
      }
    } catch (error) {
      console.error("Error fetching currencies data:", error);
    }
  };
  const fetchCurrencyInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getCurrenciesInfo`,
        { id: currencyId }
      );
      setCurrency(response.data);
    } catch (error) {
      console.error("Error fetching one of currencies data:", error);
    }
  };
  // fetchVariationsInfo

  const fetchVariationsInfo = async (currencyId) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/currency/getVariationsInfo`,
        { id: currencyId }
      );
      setVariations(response.data);
    } catch (error) {
      console.error("Error fetching variations data:", error);
    }
  };

  const handlePrev = () => {
    const prevIndex =
      currentIndex === 0 ? currencies.length - 1 : currentIndex - 1;
    const prevBill = currencies[prevIndex];
    setCurrentIndex(prevIndex);
    router.push({
      pathname: router.pathname,
      query: { id, billet: prevBill.id, title, title_currency },
    });
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === currencies.length - 1 ? 0 : currentIndex + 1;
    const nextBill = currencies[nextIndex];
    setCurrentIndex(nextIndex);
    router.push({
      pathname: router.pathname,
      query: { id, billet: nextBill.id, title, title_currency },
    });
  };

  const currentBill = currencies[currentIndex];
  const prevBill =
    currencies[(currentIndex === 0 ? currencies.length : currentIndex) - 1];
  const nextBill = currencies[(currentIndex + 1) % currencies.length];

  const isCurrencyNotEmpty = (currency?.id ?? null) !== null;
  const theSameCategory = currency?.currencyId === currencies[0]?.currencyId;

  if (message || state) {
    setTimeout(() => {
      setState("");
      setMessage("");
    }, 5000);
  }

  const AddToCollection = async (userId, billetId, isVariation, idCategory) => {
    if(!session){
      router.replace("/login")
      return;
    }
    console.log("userId---::", userId);
    console.log("billetId ---::", billetId);
    console.log("isVariation---::", isVariation);
    console.log("idCategory---::", idCategory);
    try {
      const resAddCollection = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/addToCollection`,
        {
          userId: userId,
          billetId: billetId,
          isVariation: isVariation,
          idCategory: idCategory,
        }
      );
      if (resAddCollection.status === 200) {
        setState("success");
        setMessage("Billet added successfully to your collection ...");
        fetchUserCollection(userId);
      } else {
        setState("danger");
        setMessage(
          "Error when Adding billet to your collection Try Again later please  ..."
        );
      }
    } catch (error) {
      console.log("error when add to collection", error);
    }
  };

  const fetchUserCollection = async (userId) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/collection/${userId}`
      );
      setUserCollections(res.data);
    } catch (error) {
      console.error("Error fetching user collection:", error);
    }
  };

  return (
    <section>
      {isCurrencyNotEmpty && theSameCategory ? (
        <>
          <div className="mx-[150px] sm:mx-[200px] md:mx-[300px] lg:mx-[350px] xl:mx-[400px] mt-8 ">
            {state === "success" && (
              <div
                className="alert alert-success p-4 mb-4 border border-green-400 bg-green-100 rounded-md text-green-800"
                role="alert"
              >
                {message}
              </div>
            )}
            {state === "danger" && (
              <div className="alert alert-danger p-4 mb-4 border border-red-400 bg-red-100 rounded-md text-red-800 flex items-start space-x-2">
                <ExclamationTriangleIcon className="h-4 w-4 mt-1" />
                <div>
                  <div className="font-bold">Error</div>
                  <div>
                    Updating a category was unsuccessful. Please try again later
                    .
                  </div>
                </div>
              </div>
            )}
          </div>
          <MaxWidthWrapper className="pb-24 pt-10 flex flex-col items-center md:items-start gap-y-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
            <div className="flex items-center gap-2 text-center align-middle mb-6">
              <GoArrowRight className="text-4xl hidden md:block" />
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
                {currency.title}
              </h1>
            </div>
            <div className="m-auto flex flex-col items-start ">
              <h4 className="text-2xl mb-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <span className="text-green-700 font-bold">Issued by :</span>{" "}
                {currency.issued_by}
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <h4 className="bold text-2xl text-green-700 text-center md:text-left font-bold">
                  description :
                </h4>
                <p className="leading-7 [&:not(:first-child)]:mt-1">
                  {currency.description}
                </p>
              </div>
            </div>
            <div className="mx-auto my-auto">
              <div className="mb-5 flex justify-end">
                {checkIfCurrencyInCollection(userCollections, currency.id) ? (
                  <>
                    <button
                      className="button font-semibold  border px-3 py-2 text-white bg-red-500 rounded transform transition-all hover:scale-110 "
                      onClick={() => handleDeleteClick(currency)}
                    >
                      Delete from Collection
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button font-semibold  border px-3 py-2 text-white bg-green-500 rounded transform transition-all hover:scale-110 "
                      onClick={() =>
                        AddToCollection(userId, currency.id, false, id)
                      }
                    >
                      Add To Collection
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-8 items-center text-center">
                <Image
                  width={400}
                  height={300}
                  src={currency.imagefront}
                  className="rounded-lg object-cover"
                  alt="Front"
                />
                <Image
                  width={400}
                  height={300}
                  src={currency.imageback}
                  className="rounded-lg object-cover"
                  alt="Back"
                />
              </div>
              <div className="p-9 flex flex-col sm:flex-row gap-5 items-center">
                {currency.imagesignature && (
                  <>
                    <h3 className="font-bold text-2xl text-green-700">
                      Signature:
                    </h3>
                    <img
                      src={currency.imagesignature}
                      className="w-[300px] object-cover"
                      alt="Signature"
                      onClick={() => setSelectedImage(currency.imagesignature)}
                    />
                  </>
                )}
              </div>
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">ref</th>
                    <th className="border p-2 text-left">type</th>
                    <th className="border p-2 text-left">date</th>
                    <th className="border p-2 text-left">comments</th>
                    {currency.imagesignature && (
                      <th className="border p-2 text-left">Image</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">{currency.ref}</td>
                    <td className="border p-2">{currency.type}</td>
                    <td className="border p-2">{currency.date}</td>
                    <td className="border p-2">{currency.comments}</td>
                    {currency.imagesignature && (
                      <td className="border p-2">
                        <Image
                          src={currency.imagesignature}
                          alt={currency.imagesignature}
                          width={50}
                          height={50}
                          onClick={() =>
                            setSelectedImage(currency.imagesignature)
                          }
                          className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
                        />
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
              {/* fetch varitions  */}
              {variations.length > 0
                ? variations.map((variation, index) => (
                    <>
                      <div className="mb-5 mt-5  flex justify-end">
                        {checkIfCurrencyInCollection(
                          userCollections,
                          variation.id
                        ) ? (
                          <>
                            <button
                              className="button font-semibold  border px-3 py-2 text-white bg-red-500 rounded transform transition-all hover:scale-110 "
                              onClick={() => handleDeleteClick(variation)}
                            >
                              Delete from Collection
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="button font-semibold  border px-3 py-2 text-white bg-green-500 rounded transform transition-all hover:scale-110 "
                              onClick={() =>
                                AddToCollection(userId, variation.id, true, id)
                              }
                            >
                              Add To Collection
                            </button>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-8 items-center text-center">
                        <Image
                          width={400}
                          height={300}
                          src={variation.imagefront}
                          className="rounded-lg object-cover"
                          alt="Front"
                        />
                        <Image
                          width={400}
                          height={300}
                          src={variation.imageback}
                          className="rounded-lg object-cover"
                          alt="Back"
                        />
                      </div>
                      <div className="p-9 flex flex-col sm:flex-row gap-5 items-center">
                        {variation.imagesignature && (
                          <>
                            <h3 className="font-bold text-2xl text-green-700">
                              Signature:
                            </h3>
                            <img
                              src={variation.imagesignature}
                              className="w-[300px] object-cover"
                              alt="Signature"
                              onClick={() =>
                                setSelectedImage(variation.imagesignature)
                              }
                            />
                          </>
                        )}
                      </div>
                      <table className="w-full border-collapse mb-6">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">ref</th>
                            <th className="border p-2 text-left">type</th>
                            <th className="border p-2 text-left">date</th>
                            <th className="border p-2 text-left">comments</th>
                            {variation.imagesignature && (
                              <th className="border p-2 text-left">Image</th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2">{variation.ref}</td>
                            <td className="border p-2">{variation.type}</td>
                            <td className="border p-2">{variation.date}</td>
                            <td className="border p-2">{variation.comments}</td>
                            {variation.imagesignature && (
                              <td className="border p-2">
                                <Image
                                  src={variation.imagesignature}
                                  alt={variation.imagesignature}
                                  width={50}
                                  height={50}
                                  onClick={() =>
                                    setSelectedImage(variation.imagesignature)
                                  }
                                  className="cursor-pointer rounded-sm hover:opacity-75 transition-opacity"
                                />
                              </td>
                            )}
                          </tr>
                        </tbody>
                      </table>
                    </>
                  ))
                : ""}
              <div className="flex items-center justify-center mb-4 mt-[170px]">
                {currencies.length > 1 && currentIndex !== 0 && (
                  <button className="text-4xl p-2" onClick={handlePrev}>
                    {currentIndex !== 0 && (
                      <img
                        src={prevBill.imagefront}
                        alt={prevBill.name}
                        className="w-32 h-28 opacity-50"
                      />
                    )}
                  </button>
                )}
                <div className="flex items-center space-x-4">
                  {currencies.length > 0 && (
                    <>
                      {/* {currentIndex > 0 && (
                  <img
                    src={prevBill.imagefront}
                    alt={prevBill.name}
                    className="w-32 h-28 opacity-50"
                  />
                )} */}
                      <img
                        src={currentBill.imagefront}
                        alt={currentBill.name}
                        className="w-48 transform scale-110"
                      />
                      {/* {currentIndex < currencies.length - 1 && (
                  <img
                    src={nextBill.imagefront}
                    alt={nextBill.name}
                    className="w-32 h-28 opacity-50"
                  />
                )} */}
                    </>
                  )}
                </div>
                {currencies.length > 1 &&
                  currentIndex !== currencies.length - 1 && (
                    <button className="text-4xl p-2" onClick={handleNext}>
                      {currentIndex !== currencies.length - 1 && (
                        <img
                          src={nextBill.imagefront}
                          alt={nextBill.name}
                          className="w-32 h-28 opacity-50"
                        />
                      )}
                    </button>
                  )}
              </div>
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
          </MaxWidthWrapper>
        </>
      ) : (
        <>
          <div className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 ">
            <img
              src="/noresult2.png"
              className="text-center align-middle max-w-7xl  mx-auto px-4 sm:px-6 lg.px-8 mt-8"
            />
          </div>
        </>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete this billet from your collection?`}
      />
    </section>
  );
}
