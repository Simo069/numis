import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    
    const {id} = req.body;
    if (!id){
      return res.status(400).json({error : "Currency ID is required"});
    }
    try {
      console.log("id--",id)
      const currencies = await db.currencies.findUnique({
        where : {id : parseInt(id) },
      });
      // console.log("currencies--",currencies)
      res.status(200).json(currencies);
    } catch (error) {
      console.error("Error fetching currencies data :", error);
      res.status(500).json({ error: "Error fetching currencies data" });
    }
  }else{
    res.setHeader("Allow", ["POST"]);
    res.status(500).end(`Method ${req.method} Not allowed`);
  }
}
