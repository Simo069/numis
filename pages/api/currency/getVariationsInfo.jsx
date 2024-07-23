import db from "@/lib/db";

export default async function handler(req, res) {
  if(req.method === "POST"){
    console.log("test4567b")
    const {id} = req.body;
    if(!id){
      return res.status(400).json({error : "Currency ID is required"});
    }
    try {
      const variations = await db.variation.findMany({
        where : { currenciesId : parseInt(id)}
      })
      res.status(200).json(variations);
    } catch (error) {
      console.error("Error fetching vriations currencies data :",error);
      res.status(500).json({error : "Error fetching currencies data"});
    }
  }else{
    res.setHeader("Allow", ["POST"]);
    res.status(500).end(`Methid ${req.method} Not allowed`);
  }
}
