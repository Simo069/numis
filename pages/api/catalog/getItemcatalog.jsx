import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const currencies = await db.Currency.findMany();
      console.log("currencies::::", currencies);
      res.status(200).json(currencies);
    } catch (error) {
      res.status(500).json({ error: "Error fetching currencies" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
