
import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { userId, billetId, isVariation , idCategory } = req.body;
  // console.log("userId---:: backk--::",userId)
  //   console.log("billetId ---:: backk--::",billetId )
  //   console.log("isVariation---:: backk--::",isVariation)
  //   console.log("idCategory---:: backk--::",idCategory)
  try {
    const collectionEntry = await db.collection.create({
      data: {
        userId: parseInt(userId),
        currencyId: isVariation ? null : parseInt(billetId),
        variationId: isVariation ? parseInt(billetId) : null,
        idCategory: parseInt(idCategory) 
      },
    });

    res.status(200).json(collectionEntry);
  } catch (error) {
    console.error("Error adding to collection:", error);
    res.status(500).json({ error: "Failed to add to collection" });
  }
}
