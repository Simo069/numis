import db from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.body;
    console.log("id ::: ", id)
    try {
      const currencies = await db.currency.findUnique({
        where: { id: parseInt(id) },
      });
      if (currencies) {
        console.log("currencies ::: ", currencies)
        res.status(200).json(currencies);
      } else {
        res.status(404).json({ error: "Currency not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching currency data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
