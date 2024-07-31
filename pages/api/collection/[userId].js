// pages/api/collection/[userId].js


import db from "@/lib/db";


export default async function handler(req, res) {
  const { userId } = req.query;
  console.log("userId collection--::",userId)
  try {
    const collection = await db.collection.findMany({
      where: { userId: parseInt(userId) },
      include: {
        currency: {
          include :{
            currency : true
          }
        },
        variation: {
          include: {
            currencies: {
              include :{
                currency : true
              }
            }, 
          },
        },
        user :true
      },
    });
    res.status(200).json(collection);
  } catch (error) {
    console.error("Error fetching collection:", error);
    res.status(500).json({ error: "Failed to fetch collection" });
  }
}
