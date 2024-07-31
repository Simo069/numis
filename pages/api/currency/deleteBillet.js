import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const {idBillet} = req.body
  console.log("idBillet--::",idBillet)
  try {
    const deleteBillet = await db.currencies.deleteMany({
      where : {id : parseInt(idBillet) }
    });
    if(deleteBillet.count ===0){
      return res.status(404).json({ message: "Billet not found in currencies" });
    }
    return res.status(200).json({ message: "Billet removed from currencies", count: deleteBillet.count });
  } catch (error) {
    console.error("Error when deleting billet from currencies",error)
    res.status(500).json({error:"Failed to delete form currencies"})
  }
}
