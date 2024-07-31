import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const {  userId, billetId  } = req.body;
  // console.log("userId--::;;",userId)
  // console.log("billetId--::;;",billetId)
  try {
    const deleteBillet = await db.collection.deleteMany({
      where: {
        userId: parseInt(userId),
        OR: [
          { currencyId: parseInt(billetId) },
          { variationId: parseInt(billetId) }
        ]
      }
    });
    if (deleteBillet.count === 0) {
      return res.status(404).json({ message: "Billet not found in collection" });
    }
    return res.status(200).json({ message: "Billet removed from collection", count: deleteBillet.count });
  } catch (error) {
    console.error("Error Delele form collection", error);
    res.status(500).json({ error: "Failed to delete from  collection" });
  }
}
