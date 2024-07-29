import db from "@/lib/db";

export default async function handler(req, res) {
  console.log("test 1--::--::")
  if (req.method === "POST") {
    const {id}= req.body;
    console.log("id--::--::",id)
    if(!id){
      return res.status(400).json({error :"User Id is required"})
    }
    try {
      console.log("id--",id)
      const user = await db.user.findFirst({
        where :{id : parseInt(id)},
      })
      res.status(200).json(user)
    } catch (error) {
      console.error("Error fetching currencies data :", error);
      res.status(500).json({ error: "Error fetching currencies data" });
    }
  }else{
    res.setHeader("Allow", ["POST"]);
    res.status(500).end(`Method ${req.method} Not allowed`);
  }

}
